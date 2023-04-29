import { createAsyncThunk } from "@reduxjs/toolkit";

import { getCohortTraineesForSelectedCohortNum } from "../../mongodb_serverless/getCohortTraineesForSelectedCohortNum";
import { traineeDetailsBySelectedLtIdAndCohortId } from "../../helpers/supervisorDashboardSliceUtilities";

export const getSelectedCohortTraineesThunk = createAsyncThunk(
  "supervisorDashboard/getSelectedCohortTraineesThunk",
  async ({cohortNum}, thunkAPI) => {
    console.log("🚀 ~ file: getSelectedCohortTraineesThunk.js:8 ~ cohortNum:", cohortNum)

    console.log(thunkAPI.getState());
    
    try {
      const data = await getCohortTraineesForSelectedCohortNum(cohortNum);
      console.log("🚀 ~ file: getSelectedCohortTraineesThunk.js:12 ~ data:", data)

      const result = traineeDetailsBySelectedLtIdAndCohortId(data)
      console.log("🚀 ~ file: getSelectedCohortTraineesThunk.js:15 ~ result:", result)
    
      return result;

    } catch (error) {
      throw new Error(error);
    }
  }
);
