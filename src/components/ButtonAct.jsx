import React from 'react'
import { useState } from 'react'


const ButtonAct = ({ htmlFor, name, xmlns, icon }) => {
  const [toggle, setToggle] = useState(false);
  const toggleButton = () => setToggle(!toggle);
  return (
    <>
    <label onClick={toggleButton} style={{ backgroundColor: toggle ? '#000000' : '#fff', color: toggle ? '#fff' : '#000000' }} htmlFor={htmlFor} class="z-10 px-6 pt-2.5 pb-2 bg-black text-white font-medium text-sm rounded shadow-md active:shadow-lg transition duration-150 ease-in-out flex ">
    {icon}   
    {name}
    </label>
    </>
  )
}

export default ButtonAct