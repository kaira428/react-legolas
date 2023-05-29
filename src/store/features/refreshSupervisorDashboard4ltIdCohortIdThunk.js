import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { getAllLearningTracks } from "../../mongodb_serverless/getAllLearningTracks";
import { getSelectedTraineesForSelectedLtIdThunk } from "./getSelectedTraineesForSelectedLtIdThunk";
import { getSelectedCohortTraineesThunk } from "./getSelectedCohortTraineesThunk";
import {
  getAllTraineesForSelectedCohortNumber,
  getLtCohortInfo,
} from "../supervisorDbSlice";

export const refreshSupervisorDashboard4ltIdCohortIdThunk = createAsyncThunk(
  "supervisorDashboard/refreshSupervisorDashboard4ltIdCohortIdThunk",
  async ({learningTrack, cohortNum }, thunkAPI) => {
    console.log("🚀 ~ file: refreshSupervisorDashboard4ltIdCohortIdThunk.js:14 ~ learningTrack:", learningTrack)
    console.log("🚀 ~ file: refreshSupervisorDashboard4ltIdCohortIdThunk.js:14 ~ cohortNum:", cohortNum)
    // async ({ ltName, cohortNum }, thunkAPI) => {
    try {
      // const data = await getAllLearningTracks();

      // // sort the cohort numbers in ascending order
      // data.forEach((lt) =>
      //   lt.cohorts.sort((a, b) => a.cohortNum - b.cohortNum)
      // );

      // //   get selected trainees for selected LtId
      // const allTrainees4selectedLtId =
      //   await thunkAPI.dispatch(getSelectedTraineesForSelectedLtIdThunk({
      //     ltId: ltName,
      //   }));

      // //    get selected cohort trainees

      // const selectedCohortTraineesInfo =
      //   await thunkAPI.dispatch(getSelectedCohortTraineesThunk({ cohortNum }));

      // const result = {
      //   listOfLt: data,
      //   allTrainees4selectedLtId,
      //   selectedCohortTraineesInfo,
      // };

        const listOfTraineesForSelectedLtId =
        await thunkAPI.getState().supervisorDashboard.listOfTraineesForSelectedLtId;

        console.log("🚀 ~ file: refreshSupervisorDashboard4ltIdCohortIdThunk.js:46 ~ // ~ listOfTraineesForSelectedLtId:", listOfTraineesForSelectedLtId)

      // await thunkAPI.dispatch(
      //   getLtCohortInfo({
      //     resultForSelectedLt: learningTrack,
      //     selectedLtTraineeData: listOfTraineesForSelectedLtId,
      //   })
      // );
      // thunkAPI.dispatch(getAllTraineesForSelectedCohortNumber({ cohortNum }));

      return "Refreshed";
    } catch (error) {
      throw new Error(error);
    }
  }
);
