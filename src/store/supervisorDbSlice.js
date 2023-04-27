import { createSlice } from "@reduxjs/toolkit";
import {
  getLtNameAndCohortIDsForChosenLtId,
  traineeDetailsBySelectedLtIdAndCohortId,
} from "../helpers/supervisorDashboardSliceUtilities";
import { getAllLearningTracksThunk } from "./features/getAllLearningTracksThunk";
import { getSelectedCohortTraineesThunk } from "./features/getSelectedCohortTraineesThunk";

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
      console.log("🚀 ~ file: supervisorDbSlice.js:43 ~ action:", action.payload);

      const traineeCohortDetailsResult =
        traineeDetailsBySelectedLtIdAndCohortId(
          action.payload.ltId,
          action.payload.cohortId,
          action.payload.traineeList
        );

      state.supervisorDashboardObj.selectedCohortIdDetails =
        traineeCohortDetailsResult.reqCohortDetail;
      state.supervisorDashboardObj.trainingStatus =
        traineeCohortDetailsResult.trainingStatus;
    },

    // resetSupervisorDashboardSlice: () => supervisorDashboardObj,

    // resetSupervisorDashboardSlice: () => {
    //   initialState.supervisorDashboardObj.ltId = 0;
    //   initialState.supervisorDashboardObj.learningTrackName = "";
    //   initialState.supervisorDashboardObj.cohortIdDetailsSortedList = [];
    //   initialState.supervisorDashboardObj.trainingStatus = "In Progress";
    //   initialState.supervisorDashboardObj.traineeListForSelectedLtIdAndCohortId = [];
    //   initialState.supervisorDashboardObj.selectedCohortIdDetails = {};
    //   initialState.supervisorDashboardObj.selectedCohortsProgress = [];
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLearningTracksThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllLearningTracksThunk.fulfilled, (state, action) => {

        // duplicate the action.payload
        const tempArray = [...action.payload];

        // sort the cohorts array in ascending order
        tempArray.forEach((cohort) =>
          cohort.cohorts.sort((a, b) => a.cohortNum - b.cohortNum)
        );

        state.allLearningTracks = [...tempArray];

        state.isLoading = false;
      })
      .addCase(getAllLearningTracksThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getSelectedCohortTraineesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSelectedCohortTraineesThunk.fulfilled, (state, action) => {

        state.supervisorDashboardObj.trainingStatus =action.payload.trainingStatus;
        state.supervisorDashboardObj.traineeListForSelectedLtIdAndCohortId = action.payload.traineeDataWithTotalModuleResults;
        state.supervisorDashboardObj.selectedCohortIdDetails = action.payload.reqCohortDetail;

        state.isLoading = false;
      })
      .addCase(getSelectedCohortTraineesThunk.rejected, (state) => {
        state.isLoading = false;
      })
  },
});

export const {
  getLtCohortInfo,
  getTraineeAndCohortDetailsList,
  resetSupervisorDashboardSlice,
} = supervisorDashboardSlice.actions;

export default supervisorDashboardSlice.reducer;
