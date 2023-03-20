import { Container, Paper, Box, Stack, Grid } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import "./App.css";

function App() {
  return (
    <>
      <Container>
        <Grid container spacing={2} xs={12} md={3} sx={{display: "inline-block", backgroundColor: "green"}} direction="column">
          <Grid item>
            Test 1
          </Grid>
          <Grid item>
            Test 2
          </Grid>
        </Grid>
        <Grid container spacing={2} xs={12} md={6} sx={{display: "inline-block", backgroundColor: "lightblue"}} direction="column">
          <Grid item>
            Test 3
          </Grid>
          <Grid item>
            Test 4
          </Grid>
        </Grid>
        <Grid container spacing={2} xs={12} md={3} sx={{display: "inline-block", backgroundColor: "pink"}} direction="column">
          <Grid item>
            Test 5
          </Grid>
          <Grid item>
            Test 6
          </Grid>
        </Grid>        
      </Container>
    </>
  );
}

export default App;
