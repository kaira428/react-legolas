import { Route, Routes } from "react-router-dom";
import "./App.css";
import SupervisorDashboard from "./pages/SupervisorDashboard";
import SupervisorLanding from "./pages/SupervisorLanding";
import Home from "./pages/Home";
import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext();

function App() {
  const [learningTrackId, setLearningTrackId] = useState(0);
  const [selectedCohortId, setSelectedCohortId] = useState(0);
  const [learningTrackData, setLearningTrackData] = useState();

  return (
    <DataContext.Provider
      value={{
        learningTrackId,
        setLearningTrackId,
        selectedCohortId,
        setSelectedCohortId,
        learningTrackData,
        setLearningTrackData,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages">
          <Route index element={<SupervisorLanding />} />
          <Route path="supervisorLanding" element={<SupervisorLanding />} />
          <Route path="supervisorDashboard" element={<SupervisorDashboard />}>
            <Route path=":learningTrackId" element={<SupervisorDashboard />} />
            <Route
              path=":learningTrackId/:cohortId"
              element={<SupervisorDashboard />}
            />
          </Route>
        </Route>
      </Routes>
    </DataContext.Provider>
  );
}

export default App;
