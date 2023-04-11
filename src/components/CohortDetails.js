import { Grid, Paper, Box, Typography } from "@mui/material";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TableRow from "@mui/material/TableRow";
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

  const reqResults = results.selectedCohortIdDetails;

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
              height: "auto",
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
                    {reqResults.numberOfTraineesInCohort}
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
                      : reqResults.partialCohortDetails["mentorName"]}
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
                      : reqResults.partialCohortDetails["coachName"]}
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}># of Modules:</td>
                  <td
                    colSpan={2}
                    style={{ textAlign: "center", fontWeight: "bold" }}
                  >
                    {reqResults.numberOfModulesForCohort}
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
