import React from 'react'

const MainLayout = ({children, title}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="font-primary font-black text-4xl">{title}</h2>
        {children}
    </div>
  )
}

export default MainLayout