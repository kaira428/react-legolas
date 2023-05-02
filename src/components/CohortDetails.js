import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import Table from "react-bootstrap/Table";

const CohortDetails = () => {
  const result = useSelector(
    (state) => state.supervisorDashboard
  );

  const cohortInfo = result.cohortDetailsForSelectedCohortNumber;
  // console.log("🚀 ~ file: CohortDetails.js:16 ~ CohortDetails ~ cohortList:", cohortInfo)

  const numModulesNumTrainees = result.numTraineesNumModules;

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
              {Object.keys(cohortInfo).length === 0
                ? "Cohort Details"
                : "Cohort " +
                  cohortInfo.cohortNum +
                  " Details"}
            </Typography>
          </Box>

          <Box
            sx={{
              width: 250,
              height: 200,
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
                    {Object.keys(cohortInfo).length === 0
                      ? ""
                      : cohortInfo.mentorName}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>Coach:</td>
                  <td
                    colSpan={2}
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {Object.keys(cohortInfo).length === 0
                      ? ""
                      : cohortInfo.coachName}
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
                <tr>
                  <td colSpan={2}>Country:</td>
                  <td
                    colSpan={2}
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {cohortInfo.country}
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
