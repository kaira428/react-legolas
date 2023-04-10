import {
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import React from "react";
import TraineeDetailsModal from "./TraineeDetailsModal";
import { useSelector } from "react-redux";

const CohortLeaderBoardCard = ({ data, cohortDetails, getTraineeResults }) => {
  const results = useSelector(
    (state) => state.supervisorDashboard.supervisorDashboardObj
  );

  console.log(
    "🚀 ~ file: CohortLeaderBoardCard.js:25 ~ CohortLeaderBoardCard ~ results:",
    results.selectedCohortIdDetails
  );

  let reqData = [];

  if (Object.keys(results.selectedCohortIdDetails).length > 0){
  reqData = [...results.traineeListForSelectedLtIdAndCohortId];
  }

  return (
    <>
      <Paper
        elevation={0}
        sx={{
          textAlign: "center",
          border: "1px solid darkgrey",
          backgroundColor: "lightblue",
        }}
      >
        <Typography variant="h5" component="h3">
          {Object.keys(cohortDetails).length === 0
            ? "Cohort Leaderboard"
            : `Cohort ${cohortDetails.partialCohortDetails["cohortNum"]} Leaderboard`}
        </Typography>
      </Paper>
      <TableContainer
        component={Paper}
        sx={{ height: 300, border: "1px solid darkGrey" }}
      >
        <Table
          sx={{
            minWidth: 500,
            height: "max-content",
            backgroundColor: "lightGrey",
          }}
          aria-label="simple table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <span>
                  <Typography
                    variant="body1"
                    component="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    #
                  </Typography>
                </span>
              </TableCell>
              <TableCell align="center">
                <span>
                  <Typography
                    variant="body1"
                    component="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    Name
                  </Typography>
                </span>
              </TableCell>
              <TableCell align="center">
                <span>
                  <Typography
                    variant="body1"
                    component="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    Progress
                  </Typography>
                </span>
              </TableCell>
              <TableCell align="center">
                <span>
                  <Typography
                    variant="body1"
                    component="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    Result
                  </Typography>
                </span>
              </TableCell>
              <TableCell align="center">
                <span>
                  <Typography
                    variant="body1"
                    component="h6"
                    sx={{ fontWeight: "bold" }}
                  >
                    Details
                  </Typography>
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reqData.length > 0
              ? reqData.map((trainee, index) => (
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
                          {trainee.firstName + " " + trainee.lastName}
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
                    <TableCell align="center">
                      <span>
                        {/* <TraineeDetailsModal traineeId={trainee.id} getTraineeResults={getTraineeResults}/> */}
                        <TraineeDetailsModal traineeId={trainee.id} />
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              : ""}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default CohortLeaderBoardCard;
