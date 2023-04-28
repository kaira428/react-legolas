import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const CohortIdCard = (props) => {
  const cohortIdForSelectedLtId = useSelector(
    (state) => state.supervisorDashboard.listOfCohortNumbers
  );

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
            {
              /* Map sorted cohort IDs */
              cohortIdForSelectedLtId.map((cohort, index) => (
                <div key={index}>
                  <Button>{`Cohort ${cohort.cohortNum}`}</Button>
                </div>
              ))
            }
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CohortIdCard;
