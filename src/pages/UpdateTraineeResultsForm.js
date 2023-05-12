import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { traineeResultsSchema } from "../schemas/traineeResultsSchema";
import {
  Box,
  Button,
  Container,
  Grid,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const UpdateTraineeResultsForm = () => {
  const data = useSelector((state) => state.supervisorDashboard);
  console.log(
    "🚀 ~ file: UpdateTraineeResultsForm.js:7 ~ UpdateTraineeResultsForm ~ data:",
    data
  );

  const [selectedModule, setSelectedModule] = useState(null);
  console.log(
    "🚀 ~ file: UpdateTraineeResultsForm.js:30 ~ UpdateTraineeResultsForm ~ selectedModule:",
    selectedModule
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    moduleScore: null,
  };

  const onSubmitHandler = (values) => {
    console.log(values);
  };

  const learningTrackName = data.selectedLtName;
  //   console.log(
  //     "🚀 ~ file: UpdateTraineeResultsForm.js:24 ~ UpdateTraineeResultsForm ~ learningTrackName:",
  //     learningTrackName
  //   );

  const cohortNumber = data.cohortDetailsForSelectedCohortNumber.cohortNum;
  //   console.log(
  //     "🚀 ~ file: UpdateTraineeResultsForm.js:27 ~ UpdateTraineeResultsForm ~ cohortNumber:",
  //     cohortNumber
  //   );

  const listOfCohorts = data.listOfCohortNumbers;
  //   console.log(
  //     "🚀 ~ file: UpdateTraineeResultsForm.js:30 ~ UpdateTraineeResultsForm ~ listOfCohorts:",
  //     listOfCohorts
  //   );

  const listOfTraineeForSelectedCohort =
    data.listOfTraineesForSelectedCohortNumber;

  //   console.log(
  //     "🚀 ~ file: UpdateTraineeResultsForm.js:33 ~ UpdateTraineeResultsForm ~ listOfTraineeForSelectedCohort:",
  //     listOfTraineeForSelectedCohort
  //   );

  // convert module object to array of modules
  const arrayOfModulesForSelectedCohort = Object.entries(
    listOfTraineeForSelectedCohort[0].modules
  );
  //   console.log(
  //     "🚀 ~ file: UpdateTraineeResultsForm.js:67 ~ UpdateTraineeResultsForm ~ arrayOfModulesForSelectedCohort:",
  //     arrayOfModulesForSelectedCohort
  //   );

  let arrayOfTraineeAndSelectedModule = [];

  const getTraineeResultForSelectedModuleArray = () => {
    arrayOfTraineeAndSelectedModule = listOfTraineeForSelectedCohort.map(
      (trainee) => {
        return {
          trainee_id: trainee._id.toString(),
          firstName: trainee.firstName,
          lastName: trainee.lastName,
          module: selectedModule,
          score: trainee.modules[selectedModule],
        };
      }
    );
  };

  if (selectedModule !== null) {
    getTraineeResultForSelectedModuleArray();
  }

  //   console.log(
  //     "🚀 ~ file: UpdateTraineeResultsForm.js:84 ~ UpdateTraineeResultsForm ~ arrayOfTraineeAndSelectedModule:",
  //     arrayOfTraineeAndSelectedModule
  //   );

  const moduleChangeHandler = (event) => {
    setSelectedModule(event.target.value);
  };

  return (
    <>
      <Container
        style={{
          height: "18vh",
          width: "30vw",
        }}
      >
        <Paper elevation={3} sx={{ alignItems: "center", marginTop: "15px" }}>
          <Grid container justifyContent="center">
            <Grid item xs={12} sx={{ textAlign: "center" }} margin={1}>
              <Typography variant="h4" component="h3">
                {learningTrackName}
              </Typography>
              <Typography variant="h6" component="h5">
                {`Cohort: ${cohortNumber}`}
              </Typography>
            </Grid>
          </Grid>
          <Grid container item justifyContent={"center"}>
            <Box sx={{ width: "150px", margin: "20px" }}>
              <TextField
                select
                variant="outlined"
                color="primary"
                label="Select Module"
                fullWidth
                onChange={moduleChangeHandler}
              >
                {arrayOfModulesForSelectedCohort.map((module) => (
                  <MenuItem value={module[0]}>{module[0]}</MenuItem>
                ))}
              </TextField>
            </Box>
          </Grid>
        </Paper>
      </Container>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitHandler}
        validationSchema={traineeResultsSchema}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            {
              <Container
                style={{
                  // backgroundColor: "lightblue",
                  height: "70vh",
                  width: "30vw",
                }}
              >
                <Paper elevation={3} sx={{ alignItems: "center" }}>
                  <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 250 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Trainee Name</TableCell>
                          <TableCell align="center">Score</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {arrayOfTraineeAndSelectedModule.map((trainee) => (
                          <TableRow
                            key={trainee._id}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {`${trainee.firstName} ${trainee.lastName}`}
                            </TableCell>
                            <TableCell align="right" component="th" scope="row">
                              <span>
                                <input
                                  value={
                                    trainee.score !== null ? trainee.score : "-"
                                  }
                                />
                              </span>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper>
                <Grid
                  container
                  item
                  justifyContent={"space-evenly"}
                  marginTop={3}
                >
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => navigate("/pages/supervisorDashboard")}
                  >
                    Back To Dashboard
                  </Button>
                  <Button variant="contained" color="primary" type="submit">
                    Update
                  </Button>
                </Grid>
              </Container>
            }
          </Form>
        )}
      </Formik>
    </>
  );
};

export default UpdateTraineeResultsForm;
