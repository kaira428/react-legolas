import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import { InfoTooltip } from "../helpers/ToolTip";

const CohortDetails = () => {
  return (
    <Grid item sx={{ my: 8 }}>
      <Box sx={{ width: 220, border: "1px solid lightgrey" }}>
        <Paper elevation={3} sx={{ height: 1, width: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ textAlign: "center" }}
            >
              Cohort Details
            </Typography>
          </Box>
          
          <Box sx={{ height: 120, width: 220, border: "1px solid lightgrey", overflow: 'auto'}}>         
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Total Trainee
            </Typography>

            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Total Mentors{" "}
              <span style={{ marginLeft: "5px" }}>
                <InfoTooltip />
              </span>
            </Typography>
          
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Number of Modules
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CohortDetails;
