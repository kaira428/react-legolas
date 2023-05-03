import { Container, Grid } from "@mui/material";
import React from "react";
import CohortProgressChart from "../components/CohortProgressChart";
import CohortLeaderBoardCard from "../components/CohortLeaderBoardCard";
import CohortDetails from "../components/CohortDetails";
import TrainingDetails from "../components/TrainingDetails";
import LearningTrackCard from "../components/LearningTrackCard";
import CohortIdCard from "../components/CohortIdCard";
import classes from "./SupervisorDashboard.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllLearningTracksThunk } from "../store/features/getAllLearningTracksThunk";

const SupervisorDashboard = () => {
  // setup React hooks
  const dispatch = useDispatch();
  const allLearningTracksInfo = useSelector(
    (state) => state.supervisorDashboard.listOfLearningTracks
  );
  const isLoading = useSelector((state) => state.supervisorDashboard.isLoading);

  useEffect(() => {
    dispatch(getAllLearningTracksThunk());
  }, []);

  return (
    
   <Container sx={{ marginTop: 5 }}>
      <Grid
        container
        sx={{ gridTemplateColumns: "auto auto auto", gridColumnGap: "30px" }}
      >
        <Grid item className={classes.screen1}>
          <LearningTrackCard
            learningTrackList={allLearningTracksInfo}
          />
          <CohortIdCard/>
        </Grid>

         <Grid item className={classes.screen2}>
          <CohortProgressChart />
          {isLoading && (
            <div class="d-flex justify-content-center">
              <div
                class="spinner-border text-primary"
                style={{ width: "5rem", height: "5rem" }}
                role="status"
              ></div>
            </div>
          )}
          <CohortLeaderBoardCard />
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
