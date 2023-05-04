import React, { useRef, useState } from "react";
import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllLearningTracksThunk } from "../store/features/getAllLearningTracksThunk";
import classes from "./CreateLearningTrackForm.module.css";
import { Alert, Button } from "react-bootstrap";

const CreateLearningTrackForm = () => {
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
  const [disableCohortNumberSubmitBtn, setDisableCohortNumberSubmitBtn] =
    useState(false);

  const inputLtRef = useRef("");
  const inputCohortNumberRef = useRef(0);
  const inputCohortStartDateRef = useRef();
  const inputCohortEndDateRef = useRef();
  const inputCoachNameRef = useRef();
  const inputMentorNameRef = useRef();

  const dispatch = useDispatch();

  const learningTrackList = useSelector(
    (state) => state.supervisorDashboard.listOfLearningTracks
  );
  const isLoading = useSelector((state) => state.supervisorDashboard.isLoading);

  if (learningTrackList.length === 0) {
    // load LT list from DB is list is empty
    dispatch(getAllLearningTracksThunk());
  }

  const onSubmitLtHandler = (event) => {
    event.preventDefault();

    const enteredLtName = inputLtRef.current.value;

    // check if LT exists
    const ltNameExist = learningTrackList.find(
      (lt) => lt.name === enteredLtName
    );

    if (ltNameExist) {
      // reset Lt input file to blank and return focus to input field
      inputLtRef.current.value = "";
      inputLtRef.current.focus();
      alert("Learning Track Name Exist. Please re-enter new LT Name");
    } else {
      console.log(enteredLtName);
      setDisableSubmitBtn(true);
    }
  };

  const onSubmitCohortHandler = (event) => {
    event.preventDefault();

    const cohortNumber = parseInt(inputCohortNumberRef.current.value);
    console.log(
      "🚀 ~ file: CreateLearningTrackForm.js:50 ~ onSubmitCohortHandler ~ cohortNumber:",
      cohortNumber
    );

    // check if cohort number has been used
    const ltWhereCohortNumberExist = learningTrackList.find((lt) =>
      lt.cohorts.find((cohort) => cohort.cohortNum === cohortNumber)
    );

    if (typeof ltWhereCohortNumberExist === "undefined") {
      // Entered cohort number not found === new number
      setDisableCohortNumberSubmitBtn(true);
    } else {
      inputCohortNumberRef.current.value = "";
      inputCohortNumberRef.current.focus();
      alert(
        `Cohort Number ${cohortNumber} already exists. Please enter a new Cohort number`
      );
    }
  };

  const onSubmitCohortDetailsHandler = (event) => {
    event.preventDefault();

    console.log("onSubmitCohortDetailsHandler");
  };

  return (
    <Container
      maxWidth="sm"
      sx={{ marginTop: 5 }}
      className={classes.centerScreen}
    >
      <Grid container>
        <Grid item>
          <Paper elevation={3} sx={{ width: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "lightblue",
              }}
            >
              <Typography
                variant="h4"
                component="h3"
                sx={{ textAlign: "center", padding: "25px 40px 25px 25px" }}
              >
                Create New Learning Track
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <form onSubmit={onSubmitLtHandler}>
                <div className="mb-3">
                  {/* <label htmlFor="LtName" className="form-label" /> */}
                  <input
                    type="text"
                    ref={inputLtRef}
                    className="form-control"
                    id="LtName"
                    style={{ marginTop: "10px" }}
                    disabled={disableSubmitBtn}
                    autoFocus={!disableSubmitBtn}
                  />
                </div>
                <div style={{ textAlign: "center", marginBottom: "25px" }}>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={disableSubmitBtn}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </Box>
          </Paper>
          {isLoading && (
            <div
              className="d-flex justify-content-center"
              style={{ marginTop: "10px" }}
            >
              <div
                className="spinner-border text-primary"
                style={{ width: "5rem", height: "5rem" }}
                role="status"
              ></div>
            </div>
          )}
          {disableSubmitBtn && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 5,
              }}
            >
              <form onSubmit={onSubmitCohortHandler}>
                <div className="mb-3" style={{ display: "inline-block" }}>
                  <label htmlFor="cohort" className="form-label">
                    <Typography
                      variant="h6"
                      component="p"
                      fontWeight="medium"
                      sx={{
                        textAlign: "right",
                      }}
                    >
                      Cohort Number:
                    </Typography>
                  </label>
                  <input
                    type="number"
                    ref={inputCohortNumberRef}
                    className="form-control"
                    id="cohort"
                    placeholder="Enter Cohort Number"
                    min={1}
                    disabled={disableCohortNumberSubmitBtn}
                    autoFocus={!disableCohortNumberSubmitBtn}
                  />
                </div>
                <Button
                  type="submit"
                  variant="warning"
                  size="sm"
                  style={{ marginLeft: 10 }}
                  disabled={disableCohortNumberSubmitBtn}
                >
                  Submit
                </Button>
              </form>
            </Box>
          )}

          {disableCohortNumberSubmitBtn && (
            <Paper elevation={3} sx={{ width: 1 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: 'center',
                mt: 5,
              }}
            >
              <form onSubmit={onSubmitCohortDetailsHandler}>
                <div className="mb-3">
                  <label htmlFor="cohort" className="form-label">
                    <Typography
                      variant="h6"
                      component="p"
                      fontWeight="medium"
                      sx={{
                        textAlign: "right",
                      }}
                    >
                      Cohort Details:
                    </Typography>
                  </label>
                </div>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'center',
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                >
                  <div style={{margin: "0px 15px"}}>
                  <label htmlFor="cohortStartDate" >
                    Cohort Start Date:
                  </label>
                  <input
                    type="date"
                    ref={inputCohortStartDateRef}
                    className="form-control"
                    id="cohortStartDate"
                  />
                  </div>
                  <div style={{margin: "0px 15px"}}>
                  <label htmlFor="cohortEndDate" >
                    Cohort End Date:
                  </label>
                  <input
                    type="date"
                    ref={inputCohortEndDateRef}
                    className="form-control"
                    id="cohortEndDate"
                  />
                  </div>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: 'center',
                    p: 1,
                    m: 1,
                    bgcolor: "background.paper",
                    borderRadius: 1,
                  }}
                >
                  <div style={{margin: "0px 15px"}}>
                  <label htmlFor="coachName" >
                    Coach Name:
                  </label>
                  <input
                    type="text"
                    ref={inputCoachNameRef}
                    className="form-control"
                    id="coachName"
                  />
                  </div>
                  <div style={{margin: "0px 15px"}}>
                  <label htmlFor="mentorName" >
                    Mentor Name:
                  </label>
                  <input
                    type="text"
                    ref={inputMentorNameRef}
                    className="form-control"
                    id="mentorName"
                  />
                  </div>
                </Box>

                <div>
                  <Button
                    type="submit"
                    variant="warning"
                    size="sm"
                    style={{ marginLeft: 10 }}
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </Box>
            
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateLearningTrackForm;
