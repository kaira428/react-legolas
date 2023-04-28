import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

function CohortProgressBar() {
  const progressData = useSelector(
    (state) => state.supervisorDashboard.listOfCohortsProgressForSelectedLtId
  );
  

  return (
    <>
      {progressData.map((progress) => (
        <Box key={progress[0]}>
          <Typography variant="body2" color="text.secondary" textAlign="left">
            Cohort {progress[0]}
          </Typography>
          <Box sx={{ width: "100%", mr: 1, mb: 2 }}>
            {progress[1] === 100 ? (
              <ProgressBar
                variant="success"
                animated
                now={progress[1]}
                label={`${progress[1]}%`}
              />
            ) : (
              <ProgressBar
                animated
                now={progress[1]}
                label={`${progress[1]}%`}
              />
            )}
          </Box>
        </Box>
      ))}
    </>
  );
}

export default CohortProgressBar;
