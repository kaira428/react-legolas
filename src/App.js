import { Route, Routes } from "react-router-dom";
import "./App.css";
import SupervisorDashboard from "./pages/SupervisorDashboard";
import SupervisorLanding from "./pages/SupervisorLanding";
import Home from "./pages/Home";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages">
          <Route index element={<SupervisorLanding />} />
          <Route path="supervisorLanding" element={<SupervisorLanding />} />
          <Route path="supervisorDashboard" element={<SupervisorDashboard />}>
            <Route path=":learningTrackId" element={<SupervisorDashboard />} />
            <Route path=":learningTrackId/:cohortId" element={<SupervisorDashboard />} />
          </Route>          
        </Route>
      </Routes>
  );
}

export default App;