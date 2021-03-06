import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen gap-5 flex flex-col justify-between items-center font-secondary text-gray-700">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
