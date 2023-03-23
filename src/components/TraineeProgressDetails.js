import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";

const TraineeProgressDetails = () => {
  return (
    <Grid item sx={{ my: 8 }}>
    <Box sx={{ height: 120, width: 220, border: "1px solid lightgrey" }}>
      <Paper elevation={3} sx={{ height: 1, width: 1 }}>
        <Box sx={{ height: 0.25, display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{ textAlign: "center" }}
          >
            Trainee Name
          </Typography>
        </Box>
        <hr />
        <Box>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "left", marginLeft: "5px" }}
          >
            Learning Track:
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "left", marginLeft: "5px" }}
          >
           Overall Exam Status:
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "left", marginLeft: "5px" }}
          >
            Start Date:
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "left", marginLeft: "5px" }}
          >
            End Date:
          </Typography>
        </Box>
      </Paper>
    </Box>
  </Grid>
  )
}

export default TraineeProgressDetails