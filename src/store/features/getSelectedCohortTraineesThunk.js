import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCohortTraineesForSelectedCohortNum } from "../../mongodb_serverless/getCohortTraineesForSelectedCohortNum";
import { traineeDetailsBySelectedLtIdAndCohortId } from "../../helpers/supervisorDashboardSliceUtilities";

export const getSelectedCohortTraineesThunk = createAsyncThunk(
  "supervisorDashboard/getSelectedCohortTraineesThunk",
  async ({ cohortNum }, thunkAPI) => {

    try {
      const data = await getCohortTraineesForSelectedCohortNum(cohortNum);

      const leaderboardTraineeDetails = traineeDetailsBySelectedLtIdAndCohortId(data);

      const selectedCohortInfo = thunkAPI
        .getState()
        .supervisorDashboard.listOfCohortNumbers.find(
          (cohort) => cohort.cohortNum === cohortNum
        );

      const result = { leaderboardTraineeDetails, selectedCohortInfo };
      
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
);
