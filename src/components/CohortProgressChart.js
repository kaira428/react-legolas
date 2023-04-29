import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import CohortProgressBar from "./CohortProgressBar";
import { useSelector } from "react-redux";

const CohortProgressChart = () => {
  
  const ltName = useSelector(
    (state) => state.supervisorDashboard.selectedLtName
  );

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
          {ltName && `(${ltName})`}
        </Typography>
      </Paper>
      <Box sx={{ height: 200, width: 550, border: "1px solid darkgrey", overflowY: "scroll"}}>
          <Box sx={{ m: 3 }}>
            <CohortProgressBar />
          </Box>
      </Box>
    </Grid>
  );
};

export default CohortProgressChart;
