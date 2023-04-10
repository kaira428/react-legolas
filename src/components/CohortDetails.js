import { Grid, Paper, Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { useSelector } from "react-redux";

const CohortDetails = () => {
  const results = useSelector(
    (state) => state.supervisorDashboard.supervisorDashboardObj
  );
  console.log("🚀 ~ file: CohortDetails.js:15 ~ CohortDetails ~ results:", results.selectedCohortIdDetails);

  const reqResults = results.selectedCohortIdDetails;
  
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
              {Object.keys(reqResults).length === 0
                ? "Cohort Details"
                : "Cohort " + reqResults.partialCohortDetails["cohortNum"] + " Details"}
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
            <TableContainer>
              <Table aria-label="a dense table">
                <TableBody>
                  <Typography variant="body1" component="p">
                    <TableRow key={10} sx={{ whiteSpace: "nowrap" }}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">Total Trainees:</TableCell>
                      <TableCell align="right">
                        {reqResults.numberOfTraineesInCohort}
                      </TableCell>
                    </TableRow>
                    <TableRow key={11}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">Mentor:</TableCell>
                      <TableCell align="right">
                        {Object.keys(reqResults).length === 0
                          ? ""
                          : reqResults.partialCohortDetails["mentorName"]}
                      </TableCell>
                    </TableRow>
                    <TableRow key={12}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">Coach:</TableCell>
                      <TableCell align="right">
                        {Object.keys(reqResults).length === 0
                          ? ""
                          : reqResults.partialCohortDetails["coachName"]}
                      </TableCell>
                    </TableRow>
                    <TableRow key={13}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>
                        # of Modules:
                      </TableCell>
                      <TableCell align="right">
                        {reqResults.numberOfModulesForCohort}
                      </TableCell>
                    </TableRow>
                  </Typography>
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CohortDetails;
