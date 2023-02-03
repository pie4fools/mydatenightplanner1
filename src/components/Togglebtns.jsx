// import { useState } from 'react'
// import { useForm } from 'react-hook-form'

// const Togglebtns = ({ id, htmlFor, type, name, label }) => {
//     const {watch, register,
//       } = useForm({ mode: "all" })
//     const [toggle, setToggle] = useState(false);
//     const toggleButton = () => setToggle(!toggle);
//     return (
//             <label htmlFor={htmlFor} style={{ backgroundColor: toggle ? '#000000' : '#fff', color: toggle ? '#fff' : '#000000' }} onClick={toggleButton} className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-3  text-black  transition ease-in-out">{label}</label>
//             <input
//                 id={id}
//                 name={name}
//                 type={type}
//                 label={label}
//                 className="text-input hidden"
//                 {...register(label, {})}
            

        
//     )
// }

// export default Togglebtns