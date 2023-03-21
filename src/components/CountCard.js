import { Grid, Paper, Box } from "@mui/material";
import React from "react";

const CountCard = () => {
  return (
    <Grid item>
      <Box sx={{height: 200, width: '100%'}}>
      <Paper elevation={3} sx={{height: 1, width: 1}}>Test 1</Paper>
      </Box>
    </Grid>
  );
};

export default CountCard;
