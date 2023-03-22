import { Container, Paper, Box, Stack, Grid } from "@mui/material";
import "./App.css";
import CountCard from "./components/CountCard";
import LeaderBoardCard from "./components/LeaderBoardCard";

function App() {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={8}
          sx={{float: "left"}}
          direction="column"
          item
          xs={12}
          md={3}
          padding={2}
        >
          <CountCard />
          <CountCard />
          <CountCard />
        </Grid>
        <Grid
          container
          spacing={10}
          sx={{ float: "left" }}
          item
          xs={12}
          md={6}
          padding={2}
        >
          <LeaderBoardCard />
          <LeaderBoardCard />
        </Grid>
        <Grid
          container
          spacing={8}
          sx={{ float: "left" }}
          direction="column"
          item
          xs={12}
          md={3}
          padding={2}
        >
          <CountCard />
          <CountCard />
          <CountCard />
        </Grid>
      </Container>
    </>
  );
}

export default App;
