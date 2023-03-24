import { Container, Grid } from "@mui/material";
import CountCard from "../components/CountCard";
import React from "react";
import SupervisorDashBoardCard from "../components/SupervisorDashBoardCard";
import classes from "./SupervisorLanding.module.css";

const SupervisorLanding = () => {
  return (
    <Container sx={{marginTop: 5}}>
      <Grid
        container
        sx={{ gridTemplateColumns: "auto auto auto", gridColumnGap: "40px"}}
      >
        <Grid item className={classes.screen1}>
          <CountCard />
          <CountCard />
          <CountCard />
        </Grid>

        <Grid item className={classes.screen2}>
          <SupervisorDashBoardCard />
          <SupervisorDashBoardCard />
        </Grid>

        <Grid item className={classes.screen3}>
          <CountCard />
          <CountCard />
          <CountCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SupervisorLanding;
