import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllTraineesForSelectedLtId } from "../../mongodb_serverless/getAllTraineesForSelectedLtId";

export const getSelectedTraineesForSelectedLtIdThunk = createAsyncThunk(
    "supervisorDashboard/getSelectedTraineesForSelectedLtIdThunk",
    async({ltId}, thunkAPI) => {
        // console.log("🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:7 ~ async ~ ltId:", ltId)
        
        // console.log("🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:7 ~ async ~ thunkAPI.getState:", thunkAPI.getState());

        try {            
            const data = await getAllTraineesForSelectedLtId(ltId);
            // console.log("🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:9 ~ async ~ data:", data)

            return data;
            
        } catch (error) {
            console.log(error)
            return
        }
    }
)