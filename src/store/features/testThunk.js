import { createAsyncThunk } from "@reduxjs/toolkit";

export const testThunk = createAsyncThunk(
    "supervisorDashboard/testThunk",
    async(_, thunkAPI) => {
        // console.log("🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:7 ~ async ~ ltId:", ltId)
        
        console.log("🚀 ~ file: testThunk.js:8 ~ async ~ thunkAPI.getState:", thunkAPI.getState());

        const traineeList = thunkAPI.getState().supervisorDashboard.listOfTraineesForSelectedLtId;
        console.log("🚀 ~ file: testThunk.js:11 ~ async ~ traineeList:", traineeList)
        
        // try {            
        //     // const data = await thunkAPI.dispatch(getLtCohortInfo({resultForSelectedLt, selectedLtTraineeData}));
        //     // console.log("🚀 ~ file: getSelectedTraineesForSelectedLtIdThunk.js:9 ~ async ~ data:", data)

        //     return data;
            
        // } catch (error) {
        //     console.log(error)
        //     return
        // }
    }
)