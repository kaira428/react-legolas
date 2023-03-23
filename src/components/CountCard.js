import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import { InfoTooltip } from "../helpers/ToolTip";

const CountCard = () => {
  return (
    <Grid item sx={{my: 8}}>
      <Box sx={{ height: 120, width: 220, border: '1px solid lightgrey'}}>
        <Paper elevation={3} sx={{ height: 1, width: 1 }}>
          <Box sx={{ height: 0.25, display: "flex", justifyContent: "center" }}>
            <Typography variant="h5" component="h3" sx={{ display: "flex", alignItems: "center" }}>
              Box Title
            </Typography>
            <span style={{marginLeft: "8px"}}><InfoTooltip /></span>
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
              sx={{margin: "auto" }}
            >
              10
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CountCard;
