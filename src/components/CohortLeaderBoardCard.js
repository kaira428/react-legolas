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

const CohortLeaderBoardCard = ({data}) => {
  
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
          Cohort Leaderboard
        </Typography>

      </Paper>
      <TableContainer
        component={Paper}
        sx={{ height: 300, border: "1px solid darkgrey" }}
      >
        <Table
          sx={{ minWidth: 500, height: "max-content" }}
          aria-label="simple table"
          stickyHeader
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
                    <Typography variant="body1" component="p" sx={{textDecoration: "underline"}}>
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
