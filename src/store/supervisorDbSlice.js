import { createSlice } from "@reduxjs/toolkit";
import {
  getLtNameAndCohortIDsForChosenLtId,
  traineeDetailsBySelectedLtIdAndCohortId,
} from "../helpers/supervisorDashboardSliceUtilities";

const initialState = {
  supervisorDashboardObj: {
    ltId: 0,
    learningTrackName: "",
    cohortIdDetailsSortedList: [],
    examStatus: "In Progress",
    traineeListForSelectedLtIdAndCohortId: [{}],
    selectedCohortIdDetails: {},
  },
};

export const supervisorDashboardSlice = createSlice({
  name: "supervisorDashboard",
  initialState,
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
    },

    getTraineeAndCohortDetailsList: (state, action) => {

      console.log("🚀 ~ file: supervisorDbSlice.js:36 ~ action:", action.payload)
      
      const traineeCohortDetailsResult =
        traineeDetailsBySelectedLtIdAndCohortId(
          action.payload.ltId,
          action.payload.cohortId
        );

      console.log(
        "🚀 ~ file: supervisorDbSlice.js:35 ~ traineeCohortDetailsResult:",
        traineeCohortDetailsResult
      );

      state.supervisorDashboardObj.traineeListForSelectedLtIdAndCohortId =
        traineeCohortDetailsResult.reqTraineesData;
      state.supervisorDashboardObj.selectedCohortIdDetails =
        traineeCohortDetailsResult.reqCohortDetail;
    },

    resetSupervisorDashboardSlice: () => initialState,
  },
});

export const { getLtCohortInfo, getTraineeAndCohortDetailsList, resetSupervisorDashboardSlice } =
  supervisorDashboardSlice.actions;

export default supervisorDashboardSlice.reducer;
