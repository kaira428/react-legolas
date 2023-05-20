import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { updateLtWithNewCohort } from "../../mongodb_serverless/updateLtWithNewCohort";

export const updateLtWithNewCohortThunk = createAsyncThunk(
  "supervisorDashboard/updateLtWithNewCohortThunk",
  async ({ ltWithNewCohort }, thunkAPI) => {
    try {
      const data = await updateLtWithNewCohort(ltWithNewCohort);
      console.log("🚀 ~ file: updateLtWithNewCohortThunk.js:11 ~ data:", data)

      return data;
    } catch (error) {
      throw new Error(error);
    }
  }
);
