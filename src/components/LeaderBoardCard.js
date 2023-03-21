import { Grid, Paper, Box } from "@mui/material";
import React from "react";

const LeaderBoardCard = () => {
  return (
    <Grid item>
      <Box sx={{ height: 350}} maxWidth='535px'>
        <Paper elevation={3} sx={{ height: 1}}>
         LeaderBoard Duis elit in irure magna culpa non nisi. Officia eiusmod irure irure eu enim tempor. Proident ut aliqua sit enim id. Voluptate excepteur laborum sunt dolore eu.
        </Paper>
      </Box>
    </Grid>
  );
};

export default LeaderBoardCard;
