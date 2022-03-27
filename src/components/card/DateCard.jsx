import React from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, ID } from "../../utils/routes";

const DateCard = ({ name, topic, date, id, onUpdate, dates, created }) => {
  const navigate = useNavigate()
  const handleDelete = async (id) => {
    const resp = await fetch(BASE_URL+ID+id, {
      method: 'DELETE'
    })
    onUpdate(dates.filter(date => date.date_id != id))
  }
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
      <div>
        <p className="font-semibold font-primary text-2xl">Fecha creación:</p>
        <p className="text-lg">{created}</p>
        <hr className=" border-gray-900" />
      </div>
      <div className="flex gap-2">
        <button onClick={()=> navigate('/editdate/'+id)} className="btn btn-primary">EDITAR</button>
        <button onClick={()=>handleDelete(id)} className="btn btn-danger">ELIMINAR</button>
      </div>
    </section>
  );
};

export default DateCard;
