import { createSlice } from "@reduxjs/toolkit";
import {
  getLtNameAndCohortIDsForChosenLtId,
  traineeDetailsBySelectedLtIdAndCohortId,
} from "../helpers/supervisorDashboardSliceUtilities";
import { getAllLearningTracksThunk } from "./features/getAllLearningTracksThunk";

const supervisorDashboardObj = {
  ltId: 0,
  learningTrackName: "",
  cohortIdDetailsSortedList: [],
  trainingStatus: "In Progress",
  traineeListForSelectedLtIdAndCohortId: [],
  selectedCohortIdDetails: {},
  selectedCohortsProgress: [],
};
const initialState = {
  isLoading: false,
  allLearningTracks: [],
  supervisorDashboardObj: supervisorDashboardObj
};

export const supervisorDashboardSlice = createSlice({
  name: "supervisorDashboard",
  initialState: initialState,
  reducers: {
    getLtCohortInfo: (state, action) => {
      const ltCohortListForChosenLtId = getLtNameAndCohortIDsForChosenLtId(
        action.payload
      );

      state.supervisorDashboardObj.ltId = ltCohortListForChosenLtId.ltId;
      state.supervisorDashboardObj.learningTrackName =
        ltCohortListForChosenLtId.ltName;
      state.supervisorDashboardObj.cohortIdDetailsSortedList =
        ltCohortListForChosenLtId.cohortDetailsList;
      state.supervisorDashboardObj.selectedCohortsProgress =
        ltCohortListForChosenLtId.cohortsProgress;
    },

    getTraineeAndCohortDetailsList: (state, action) => {
      // console.log("🚀 ~ file: supervisorDbSlice.js:36 ~ action:", action.payload)

      const traineeCohortDetailsResult =
        traineeDetailsBySelectedLtIdAndCohortId(
          action.payload.ltId,
          action.payload.cohortId
        );

      // console.log(
      //   "🚀 ~ file: supervisorDbSlice.js:35 ~ traineeCohortDetailsResult:",
      //   traineeCohortDetailsResult
      // );

      state.supervisorDashboardObj.traineeListForSelectedLtIdAndCohortId =
        traineeCohortDetailsResult.reqTraineesData;
      state.supervisorDashboardObj.selectedCohortIdDetails =
        traineeCohortDetailsResult.reqCohortDetail;
      state.supervisorDashboardObj.trainingStatus =
        traineeCohortDetailsResult.trainingStatus;
    },

    resetSupervisorDashboardSlice: () => (initialState.supervisorDashboardObj = {...supervisorDashboardObj}),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLearningTracksThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllLearningTracksThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        // duplicate the action.payload
        const tempArray = [...action.payload];

        // sort the cohorts array in ascending order
        tempArray.forEach((cohort) =>
          cohort.cohorts.sort((a, b) => a.cohortNum - b.cohortNum)
        );

        state.allLearningTracks = [...tempArray];
        // console.log("🚀 ~ file: supervisorDbSlice.js:71 ~ allLearningTracks:", state.allLearningTracks)

        // console.log(
        //   "🚀 ~ file: supervisorDbSlice.js:74 ~ allLearningTracks:",
        //   action.payload)
      })
      .addCase(getAllLearningTracksThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  getLtCohortInfo,
  getTraineeAndCohortDetailsList,
  resetSupervisorDashboardSlice,
} = supervisorDashboardSlice.actions;

export default supervisorDashboardSlice.reducer;
