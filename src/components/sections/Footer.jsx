import React from "react";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <div className="bg-gray-900 h-32 w-full flex flex-col gap-5 items-center p-6 text-xl">
      <div className=" text-gray-300 ">
        © 2022 <span className="font-bold text-white">CRUDo</span>
      </div>
      <div className="text-white font-medium">
        <p className=" flex  sm:gap-2">
          Developed by :{"     "}
          <a
            className="  text-sky-600"
            href="https://github.com/ElCabal"
            target="_blank"
          >
            ElCabal{" "}
          </a>
          <VscGithub className="inline text-2xl" />
          <a
            className=" text-sky-600"
            href="https://github.com/iElectro13"
            target="_blank"
          >
            {" "}
            iElectro13
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
