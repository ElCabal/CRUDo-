import React from "react";
import { Link } from "react-router-dom";
import MainLayout from "../sections/MainLayout";

const Landing = () => {
  return (
    <MainLayout>
      <div className="flex flex-col justify-center items-center p-2 w-full gap-6">
        <h1 className="font-primary font-black text-gray-800 text-5xl text-center">
          Bienvenido a CRUDo
        </h1>
        <p className="text-center text-lg">
          CRUDo tu plataforma dinámica para agendar y guardar en la base de
          datos citas y o reuniones con lo equipos de desarrollo técnico y así
          mejorar el flujo de trabajo, el rendimiento de los desarrolladores y
          la eficiencia de la empresa para cumplir con los proyectos.
        </p>
        <div className="flex gap-2 w-full">
          <Link to="/newdate" className="btn btn-primary">
            CREAR CITA
          </Link>
          <Link to="/datelist" className="btn btn-secondary">
            VER CITAS
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Landing;
