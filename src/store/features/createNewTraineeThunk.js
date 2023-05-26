import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { createNewTrainee } from "../../mongodb_serverless/createNewTrainee";
import { getSelectedCohortTraineesThunk } from "./getSelectedCohortTraineesThunk";
import { getLtCohortInfo } from "../supervisorDbSlice";


export const createNewTraineeThunk = createAsyncThunk(
  "supervisorDashboard/createNewTraineeThunk",
  async ({ newTrainee }, thunkAPI) => {
    try {
      console.log("🚀 ~ file: createNewTraineeThunk.js:11 ~ newTrainee:", newTrainee)

      const data = await createNewTrainee(newTrainee);
      console.log("🚀 ~ file: createNewTraineeThunk.js:14 ~ data:", data)

      // const listOfTraineesForSelectedLtName = thunkAPI.getState().supervisorDashboard.listOfTraineesForSelectedLtId;

      // const resultantListOfTrainees = [...listOfTraineesForSelectedLtName.push(newTrainee)];
      // console.log("🚀 ~ file: createNewTraineeThunk.js:20 ~ resultantListOfTrainees:", resultantListOfTrainees)

      // const listOfLearningTracks = thunkAPI.getState().supervisorDashboard.listOfLearningTracks;

      // const requiredLt = listOfLearningTracks.filter(lt => lt.name === newTrainee.learningTrack)
      // console.log("🚀 ~ file: createNewTraineeThunk.js:24 ~ requiredLt:", requiredLt)

      // thunkAPI.dispatch(
      //     getLtCohortInfo({
      //       resultForSelectedLt: requiredLt,
      //       selectedLtTraineeData: resultantListOfTrainees,
      //     })
      //   );

      const result = {_id: data.insertedId, ...newTrainee}
      
      return result;
      
    } catch (error) {
      throw new Error(error);
    }
  }
);
