import React from "react";

const DateCard = ({ name, topic, date }) => {
  return (
    <section className="bg-white w-full p-8 rounded shadow-xl flex flex-col gap-4 ">
      <div>
        <p className="font-semibold font-primary text-2xl">Nombre:</p>
        <p className="text-lg">{name}</p>
        <hr className=" border-gray-900" />
      </div>
      <div>
        <p className="font-semibold font-primary text-2xl">Asunto:</p>
        <p className="text-lg">{topic}</p>
        <hr className=" border-gray-900" />
      </div>
      <div>
        <p className="font-semibold font-primary text-2xl">Cita:</p>
        <p className="text-lg">{date}</p>
        <hr className=" border-gray-900" />
      </div>
      <div className="flex  gap-2">
        <button className="btn btn-primary">EDITAR</button>
        <button className="btn btn-danger">ELIMINAR</button>
      </div>
    </section>
  );
};

export default DateCard;
