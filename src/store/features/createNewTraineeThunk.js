import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { createNewTrainee } from "../../mongodb_serverless/createNewTrainee";
import {
  getAllTraineesForSelectedCohortNumber,
  getLtCohortInfo,
} from "../supervisorDbSlice";

export const createNewTraineeThunk = createAsyncThunk(
  "supervisorDashboard/createNewTraineeThunk",
  async ({ newTrainee }, thunkAPI) => {
    try {
      console.log(
        "🚀 ~ file: createNewTraineeThunk.js:11 ~ newTrainee:",
        newTrainee
      );

      const data = await createNewTrainee(newTrainee);
      console.log("🚀 ~ file: createNewTraineeThunk.js:14 ~ data:", data);

      const result = { _id: data.insertedId, ...newTrainee };

      console.log("🚀 ~ file: createNewTraineeThunk.js:16 ~ result:", result);

      const tempListOfTraineesForSelectedLtId = await thunkAPI.getState()
        .supervisorDashboard.listOfTraineesForSelectedLtId;

      const listOfTraineesForSelectedLtId = [...tempListOfTraineesForSelectedLtId, result];

      const learningTrack = await thunkAPI.getState().supervisorDashboard
        .selectedLtObject;
      console.log(
        "🚀 ~ file: createNewTraineeThunk.js:23 ~ learningTrack:",
        learningTrack
      );

      console.log(
        "🚀 ~ file: refreshSupervisorDashboard4ltIdCohortIdThunk.js:46 ~ // ~ listOfTraineesForSelectedLtId:",
        listOfTraineesForSelectedLtId
      );

      await thunkAPI.dispatch(
        getLtCohortInfo({
          resultForSelectedLt: learningTrack,
          selectedLtTraineeData: listOfTraineesForSelectedLtId,
        })
      );
      thunkAPI.dispatch(
        getAllTraineesForSelectedCohortNumber({ cohortNum: newTrainee.cohort })
      );

      return result;
    } catch (error) {
      throw new Error(error);
    }
  }
);
