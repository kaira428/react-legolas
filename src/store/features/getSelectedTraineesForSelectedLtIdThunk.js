import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTraineesForSelectedLtId } from "../../mongodb_serverless/getAllTraineesForSelectedLtId";
import { getLtCohortInfo } from "../supervisorDbSlice";

export const getSelectedTraineesForSelectedLtIdThunk = createAsyncThunk(
    "supervisorDashboard/getSelectedTraineesForSelectedLtIdThunk",
    async({ltId}, thunkAPI) => {

        const listOfLearningTracks = thunkAPI.getState().supervisorDashboard.listOfLearningTracks;

        try {            
            const data = await getAllTraineesForSelectedLtId(ltId);

            // get required LT based on ltId
            const requiredLT = listOfLearningTracks.find(lt => lt.name === ltId);
            
            thunkAPI.dispatch(getLtCohortInfo({resultForSelectedLt: requiredLT, selectedLtTraineeData: data}));

            return data
            
        } catch (error) {
            console.log(error)
            return
        }
    }
)