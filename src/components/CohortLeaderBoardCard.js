import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";

const CohortLeaderBoardCard = () => {
  return (
    <Grid item sx={{ my: 5 }}>
      <Box sx={{ height: 250, width: 500, border: "1px solid lightgrey" }}>
        <Paper elevation={3} sx={{ height: 1, textAlign: "center" }}>
          <Typography variant="h5" component="h3">
            Cohort LeaderBoard
          </Typography>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CohortLeaderBoardCard;
