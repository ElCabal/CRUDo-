import React, {useRef} from "react";
import MainLayout from "../sections/MainLayout";
import dateParser from "../../utils/dateParser"
import { BASE_URL } from "../../utils/routes";
import { useNavigate } from "react-router-dom";

const NewDate = () => {


  const name = useRef("")
  const topic = useRef("")
  const date = useRef("")

  const navigate = useNavigate()

  console.log(date)
  
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const parsedDate = dateParser(date.current.value)
    const resp = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.current.value,
        topic: topic.current.value,
        date: parsedDate
      })
      
    })
    console.log(resp)
    navigate("/datelist")
  }

  return (
    <MainLayout title="Crear Cita">
      <div className="bg-white w-full p-8 rounded shadow-xl">
        <form
          onSubmit={handleSubmit}
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
              ref={name}
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
              ref={topic}
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
              ref={date}
              onChange={(e)=> dateParser(e.target.value)}
              type="datetime-local"
              id="date"
              className="bg-gray-100 p-2 rounded placeholder-gray-400"
            />
          </div>
          <div className="flex gap-2 w-full">
            <button type="submit" className="btn btn-primary">GUARDAR</button>
            <button className="btn btn-danger">CANCELAR</button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
};

export default NewDate;
