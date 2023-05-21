import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCohortTraineesForSelectedCohortNum } from "../../mongodb_serverless/getCohortTraineesForSelectedCohortNum";
import { traineeDetailsBySelectedLtIdAndCohortId } from "../../helpers/supervisorDashboardSliceUtilities";

export const getSelectedCohortTraineesThunk = createAsyncThunk(
  "supervisorDashboard/getSelectedCohortTraineesThunk",
  async ({ cohortNum }, thunkAPI) => {
  console.log("🚀 ~ file: getSelectedCohortTraineesThunk.js:9 ~ cohortNum:", cohortNum)

    try {
      const data = await getCohortTraineesForSelectedCohortNum(cohortNum);

      const leaderboardTraineeDetails = traineeDetailsBySelectedLtIdAndCohortId(data);

      const selectedCohortInfo = await thunkAPI
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
