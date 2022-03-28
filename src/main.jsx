import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import EditDate from "./components/pages/EditDate";
import DateList from "./components/pages/DateList";
import NewDate from "./components/pages/NewDate";
import Error404 from "./components/pages/Error404";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index="home" element={<Landing />} />
          <Route path="datelist" element={<DateList />} />
          <Route path="editdate/:id_param" element={<EditDate />} />
          <Route path="newdate" element={<NewDate />} />
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
