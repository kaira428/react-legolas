import { createAsyncThunk } from '@reduxjs/toolkit'
import React from 'react'
import { getAllLearningTracks } from '../../mongodb_serverless/getAllLearningTracks'

export const getAllLearningTracksThunk = createAsyncThunk(
    "supervisorDashboard/getAllLearningTracksThunk",
    async () => {
        try {
            const data = await getAllLearningTracks();

            //convert _id from ObjectId to string
            const result = data.map(course => {
                course["_id"] = course._id.toString()
                return course;
            });

            return result;

        } catch (error) {
            throw new Error(error);
        }
})