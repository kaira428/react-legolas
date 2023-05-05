import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { getAllCoachesAndMentors } from "../../mongodb_serverless/getAllCoachesAndMentors";


export const getAllCoachesAndMentorsThunk = createAsyncThunk(
  "supervisorDashboard/getAllCoachesAndMentorsThunk",
  async () => {
    try {
      const data = await getAllCoachesAndMentors();

      return data;
      
    } catch (error) {
      throw new Error(error);
    }
  }
);
