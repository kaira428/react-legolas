import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import React from "react";

const CohortIdCard = (props) => {
  
  // On initial loading of page before cohortId is selected
  if (props.cohortList.length === 0) {
    return (
      <Grid item sx={{ my: 8 }}>
        <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
          <Paper elevation={3} sx={{ height: 1, width: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                height: 120,
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

  return (
    <Grid item sx={{ my: 8 }}>
      <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
        <Paper elevation={3} sx={{ height: 1, width: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
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
              height: 120,
              width: 250,
              border: "1px solid lightgrey",
              overflow: "auto",
            }}
          >
            {/* Map sorted cohort IDs */}
            {props.cohortList
              .sort((x, y) => {
                let a = x.cohortNum,
                  b = y.cohortNum;
                return a - b;
              })
              .map((cohort, index) => (
              
                <div>
                <Button
                  key={index}
                  onClick={() =>
                    props.getTraineeData(props.ltId, cohort.cohortNum)
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
