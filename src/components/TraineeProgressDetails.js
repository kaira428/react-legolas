import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";

const TraineeProgressDetails = () => {
  return (
    <Grid item sx={{ my: 8 }}>
        <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
          <Paper elevation={3} sx={{ height: 1, width: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h6" component="h3">
                Trainee Details
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
                      <TableCell align="left">Learning Track:</TableCell>
                      <TableCell align="right"> </TableCell>
                    </TableRow>
                    <TableRow key={11}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">Exam Status:</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                    <TableRow key={12}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">Start Date:</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                    <TableRow key={121}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left">End Date:</TableCell>
                      <TableCell align="right"></TableCell>
                    </TableRow>
                    <TableRow key={13}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>
                        Test Results:
                      </TableCell>
                      <TableCell align="right"> </TableCell>
                    </TableRow>
                    <TableRow key={131}>
                      <TableCell component="th" scope="row"></TableCell>
                      <TableCell align="left" sx={{ whiteSpace: "nowrap" }}>
                        Module 1:
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
  //   <Grid item sx={{ my: 8 }}>
  //   <Box sx={{ width: 250, border: "1px solid lightgrey"}}>
  //     <Paper elevation={3} sx={{ width: 1}}>
  //       <Box sx={{display: "flex", justifyContent: "center" }}>
  //         <Typography
  //           variant="h6"
  //           component="h3"
  //           sx={{ textAlign: "center" }}
  //         >
  //           Trainee Name
  //         </Typography>
  //       </Box>
  //       <Box sx={{ height: 120, width: 250, border: "1px solid lightgrey", overflow: 'auto'}}>
  //         <Typography
  //           variant="body2"
  //           component="p"
  //           sx={{ textAlign: "left", marginLeft: "5px" }}
  //         >
  //           Learning Track:
  //         </Typography>
        
  //         <Typography
  //           variant="body2"
  //           component="p"
  //           sx={{ textAlign: "left", marginLeft: "5px" }}
  //         >
  //          Overall Exam Status:
  //         </Typography>
        
  //         <Typography
  //           variant="body2"
  //           component="p"
  //           sx={{ textAlign: "left", marginLeft: "5px" }}
  //         >
  //           Start Date:
  //         </Typography>
        
  //         <Typography
  //           variant="body2"
  //           component="p"
  //           sx={{ textAlign: "left", marginLeft: "5px" }}
  //         >
  //           End Date:
  //         </Typography>

  //         <Typography
  //           variant="body2"
  //           component="p"
  //           sx={{ textAlign: "left", marginLeft: "5px" }}
  //         >
  //          Test Results:
  //         </Typography>
  //         <Typography
  //           variant="body2"
  //           component="p"
  //           sx={{ textAlign: "left", marginLeft: "5px" }}
  //         >
  //          Test Results:
  //         </Typography>
  //         <Typography
  //           variant="body2"
  //           component="p"
  //           sx={{ textAlign: "left", marginLeft: "5px" }}
  //         >
  //          Test Results:
  //         </Typography>
  //         <Typography
  //           variant="body2"
  //           component="p"
  //           sx={{ textAlign: "left", marginLeft: "5px" }}
  //         >
  //          Test Results:
  //         </Typography>
  //       </Box>
  //     </Paper>
  //   </Box>
  // </Grid>
  )
}

export default TraineeProgressDetails;

