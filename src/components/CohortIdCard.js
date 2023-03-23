import { Grid, Paper, Box, Typography } from "@mui/material";
import React from 'react';

const CohortIdCard = () => {
  return (
    <Grid item sx={{ my: 8 }}>
      <Box sx={{ height: 120, width: 170, border: "1px solid lightgrey" }}>
        <Paper elevation={3} sx={{ height: 1, width: 1 }}>
          <Box sx={{ height: 0.25, display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ textAlign: "center" }}
            >
              Cohort ID
            </Typography>
          </Box>
          <hr />
          <Box>
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Cohort 1
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Cohort 2
            </Typography>
          </Box>
          <Box>
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Cohort 3
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Grid>
  )
}

export default CohortIdCard