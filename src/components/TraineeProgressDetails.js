import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";

const TraineeProgressDetails = () => {
  return (
    <Grid item sx={{ my: 8 }}>
    <Box sx={{ height: 120, width: 250, border: "1px solid lightgrey"}}>
      <Paper elevation={3} sx={{ width: 1}}>
        <Box sx={{display: "flex", justifyContent: "center" }}>
          <Typography
            variant="h6"
            component="h3"
            sx={{ textAlign: "center" }}
          >
            Trainee Name
          </Typography>
        </Box>
        <Box sx={{ height: 120, width: 250, border: "1px solid lightgrey", overflow: 'auto'}}>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "left", marginLeft: "5px" }}
          >
            Learning Track:
          </Typography>
        
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "left", marginLeft: "5px" }}
          >
           Overall Exam Status:
          </Typography>
        
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "left", marginLeft: "5px" }}
          >
            Start Date:
          </Typography>
        
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "left", marginLeft: "5px" }}
          >
            End Date:
          </Typography>

          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "left", marginLeft: "5px" }}
          >
           Test Results:
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "left", marginLeft: "5px" }}
          >
           Test Results:
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "left", marginLeft: "5px" }}
          >
           Test Results:
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ textAlign: "left", marginLeft: "5px" }}
          >
           Test Results:
          </Typography>
        </Box>
      </Paper>
    </Box>
  </Grid>
  )
}

export default TraineeProgressDetails