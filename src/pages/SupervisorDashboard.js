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
import { useReducer } from "react";
import { getCohortIDForSelectedLtId } from "../helpers/utilities";

export const ACTIONS = {
  GET_COHORT_ID: "get-cohort_id",
};

const reducer = (currentState, action) => {
  switch (action.type) {
    case ACTIONS.GET_COHORT_ID:
      return getCohortIDForSelectedLtId(
        action.payload.ltId,
        action.payload.ltData
      );
    default:
      return null;
  }
};

const SupervisorDashboard = () => {
  const cohortId = useParams();

  // setup reducer
  const [currentState, dispatch] = useReducer(reducer, []);

  console.log(
    "🚀 ~ file: SupervisorDashboard.js:35 ~ SupervisorDashboard ~ currentState:",
    currentState
  );

  const { setSelectedCohortId, setLearningTrackData } = useDataContext();

  // console.log("In SupervisorDashboard.js");

  useEffect(() => {
    if (Object.keys(cohortId).length >= 1) {
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
          <LearningTrackCard dispatch={dispatch} />
          <CohortIdCard data={currentState} />
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

export default SupervisorDashboard;
