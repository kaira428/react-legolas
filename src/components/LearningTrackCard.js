import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getLtCohortInfo,
  getTraineeAndCohortDetailsList,
  resetSupervisorDashboardSlice,
} from "../store/supervisorDbSlice";
import { getSelectedTraineesForSelectedLtIdThunk } from "../store/features/getSelectedTraineesForSelectedLtIdThunk";

const LearningTrackCard = (props) => {
  const dispatch = useDispatch();

  const learningTracks = props.learningTrackList;

  const clickHandler = (ltId) => {
    dispatch(resetSupervisorDashboardSlice());
    // get all trainees for selected ltId
    dispatch(getSelectedTraineesForSelectedLtIdThunk({ ltId }));
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
              height: 200,
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
