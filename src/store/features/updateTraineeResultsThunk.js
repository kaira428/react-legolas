import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { updateTraineeResults } from "../../mongodb_serverless/updateTraineeResults";
import { getSelectedCohortTraineesThunk } from "./getSelectedCohortTraineesThunk";

export const updateTraineeResultsThunk = createAsyncThunk(
  "supervisorDashboard/updateTraineeResultsThunk",
  async ({ listOfTrainees }, thunkAPI) => {
    try {
      const data = await updateTraineeResults(listOfTrainees);
      console.log("🚀 ~ file: createNewTraineeThunk.js:12 ~ data:", data)

    //   reload selected cohort trainees
      // thunkAPI.dispatch(getSelectedCohortTraineesThunk());

      return data;
      
    } catch (error) {
      throw new Error(error);
    }
  }
);