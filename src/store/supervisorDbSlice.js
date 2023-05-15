import { createSlice } from "@reduxjs/toolkit";
import { getLtNameAndCohortIDsForChosenLtId } from "../helpers/supervisorDashboardSliceUtilities";
import { getAllLearningTracksThunk } from "./features/getAllLearningTracksThunk";
import { getSelectedCohortTraineesThunk } from "./features/getSelectedCohortTraineesThunk";
import { getSelectedTraineesForSelectedLtIdThunk } from "./features/getSelectedTraineesForSelectedLtIdThunk";
import { getAllCoachesAndMentorsThunk } from "./features/getAllCoachesAndMentorsThunk";
import { createNewLearningTrackThunk } from "./features/createNewLearningTrackThunk";
import { createNewTraineeThunk } from "./features/createNewTraineeThunk";
import { updateTraineeResultsThunk } from "./features/updateTraineeResultsThunk";

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
  numTraineesNumModules: {},
  trainingStatus: "",
  listOfCoaches: [],
  listOfMentors: [],
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

    resetSupervisorDashboardSlice: (state) => {
      state.listOfTraineesForSelectedCohortNumber = [];
      state.numTraineesNumModules = {};
      state.cohortDetailsForSelectedCohortNumber = {};
      state.trainingStatus = "";
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
        state.trainingStatus =
          action.payload.leaderboardTraineeDetails.trainingStatus;
        state.listOfTraineesForSelectedCohortNumber =
          action.payload.leaderboardTraineeDetails.traineeDataWithTotalModuleResults;
        state.numTraineesNumModules =
          action.payload.leaderboardTraineeDetails.numTraineesNumModules;
        state.cohortDetailsForSelectedCohortNumber =
          action.payload.selectedCohortInfo;

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
      })
      .addCase(getAllCoachesAndMentorsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllCoachesAndMentorsThunk.fulfilled, (state, action) => {

        action.payload.forEach(list => {
          if (list.hasOwnProperty('coaches')) {
            const pre_sortedListOfCoaches = [...list.coaches]
            state.listOfCoaches = pre_sortedListOfCoaches.sort();
          }
  
          if (list.hasOwnProperty('mentors')) {
            const pre_sortedListOfMentors = [...list.mentors]
            state.listOfMentors = pre_sortedListOfMentors.sort();
          }        
        })
        
        state.isLoading = false;
      })
      .addCase(getAllCoachesAndMentorsThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createNewLearningTrackThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewLearningTrackThunk.fulfilled, (state, action) => {
        console.log("🚀 ~ file: supervisorDbSlice.js:120 ~ .addCase ~ action.payload:", action.payload)
        
        state.isLoading = false;
      })
      .addCase(createNewLearningTrackThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(createNewTraineeThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createNewTraineeThunk.fulfilled, (state, action) => {

        console.log("🚀 ~ file: supervisorDbSlice.js:133 ~ .addCase ~ action.payload:", action.payload)
        state.isLoading = false;
      })
      .addCase(createNewTraineeThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateTraineeResultsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateTraineeResultsThunk.fulfilled, (state, action) => {
        // update state.listOfTraineesForSelectedCohortNumber
        // state.listOfTraineesForSelectedCohortNumber = action.payload.listOfTrainees;
        
        state.isLoading = false;
      })
      .addCase(updateTraineeResultsThunk.rejected, (state) => {
        state.isLoading = false;
      })
  },
});

export const {
  getLtCohortInfo,
  getTraineeAndCohortDetailsList,
  resetSupervisorDashboardSlice,
  resetSupervisorDashboardSliceLeaderBoard,
} = supervisorDashboardSlice.actions;

export default supervisorDashboardSlice.reducer;
