import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import dateParser, {dateParserInverse} from "../../utils/dateParser";
import { BASE_URL, ID } from "../../utils/routes";
import MainLayout from "../sections/MainLayout";

const EditDate = () => {
    const { id_param } = useParams();
    const [actualDate, setActualDate] = useState({})
    const name = useRef("");
    const topic = useRef("");
    const date = useRef("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const parsedDate = dateParser(date.current.value);
        const resp = await fetch(BASE_URL + ID + id_param, {
            method: "PUT",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name.current.value,
                topic: topic.current.value,
                date: parsedDate,
            }),
        });
        console.log(resp);
        navigate("/datelist");
    };

    const dataFetch = async(id)=>{
        const resp = await fetch(BASE_URL+ID+id)
        const data = await resp.json()
        setActualDate(data[0])
    }

    useEffect(()=>{
        dataFetch(id_param)
    }, [])

    return (
        <MainLayout title="Editar Cita">
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
                            defaultValue={actualDate.name}
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
                            defaultValue={actualDate.topic}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <label
                            htmlFor="date"
                            className=" font-semibold font-primary text-2xl "
                        >
                            Nueva fecha:
                        </label>
                        <input
                            ref={date}
                            type="datetime-local"
                            id="date"
                            className="bg-gray-100 p-2 rounded placeholder-gray-400"
                            defaultValue={actualDate.date}
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

export default EditDate;
