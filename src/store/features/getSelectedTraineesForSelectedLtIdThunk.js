import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTraineesForSelectedLtId } from "../../mongodb_serverless/getAllTraineesForSelectedLtId";
import { getLtCohortInfo } from "../supervisorDbSlice";

export const getSelectedTraineesForSelectedLtIdThunk = createAsyncThunk(
  "supervisorDashboard/getSelectedTraineesForSelectedLtIdThunk",
  async ({ ltId }, thunkAPI) => {
    try {
      const listOfLearningTracks = thunkAPI.getState().supervisorDashboard.listOfLearningTracks;
      console.log(
        "🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:10 ~ async ~ listOfLearningTracks:",
        listOfLearningTracks
      );

      const data = await getAllTraineesForSelectedLtId(ltId);
      console.log(
        "🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:13 ~ async ~ data:",
        data
      );

      // get required LT based on ltId
      const requiredLT = listOfLearningTracks.find((lt) => lt.name === ltId);
      console.log(
        "🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:16 ~ async ~ requiredLT:",
        requiredLT
      );

      thunkAPI.dispatch(
        getLtCohortInfo({
          resultForSelectedLt: requiredLT,
          selectedLtTraineeData: data,
        })
      );

      return data;
    } catch (error) {
      console.log(error);
      return;
    }
  }
);
