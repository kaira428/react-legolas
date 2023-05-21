import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { getAllLearningTracks } from "../../mongodb_serverless/getAllLearningTracks";

export const getAllLearningTracksThunk = createAsyncThunk(
  "supervisorDashboard/getAllLearningTracksThunk",
  async () => {
    try {
      const data = await getAllLearningTracks();

      // sort the cohort numbers in ascending order
      data.forEach((lt) =>
        lt.cohorts.sort((a, b) => a.cohortNum - b.cohortNum)
      );

      return data;
      
    } catch (error) {
      throw new Error(error);
    }
  }
);
