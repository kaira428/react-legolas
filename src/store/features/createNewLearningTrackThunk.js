import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { createNewLearningTrack } from "../../mongodb_serverless/createNewLearningTrack";
import { getAllTraineesForSelectedCohortNumber, getLtCohortInfo, refreshSupervisorDashboard } from "../supervisorDbSlice";

export const createNewLearningTrackThunk = createAsyncThunk(
  "supervisorDashboard/createNewLearningTrackThunk",
  async ({ newLearningTrack }, thunkAPI) => {
    try {
      const data = await createNewLearningTrack(newLearningTrack);
      console.log("🚀 ~ file: createNewLearningTrackThunk.js:11 ~ data:", data)
      console.log(
        "🚀 ~ file: createNewLearningTrackThunk.js:11 ~ newLearningTrack:",
        newLearningTrack
      );

      const result = {_id: data.insertedId, ...newLearningTrack}
 
      console.log("🚀 ~ file: createNewLearningTrackThunk.js:18 ~ result:", result)
      
      thunkAPI.dispatch(refreshSupervisorDashboard(result));
      // thunkAPI.dispatch(getLtCohortInfo({resultForSelectedLt : result, selectedLtTraineeData}))
      // thunkAPI.dispatch(getAllTraineesForSelectedCohortNumber({cohortNum}))

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
