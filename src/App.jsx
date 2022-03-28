import Navbar from "./components/sections/Navbar";
import Footer from "./components/sections/Footer";
import {Route, Routes} from "react-router-dom";
import Landing from "./components/pages/Landing";
import DateList from "./components/pages/DateList";
import EditDate from "./components/pages/EditDate";
import NewDate from "./components/pages/NewDate";
import Error404 from "./components/pages/Error404";

function App() {
  
  return (
    <div className="bg-gray-100 min-h-screen gap-5 flex flex-col justify-between items-center font-secondary text-gray-700">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
          <Route path="datelist" element={<DateList />} />
          <Route path="editdate/:id_param" element={<EditDate />} />
          <Route path="newdate" element={<NewDate />} />
          <Route path="*" element={<Error404 />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
