import React from "react";
import { useEffect, useState } from "react";
import DateCard from "../card/DateCard";
import MainLayout from "../sections/MainLayout";
import { BASE_URL } from "../../utils/routes";

const DateList = () => {
  const [dates, setDates] = useState([])

  const getData = async ()=>{
    const resp = await fetch(BASE_URL)
    const data = await resp.json()
    setDates(data)
  }
  
  useEffect(()=>{
    getData()
  },[])

  console.log(dates)
  return (
    <MainLayout title="Citas">
      {dates.length > 0 ? dates.map((cita) => {
        return (
          <DateCard name={cita.name} topic={cita.topic} date={cita.date} key={cita.date_id} id={cita.date_id} onUpdate={setDates} dates={dates} created={cita.created} />
        );
      }): <h1>No hay citas</h1>}
    </MainLayout>
  );
};

export default DateList;
