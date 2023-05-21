import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { getAllLearningTracks } from "../../mongodb_serverless/getAllLearningTracks";
import { getSelectedTraineesForSelectedLtIdThunk } from "./getSelectedTraineesForSelectedLtIdThunk";
import { getSelectedCohortTraineesThunk } from "./getSelectedCohortTraineesThunk";

export const refreshSupervisorDashboard4ltIdCohortIdThunk = createAsyncThunk(
  "supervisorDashboard/refreshSupervisorDashboard4ltIdCohortIdThunk",
  async ({ ltName, cohortNum }, thunkAPI) => {
    try {
      const data = await getAllLearningTracks();

      // sort the cohort numbers in ascending order
      data.forEach((lt) =>
        lt.cohorts.sort((a, b) => a.cohortNum - b.cohortNum)
      );

      //   get selected trainees for selected LtId
      const allTrainees4selectedLtId =
        await thunkAPI.dispatch(getSelectedTraineesForSelectedLtIdThunk({
          ltId: ltName,
        }));

      //    get selected cohort trainees

      const selectedCohortTraineesInfo =
        await thunkAPI.dispatch(getSelectedCohortTraineesThunk({ cohortNum }));

      const result = {
        listOfLt: data,
        allTrainees4selectedLtId,
        selectedCohortTraineesInfo,
      };

      return result;

    } catch (error) {
      throw new Error(error);
    }
  }
);
