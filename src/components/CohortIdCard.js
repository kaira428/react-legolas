import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";

const CohortIdCard = ({ cohorts }) => {
  console.log(cohorts);

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
              Cohort ID
            </Typography>
          </Box>
          <Box
            sx={{
              height: 120,
              width: 220,
              border: "1px solid lightgrey",
              overflow: "auto",
            }}
          >
            {/* Sort Cohort ID in ascending order before mapping */}
            {cohorts &&
              cohorts
                .sort((x, y) => {
                  let a = x.cohortNum,
                    b = y.cohortNum;
                  return a - b;
                })
                .map((cohort) => (
                  <Typography
                    variant="body2"
                    component="p"
                    sx={{ textAlign: "left", marginLeft: "5px" }}
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
