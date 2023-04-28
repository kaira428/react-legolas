import { Container, Grid } from "@mui/material";
import React from "react";
import CohortProgressChart from "../components/CohortProgressChart";
import CohortLeaderBoardCard from "../components/CohortLeaderBoardCard";
import CohortDetails from "../components/CohortDetails";
import TrainingDetails from "../components/TrainingDetails";
import LearningTrackCard from "../components/LearningTrackCard";
import CohortIdCard from "../components/CohortIdCard";
import classes from "./SupervisorDashboard.module.css";
// import courses from "../data/courses";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getLtCohortInfo,
  getTraineeAndCohortDetailsList,
  resetSupervisorDashboardSlice,
} from "../store/supervisorDbSlice";
import { getAllLearningTracksThunk } from "../store/features/getAllLearningTracksThunk";
import { getSelectedCohortTraineesThunk } from "../store/features/getSelectedCohortTraineesThunk";

const SupervisorDashboard = () => {
  // setup React hooks
  const dispatch = useDispatch();
  const allLearningTracksInfo = useSelector(
    (state) => state.supervisorDashboard.listOfLearningTracks
  );
  const isLoading = useSelector((state) => state.supervisorDashboard.isLoading);

  const selectedCohortTraineesData = useSelector(
    (state) =>
      state.supervisorDashboard.listOfTraineeForSelectedCohortNumber
  );

  const selectedCohortDetails = useSelector(
    (state) =>
      state.supervisorDashboard.cohortDetailsForSelectedCohortNumber
  );

  // Function definitions

  const getCohortTraineeDetailsHandler = async (ltId, cohortId) => {
    // console.log("cohortId: " + cohortId);
    dispatch(getSelectedCohortTraineesThunk({ cohortNum: cohortId }));

    const traineeList = [...selectedCohortTraineesData];
    // console.log(
    //   "🚀 ~ file: SupervisorDashboard.js:54 ~ getCohortTraineeDetailsHandler ~ traineeList:",
    //   traineeList
    // );
  };

  useEffect(() => {
    dispatch(getAllLearningTracksThunk());
  }, []);

  return (
    // <TraineeResultsContext.Provider value={moduleResults}>
    
   <Container sx={{ marginTop: 5 }}>
      <Grid
        container
        sx={{ gridTemplateColumns: "auto auto auto", gridColumnGap: "40px" }}
      >
        <Grid item className={classes.screen1}>
          <LearningTrackCard
            learningTrackList={allLearningTracksInfo}
            // getCohortIdList={getCohortIdListHandler}
          />
          <CohortIdCard
            // ltId={ltId}
            // getTraineeData={getCohortTraineeDetailsHandler}
          />
        </Grid>

        {/* <Grid item className={classes.screen2}>
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
        </Grid> */}
      </Grid>
    </Container>
    // </TraineeResultsContext.Provider>
    );
};

export default SupervisorDashboard;
