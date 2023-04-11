import { Container, Grid } from "@mui/material";
import React from "react";
import CohortProgressChart from "../components/CohortProgressChart";
import CohortLeaderBoardCard from "../components/CohortLeaderBoardCard";
import CohortDetails from "../components/CohortDetails";
import TrainingDetails from "../components/TrainingDetails";
import LearningTrackCard from "../components/LearningTrackCard";
import CohortIdCard from "../components/CohortIdCard";
import classes from "./SupervisorDashboard.module.css";
import courses from "../data/courses";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getLtCohortInfo,
  getTraineeAndCohortDetailsList,
  resetSupervisorDashboardSlice,
} from "../store/supervisorDbSlice";

export const TraineeResultsContext = React.createContext();

const SupervisorDashboard = () => {
  const [learningTracks, setLearningTracks] = useState([]);

  const dispatch = useDispatch();

  useEffect(
    () =>
      setLearningTracks(
        courses.map((course) => {
          return { id: course.id, name: course.name };
        })
      ),
    []
  );

  // Function definitions
  const getCohortIdListHandler = (ltId) => {
    dispatch(resetSupervisorDashboardSlice());
    dispatch(getLtCohortInfo(ltId));
  };

  const getCohortTraineeDetailsHandler = (ltId, cohortId) => {
    dispatch(getTraineeAndCohortDetailsList(ltId, cohortId));
  };

  return (
    // <TraineeResultsContext.Provider value={moduleResults}>
    <Container sx={{ marginTop: 5 }}>
      <Grid
        container
        sx={{ gridTemplateColumns: "auto auto auto", gridColumnGap: "40px" }}
      >
        <Grid item className={classes.screen1}>
          <LearningTrackCard
            learningTrackList={learningTracks}
            getCohortIdList={getCohortIdListHandler}
          />
          <CohortIdCard
            // ltId={ltId}
            getTraineeData={getCohortTraineeDetailsHandler}
          />
        </Grid>

        <Grid item className={classes.screen2}>
          <CohortProgressChart />
          <CohortLeaderBoardCard />
        </Grid>

        <Grid item className={classes.screen3}>
          <CohortDetails />
          <TrainingDetails />
        </Grid>
      </Grid>
    </Container>
    // </TraineeResultsContext.Provider>
  );
};

export default SupervisorDashboard;
