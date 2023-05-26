import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { createNewLearningTrack } from "../../mongodb_serverless/createNewLearningTrack";
import { getLtCohortInfo, refreshSupervisorDashboard } from "../supervisorDbSlice";

export const createNewLearningTrackThunk = createAsyncThunk(
  "supervisorDashboard/createNewLearningTrackThunk",
  async ({ newLearningTrack }, thunkAPI) => {
    try {
      const data = await createNewLearningTrack(newLearningTrack);
      console.log(
        "🚀 ~ file: createNewLearningTrackThunk.js:11 ~ newLearningTrack:",
        newLearningTrack
      );
      // console.log("🚀 ~ file: createNewLearningTrackThunk.js:12 ~ data:", data);

      // const listOfTraineesForSelectedLtName = thunkAPI.getState().supervisorDashboard.listOfTraineesForSelectedLtId;

      thunkAPI.dispatch(refreshSupervisorDashboard(newLearningTrack));
      
      // thunkAPI.dispatch(
      //   getLtCohortInfo({
      //     resultForSelectedLt: newLearningTrack,
      //     selectedLtTraineeData: listOfTraineesForSelectedLtName,
      //   })
      // );

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
