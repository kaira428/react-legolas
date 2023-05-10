import React, { useEffect, useState } from "react";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllLearningTracksThunk } from "../store/features/getAllLearningTracksThunk";
import classes from "./CreateLearningTrackForm.module.css";
import CreateNewLearningTrack from "../components/CreateNewLearningTrack";
import CreateNewCohortNumber from "../components/CreateNewCohortNumber";
import CreateNewCohortDetails from "../components/CreateNewCohortDetails";
import { countries } from "../data/listOfCountries";
import { createNewLearningTrackThunk } from "../store/features/createNewLearningTrackThunk";
import { useNavigate } from "react-router-dom";

const CreateLearningTrackForm = () => {
  const [newLtName, setNewLtName] = useState();
  const [cohortNum, setCohortNum] = useState();
  const [disableSubmitBtn, setDisableSubmitBtn] = useState(false);
  const [coachName, setCoachName] = useState("");
  const [mentorName, setMentorName] = useState("");
  const [disableCohortNumberSubmitBtn, setDisableCohortNumberSubmitBtn] =
    useState(false);
  const [disableCohortDetailSubmitBtn, setDisableCohortDetailSubmitBtn] =
    useState(true);
  const [country, setCountry] = useState();

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate()

  const learningTrackList = useSelector(
    (state) => state.supervisorDashboard.listOfLearningTracks
  );
  const isLoading = useSelector((state) => state.supervisorDashboard.isLoading);

  if (learningTrackList.length === 0) {
    // load LT list from DB is list is empty
    dispatch(getAllLearningTracksThunk());
  }

  const onSubmitCohortDetailsHandler = (event) => {
    event.preventDefault();

    const newLearningTrack = {
      name: newLtName,
      cohorts: [{ cohortNum, startDate, endDate, mentorName, coachName, country }],
    };
    // console.log("🚀 ~ file: CreateLearningTrackForm.js:45 ~ onSubmitCohortDetailsHandler ~ newLearningTrack:", newLearningTrack)

    // dispatch createNewLt thunk
    dispatch(createNewLearningTrackThunk({newLearningTrack}));
    
    setDisableCohortDetailSubmitBtn(true);

    // navigate to AddTraineesToCohort page
    navigate("/pages/addTraineesToCohortForm", {state: {newLtName, newCohortNum: cohortNum, country }})
  };

  // activate submit button only when all the 5 fields are populated
  useEffect(() => {
    if (startDate && endDate && mentorName && coachName && country) {
      setDisableCohortDetailSubmitBtn(false);
    }
  }, [startDate, endDate, mentorName, coachName, country]);

  return (
    <Container
      maxWidth="sm"
      sx={{ marginTop: 5 }}
      className={classes.centerScreen}
    >
      <Grid container>
        <Grid item>
          <CreateNewLearningTrack
            setNewLtName={setNewLtName}
            setDisableSubmitBtn={setDisableSubmitBtn}
            disableSubmitBtn={disableSubmitBtn}
          />
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
          <CreateNewCohortNumber
            disableSubmitBtn={disableSubmitBtn}
            setDisableCohortNumberSubmitBtn={setDisableCohortNumberSubmitBtn}
            setCohortNum={setCohortNum}
            disableCohortNumberSubmitBtn={disableCohortNumberSubmitBtn}
          />

          <CreateNewCohortDetails
            disableCohortNumberSubmitBtn={disableCohortNumberSubmitBtn}
            onSubmitCohortDetailsHandler={onSubmitCohortDetailsHandler}
            setStartDate={setStartDate}
            startDate={startDate}
            setEndDate={setEndDate}
            endDate={endDate}
            setCoachName={setCoachName}
            coachName={coachName}
            setMentorName={setMentorName}
            mentorName={mentorName}
            setCountry={setCountry}
            country={country}
            countries={countries}
            disableCohortDetailSubmitBtn={disableCohortDetailSubmitBtn}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateLearningTrackForm;
