import * as React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { ProgressBar } from "react-bootstrap";
import { useSelector } from "react-redux";

function CohortProgressBar(props) {

  const results = useSelector(
    (state) => state.supervisorDashboard.supervisorDashboardObj
  );
  console.log("🚀 ~ file: CohortProgressBar.js:12 ~ CohortProgressBar ~ results:", results)

  return (
    <>
    
      <Box>
        <Box>
          <Typography variant="body2" color="text.secondary" textAlign="left">
            Cohort 1
          </Typography>
          <Box sx={{ width: "100%", mr: 1, mb: 1}}>
            <ProgressBar animated now={45} label="45%"/>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default CohortProgressBar;
