import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";

const TrainingDetails = () => {
  const result = useSelector(
    (state) => state.supervisorDashboard
  );

  const objectLength = Object.keys(result.cohortDetailsForSelectedCohortNumber).length;

  if (objectLength > 0) {
    return (
      <Grid item sx={{ my: 6 }}>
        <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
          <Paper elevation={3} sx={{ height: 1, width: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "lightblue",
              }}
            >
              <Typography variant="h6" component="h3">
                Training Details
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
              <Table>
                <tbody>
                  <tr>
                    <td colSpan={2}>Learning Track:</td>
                    <td
                      colSpan={2}
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      {result.selectedLtName}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Training Status:</td>
                    <td
                      colSpan={2}
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      {result.trainingStatus}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Start Date:</td>
                    <td
                      colSpan={2}
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      {
                        result.cohortDetailsForSelectedCohortNumber.startDate
                      }
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2}>End Date:</td>
                    <td
                      colSpan={2}
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      {
                        result.cohortDetailsForSelectedCohortNumber.endDate
                      }
                    </td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Paper>
        </Box>
      </Grid>
    );
  } else {
    return (
      <Grid item sx={{ my: 6 }}>
        <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
          <Paper elevation={3} sx={{ height: 1, width: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "lightblue",
              }}
            >
              <Typography variant="h6" component="h3">
                Training Details
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
                    <td colSpan={2}>Learning Track:</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Training Status:</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>Start Date:</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>End Date:</td>
                  </tr>
                </tbody>
              </Table>
            </Box>
          </Paper>
        </Box>
      </Grid>
    );
  }
};

export default TrainingDetails;
