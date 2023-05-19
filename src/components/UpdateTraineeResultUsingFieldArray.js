import {
    Button,
    Card,
    CardContent,
    CircularProgress,
    Grid,
  } from "@mui/material";
  import { Field, FieldArray, Form, Formik } from "formik";
  import { TextField } from "formik-material-ui";
  import React from "react";
  import { object, string, number, date } from "yup";
  
  const moduleArray = [
    {module: "Week1", score: null},
    {module: "Week2", score: null},
    {module: "Week3", score: null},
    {module: "Week4", score: null},
    {module: "Week5", score: null},
  ]

const UpdateTraineeResultUsingFieldArray = () => {
  return (
    <Card>
      <CardContent>
        <Formik
          initialValues={{
            cohortNumber: undefined,
            coachName: "",
            mentorName: "",
            startDate: undefined,
            endDate: undefined,
            numOfModules: 0,
            modules: moduleArray
          }}
          validationSchema={object({
            cohortNumber: number()
              .required("Required")
              .positive("Cohort Number must be positive."),
            coachName: string().required("Required"),
            mentorName: string().required("Required"),
            startDate: date().required("Required"),
            endDate: date().required("Required"),
            numOfModules: number()
              .required("Required")
              .positive("Number of modules must be positive integer."),
          })}
          onSubmit={async (values) => {
            console.log("My values", values);
            return new Promise((res) => setTimeout(res, 3000));
          }}
        >
          {({ values, errors, isSubmitting }) => (
            <Form autoComplete="off">
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <Field
                    fullWidth
                    name="cohortNumber"
                    type="number"
                    component={TextField}
                    label="Cohort Number"
                  />
                </Grid>
                <Grid item>
                  <Field
                    fullWidth
                    name="coachName"
                    component={TextField}
                    label="Coach Name"
                  />
                </Grid>
                <Grid item>
                  <Field
                    fullWidth
                    name="mentorName"
                    component={TextField}
                    label="Mentor Name"
                  />
                </Grid>
                <Grid item>
                  <Field
                    fullWidth
                    name="startDate"
                    component={TextField}
                    type="date"
                    label="Start Date"
                  />
                </Grid>
                <Grid item>
                  <Field
                    fullWidth
                    name="endDate"
                    component={TextField}
                    type="date"
                    label="End Date"
                  />
                </Grid>
                <Grid item>
                  <Field
                    fullWidth
                    name="numOfModules"
                    type="number"
                    component={TextField}
                    label="Number of Modules"
                  />
                </Grid>
                  <FieldArray name="modules">
                    {({push}) => (
                      <>
                      <label>Module-Score</label>
                      {values.modules.map((_, index) => (
                        <Grid container>
                          <Grid item>
                            <Field name={`modules[${index}].module`} />
                            <Field name={`modules[${index}].score`} />
                          </Grid>

                        </Grid>
                      ))}
                      </>
                    )}
                  </FieldArray>
                  
                <Grid item>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="primary"
                    startIcon={
                      isSubmitting ? (
                        <CircularProgress size="0.8rem" />
                      ) : undefined
                    }
                  >
                    {isSubmitting ? "Submitting" : "Submit"}
                  </Button>
                </Grid>
              </Grid>

              <pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
            </Form>
          )}
        </Formik>
      </CardContent>
    </Card>
  )
}

export default UpdateTraineeResultUsingFieldArray