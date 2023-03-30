import {
  Grid,
  Paper,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../App";
import { traineeDetailsByLtIdByCohortId } from "../helpers/utilities";

const CohortLeaderBoardCard = () => {
  const params = useParams();

  // console.log(params);

  // const { learningTrackData } = useContext(DataContext);

  // On initial loading of page before cohortId is selected
  if (Object.keys(params).length < 2) {
    return (
      <Grid item sx={{ my: 5 }}>
        <Box sx={{ height: 250, width: 500, border: "1px solid lightgrey" }}>
          <Paper elevation={3} sx={{ height: 1, textAlign: "center" }}>
            <Typography variant="h5" component="h3">
              Cohort LeaderBoard
            </Typography>
          </Paper>
        </Box>
      </Grid>
    );
  }

  const traineeData = traineeDetailsByLtIdByCohortId(
    parseInt(params.learningTrackId),
    parseInt(params.cohortId)
  );

  // console.log(traineeData);

  return (
    <>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h5" component="h3">
          Cohort Leaderboard
        </Typography>
      </Box>
      <TableContainer component={Paper} sx={{ height: 300 }}>
        <Table
          sx={{ minWidth: 500, height: "max-content" }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <span>
                  <Typography variant="body1" component="p">
                    #
                  </Typography>
                </span>
              </TableCell>
              <TableCell align="center">
                <span>
                  <Typography variant="body1" component="p">
                    Name
                  </Typography>
                </span>
              </TableCell>
              <TableCell align="center">
                <span>
                  <Typography variant="body1" component="p">
                    Progress
                  </Typography>
                </span>
              </TableCell>
              <TableCell align="center">
                <span>
                  <Typography variant="body1" component="p">
                    Result
                  </Typography>
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {traineeData.map((trainee, index) => (
              <TableRow
                key={index + 1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="center">
                  <span>
                    <Typography variant="body1" component="p">
                      {trainee.firstName}
                    </Typography>
                  </span>
                </TableCell>
                <TableCell align="center">
                  <span>
                    <Typography variant="body1" component="p">
                      {trainee.progress + "%"}
                    </Typography>
                  </span>
                </TableCell>
                <TableCell align="center">
                  <span>
                    <Typography variant="body1" component="p">
                      {trainee.totalModuleResult}
                    </Typography>
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CohortLeaderBoardCard;
