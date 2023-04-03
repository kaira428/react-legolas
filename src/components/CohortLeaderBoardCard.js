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
import React from "react";
import { useParams } from "react-router-dom";
import { traineeDetailsByLtIdByCohortId } from "../helpers/utilities";

const CohortLeaderBoardCard = () => {
  const params = useParams();

  // On initial loading of page before cohortId is selected
  // if (Object.keys(params).length < 2) {
  //   return (
  //     <Grid item sx={{ my: 5 }}>
  //       <Box sx={{ height: 250, width: 500, border: "1px solid lightgrey" }}>
  //         <Paper elevation={3} sx={{ height: 1, textAlign: "center" }}>
  //           <Typography variant="h5" component="h3">
  //             Cohort LeaderBoard
  //           </Typography>
  //         </Paper>
  //       </Box>
  //     </Grid>
  //   );
  // }

  const traineeData = traineeDetailsByLtIdByCohortId(
    parseInt(params.learningTrackId),
    parseInt(params.cohortId)
  );

  // console.log(traineeData);

  const showClick = (rowNum) => {
    console.log(`Row ${rowNum} Clicked`);
  };

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
        {/* <Box sx={{ textAlign: "center", border: "1px solid darkgrey" }}> */}

        <Typography variant="h5" component="h3">
          Cohort Leaderboard
        </Typography>

        {/* </Box> */}
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
            {traineeData.map((trainee, index) => (
              <TableRow
                key={index + 1}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                onClick={() => showClick(index + 1)}
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
