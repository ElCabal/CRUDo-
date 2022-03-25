import React from "react";

const MainLayout = ({ children, title }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-8 px-2 w-full md:max-w-2xl lg:max-w-4xl">
      <h2 className="font-primary font-black text-4xl md:text-5xl lg:text-6xl">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default MainLayout;
