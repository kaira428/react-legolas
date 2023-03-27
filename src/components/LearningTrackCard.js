import { Grid, Paper, Box, Typography } from "@mui/material";
import React from "react";

const LearningTrackCard = ({ learningTracks }) => {
  return (
    <Grid item sx={{ my: 8 }}>
      <Box sx={{ width: 220, border: "1px solid lightgrey" }}>
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
              height: 120,
              width: 220,
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
                    variant="body2"
                    component="p"
                    sx={{ textAlign: "left", marginLeft: "5px" }}
                    key={learningTrack.id}
                  >
                    {learningTrack.name}
                  </Typography>
                ))}
          </Box>
        </Paper>
      </Box>
    </Grid>
  );
};

export default LearningTrackCard;
