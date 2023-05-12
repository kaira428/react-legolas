import { Form, Formik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
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
import CustomInput from "../components/CustomInput";

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

  const onSubmitHandler = (values) => {
    console.log(values);
    arrayOfTraineeAndSelectedModule.map((trainee, index) =>
      console.log(`Index ${index} is ${trainee.firstName}`)
    );

    // setup updated array of trainees with updated score for the selected module
    let requiredListOfTraineeArray = [...listOfTraineeForSelectedCohort];
    console.log(
      "🚀 ~ file: UpdateTraineeResultsForm.js:109 ~ onSubmitHandler ~ requiredListOfTraineeArray:",
      requiredListOfTraineeArray
    );

    console.log(
      "🚀 ~ file: UpdateTraineeResultsForm.js:116 ~ onSubmitHandler ~ requiredListOfTraineeArray:",
      requiredListOfTraineeArray[0].modules
    );

    console.log(selectedModule);
    console.log(Object.values(values)[0]);

    // replace the required module result object
    let testObject = {...requiredListOfTraineeArray[0].modules,
      [`${selectedModule}`]: parseFloat(Object.values(values)[0]),
    };

    console.log(
      "🚀 ~ file: UpdateTraineeResultsForm.js:114 ~ onSubmitHandler ~ testObj:",
      testObject
    );
  };

  const moduleChangeHandler = (event) => {
    setSelectedModule(event.target.value);
  };

  return (
    <>
      <Container
        style={{
          height: "18vh",
          width: "40vw",
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
        validator={() => ({})}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            {
              <Container
                style={{
                  // backgroundColor: "lightblue",
                  height: "70vh",
                  width: "40vw",
                }}
              >
                <Paper elevation={3} sx={{ alignItems: "center" }}>
                  <TableContainer
                    component={Paper}
                    sx={{ height: 450, border: "1px solid darkGrey" }}
                  >
                    <Table
                      sx={{ height: "max-content", minWidth: 300 }}
                      aria-label="simple table"
                      stickyHeader
                    >
                      <TableHead>
                        <TableRow>
                          <TableCell>Trainee Name</TableCell>
                          <TableCell align="center">Score</TableCell>
                        </TableRow>
                      </TableHead>

                      <TableBody sx={{ overflow: "auto" }}>
                        {arrayOfTraineeAndSelectedModule.map(
                          (trainee, index) => (
                            <TableRow
                              key={index}
                              sx={{
                                "&:last-child td, &:last-child th": {
                                  border: 0,
                                },
                              }}
                            >
                              <TableCell component="th" scope="row">
                                {`${trainee.firstName} ${trainee.lastName}`}
                              </TableCell>
                              <TableCell
                                align="right"
                                component="th"
                                scope="row"
                              >
                                <span>
                                  <CustomInput
                                    name={index}
                                    variant="outlined"
                                    color="primary"
                                    as={TextField}
                                    //   value={
                                    //     trainee.score !== null ? trainee.score : "-"
                                    //   }
                                  />
                                  {/* <input
                                  value={
                                    trainee.score !== null ? trainee.score : "-"
                                  }
                                /> */}
                                </span>
                              </TableCell>
                            </TableRow>
                          )
                        )}
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
