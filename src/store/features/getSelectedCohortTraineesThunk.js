import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCohortTraineesForSelectedCohortNum } from "../../mongodb_serverless/getCohortTraineesForSelectedCohortNum";
import { traineeDetailsBySelectedLtIdAndCohortId } from "../../helpers/supervisorDashboardSliceUtilities";

export const getSelectedCohortTraineesThunk = createAsyncThunk(
  "supervisorDashboard/getSelectedCohortTraineesThunk",
  async ({ cohortNum }, thunkAPI) => {
    console.log(thunkAPI.getState());

    try {
      const data = await getCohortTraineesForSelectedCohortNum(cohortNum);
      console.log(
        "🚀 ~ file: getSelectedCohortTraineesThunk.js:12 ~ data:",
        data
      );

      const leaderboardTraineeDetails =
        traineeDetailsBySelectedLtIdAndCohortId(data);
      console.log(
        "🚀 ~ file: getSelectedCohortTraineesThunk.js:15 ~ result:",
        leaderboardTraineeDetails
      );

      const selectedCohortInfo = thunkAPI
        .getState()
        .supervisorDashboard.listOfCohortNumbers.find(
          (cohort) => cohort.cohortNum === cohortNum
        );
      console.log(
        "🚀 ~ file: getSelectedCohortTraineesThunk.js:20 ~ selectedCohortInfo:",
        selectedCohortInfo
      );

      const result = { leaderboardTraineeDetails, selectedCohortInfo };
      console.log("🚀 ~ file: getSelectedCohortTraineesThunk.js:36 ~ result:", result)

      
      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
);
