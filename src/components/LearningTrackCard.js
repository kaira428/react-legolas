import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../helpers/customedHooks";
import classes from "./LearningTrackCard.module.css";

const LearningTrackCard = () => {
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
            {/* Sort Learning Track names alphabetically before mapping */}
            {learningTracks &&
              learningTracks
                .sort((x, y) => {
                  let a = x.name,
                    b = y.name;
                  return a === b ? 0 : a > b ? 1 : -1;
                })
                .map((learningTrack) => (
                  <Typography
                    variant="body1"
                    component="p"
                    sx={{
                      textAlign: "left",
                      marginLeft: "5px",
                      marginTop: "5px",
                    }}
                    key={learningTrack.id}
                  >
                    {
                      <NavLink
                        className={classes.linkWithOutLine}
                        to={`/pages/supervisorDashboard/${learningTrack.id}`}
                      >
                        {learningTrack.name}
                      </NavLink>
                    }
                  </Typography>
                ))}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default LearningTrackCard;
