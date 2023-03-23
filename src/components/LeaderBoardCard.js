import { Grid, Paper, Box } from "@mui/material";
import React from "react";

const LeaderBoardCard = () => {
  return (
    <Grid item sx={{my: 4}}>
      <Box sx={{ height: 250, width: 700, border: '1px solid lightgrey'}}>
        <Paper elevation={3} sx={{ height: 1}}>
         LeaderBoard Duis elit in irure 
        </Paper>
      </Box>
    </Grid>
  );
};

export default LeaderBoardCard;
