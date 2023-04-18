import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

function CohortProgressBar() {
  const reqObj = useSelector(state => state.supervisorDashboard.supervisorDashboardObj);
  
  const progressData = reqObj.selectedCohortsProgress;
  // console.log("🚀 ~ file: CohortProgressBar.js:11 ~ CohortProgressBar ~ progressData:", progressData)

  return (
    <>
    {progressData.map(progress => (
      <Box key={progress[0]}>
        <Typography variant="body2" color="text.secondary" textAlign="left">
          Cohort {progress[0]}
        </Typography>
        <Box sx={{ width: "100%", mr: 1, mb: 2 }}>
          <ProgressBar animated now={progress[1]} label={`${progress[1]}%`} />
        </Box>
      </Box>
    ))}
    </>
  );
}

export default CohortProgressBar;
