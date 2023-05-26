import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Card, CardContent, CircularProgress, Grid, Paper, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-material-ui";
import { object, string, ValidationError } from "yup";

const CreateNewLearningTrack = ({
  setNewLtName
}) => {
   const [hideSubmitBtn, setHideSubmitBtn] = useState(false);

  const learningTrackList = useSelector(
    (state) => state.supervisorDashboard.listOfLearningTracks
  );

  const onSubmitLtHandler = (values) => {

    setNewLtName(values.learningTrackName);

    setHideSubmitBtn(true);
  };

  const checkIfLearningTrackIsUsed = (learningTrackName) => {
    const ltNameExist = learningTrackList.find(
      (lt) =>
        lt.name.toLowerCase().trim().split(" ").join("") ===
        learningTrackName.toLowerCase().trim().split(" ").join("")
    );

    if (ltNameExist) {
      // LT Name already in use
      return new ValidationError(
        "Learning Track Name already in use.",
        undefined,
        "learningTrackName"
      );
    }

    return true;
  };

  return (
    <>
      <Card>
        <CardContent>
          <Formik
            initialValues={{ learningTrackName: "" }}
            validationSchema={object({
              learningTrackName: string()
                .required("Required")
                .test((learningTrackName) =>
                  checkIfLearningTrackIsUsed(learningTrackName)
                ),
            })}
            onSubmit={onSubmitLtHandler}
          >
            {({ values, errors, isSubmitting, resetForm }) => (
              <Form autoComplete="off">
                <Grid
                  container
                  direction="column"
                  spacing={3}
                  sx={{ alignContent: "center" }}
                >
                  <Grid item>
                    <Typography
                      variant="h4"
                      component="h3"
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      Create New Learning Track
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Field
                      fullWidth
                      name="learningTrackName"
                      type="text"
                      component={TextField}
                      label="Learning Track Name"
                    />
                  </Grid>
                  <Grid item>
                    <Button
                      disabled={isSubmitting}
                      hidden={hideSubmitBtn}
                      type="submit"
                      variant="contained"
                      color="primary"
                      startIcon={
                        isSubmitting ? (
                          <CircularProgress size="0.6rem" />
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
    </>
  );
};

export default CreateNewLearningTrack;
