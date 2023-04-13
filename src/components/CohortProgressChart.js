import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import CohortProgressBar from "./CohortProgressBar";
import { useSelector } from "react-redux";

const CohortProgressChart = () => {
  const results = useSelector(
    (state) => state.supervisorDashboard.supervisorDashboardObj
  );
  console.log("🚀 ~ file: CohortProgressChart.js:10 ~ CohortProgressChart ~ results:", results)

  return (
    <Grid item sx={{ my: 5 }}>
      <Paper
        elevation={0}
        sx={{
          textAlign: "center",
          border: "1px solid darkgrey",
          backgroundColor: "lightblue",
        }}
      >
        <Typography variant="h5" component="h3">
          Cohort Progress Chart
        </Typography>
        <Typography variant="body1" component="h6">
          {results.learningTrackName && `(${results.learningTrackName})`}
        </Typography>
      </Paper>
      <Box sx={{ height: 200, width: 550, border: "1px solid darkgrey", overflowY: "scroll"}}>
        {/* <Paper elevation={3} sx={{ height: 1, textAlign: "center" }}> */}
          <Box sx={{ m: 3 }}>
            <CohortProgressBar />
          </Box>
        {/* </Paper> */}
      </Box>
    </Grid>
  );
};

export default CohortProgressChart;
