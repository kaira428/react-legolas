import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { createNewTrainee } from "../../mongodb_serverless/createNewTrainee";
import { getSelectedCohortTraineesThunk } from "./getSelectedCohortTraineesThunk";


export const createNewTraineeThunk = createAsyncThunk(
  "supervisorDashboard/createNewTraineeThunk",
  async ({ newTrainee }, thunkAPI) => {
    try {
      const data = await createNewTrainee(newTrainee);
      console.log("🚀 ~ file: createNewTraineeThunk.js:12 ~ data:", data)

    //   reload selected cohort trainees
      thunkAPI.dispatch(getSelectedCohortTraineesThunk());

      return data;
      
    } catch (error) {
      throw new Error(error);
    }
  }
);
