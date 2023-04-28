import { createAsyncThunk } from "@reduxjs/toolkit";
import React from "react";
import { getAllLearningTracks } from "../../mongodb_serverless/getAllLearningTracks";

export const getAllLearningTracksThunk = createAsyncThunk(
  "supervisorDashboard/getAllLearningTracksThunk",
  async () => {
    try {
      const data = await getAllLearningTracks();

      //convert _id from ObjectId to string
      // const result = data.map((course) => {
      //   console.log(course["_id"]);
      //   course["_id"] = course._id.toString();
      //   return course;
      // });
      // console.log("🚀 ~ file: getAllLearningTracksThunk.js:20 ~ result ~ result:", result)

      // sort the cohort numbers in ascending order
      data.forEach((cohort) =>
        cohort.cohorts.sort((a, b) => a.cohortNum - b.cohortNum)
      );

      return data;
      
    } catch (error) {
      throw new Error(error);
    }
  }
);
