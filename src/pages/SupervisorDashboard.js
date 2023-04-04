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
import { useEffect } from "react";
import {
  getCohortIDForSelectedLtId,
  traineeDetailsByLtIdByCohortId,
} from "../helpers/utilities";
import { useState } from "react";

const SupervisorDashboard = () => {
  
  const [learningTracks, setLearningTracks] = useState([]);
  const [cohorts, setCohorts] = useState([]);
  const [traineeData, setTraineeData] = useState([]);
  const [ltId, setLtId] = useState(0);
  const [cohortDetails, setCohortDetails] = useState({});

  let cohortIdObj = {};

  useEffect(
    () =>
      setLearningTracks(
        courses.map((course) => {
          return { id: course.id, name: course.name };
        })
      ),
    []
  );

  console.log(
    "🚀 ~ file: SupervisorDashboard.js:58 ~ SupervisorDashboard ~ learningTracks:",
    learningTracks
  );

  // Function definitions

  const getCohortIdListHandler = (ltId) => {
    cohortIdObj = getCohortIDForSelectedLtId(ltId, courses);
    setCohorts(cohortIdObj.data);
    setLtId(cohortIdObj.ltId)
  };

  console.log(
    "🚀 ~ file: SupervisorDashboard.js:61 ~ getCohortIdListHandler ~ cohorts:",
    cohorts
  );

  const getCohortTraineeDetailsHandler = (ltId, cohortId) => {
    const cohortTraineeData = traineeDetailsByLtIdByCohortId(ltId, cohortId);
    setTraineeData(cohortTraineeData.reqTraineesData);
    setCohortDetails(cohortTraineeData.reqCohortDetail);
  };

  console.log("🚀 ~ file: SupervisorDashboard.js:63 ~ SupervisorDashboard ~ cohortDetails:", cohortDetails)

  return (
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
            cohortList={cohorts}
            ltId={ltId}
            getTraineeData={getCohortTraineeDetailsHandler}
          />
        </Grid>

        <Grid item className={classes.screen2}>
          <CohortProgressChart />
          <CohortLeaderBoardCard data={traineeData} />
        </Grid>

        <Grid item className={classes.screen3}>
          <CohortDetails data={cohortDetails}/>
          <TraineeProgressDetails />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SupervisorDashboard;
