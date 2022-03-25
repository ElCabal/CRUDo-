import { Outlet } from "react-router-dom";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
