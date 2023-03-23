import { Container, Grid } from "@mui/material";
import React from "react";
import CohortProgressChart from "../components/CohortProgressChart";
import CohortLeaderBoardCard from "../components/CohortLeaderBoardCard";
import CohortDetails from "../components/CohortDetails";
import TraineeProgressDetails from "../components/TraineeProgressDetails";
import LearningTrackCard from "../components/LearningTrackCard";
import CohortIdCard from "../components/CohortIdCard";

const SupervisorDasboardPage = () => {
  return (
    <Container sx={{marginTop: 5}}>
    <Grid
      container
      sx={{ gridTemplateColumns: "auto auto auto", gridColumnGap: "40px"}}
    >
      <Grid item sx={{ gridColumn: "1 / span 1"}}>
        <LearningTrackCard />
        <CohortIdCard />
      </Grid>

      <Grid item sx={{ gridColumn: "2 / span 2" }}>
        <CohortProgressChart />
        <CohortLeaderBoardCard />
      </Grid>

      <Grid item sx={{ gridColumn: "3 / span 1" }}>
        <CohortDetails />
        <TraineeProgressDetails />
      </Grid>
    </Grid>
  </Container>
  )
}

export default SupervisorDasboardPage