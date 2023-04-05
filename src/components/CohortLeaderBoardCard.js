import {
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import { lightGreen } from "@mui/material/colors";
import React from "react";

const CohortLeaderBoardCard = ({ data, cohortDetails }) => {
  // console.log(
  //   "🚀 ~ file: CohortLeaderBoardCard.js:14 ~ CohortLeaderBoardCard ~ cohortDetails:",
  //   cohortDetails
  // );

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
        sx={{ height: 300, border: "1px solid darkGrey"}}
      >
        <Table
          sx={{ minWidth: 500, height: "max-content", backgroundColor: "lightGrey" }}
          aria-label="simple table"
          stickyHeader
        >
          <TableHead>
            <TableRow>
              <TableCell>
                <span>
                  <Typography variant="body1" component="h6" sx={{fontWeight: 'bold'}}>
                    #
                  </Typography>
                </span>
              </TableCell>
              <TableCell align="center">
                <span>
                  <Typography variant="body1" component="h6" sx={{fontWeight: 'bold'}}>
                    Name
                  </Typography>
                </span>
              </TableCell>
              <TableCell align="center">
                <span>
                  <Typography variant="body1" component="h6" sx={{fontWeight: 'bold'}}>
                    Progress
                  </Typography>
                </span>
              </TableCell>
              <TableCell align="center">
                <span>
                  <Typography variant="body1" component="h6" sx={{fontWeight: 'bold'}}>
                    Result
                  </Typography>
                </span>
              </TableCell>
              <TableCell align="center">
                <span>
                  <Typography variant="body1" component="h6" sx={{fontWeight: 'bold'}}>
                    Details
                  </Typography>
                </span>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((trainee, index) => (
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
                    <Button size="small" variant="contained" onClick={() => console.log("Clicked")}>ClickMe</Button>
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
