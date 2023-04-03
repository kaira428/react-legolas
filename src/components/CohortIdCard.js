import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import { useDataContext } from "../helpers/customedHooks";

const CohortIdCard = (props) => {
  console.log("🚀 ~ file: CohortIdCard.js:8 ~ CohortIdCard ~ props:", props.data) 

  console.log("🚀 ~ file: CohortIdCard.js:24 ~ CohortIdCard ~ data:", props.data)

  // On initial loading of page before cohortId is selected
  if (props.data.length === 0) {
    
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
            {props.data
                .sort((x, y) => {
                  let a = x.cohortNum,
                    b = y.cohortNum;
                  return a - b;
                })
                .map((cohort, index) => (
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ textAlign: "left", marginLeft: "5px", marginTop: "5px" }}
                    key={cohort.cohortNum}
                  >
                    {`Cohort ${cohort.cohortNum}`}
                  </Typography>
                ))}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CohortIdCard;
