import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import SupervisorDashboard from "./pages/SupervisorDashboard";
import SupervisorLanding from "./pages/SupervisorLanding";
import Home from "./pages/Home";

function App({ children }) {
  return (
    <>
      <NavLink>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pages/supervisorLanding">Supervisor Landing Page</Link>
          </li>
          <li>
            <Link to="/pages/supervisorDashboard">Supervisor Dashboard</Link>
          </li>
        </ul>
      </NavLink>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages">
          <Route index element={<SupervisorLanding />} />
          <Route path="supervisorLanding" element={<SupervisorLanding />} />
          <Route path="supervisorDashboard" element={<SupervisorDashboard />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
