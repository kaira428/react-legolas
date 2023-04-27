import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const CohortDetails = () => {
  const results = useSelector(
    (state) => state.supervisorDashboard.supervisorDashboardObj
  );
  // console.log(
  //   "🚀 ~ file: CohortDetails.js:15 ~ CohortDetails ~ results:",
  //   results.selectedCohortIdDetails
  // );

  const cohortList = results.cohortIdDetailsSortedList;
  // console.log("🚀 ~ file: CohortDetails.js:16 ~ CohortDetails ~ cohortList:", cohortList)
  const trainee = results.traineeListForSelectedLtIdAndCohortId[0]; //first element in trainee list for the identified cohort
  // console.log("🚀 ~ file: CohortDetails.js:18 ~ CohortDetails ~ trainee:", trainee)
  // console.log("🚀 ~ file: CohortDetails.js:18 ~ CohortDetails ~ results:", results)

  // get selected cohort details; like coach and mentor names
  // const reqResults = cohortList.find((cohort) => cohort.cohortNum === trainee.cohort);
  // console.log("🚀 ~ file: CohortDetails.js:20 ~ CohortDetails ~ reqResults:", reqResults)

  const reqResults = {};

  const numModulesNumTrainees = results.selectedCohortIdDetails;

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
              {Object.keys(reqResults).length === 0
                ? "Cohort Details"
                : "Cohort " +
                  reqResults.partialCohortDetails["cohortNum"] +
                  " Details"}
            </Typography>
          </Box>

          <Box
            sx={{
              width: 250,
              border: "1px solid lightgrey",
              overflow: "auto",
            }}
          >
            <Table>
              <tbody>
                <tr>
                  <td colSpan={2}>Total Trainees:</td>
                  <td
                    colSpan={2}
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {numModulesNumTrainees.numberOfTraineesInCohort}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>Mentor:</td>
                  <td
                    colSpan={2}
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {Object.keys(reqResults).length === 0
                      ? ""
                      : "reqResults.mentorName"}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>Coach:</td>
                  <td
                    colSpan={2}
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {Object.keys(reqResults).length === 0
                      ? ""
                      : "reqResults.coachName"}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}># of Modules:</td>
                  <td
                    colSpan={2}
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {numModulesNumTrainees.numberOfModulesForCohort}
                  </td>
                </tr>
              </tbody>
            </Table>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CohortDetails;
