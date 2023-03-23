import "./App.css";
import SupervisorDashboardPage from "./pages/SupervisorDashboardPage";
import SupervisorLanding from "./pages/SupervisorLanding";
import Footer from "./ui/Footer";
import MenuAppBar from "./ui/MenuAppBar";

function App() {
  return (
    <>
      <MenuAppBar />
      {/* <SupervisorLanding /> */}
      <SupervisorDashboardPage />
      <Footer />
    </>
  );
}

export default App;
