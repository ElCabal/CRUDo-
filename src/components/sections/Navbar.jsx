import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="p-4 flex justify-between items-center w-full relative">
            <span className="font-secondary font-black text-5xl text-sky-700 cursor-pointer">
                CRUDo
            </span>
            <BiMenu onClick={()=> setIsOpen(!isOpen)} className="text-gray-900 text-5xl cursor-pointer active:scale-95" />
            { isOpen &&
                <div className="absolute flex flex-col justify-center items-center bg-gray-900 text-sky-600 font-montserrat font-black w-full gap-4 py-4 top-full left-0">
                    <NavLink onClick={()=> setIsOpen(false)} to="/" className={({ isActive }) => (isActive ? 'text-white' : 'inactive')}>
                        INICIO
                    </NavLink>
                    <NavLink onClick={()=> setIsOpen(false)} to="/datelist" className={({ isActive }) => (isActive ? 'text-white' : 'inactive')}>
                        CITAS
                    </NavLink>
                    <NavLink onClick={()=> setIsOpen(false)} to="/newdate" className={({ isActive }) => (isActive ? 'text-white' : 'inactive')}>
                        NUEVA CITA
                    </NavLink>
                </div>
            }
        </nav>
    );
};

export default Navbar;
