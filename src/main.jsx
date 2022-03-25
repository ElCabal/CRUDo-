import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import EditDate from "./components/pages/EditDate";
import DateList from "./components/pages/DateList";
import NewDate from "./components/pages/NewDate";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index="home" element={<Landing />} />
          <Route path="datelist" element={<DateList />} />
          <Route path="editdate" element={<EditDate />} />
          <Route path="newdate" element={<NewDate />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
