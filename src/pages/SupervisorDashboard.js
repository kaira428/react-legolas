import { Container, Grid } from "@mui/material";
import React from "react";
import CohortProgressChart from "../components/CohortProgressChart";
import CohortLeaderBoardCard from "../components/CohortLeaderBoardCard";
import CohortDetails from "../components/CohortDetails";
import TraineeProgressDetails from "../components/TraineeProgressDetails";
import LearningTrackCard from "../components/LearningTrackCard";
import CohortIdCard from "../components/CohortIdCard";
import classes from "./SupervisorDashboard.module.css";
import courses from "../data/courses";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDataContext } from "../helpers/customedHooks";

const SupervisorDasboard = () => {
  const ltId = useParams();
  const cohortId = useParams();

  const {
    setSelectedCohortId,
    setLearningTrackData,
  } = useDataContext();

  console.log(Object.keys(ltId).length);
  console.log(Object.keys(cohortId));

  console.log(ltId);

  useEffect(() => {
    if (Object.keys(cohortId).length >= 1){
      setSelectedCohortId(cohortId);
    }
  }, []);

  setLearningTrackData(courses);

  return (
    <Container sx={{ marginTop: 5 }}>
      <Grid
        container
        sx={{ gridTemplateColumns: "auto auto auto", gridColumnGap: "40px" }}
      >
        <Grid item className={classes.screen1}>
          <LearningTrackCard />
          <CohortIdCard />

          {/* {Object.keys(ltId).length === 0 && <CohortIdCard learningTracks="empty" />} 
          {Object.keys(ltId).length !== 0 && <CohortIdCard learningTracks={courses}/>} */}
        </Grid>

        <Grid item className={classes.screen2}>
          <CohortProgressChart />
          <CohortLeaderBoardCard />
        </Grid>

        <Grid item className={classes.screen3}>
          {Object.keys(cohortId).length <= 1 && <CohortDetails data="empty" />}{" "}
          {/* if ltId is empty */}
          {Object.keys(cohortId).length > 1 && <CohortDetails data={courses} />}
          <TraineeProgressDetails />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SupervisorDasboard;
