import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import CohortProgressBar from "./CohortProgressBar";

const CohortProgressChart = () => {
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
          (Java Developer, Cohort 8)
        </Typography>
      </Paper>
      <Box sx={{ height: 200, width: 550, border: "1px solid darkgrey" }}>
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
