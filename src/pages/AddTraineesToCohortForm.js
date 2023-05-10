import { Box, Button, Container, Grid, Paper, TextField } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import classes from "./CreateLearningTrackForm.module.css";
import TrainingModuleCard from "../components/TrainingModuleCard";
import TraineeDetailsCard from "../components/TraineeDetailsCard";
import { lightBlue } from "@mui/material/colors";
import TestCustomInput from "../components/TestCustomInput";
import CustomInput from "../components/CustomInput";
import { Formik } from "formik";
import { traineeDetailsSchema } from "../schemas/traineeDetailsSchema";
import CustomSelect from "../components/CustomSelect";

const AddTraineesToCohortForm = () => {
  const data = useSelector((state) => state.supervisorDashboard);
  console.log(
    "🚀 ~ file: AddTraineesToCohortForm.js:7 ~ AddTraineesToCohortForm ~ data:",
    data
  );

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    trainingStatus: "",
  };

  const onSubmitHandler = (values, formikHelpers) => {
    console.log(values);
    formikHelpers.resetForm();
  };

  const location = useLocation();

  const learningTrackName = location.state.newLtName;
  // console.log("🚀 ~ file: AddTraineesToCohortForm.js:19 ~ AddTraineesToCohortForm ~ learningTrackName:", learningTrackName)

  const cohortNumber = location.state.newCohortNum;
  // console.log("🚀 ~ file: AddTraineesToCohortForm.js:22 ~ AddTraineesToCohortForm ~ cohortNumber:", cohortNumber)

  const country = location.state.country;
  // console.log("🚀 ~ file: AddTraineesToCohortForm.js:25 ~ AddTraineesToCohortForm ~ country:", country)

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmitHandler}
      validationSchema={traineeDetailsSchema}
    >
      {({ errors, isValid, touched, dirty }) => (
        <Container
          style={{
            backgroundColor: "lightblue",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Grid
            container
            spacing={3}
            padding={3}
            justifyContent="space-evenly"
          >
            <Grid item xs={12} sm={6}>
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
            <Grid item xs={12} sm={6}>
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
            <Grid container item justifyContent={"flex-start"}>
              {/* <Grid item xs={12} sm={6}> */}
              <CustomSelect
                name="trainingStatus"
                id="trainingStatus"
                variant="outlined"
                color="primary"
                label="Training Status"
              >
                <option value="Active">Active</option>
                <option value="InActive">InActive</option>
              </CustomSelect>
            </Grid>
          </Grid>
          <Grid container item justifyContent={"center"}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!dirty || !isValid}
            >
              Add Trainee
            </Button>
          </Grid>
        </Container>
      )}
    </Formik>
  );
};

export default AddTraineesToCohortForm;
