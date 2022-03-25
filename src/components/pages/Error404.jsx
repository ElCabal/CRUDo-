import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-12 bg-gray-100 p-4 ">
      <h1 className="text-9xl font-title text-sky-700">404</h1>
      <p className="text-4xl font-subtitle ">
        Page <span className=" text-red-900">not found</span>
      </p>
      <div className="flex">
        <Link to="/">
          <button className="btn btn-secondary px-4">HOME</button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
