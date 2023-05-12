import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CustomInput from "../components/CustomInput";
import { Form, Formik } from "formik";
import { traineeDetailsSchema } from "../schemas/traineeDetailsSchema";
import CustomSelect from "../components/CustomSelect";
import { createNewTraineeThunk } from "../store/features/createNewTraineeThunk";
import { createModuleObjectOrArrayForNewCohort } from "../helpers/createModuleObjectOrArrayForNewCohort";

const AddTraineesToCohortForm = () => {
  const data = useSelector((state) => state.supervisorDashboard);
  console.log(
    "🚀 ~ file: AddTraineesToCohortForm.js:7 ~ AddTraineesToCohortForm ~ data:",
    data
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    status: "",
  };

  const onSubmitHandler = (values, formikHelpers) => {
    // create module array
    const moduleArray = createModuleObjectOrArrayForNewCohort(numOfModules);

    const newTrainee = {
      ...values,
      learningTrack: learningTrackName,
      cohort: cohortNumber,
      country,
      modules: moduleArray,
    };

    // save trainee object to MongoDB
    dispatch(createNewTraineeThunk({ newTrainee }));

    formikHelpers.resetForm();
  };

  const location = useLocation();

  const learningTrackName = location.state.newLtName;
  // console.log(
  //   "🚀 ~ file: AddTraineesToCohortForm.js:19 ~ AddTraineesToCohortForm ~ learningTrackName:",
  //   learningTrackName
  // );

  const cohortNumber = location.state.newCohortNum;
  // console.log(
  //   "🚀 ~ file: AddTraineesToCohortForm.js:22 ~ AddTraineesToCohortForm ~ cohortNumber:",
  //   cohortNumber
  // );

  const country = location.state.country;
  // console.log(
  //   "🚀 ~ file: AddTraineesToCohortForm.js:25 ~ AddTraineesToCohortForm ~ country:",
  //   country
  // );

  const numOfModules = location.state.numOfModules;
  // console.log("🚀 ~ file: AddTraineesToCohortForm.js:66 ~ AddTraineesToCohortForm ~ numOfModules:", numOfModules)

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitHandler}
        validationSchema={traineeDetailsSchema}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>
            {/* <ModuleCard numOfModules={numOfModules} /> */}
            <Container
              style={{
                // backgroundColor: "lightblue",
                height: "35vh",
                width: "30vw",
              }}
            >
              <Paper
                elevation={3}
                sx={{ alignItems: "center", marginTop: "10px" }}
              >
                <Grid container justifyContent="center">
                  <Grid item xs={12} sx={{ textAlign: "center" }} margin={1}>
                    <Typography variant="h4" component="h3">
                      {learningTrackName}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Typography variant="h6" component="h4">
                      {`Cohort: ${cohortNumber}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sx={{ textAlign: "center" }}>
                    <Typography variant="h6" component="h4">
                      {country.toUpperCase()}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  spacing={3}
                  padding={3}
                  justifyContent="space-evenly"
                  alignItems={"center"}
                >
                  <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
                    <CustomInput
                      name="firstName"
                      variant="outlined"
                      color="primary"
                      label="First Name"
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomInput
                      name="lastName"
                      variant="outlined"
                      color="primary"
                      label="Last Name"
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} sx={{ textAlign: "right" }}>
                    <CustomInput
                      name="email"
                      variant="outlined"
                      color="primary"
                      label="Email"
                      as={TextField}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <CustomInput
                      name="phone"
                      variant="outlined"
                      color="primary"
                      label="Phone"
                      as={TextField}
                    />
                  </Grid>
                  <Grid container item justifyContent={"center"}>
                    <CustomSelect
                      name="status"
                      id="status"
                      variant="outlined"
                      color="primary"
                      label="Training Status"
                    >
                      <option value="">Choose option</option>
                      <option value="Active">Active</option>
                      <option value="InActive">InActive</option>
                    </CustomSelect>
                  </Grid>
                </Grid>
                <Grid container item justifyContent={"space-evenly"}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    style={{ marginBottom: "10px"}}
                    onClick={() => navigate("/pages/supervisorDashboard")}
                  >
                    Back To Dashboard
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!dirty || !isValid}
                    style={{ marginBottom: "10px" }}
                  >
                    Add Trainee
                  </Button>
                </Grid>
              </Paper>
            </Container>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddTraineesToCohortForm;
