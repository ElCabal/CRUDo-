import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <div className="flex flex-col justify-center items-center p-2 w-full gap-6">
            <h1 className="font-primary font-black text-gray-900 text-5xl text-center">
                Bienvenido a CRUDo
            </h1>
            <p className="text-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                reiciendis accusantium ipsam vitae fugit, itaque repellendus non
                qui numquam repudiandae facere aliquam veniam nobis quibusdam
                deserunt autem incidunt praesentium? Dignissimos.
            </p>
            <div className="flex gap-2 w-full">
                <Link to="/newdate" className="btn btn-primary">CREAR CITA</Link>
                <Link to="/datelist" className="btn btn-secondary">VER CITAS</Link>
            </div>
        </div>
    );
};

export default Landing;
