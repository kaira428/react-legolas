import { createSlice } from "@reduxjs/toolkit";
import {
  getLtNameAndCohortIDsForChosenLtId,
  traineeDetailsBySelectedLtIdAndCohortId,
} from "../helpers/supervisorDashboardSliceUtilities";

const initialState = {
  ltId: 0,
  learningTrackName: "",
  cohortIdDetailsSortedList: [],
  examStatus: "In Progress",
  traineeListForSelectedLtIdAndCohortId: [{}],
  selectedCohortIdDetails: {},
};

export const supervisorDashboardSlice = createSlice({
  name: "supervisorDashboard",
  initialState,
  reducers: {
    getLtCohortInfo: (state, action) => {
      const ltCohortListForChosenLtId = getLtNameAndCohortIDsForChosenLtId(
        action.payload.ltId
      );

      state.ltId = ltCohortListForChosenLtId.ltId;
      state.learningTrackName = ltCohortListForChosenLtId.ltName;
      state.cohortIdDetailsSortedList =
        ltCohortListForChosenLtId.cohortDetailsList;
    },

    getTraineeAndCohortDetailsList: (state, action) => {
      const traineeCohortDetailsResult =
        traineeDetailsBySelectedLtIdAndCohortId(
          action.payload.ltId,
          action.payload.cohortId
        );

      state.traineeListForSelectedLtIdAndCohortId =
        traineeCohortDetailsResult.reqTraineesData;
      state.selectedCohortIdDetails =
        traineeCohortDetailsResult.reqCohortDetail;
    },
  },
});

export const {getLtCohortInfo, getTraineeAndCohortDetailsList} = supervisorDashboardSlice.actions;

export default supervisorDashboardSlice.reducer;
