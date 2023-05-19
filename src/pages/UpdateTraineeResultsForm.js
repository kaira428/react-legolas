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
import { updateTraineeResultsThunk } from "../store/features/updateTraineeResultsThunk";
import { getSelectedCohortTraineesThunk } from "../store/features/getSelectedCohortTraineesThunk";

const UpdateTraineeResultsForm = () => {
  const data = useSelector((state) => state.supervisorDashboard);

  const isLoading = useSelector((state) => state.supervisorDashboard.isLoading);

  const [selectedModule, setSelectedModule] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {};

  const learningTrackName = data.selectedLtName;

  const cohortNumber = data.cohortDetailsForSelectedCohortNumber.cohortNum;

  const listOfTraineeForSelectedCohort =
    data.listOfTraineesForSelectedCohortNumber;

  // convert module object to array of modules
  const arrayOfModulesForSelectedCohort = Object.entries(
    listOfTraineeForSelectedCohort[0].modules
  );

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
          status: trainee.status,
        };
      }
    );
  };

  if (selectedModule !== null) {
    getTraineeResultForSelectedModuleArray();
  }

  const onSubmitHandler = (values, formikHelpers) => {
    console.log(values);
    arrayOfTraineeAndSelectedModule.map((trainee, index) =>
      console.log(`Index ${index} is ${trainee.firstName}`)
    );

    console.log(
      "🚀 ~ file: UpdateTraineeResultsForm.js:78 ~ onSubmitHandler ~ formikHelpers:",
      formikHelpers
    );

    // setup updated array of trainees with updated score for the selected module
    let requiredListOfTraineeArray = [...listOfTraineeForSelectedCohort];
    console.log(
      "🚀 ~ file: UpdateTraineeResultsForm.js:109 ~ onSubmitHandler ~ requiredListOfTraineeArray:",
      requiredListOfTraineeArray
    );

    let listOfTrainees = [];

    // use for loop to update the result for the required modules for each trainee in the cohort
    for (let i = 0; i < requiredListOfTraineeArray.length; i++) {

      let currentScore = requiredListOfTraineeArray[i].modules[`${selectedModule}`];
      console.log("🚀 ~ file: UpdateTraineeResultsForm.js:94 ~ onSubmitHandler ~ currentScore:", currentScore)

      let tempScore;

      console.log("values[i]: " + values[i])

      // replace the required module result object
      if (currentScore >= 0 && values[i] === "") {
        tempScore = currentScore;
      } else if (currentScore >= 0 && values[i] !== "" && !(Number.isNaN(parseFloat(Object.values(values)[i])))) {
        tempScore = parseFloat(Object.values(values)[i]);
      }
      else if (currentScore >= 0 && Number.isNaN(parseFloat(Object.values(values)[i]))){
        tempScore = currentScore;
      }
      else
      {
        tempScore = 0;
      }

      // tempScore = Number.isNaN(parseFloat(Object.values(values)[i]))
      //   ? 0
      //   : parseFloat(Object.values(values)[i]);

      let tempObject = {
        ...requiredListOfTraineeArray[i].modules,
        [`${selectedModule}`]: tempScore,
      };

      let updatedObject = { ...requiredListOfTraineeArray[i] };

      updatedObject.modules = tempObject;

      console.log(
        "🚀 ~ file: UpdateTraineeResultsForm.js:125 ~ onSubmitHandler ~ updatedObject:",
        updatedObject
      );

      listOfTrainees.push(updatedObject);
    }

    console.log(
      "🚀 ~ file: UpdateTraineeResultsForm.js:134 ~ onSubmitHandler ~ listOfTrainees:",
      listOfTrainees
    );

    // update trainee results to MongoDB
    dispatch(updateTraineeResultsThunk({ listOfTrainees }));

    // reset the form
    // formikHelpers.resetForm({values: {}});
    
  };

  const moduleChangeHandler = (event) => {
    setSelectedModule(event.target.value);
  };

  return (
    <>
      <Container
        style={{
          height: "20vh",
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
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div
            className="spinner-border text-primary"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          ></div>
        </div>
      )}
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
                  height: "60vh",
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
                          <TableCell align="center">
                            <span>
                              <Typography
                                variant="body1"
                                component="h6"
                                sx={{ fontWeight: "bold" }}
                              >
                                Trainee Name
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
                                Current Score
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
                                Updated Score
                              </Typography>
                            </span>
                          </TableCell>
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
                              <TableCell
                                align="center"
                                component="th"
                                scope="row"
                              >
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
                              <TableCell
                                align="center"
                                component="th"
                                scope="row"
                              >
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
                                    {trainee.score}
                                  </Typography>
                                </span>
                              </TableCell>
                              <TableCell
                                align="center"
                                component="th"
                                scope="row"
                              >
                                <span>
                                  <CustomInput
                                    name={index}
                                    variant="outlined"
                                    color="primary"
                                    as={TextField}
                                    disabled={
                                      trainee.status === "InActive"
                                        ? true
                                        : false
                                    }
                                  />
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
                    onClick={() => {
                      dispatch(getSelectedCohortTraineesThunk({cohortNum: cohortNumber}))
                      navigate("/pages/supervisorDashboard")}}
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
