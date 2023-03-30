import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { useDataContext } from "../helpers/customedHooks";
import classes from "./CohortIdCard.module.css";

const CohortIdCard = () => {
  const params = useParams();

  // console.log(Object.keys(params).length);

  const {
    learningTrackData
  } = useDataContext();

  // console.log(learningTrackData);
  // console.log(selectedCohortId);

  // On initial loading of page before cohortId is selected
  if (Object.keys(params).length < 1) {
    return (
      <Grid item sx={{ my: 8 }}>
        <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
          <Paper elevation={3} sx={{ height: 1, width: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{ textAlign: "center" }}
              >
                Cohort ID
              </Typography>
            </Box>
            <Box
              sx={{
                height: 120,
                width: 250,
                border: "1px solid lightgrey",
                overflow: "auto",
              }}
            />
          </Paper>
        </Box>
      </Grid>
    );
  }

  // Filter for required Learning Track based on LearningTrack ID
  const filteredLearningTracksArray = learningTrackData.filter(
    (learningTrack) => learningTrack.id === parseInt(params.learningTrackId)
  );

  // console.log(filteredLearningTracksArray);

  return (
    <Grid item sx={{ my: 8 }}>
      <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
        <Paper elevation={3} sx={{ height: 1, width: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ textAlign: "center" }}
            >
              Cohort ID
            </Typography>
          </Box>
          <Box
            sx={{
              height: 120,
              width: 250,
              border: "1px solid lightgrey",
              overflow: "auto",
            }}
          >
            {/* Sort Cohort ID in ascending order before mapping */}
            {filteredLearningTracksArray &&
              filteredLearningTracksArray[0].cohorts
                .sort((x, y) => {
                  let a = x.cohortNum,
                    b = y.cohortNum;
                  return a - b;
                })
                .map((cohort, index) => (
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{ textAlign: "left", marginLeft: "5px", marginTop: "5px" }}
                    key={cohort.cohortNum}
                  >
                    {<NavLink className={classes.linkWithOutLine} to={`/pages/supervisorDashboard/${filteredLearningTracksArray[0].id}/${cohort.cohortNum}`}> {`Cohort ${cohort.cohortNum}`} </NavLink>}
                  </Typography>
                ))}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CohortIdCard;
