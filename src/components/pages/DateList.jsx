import React from "react";
import DateCard from "../card/DateCard";
import MainLayout from "../sections/MainLayout";

const DateList = () => {
  const citas = [
    {
      id: 0,
      name: "Luis Felipe Cabal",
      topic: "Resolver responsive",
      date: "21/09/2022 10:39 a.m",
    },
    {
      id: 0,
      name: "Enmanuel Pereira",
      topic: "Levantar Servidor",
      date: "22/09/2022 10:39 a.m",
    },
    {
      id: 0,
      name: "Luis Felipe Cabal",
      topic: "Resolver responsive",
      date: "23/09/2022 10:39 a.m",
    },
  ];
  console.log(citas);

  return (
    <MainLayout title="Citas">
      {citas.map((cita) => {
        return (
          <DateCard name={cita.name} topic={cita.topic} date={cita.date} />
        );
      })}
    </MainLayout>
  );
};

export default DateList;
