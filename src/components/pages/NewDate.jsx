import React from "react";
import MainLayout from "../sections/MainLayout";

const NewDate = () => {
  return (
    <MainLayout title="Crear Cita">
      <div className="bg-white w-full p-8 rounded shadow-xl">
        <form
          action=""
          className="flex flex-col gap-8 justify-center items-center"
        >
          <div className="flex flex-col w-full gap-2">
            <label
              htmlFor="name"
              className=" font-semibold font-primary text-2xl"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Ingresar nombre"
              className="bg-gray-100 p-2 rounded placeholder-gray-400 text-gray-700"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label
              htmlFor="topic"
              className=" font-semibold font-primary text-2xl "
            >
              Asunto:
            </label>
            <input
              type="text"
              id="topic"
              placeholder="Ingresar asunto"
              className="bg-gray-100 p-2 rounded placeholder-gray-400 text-gray-700"
              autoComplete="off"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label
              htmlFor="date"
              className=" font-semibold font-primary text-2xl "
            >
              Fecha:
            </label>
            <input
              type="date"
              id="date"
              className="bg-gray-100 p-2 rounded placeholder-gray-400"
            />
          </div>
          <div className="flex gap-2 w-full">
            <button className="btn btn-primary">GUARDAR</button>
            <button className="btn btn-danger">CANCELAR</button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default NewDate;
