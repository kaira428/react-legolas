import { Grid, Paper, Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { InfoTooltip } from "../helpers/ToolTip";
import { NavLink, useParams } from "react-router-dom";
import { DataContext } from "../App";
import { useContext } from "react";

const CohortDetails = () => {
  const params = useParams();

  const { learningTrackData } = useContext(DataContext);

  if (Object.keys(params).length < 2) {
    return (
      <Grid item sx={{ my: 8 }}>
        <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
          <Paper elevation={3} sx={{ height: 1, width: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6" component="h3">
                Cohort Details
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
                      <TableCell align="right"> </TableCell>
                    </TableRow>
                    <TableRow key={11}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">Mentor:</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                    <TableRow key={12}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">Coach:</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                    <TableRow key={13}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>
                        # of Modules:
                      </TableCell>
                      <TableCell align="right"> </TableCell>
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
  }

  // console.log(data);

  // filter for the correct Learning Track
  const reqLearningTrack = learningTrackData.filter(
    (lt) => lt.id === parseInt(params.learningTrackId)
  );

  // console.log(reqLearningTrack)

  // filter for the correct cohort
  const reqCohort = reqLearningTrack[0].cohorts.filter(
    (cohort) => cohort.cohortNum === parseInt(params.cohortId)
  );

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
              Cohort Details
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
                    <TableCell align="left">
                      
                        Total Trainees:
                      
                    </TableCell>
                    <TableCell align="right">10</TableCell>
                  </TableRow>
                  <TableRow key={11}>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="left">Mentor:</TableCell>
                    <TableCell align="right">
                      {reqCohort[0].mentorName}
                    </TableCell>
                  </TableRow>
                  <TableRow key={12}>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="left">Coach:</TableCell>
                    <TableCell align="right">
                      {reqCohort[0].coachName}
                    </TableCell>
                  </TableRow>
                  <TableRow key={13}>
                    <TableCell component="th" scope="row"></TableCell>
                    <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>
                      # of Modules:
                    </TableCell>
                    <TableCell align="right">7</TableCell>
                  </TableRow>
                  </Typography>
                </TableBody>
              </Table>
            </TableContainer>

            {/* <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Total Trainees: 10
            </Typography>

            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Mentor: <span align="right">{reqCohort[0].mentorName}</span>
            </Typography>

            <Typography
              variant="body2"
              component="p"
              sx={{textAlign: "left", marginLeft: "5px" }}
            >
              Coach: <span align="right">{reqCohort[0].coachName}</span>
            </Typography>

            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Number of Modules:
            </Typography> */}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CohortDetails;
