import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLtCohortInfo,
  getTraineeAndCohortDetailsList,
  resetSupervisorDashboardSlice,
} from "../store/supervisorDbSlice";
import { getSelectedTraineesForSelectedLtIdThunk } from "../store/features/getSelectedTraineesForSelectedLtIdThunk";

const LearningTrackCard = (props) => {
  const dispatch = useDispatch();

  const selectedLtTraineeData = useSelector(
    (state) => state.supervisorDashboard.listOfTraineesForSelectedLtId
  );

  console.log(
    "🚀 ~ file: LearningTrackCard.js:15 ~ LearningTrackCard ~ selectedLtTraineeData:",
    selectedLtTraineeData
  );

  const learningTracks = props.learningTrackList;
  console.log(
    "🚀 ~ file: LearningTrackCard.js:10 ~ LearningTrackCard ~ listOfLearningTracks:",
    learningTracks
  );

  // function definition
  const getCohortIdListHandler = (ltName) => {
    // console.log("🚀 ~ file: LearningTrackCard.js:19 ~ getCohortIdListHandler ~ ltId:", ltId)
    // dispatch(resetSupervisorDashboardSlice());

    const result = learningTracks.find((lt) => lt.name === ltName);
    // console.log(
    //   "🚀 ~ file: SupervisorDashboard.js:27 ~ getCohortIdListHandler ~ result:",
    //   result
    // );

    dispatch(getLtCohortInfo(result));
  };

  const clickHandler = (ltId) => {
    // get all trainees for selected ltId
    dispatch(getSelectedTraineesForSelectedLtIdThunk({ ltId }));

    // console.log(
    //   "🚀 ~ file: LearningTrackCard.js:35 ~ LearningTrackCard ~ selectedLtTraineeData:",
    //   selectedLtTraineeData
    // );

    getCohortIdListHandler(ltId);
  };

  return (
    <Grid item sx={{ my: 8 }}>
      <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
        <Paper elevation={3} sx={{ width: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightblue",
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              sx={{ textAlign: "center" }}
            >
              Learning Track
            </Typography>
          </Box>
          <Box
            sx={{
              height: 180,
              width: 250,
              border: "1px solid lightgrey",
              overflow: "auto",
            }}
          >
            {learningTracks.map((learningTrack) => (
              <div key={learningTrack._id}>
                <Button onClick={() => clickHandler(learningTrack.name)}>
                  {learningTrack.name}
                </Button>
              </div>
            ))}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default LearningTrackCard;
