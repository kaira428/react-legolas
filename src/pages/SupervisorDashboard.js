import { Container, Grid } from "@mui/material";
import React from "react";
import CohortProgressChart from "../components/CohortProgressChart";
import CohortLeaderBoardCard from "../components/CohortLeaderBoardCard";
import CohortDetails from "../components/CohortDetails";
import TraineeProgressDetails from "../components/TraineeProgressDetails";
import LearningTrackCard from "../components/LearningTrackCard";
import CohortIdCard from "../components/CohortIdCard";
import classes from "./SupervisorDashboard.module.css";

const SupervisorDasboard = () => {

  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid
        container
        sx={{ gridTemplateColumns: "auto auto auto", gridColumnGap: "40px" }}
      >
        <Grid item className={classes.screen1}>
          <LearningTrackCard />
          <CohortIdCard />
        </Grid>

        <Grid item className={classes.screen2}>
          <CohortProgressChart />
          <CohortLeaderBoardCard />
        </Grid>

        <Grid item className={classes.screen3}>          
          <CohortDetails />
          <TraineeProgressDetails />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SupervisorDasboard;
