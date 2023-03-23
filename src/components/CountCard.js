import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";

const CountCard = () => {
  return (
    <Grid item sx={{my: 2}}>
      <Box sx={{ height: 170, width: "100%", border: '1px solid lightgrey'}}>
        <Paper elevation={3} sx={{ height: 1, width: 1 }}>
          <Box sx={{ height: 0.25, display: "flex", justifyContent: "center" }}>
            <Typography variant="h5" component="h3" sx={{ display: "flex", alignItems: "center" }}>
              Box Title
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightblue",
              height: "0.75",
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Test 1
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CountCard;
