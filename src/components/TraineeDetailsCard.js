import { Box, Button, Container, TextField, Grid } from "@mui/material";
import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";

import classes from "./TraineeDetailsCard.module.css";
import { traineeDetailsSchema } from "../schemas/traineeDetailsSchema";
import CustomInput from "./CustomInput";
import CustomSelect from "./CustomSelect";

//NOT IN USE

const TraineeDetailsCard = () => {
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

  return (
    
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmitHandler}
        validationSchema={traineeDetailsSchema}
      >
        {({ errors, isValid, touched, dirty }) => (
          <Form>            
              {/* <Grid container item xs={6} spacing={3}> */}
                <CustomInput
                  name="firstName"
                  variant="outlined"
                  color="primary"
                  label="First Name"
                  as={TextField}
                />

                <Box height={12} />

                <CustomInput
                  name="lastName"
                  variant="outlined"
                  color="primary"
                  label="Last Name"
                  as={TextField}
                />
              
              <Grid Container item xs={6}>
                <Box height={12} />
                <CustomInput
                  name="email"
                  variant="outlined"
                  color="primary"
                  label="Email"
                  as={TextField}
                />

                <Box height={12} />

                <CustomInput
                  name="phone"
                  variant="outlined"
                  color="primary"
                  label="Phone"
                  as={TextField}
                />
              </Grid>

              <Box height={12} />
              {/* <Grid Container item xs={6}> */}
                <CustomSelect
                  name="trainingStatus"
                  variant="outlined"
                  color="primary"
                  label="Training Status"
                  placeholder="Select Training Status"
                >
                  <option value="Active">Active</option>
                  <option value="InActive">InActive</option>
                </CustomSelect>
              {/* </Grid> */}
              <Box height={16} />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={!dirty || !isValid}
              >
                Add Trainee
              </Button>
            
          </Form>
        )}
      </Formik>
    
  );
};

export default TraineeDetailsCard;
