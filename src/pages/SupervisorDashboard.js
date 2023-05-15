import { Button, Container, Grid } from "@mui/material";
import React from "react";
import CohortProgressChart from "../components/CohortProgressChart";
import CohortLeaderBoardCard from "../components/CohortLeaderBoardCard";
import CohortDetails from "../components/CohortDetails";
import TrainingDetails from "../components/TrainingDetails";
import LearningTrackCard from "../components/LearningTrackCard";
import CohortIdCard from "../components/CohortIdCard";
import classes from "./SupervisorDashboard.module.css";
import { useDispatch, useSelector } from "react-redux";

import { getAllLearningTracksThunk } from "../store/features/getAllLearningTracksThunk";
import { useNavigate } from "react-router-dom";

const SupervisorDashboard = () => {
  // setup React hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allLearningTracksInfo = useSelector(
    (state) => state.supervisorDashboard.listOfLearningTracks
  );
  const isLoading = useSelector((state) => state.supervisorDashboard.isLoading);

  if (allLearningTracksInfo.length === 0) {
    // load LT list from DB is list is empty
    dispatch(getAllLearningTracksThunk());
  }

  const listOfTraineesForSelectedCohortId = useSelector(
    (state) => state.supervisorDashboard.listOfTraineesForSelectedCohortNumber
  );

  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid
        container
        sx={{ gridTemplateColumns: "auto auto auto", gridColumnGap: "30px" }}
      >
        <Grid item className={classes.screen1}>
          <LearningTrackCard learningTrackList={allLearningTracksInfo} />
          <CohortIdCard />
        </Grid>

        <Grid item className={classes.screen2}>
          <CohortProgressChart />
          {isLoading && (
            <div className="d-flex justify-content-center">
              <div
                className="spinner-border text-primary"
                style={{ width: "5rem", height: "5rem" }}
                role="status"
              ></div>
            </div>
          )}
          <CohortLeaderBoardCard />
          {listOfTraineesForSelectedCohortId.length > 0 && (
            <Grid container item justifyContent={"center"} marginTop={5}>
              <Button
                variant="contained"
                size="large"
                hidden={false}
                onClick={() => navigate("/pages/updateTraineeResultsForm")}
              >
                Update Trainee Results
              </Button>
            </Grid>
          )}
        </Grid>

        <Grid item className={classes.screen3}>
          <CohortDetails />
          <TrainingDetails />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SupervisorDashboard;
