import { Container, Grid } from "@mui/material";
import CountCard from "../components/CountCard";
import React from "react";
import SupervisorDashBoardCard from "../components/SupervisorDashBoardCard";

const SupervisorLanding = () => {
  return (
    <Container sx={{marginTop: 5}}>
      <Grid
        container
        sx={{ gridTemplateColumns: "auto auto auto", gridColumnGap: "40px"}}
      >
        <Grid item sx={{ gridColumn: "1 / span 1"}}>
          <CountCard />
          <CountCard />
          <CountCard />
        </Grid>

        <Grid item sx={{ gridColumn: "2 / span 2" }}>
          <SupervisorDashBoardCard />
          <SupervisorDashBoardCard />
        </Grid>

        <Grid item sx={{ gridColumn: "3 / span 1" }}>
          <CountCard />
          <CountCard />
          <CountCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SupervisorLanding;
