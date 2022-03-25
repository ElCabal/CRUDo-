import { Outlet } from "react-router-dom";
import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between items-center font-secondary">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
