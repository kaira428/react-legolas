import React, { useState } from "react";
import { Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllLearningTracksThunk } from "../store/features/getAllLearningTracksThunk";
import classes from "./CreateLearningTrackForm.module.css";
import CreateNewLearningTrack from "../components/CreateNewLearningTrack";
import { createNewLearningTrackThunk } from "../store/features/createNewLearningTrackThunk";
import { useNavigate } from "react-router-dom";
import CreateNewCohort from "../components/CreateNewCohort";


const CreateLearningTrackForm = () => {
  const [newLtName, setNewLtName] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const learningTrackList = useSelector(
    (state) => state.supervisorDashboard.listOfLearningTracks
  );
  // console.log("🚀 ~ file: CreateLearningTrackForm.js:38 ~ CreateLearningTrackForm ~ learningTrackList:", learningTrackList)
  
  const isLoading = useSelector((state) => state.supervisorDashboard.isLoading);

  if (learningTrackList.length === 0) {
    // load LT list from DB is list is empty
    dispatch(getAllLearningTracksThunk());
  }

  const onSubmitCohortDetailsHandler = (cohortData) => {
    // console.log("🚀 ~ file: CreateLearningTrackForm.js:46 ~ onSubmitCohortDetailsHandler ~ cohortData:", cohortData)
    
    const newLearningTrack = {
      name: newLtName,
      cohorts: [
        {...cohortData.newCohort}
      ],
    };
    // console.log("🚀 ~ file: CreateLearningTrackForm.js:54 ~ onSubmitCohortDetailsHandler ~ newLearningTrack:", newLearningTrack)

    // dispatch createNewLt thunk
    dispatch(createNewLearningTrackThunk({ newLearningTrack }));

    // navigate to AddTraineesToCohort page
    navigate("/pages/addTraineesToCohortForm", {
      // state: { newLtName, newCohortNum: cohortNum, country, numOfModules },
      state: { newLearningTrack, numOfModules: cohortData.numOfModules },
    });
  };

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
          />
          {isLoading && (
            <div
              className="d-flex justify-content-center"
              style={{ marginTop: "10px" }}
            >
              <div
                className="spinner-border text-primary"
                style={{ width: "2rem", height: "2rem" }}
                role="status"
              />
            </div>
          )}

          {newLtName && <CreateNewCohort onSubmitCohortHandler={onSubmitCohortDetailsHandler} existingLt={false}/>}

        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateLearningTrackForm;
