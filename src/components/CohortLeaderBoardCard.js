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

const CohortLeaderBoardCard = () => {
  const results = useSelector(
    (state) => state.supervisorDashboard.traineeListForSelectedLtIdAndCohortId
  );

  if (!Array.isArray(results)) {
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
            "Cohort Leaderboard"
          </Typography>
        </Paper>
        <TableContainer
          component={Paper}
          sx={{ height: 350, border: "1px solid darkGrey" }}
        >
          <Table
            sx={{
              minWidth: 500,
              height: "max-content",
            }}
            aria-label="simple table"
            stickyHeader
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">
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
          </Table>
        </TableContainer>
      </>
    );
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
          {results.length === 0
            ? "Cohort Leaderboard"
            : `Cohort ${results[0].cohort} Leaderboard`}
        </Typography>
      </Paper>
      <TableContainer
        component={Paper}
        sx={{ height: 350, border: "1px solid darkGrey" }}
      >
        <Table
          sx={{
            minWidth: 500,
            height: "max-content",
          }}
          aria-label="simple table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">
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
            {results.length > 0
              ? results.map((trainee, index) => (
                  <TableRow
                    key={index + 1}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="row">
                      {index + 1 <= 3 ? (
                        <img
                          width="40"
                          height="40"
                          src={`/images/${index + 1}.png`}
                          alt="awards"
                        />
                      ) : (
                        index + 1
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <span>
                        <Typography
                          variant="body1"
                          component="p"
                          sx={
                            trainee.status === "InActive"
                              ? { backgroundColor: "grey" }
                              : ""
                          }
                        >
                          {trainee.firstName + " " + trainee.lastName}
                        </Typography>
                      </span>
                    </TableCell>
                    <TableCell align="center">
                      <span>
                        <Typography variant="body1" component="p">
                          {trainee.progress === "Withdrawn"
                            ? trainee.progress
                            : trainee.progress + "%"}
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
                        <TraineeDetailsModal traineeId={trainee._id} />
                      </span>
                    </TableCell>
                  </TableRow>
                ))
              : ""}
          </TableBody>
        </Table>
      </TableContainer>{" "}
      : ""
    </>
  );
};

export default CohortLeaderBoardCard;
