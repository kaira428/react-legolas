import { Grid, Paper, Box, Typography, Link, Button } from "@mui/material";
import React from "react";
import { useDataContext } from "../helpers/customedHooks";
import { ACTIONS } from "../pages/SupervisorDashboard";

const LearningTrackCard = (props) => {
  const { learningTrackData } = useDataContext();

  let learningTracks = learningTrackData;

  return (
    <Grid item sx={{ my: 8 }}>
      <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
        <Paper elevation={3} sx={{ width: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{ textAlign: "center" }}
            >
              Learning Track
            </Typography>
          </Box>
          <Box
            sx={{
              height: 200,
              width: 250,
              border: "1px solid lightgrey",
              overflow: "auto",
            }}
          >
            {/* sort alphabetically */}
            {learningTracks &&
              learningTracks
                .sort((x, y) => {
                  let a = x.name,
                    b = y.name;
                  return a === b ? 0 : a > b ? 1 : -1;
                })
                .map((learningTrack) => (
                  <div>
                    <Button
                      key={learningTrack.id}
                      onClick={() =>
                        props.dispatch({
                          type: ACTIONS.GET_COHORT_ID,
                          payload: {
                            ltId: learningTrack.id,
                            ltData: learningTracks,
                          },
                        })
                      }
                    >
                      {learningTrack.name}
                    </Button>
                  </div>
                ))}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default LearningTrackCard;
