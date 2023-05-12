import { Route, Routes } from "react-router-dom";
import "./App.css";
import SupervisorDashboard from "./pages/SupervisorDashboard";
import SupervisorLanding from "./pages/SupervisorLanding";
import Home from "./pages/Home";
import CreateLearningTrackForm from "./pages/CreateLearningTrackForm";
import AddTraineesToCohortForm from "./pages/AddTraineesToCohortForm";
import UpdateTraineeResultsForm from "./pages/UpdateTraineeResultsForm";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages">
          <Route index element={<SupervisorLanding />} />
          <Route path="supervisorLanding" element={<SupervisorLanding />} />
          <Route path="createLearningTrackForm" element={<CreateLearningTrackForm />} />
          <Route path="addTraineesToCohortForm" element={<AddTraineesToCohortForm />} />
          <Route path="updateTraineeResultsForm" element={<UpdateTraineeResultsForm />} />
          <Route path="supervisorDashboard" element={<SupervisorDashboard />}>
            <Route path=":learningTrackId" element={<SupervisorDashboard />} />
            <Route
              path=":learningTrackId/:cohortId"
              element={<SupervisorDashboard />}
            />
          </Route>
        </Route>
      </Routes>
  );
}

export default App;
