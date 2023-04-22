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
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getLtCohortInfo,
  getTraineeAndCohortDetailsList,
  resetSupervisorDashboardSlice,
} from "../store/supervisorDbSlice";
import { getAllLearningTracks } from "../mongodb_serverless/getAllLearningTracks";
import { Spinner } from "react-bootstrap";

export const TraineeResultsContext = React.createContext();

const SupervisorDashboard = () => {
  const [learningTracks, setLearningTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  // useEffect(
  //   () => {
  //     setLearningTracks(
  //       courses.map((course) => {
  //         return { id: course.id, name: course.name };
  //       })
  //     );
  //   },
  //   []
  // );

  useEffect(() => {
    setIsLoading(true);
    // function to get list of all learning tracks from MongoDB
    const getListOfLearningTracks = async () => {
      const courses = await getAllLearningTracks();
      // console.log("🚀 ~ file: SupervisorDashboard.js:43 ~ getListOfLearningTracks ~ data:", data)

      setLearningTracks(
        courses.map((course) => {
          return { id: course.id, name: course.name };
        })
      );

      setIsLoading(false);
    };
    getListOfLearningTracks();
  }, []);

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
          {/* {isLoading && <Spinner animation="border" variant="primary" />} */}
          {isLoading && (
            <div class="d-flex justify-content-center">
              <div
                class="spinner-border text-primary"
                style={{ width: "5rem", height: "5rem" }}
                role="status"
              >
              </div>
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
    // </TraineeResultsContext.Provider>
  );
};

export default SupervisorDashboard;
