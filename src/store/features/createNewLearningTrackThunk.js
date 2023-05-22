import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { createNewLearningTrack } from "../../mongodb_serverless/createNewLearningTrack";
import { getAllLearningTracksThunk } from "./getAllLearningTracksThunk";
import { refreshSupervisorDashboard } from "../supervisorDbSlice";

export const createNewLearningTrackThunk = createAsyncThunk(
  "supervisorDashboard/createNewLearningTrackThunk",
  async ({ newLearningTrack }, thunkAPI) => {
    try {
      const data = await createNewLearningTrack(newLearningTrack);
      console.log(
        "🚀 ~ file: createNewLearningTrackThunk.js:11 ~ newLearningTrack:",
        newLearningTrack
      );
      console.log("🚀 ~ file: createNewLearningTrackThunk.js:12 ~ data:", data);

      thunkAPI.dispatch(refreshSupervisorDashboard(newLearningTrack));

      //   reload all learning tracks
      // thunkAPI.dispatch(getAllLearningTracksThunk());

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
