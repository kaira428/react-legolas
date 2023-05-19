import {
  Button,
  Card,
  CardContent,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import { Select, TextField } from "formik-material-ui";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countries } from "../data/listOfCountries";
import { object, string, number, date, ValidationError } from "yup";
import { getAllCoachesAndMentorsThunk } from "../store/features/getAllCoachesAndMentorsThunk";

const CreateNewCohort = () => {
  const learningTrackName = useSelector(
    (state) => state.supervisorDashboard.selectedLtName
  );

  const learningTrackList = useSelector(
    (state) => state.supervisorDashboard.listOfLearningTracks
  );

  const dispatch = useDispatch();

  // get list of coaches and mentors
  useEffect(() => {
    dispatch(getAllCoachesAndMentorsThunk());
  }, []);

  const coachList = useSelector(
    (state) => state.supervisorDashboard.listOfCoaches
  );

  const listOfCoaches = ["Please select Coach", ...coachList]
  
  const mentorList = useSelector(
    (state) => state.supervisorDashboard.listOfMentors
  );
  
  const listOfMentors = ["Please select Mentor", ...mentorList]

  const listOfCountries = ["Please select Country", ...countries]

  const initialValues = () => ({
    cohortNumber: null,
    coachName: "",
    mentorName: "",
    country: "",
    startDate: undefined,
    endDate: undefined,
    numOfModules: 0,
  })

  const checkIfCohortNumberIsUsed = (cohortNumber) => {
    const ltWhereCohortNumberExist = learningTrackList.find((lt) =>
      lt.cohorts.find((cohort) => cohort.cohortNum === cohortNumber)
    );

    console.log(cohortNumber);
    console.log(ltWhereCohortNumberExist);

    if (typeof ltWhereCohortNumberExist !== "undefined") {
      return new ValidationError(
        "Cohort Number already in use.",
        undefined,
        "cohortNumber"
      );
    }

    return true;
  };

  const onSubmitHandler = (values, formikHelpers) => {
    const newCohort = {
      cohortNum: values.cohortNumber,
      startDate: values.startDate,
      endDate: values.endDate,
      mentorName: values.mentorName,
      coachName: values.coachName,
      country: values.country,
    };

    console.log(newCohort)
    formikHelpers.resetForm({ values: initialValues() });

    return;
  };

  return (
    <Card>
      <CardContent>
        <Paper elevation={3}>
          <Formik
            initialValues={initialValues()}
            validationSchema={object({
              cohortNumber: number()
                .required("Required")
                .positive("Cohort Number must be positive.")
                .min(1)
                .test((cohortNumber) =>
                  checkIfCohortNumberIsUsed(cohortNumber)
                ),
              coachName: string().required("Required"),
              mentorName: string().required("Required"),
              startDate: date().required("Required"),
              endDate: date().required("Required"),
              numOfModules: number()
                .required("Required")
                .positive("Number of modules must be positive integer.")
                .min(1, "Number of modules must be 1 or more"),
            })}
            onSubmit={onSubmitHandler}
          >
            {({ values, errors, isSubmitting, resetForm }) => (
              <Form autoComplete="off">
                <Grid
                  container
                  direction="column"
                  spacing={3}
                  sx={{ alignContent: "center" }}
                >
                  <Grid>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        textAlign: "center",
                        padding: "25px 40px 12px 25px",
                      }}
                    >
                      Create New Cohort For
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h4"
                      sx={{ textAlign: "center", color: "blue" }}
                    >
                      {`${learningTrackName}`}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Field
                      fullWidth
                      name="cohortNumber"
                      type="number"
                      component={TextField}
                      label="Cohort Number"
                      // onBlur={()=>onBlurHandler(values)}
                    />
                  </Grid>
                  <Grid item>
                    <label htmlFor="coachName">Coach : </label>
                    <Field
                      name="coachName"
                      as="select"
                      label="Coach"
                      style={{ width: "200px", height: "40px" }}
                    >
                      {listOfCoaches.map((coach, index) => (
                        <option key={index} value={coach}>
                          {coach}
                        </option>
                      ))}
                    </Field>
                    {/* <Field
                      fullWidth
                      name="coachName"
                      component={TextField}
                      label="Coach Name"
                    /> */}
                  </Grid>
                  <Grid item>
                    <label htmlFor="mentorName">Mentor :</label>
                    <Field
                      id="mentorName"
                      name="mentorName"
                      as="select"
                      label="Mentor"
                      style={{ width: "200px", height: "40px" }}
                    >
                      {listOfMentors.map((mentor, index) => (
                        <option key={index} value={mentor}>
                          {mentor}
                        </option>
                      ))}
                    </Field>
                  </Grid>
                  <Grid item>
                    <label htmlFor="country">Country :</label>
                    <Field
                      id="country"
                      name="country"
                      as="select"
                      label="Country"
                      style={{ width: "200px", height: "40px" }}
                    >
                      {listOfCountries.map((country, index) => (
                        <option key={index} value={country}>
                          {country}
                        </option>
                      ))}
                    </Field>
                  </Grid>
                  <Grid item>
                    <label htmlFor="startDate">Start Date</label>
                    <Field
                      fullWidth
                      name="startDate"
                      component={TextField}
                      type="date"
                    />
                  </Grid>
                  <Grid item>
                    <label htmlFor="endDate">End Date</label>
                    <Field
                      fullWidth
                      name="endDate"
                      component={TextField}
                      type="date"
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
        </Paper>
      </CardContent>
    </Card>
  );
};

export default CreateNewCohort;
