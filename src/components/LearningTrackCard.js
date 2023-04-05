import { Grid, Paper, Box, Typography, Button } from "@mui/material";
import React from "react";

const LearningTrackCard = (props) => {
  let learningTracks = props.learningTrackList;
  console.log("🚀 ~ file: LearningTrackCard.js:7 ~ LearningTrackCard ~ learningTracks:", learningTracks)
  
  return (
    <Grid item sx={{ my: 8 }}>
      <Box sx={{ width: 250, border: "1px solid lightgrey" }}>
        <Paper elevation={3} sx={{ width: 1 }}>
          <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "lightblue" }}>
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
            {learningTracks
              .sort((x, y) => {
                let a = x.name,
                  b = y.name;
                return a === b ? 0 : a > b ? 1 : -1;
              })
              .map((learningTrack) => (
                <div key={learningTrack.id}>
                  <Button
                    onClick={() => props.getCohortIdList(
                      learningTrack.id
                    )}
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
