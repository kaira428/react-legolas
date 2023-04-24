import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const CohortIdCard = (props) => {
  const results = useSelector(
    (state) => state.supervisorDashboard.supervisorDashboardObj
  );
  console.log("🚀 ~ file: CohortIdCard.js:9 ~ CohortIdCard ~ results:", results)

  // On initial loading of page before cohortId is selected
  if (results.cohortIdDetailsSortedList.length === 0) {
    return (
      <Grid item sx={{ my: 8 }}>
        <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
          <Paper elevation={3} sx={{ height: 1, width: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "lightblue" }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{ textAlign: "center" }}
                
              >
                Cohort ID
              </Typography>
            </Box>
            <Box
              sx={{
                height: 230,
                width: 250,
                border: "1px solid lightgrey",
                overflow: "auto",
              }}
            />
          </Paper>
        </Box>
      </Grid>
    );
  }

  const copyOfResultantArray = [...results.cohortIdDetailsSortedList];
  // console.log(
  //   "🚀 ~ file: CohortIdCard.js:43 ~ CohortIdCard ~ copyOfResultantArray:",
  //   copyOfResultantArray
  // );

  return (
    <Grid item sx={{ my: 8 }}>
      <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
        <Paper elevation={3} sx={{ height: 1, width: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "lightblue",
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              sx={{ textAlign: "center" }}
            >
              Cohort ID
            </Typography>
          </Box>
          <Box
            sx={{
              height: 230,
              width: 250,
              border: "1px solid lightgrey",
              overflow: "auto",
            }}
          >
            {/* Map sorted cohort IDs */}
            {copyOfResultantArray
              .map((cohort, index) => (
                <div key={index}>
                  <Button
                    onClick={() =>
                      props.getTraineeData({ltId: results.ltId, cohortId: cohort.cohortNum})
                    }
                  >
                    {`Cohort ${cohort.cohortNum}`}
                  </Button>
                </div>
              ))}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CohortIdCard;
