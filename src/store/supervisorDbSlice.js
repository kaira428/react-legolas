import { createSlice } from "@reduxjs/toolkit";
import {
  getLtNameAndCohortIDsForChosenLtId,
  traineeDetailsBySelectedLtIdAndCohortId,
} from "../helpers/supervisorDashboardSliceUtilities";
import { getAllLearningTracksThunk } from "./features/getAllLearningTracksThunk";
import { getSelectedCohortTraineesThunk } from "./features/getSelectedCohortTraineesThunk";
import { getSelectedTraineesForSelectedLtIdThunk } from "./features/getSelectedTraineesForSelectedLtIdThunk";

const initialState = {
  isLoading: false,
  listOfLearningTracks: [],
  selectedLtId: 0,
  selectedLtName: "",
  listOfCohortNumbers: [],
  cohortTrainingStatus: "In Progress",
  listOfTraineesForSelectedLtId: [],
  listOfTraineesForSelectedCohortNumber: [],
  cohortDetailsForSelectedCohortNumber: {},
  listOfCohortsProgressForSelectedLtId: [],
  numTraineesNumModules: {}
};

export const supervisorDashboardSlice = createSlice({
  name: "supervisorDashboard",
  initialState,
  reducers: {
    getLtCohortInfo: (state, action) => {
      const ltCohortListForChosenLtId = getLtNameAndCohortIDsForChosenLtId(
        action.payload.resultForSelectedLt,
        action.payload.selectedLtTraineeData
      );

      state.selectedLtId = ltCohortListForChosenLtId.ltId;
      state.selectedLtName = ltCohortListForChosenLtId.ltName;
      state.listOfCohortNumbers = ltCohortListForChosenLtId.cohortDetailsList;
      state.listOfCohortsProgressForSelectedLtId =
        ltCohortListForChosenLtId.cohortsProgress;
    },

    // getTraineeAndCohortDetailsList: (state, action) => {
    //   const traineeCohortDetailsResult =
    //     traineeDetailsBySelectedLtIdAndCohortId(
    //       action.payload.ltId,
    //       action.payload.cohortId,
    //       action.payload.traineeList
    //     );

    //   state.cohortDetailsForSelectedCohortNumber =
    //     traineeCohortDetailsResult.reqCohortDetail;
    //   state.cohortTrainingStatus = traineeCohortDetailsResult.trainingStatus;
    // },

    resetSupervisorDashboardSlice: (state) => 
    {
      state.listOfTraineesForSelectedCohortNumber = [];
      state.numTraineesNumModules = {};
      state.cohortDetailsForSelectedCohortNumber = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllLearningTracksThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllLearningTracksThunk.fulfilled, (state, action) => {
        state.listOfLearningTracks = action.payload;

        state.isLoading = false;
      })
      .addCase(getAllLearningTracksThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getSelectedCohortTraineesThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSelectedCohortTraineesThunk.fulfilled, (state, action) => {
        state.trainingStatus = action.payload.leaderboardTraineeDetails.trainingStatus;
        state.listOfTraineesForSelectedCohortNumber =
          action.payload.leaderboardTraineeDetails.traineeDataWithTotalModuleResults;
        state.numTraineesNumModules = action.payload.leaderboardTraineeDetails.numTraineesNumModules;
        state.cohortDetailsForSelectedCohortNumber = action.payload.selectedCohortInfo;

        state.isLoading = false;
      })
      .addCase(getSelectedCohortTraineesThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getSelectedTraineesForSelectedLtIdThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getSelectedTraineesForSelectedLtIdThunk.fulfilled,
        (state, action) => {
          state.listOfTraineesForSelectedLtId = action.payload;
          state.isLoading = false;
        }
      )
      .addCase(getSelectedTraineesForSelectedLtIdThunk.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  getLtCohortInfo,
  getTraineeAndCohortDetailsList,
  resetSupervisorDashboardSlice,
  resetSupervisorDashboardSliceLeaderBoard,
} = supervisorDashboardSlice.actions;

export default supervisorDashboardSlice.reducer;
