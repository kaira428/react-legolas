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
import TraineeDetailsModal from "../components/TraineeDetailsModal";

export const TraineeResultsContext = React.createContext();

const SupervisorDashboard = () => {
  const [learningTracks, setLearningTracks] = useState([]);
  const [cohorts, setCohorts] = useState([]);
  const [traineeData, setTraineeData] = useState([]);
  const [ltId, setLtId] = useState(0);
  const [cohortDetails, setCohortDetails] = useState({});
  const [reqTraineeResult, setReqTraineeResult] = useState({});
  const [moduleResults, setModuleResults] = useState({});
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
    setLtId(cohortIdObj.ltId);
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

  const getTraineeDetailedResultsHandler = (traineeId) => {
    const reqTraineeData = traineeData.filter(
      (trainee) => trainee.id === traineeId
    );
    console.log(
      "🚀 ~ file: SupervisorDashboard.js:64 ~ getTraineeDetailedResultsHandler ~ reqTraineeData:",
      Object.entries(reqTraineeData[0].modules)
    );

    // get trainee's name
    const fullName = `${reqTraineeData[0].firstName} ${reqTraineeData[0].lastName}`;

    // convert module results object to an array
    const result = {fullName, resultOfAllModules: Object.entries(reqTraineeData[0].modules)};
    console.log("🚀 ~ file: SupervisorDashboard.js:75 ~ getTraineeDetailedResultsHandler ~ result:", result);

    setModuleResults(result)

    setReqTraineeResult(reqTraineeData[0]);
  };

  console.log(
    "🚀 ~ file: SupervisorDashboard.js:69 ~ getTraineeDetailedResultsHandler ~ reqTraineeResult:",
    reqTraineeResult
  );

  console.log(
    "🚀 ~ file: SupervisorDashboard.js:74 ~ SupervisorDashboard ~ moduleResults:",
    moduleResults
  );

  // console.log("🚀 ~ file: SupervisorDashboard.js:63 ~ SupervisorDashboard ~ cohortDetails:", cohortDetails)

  return (
    <TraineeResultsContext.Provider value={moduleResults}>
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
            <CohortLeaderBoardCard
              data={traineeData}
              cohortDetails={cohortDetails}
              getTraineeResults={getTraineeDetailedResultsHandler}
            />
          </Grid>

          <Grid item className={classes.screen3}>
            <CohortDetails data={cohortDetails} />
            <TraineeProgressDetails />
          </Grid>
        </Grid>
      </Container>
    </TraineeResultsContext.Provider>
  );
};

export default SupervisorDashboard;
