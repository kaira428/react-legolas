import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import SupervisorDashboard from "./pages/SupervisorDashboard";
import SupervisorLanding from "./pages/SupervisorLanding";
import Home from "./pages/Home";
import Footer from "./ui/Footer";
import MenuAppBar from "./ui/MenuAppBar";

function App() {
  return (
    <>
      <nav>
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
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages">
          <Route index element={<SupervisorLanding />} />
          <Route path="supervisorLanding" element={<SupervisorLanding />} />
          <Route path="supervisorDashboard" element={<SupervisorDashboard />} />
        </Route>
      </Routes>
      {/* <MenuAppBar /> */}
      {/* <SupervisorLanding /> */}
      {/* <SupervisorDashboard />
      <Footer /> */}
    </>
  );
}

export default App;
