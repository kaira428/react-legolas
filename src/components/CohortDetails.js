import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import { InfoTooltip } from "../helpers/ToolTip";
import { NavLink, useParams } from "react-router-dom";

const CohortDetails = ({ data }) => {
  const { learningTrackId, cohortId } = useParams();

  if (data === "empty") {
    return (
      <Grid item sx={{ my: 8 }}>
        <Box sx={{ width: 220, border: "1px solid lightgrey" }}>
          <Paper elevation={3} sx={{ height: 1, width: 1 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography
                variant="h6"
                component="h3"
                sx={{ textAlign: "center" }}
              >
                Cohort Details
              </Typography>
            </Box>

            <Box
              sx={{
                height: 120,
                width: 220,
                border: "1px solid lightgrey",
                overflow: "auto",
              }}
            >
              <Typography
                variant="body2"
                component="p"
                sx={{ textAlign: "left", marginLeft: "5px" }}
              >
                Total Trainees:
              </Typography>

              <Typography
                variant="body2"
                component="p"
                sx={{ textAlign: "left", marginLeft: "5px" }}
              >
                Mentor:
                <span style={{ marginLeft: "5px" }}>
                  <InfoTooltip />
                </span>
              </Typography>

              <Typography
                variant="body2"
                component="p"
                sx={{ textAlign: "left", marginLeft: "5px" }}
              >
                Coach:
                <span style={{ marginLeft: "5px" }}>
                  <InfoTooltip />
                </span>
              </Typography>

              <Typography
                variant="body2"
                component="p"
                sx={{ textAlign: "left", marginLeft: "5px" }}
              >
                Number of Modules:
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Grid>
    );
  }

  // console.log(data);

  // filter for the correct Learning Track
  const reqLearningTrack = data.filter((lt) => lt.id == learningTrackId);

  // console.log(reqLearningTrack)

  // filter for the correct cohort
  const reqCohort = reqLearningTrack[0].cohorts.filter(
    (cohort) => cohort.cohortNum == cohortId
  );

  return (
    <Grid item sx={{ my: 8 }}>
      <Box sx={{ width: 220, border: "1px solid lightgrey" }}>
        <Paper elevation={3} sx={{ height: 1, width: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ textAlign: "center" }}
            >
              Cohort Details
            </Typography>
          </Box>

          <Box
            sx={{
              height: 120,
              width: 220,
              border: "1px solid lightgrey",
              overflow: "auto",
            }}
          >
            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Total Trainees: 10
            </Typography>

            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Mentor: {reqCohort[0].mentorName}
              <span style={{ marginLeft: "5px" }}>
                <InfoTooltip />
              </span>
            </Typography>

            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Coach: {reqCohort[0].coachName}
              <span style={{ marginLeft: "5px" }}>
                <InfoTooltip />
              </span>
            </Typography>

            <Typography
              variant="body2"
              component="p"
              sx={{ textAlign: "left", marginLeft: "5px" }}
            >
              Number of Modules:
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default CohortDetails;
