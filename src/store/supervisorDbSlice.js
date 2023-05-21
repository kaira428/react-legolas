import { createSlice } from "@reduxjs/toolkit";
import { getLtNameAndCohortIDsForChosenLtId } from "../helpers/supervisorDashboardSliceUtilities";
import { getAllLearningTracksThunk } from "./features/getAllLearningTracksThunk";
import { getSelectedCohortTraineesThunk } from "./features/getSelectedCohortTraineesThunk";
import { getSelectedTraineesForSelectedLtIdThunk } from "./features/getSelectedTraineesForSelectedLtIdThunk";
import { getAllCoachesAndMentorsThunk } from "./features/getAllCoachesAndMentorsThunk";
import { createNewLearningTrackThunk } from "./features/createNewLearningTrackThunk";
import { createNewTraineeThunk } from "./features/createNewTraineeThunk";
import { updateTraineeResultsThunk } from "./features/updateTraineeResultsThunk";
import { updateLtWithNewCohortThunk } from "./features/updateLtWithNewCohortThunk";
import { refreshSupervisorDashboard4ltIdCohortIdThunk } from "./features/refreshSupervisorDashboard4ltIdCohortIdThunk";

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
      console.log("🚀 ~ file: supervisorDbSlice.js:40 ~ state.selectedLtId:", state.selectedLtId)
      
      state.selectedLtName = ltCohortListForChosenLtId.ltName;
      console.log("🚀 ~ file: supervisorDbSlice.js:43 ~ state.selectedLtName:", state.selectedLtName)
      
      state.listOfCohortNumbers = ltCohortListForChosenLtId.cohortDetailsList;
      console.log("🚀 ~ file: supervisorDbSlice.js:46 ~ state.listOfCohortNumbers:", state.listOfCohortNumbers)
      
      state.listOfCohortsProgressForSelectedLtId = ltCohortListForChosenLtId.cohortsProgress;
      console.log("🚀 ~ file: supervisorDbSlice.js:49 ~ state.listOfCohortsProgressForSelectedLtId:", state.listOfCohortsProgressForSelectedLtId)
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
        state.listOfTraineesForSelectedCohortNumber = action.payload;
       
        state.isLoading = false;
      })
      .addCase(updateTraineeResultsThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(updateLtWithNewCohortThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateLtWithNewCohortThunk.fulfilled, (state, action) => {
        
        state.isLoading = false;
      })
      .addCase(updateLtWithNewCohortThunk.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(refreshSupervisorDashboard4ltIdCohortIdThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(refreshSupervisorDashboard4ltIdCohortIdThunk.fulfilled, (state, action) => {
        console.log("🚀 ~ file: supervisorDbSlice.js:174 ~ .addCase ~ action.payload:", action.payload)
        
        state.isLoading = false;
      })
      .addCase(refreshSupervisorDashboard4ltIdCohortIdThunk.rejected, (state) => {
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
