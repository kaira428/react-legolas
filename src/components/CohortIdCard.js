import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSelectedCohortTraineesThunk } from "../store/features/getSelectedCohortTraineesThunk";

const CohortIdCard = (props) => {
  const dispatch = useDispatch();

  const cohortIdForSelectedLtId = useSelector(
    (state) => state.supervisorDashboard.listOfCohortNumbers
  );

  const isLoading = useSelector((state) => state.supervisorDashboard.isLoading);

  // const listOfTraineesForSelectedLtId = useSelector(state => state.supervisorDashboard.traineeListForSelectedLtIdAndCohortId);
  // console.log("🚀 ~ file: CohortIdCard.js:12 ~ CohortIdCard ~ listOfTraineesForSelectedLtId:", listOfTraineesForSelectedLtId)

  const onClickHandler = (cohortNum) => {
    console.log(
      "🚀 ~ file: CohortIdCard.js:15 ~ onClickHandler ~ cohortNumber:",
      cohortNum
    );
    // get list of trainees in selected cohortNumber
    dispatch(getSelectedCohortTraineesThunk({ cohortNum }));
  };

  return (
    <Grid item sx={{ my: 8 }}>
      {!isLoading ? (
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
                    <Button
                      onClick={() => onClickHandler(cohort.cohortNum)}
                    >{`Cohort ${cohort.cohortNum}`}</Button>
                  </div>
                ))
              }
            </Box>
          </Paper>
        </Box>
      ) : (
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
            ></Box>
          </Paper>
        </Box>
      )}
    </Grid>
  );
};

export default CohortIdCard;
