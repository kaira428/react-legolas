import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { createNewTrainee } from "../../mongodb_serverless/createNewTrainee";
import { getSelectedCohortTraineesThunk } from "./getSelectedCohortTraineesThunk";


export const createNewTraineeThunk = createAsyncThunk(
  "supervisorDashboard/createNewTraineeThunk",
  async ({ newTrainee }, thunkAPI) => {
    try {
      console.log("🚀 ~ file: createNewTraineeThunk.js:11 ~ newTrainee.cohort:", newTrainee.cohort)

      const data = await createNewTrainee(newTrainee);
      console.log("🚀 ~ file: createNewTraineeThunk.js:14 ~ data:", data)

    //   reload selected cohort trainees
      // const result = thunkAPI.dispatch(getSelectedCohortTraineesThunk({cohortNum: newTrainee.cohort}));
      // console.log("🚀 ~ file: createNewTraineeThunk.js:16 ~ result:", result)

      const stateStatus = thunkAPI.getState().supervisorDashboard;
      console.log("🚀 ~ file: createNewTraineeThunk.js:21 ~ stateStatus:", stateStatus)
      
      return data;
      
    } catch (error) {
      throw new Error(error);
    }
  }
);
