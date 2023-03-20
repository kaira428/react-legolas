import { Container, Paper, Box, Stack, Grid } from "@mui/material";
import "./App.css";
import CountCard from "./components/CountCard";

function App() {
  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
          sx={{ display: "inline-block"}}
          direction="column"
          item xs={12} md={3}
          padding={2}
        >
          <CountCard />
          <CountCard />
          <CountCard />
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ display: "inline-block"}}
          direction="column"
          item xs={12} md={6}
          padding={2}
        >
          <CountCard />
          <CountCard />
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ display: "inline-block"}}
          direction="column"
          item xs={12} md={3}
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
