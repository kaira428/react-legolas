import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTraineesForSelectedLtId } from "../../mongodb_serverless/getAllTraineesForSelectedLtId";
import { getLtCohortInfo } from "../supervisorDbSlice";

export const getSelectedTraineesForSelectedLtIdThunk = createAsyncThunk(
    "supervisorDashboard/getSelectedTraineesForSelectedLtIdThunk",
    async({ltId}, thunkAPI) => {
        // console.log("🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:7 ~ async ~ ltId:", ltId)
        
        console.log("🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:7 ~ async ~ thunkAPI.getState:", thunkAPI.getState());

        const listOfLearningTracks = thunkAPI.getState().supervisorDashboard.listOfLearningTracks;
        console.log("🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:13 ~ async ~ listOfLearningTracks:", listOfLearningTracks)

        try {            
            const data = await getAllTraineesForSelectedLtId(ltId);
            // console.log("🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:9 ~ async ~ data:", data)

            // get required LT based on ltId
            const requiredLT = listOfLearningTracks.find(lt => lt.name === ltId);
            console.log("🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:19 ~ async ~ requiredLT:", requiredLT)

            thunkAPI.dispatch(getLtCohortInfo({resultForSelectedLt: requiredLT, selectedLtTraineeData: data}));

            return data
            
        } catch (error) {
            console.log(error)
            return
        }
    }
)