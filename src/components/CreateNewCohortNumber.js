import { Box, Typography } from "@mui/material";
import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getAllCoachesAndMentorsThunk } from "../store/features/getAllCoachesAndMentorsThunk";

const CreateNewCohortNumber = ({
  disableSubmitBtn,
  setDisableCohortNumberSubmitBtn,
  setCohortNum,
  disableCohortNumberSubmitBtn
}) => {
  const learningTrackList = useSelector(
    (state) => state.supervisorDashboard.listOfLearningTracks
  );

  const inputCohortNumberRef = useRef(0);
  const dispatch = useDispatch();

  const onSubmitCohortHandler = (event) => {
    event.preventDefault();

    const cohortNumber = parseInt(inputCohortNumberRef.current.value);

    // check if cohort number has been used
    const ltWhereCohortNumberExist = learningTrackList.find((lt) =>
      lt.cohorts.find((cohort) => cohort.cohortNum === cohortNumber)
    );

    if (typeof ltWhereCohortNumberExist === "undefined") {
      // Entered cohort number is "undefined" means entered number is new number
      setDisableCohortNumberSubmitBtn(true);

      setCohortNum(cohortNumber);

      // get list of coaches and mentor
      dispatch(getAllCoachesAndMentorsThunk());

    } else {
      inputCohortNumberRef.current.value = "";
      inputCohortNumberRef.current.focus();
      alert(
        `Cohort Number ${cohortNumber} already exists. Please enter a new Cohort number`
      );
    }
  };

  return (
    <>
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
              hidden={disableCohortNumberSubmitBtn}
            >
              Submit
            </Button>
          </form>
        </Box>
      )}
    </>
  );
};

export default CreateNewCohortNumber;
