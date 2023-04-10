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
import { traineeDetailsByLtIdByCohortId } from "../helpers/utilities";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getLtCohortInfo,
  getTraineeAndCohortDetailsList,
} from "../store/supervisorDbSlice";

export const TraineeResultsContext = React.createContext();

const SupervisorDashboard = () => {
  const [learningTracks, setLearningTracks] = useState([]);
  const [cohorts, setCohorts] = useState([]);
  const [traineeData, setTraineeData] = useState([]);
  const [ltId, setLtId] = useState(0);
  const [cohortDetails, setCohortDetails] = useState({});
  const [reqTraineeResult, setReqTraineeResult] = useState({});
  const [moduleResults, setModuleResults] = useState({});

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
    dispatch(getLtCohortInfo(ltId));
  };

  const getCohortTraineeDetailsHandler = (ltId, cohortId) => {
    // const cohortTraineeData = traineeDetailsByLtIdByCohortId(ltId, cohortId);
    // setTraineeData(cohortTraineeData.reqTraineesData);
    // setCohortDetails(cohortTraineeData.reqCohortDetail);
    dispatch(getTraineeAndCohortDetailsList(ltId, cohortId));
  };

  // const getTraineeDetailedResultsHandler = (traineeId) => {
  //   const reqTraineeData = traineeData.filter(
  //     (trainee) => trainee.id === traineeId
  //   );

  //   // get trainee's name
  //   const fullName = `${reqTraineeData[0].firstName} ${reqTraineeData[0].lastName}`;

  //   // convert module results object to an array
  //   const result = {
  //     fullName,
  //     resultOfAllModules: Object.entries(reqTraineeData[0].modules),
  //   };

  //   setModuleResults(result);

  //   setReqTraineeResult(reqTraineeData[0]);
  // };

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
              ltId={ltId}
              getTraineeData={getCohortTraineeDetailsHandler}
            />
          </Grid>

          <Grid item className={classes.screen2}>
            <CohortProgressChart />
            <CohortLeaderBoardCard
              data={traineeData}
              cohortDetails={cohortDetails}
              // getTraineeResults={getTraineeDetailedResultsHandler}
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
