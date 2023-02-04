import { useState } from "react"
import { useForm } from 'react-hook-form'
import ButtonAct from "./ButtonAct"
import Typed from "react-typed"

const Formpage = () => {
  const [formStep, setFormStep] = useState(0)
  const { watch,
    register,
    formState: { errors, isValid },
  } = useForm({ mode: "all" })
  const completeFormStep = () => {
    setFormStep(cur => cur + 1)
  }
  const renderButton = () => {
    if (formStep > 2) {
      return undefined
    } else if (formStep === 2) {
      return (
        <button
          disabled={!isValid}
          onClick={completeFormStep}
          type="button"
          className="mt-6 bg-red-500 text-white rounded font-serif md:px-8 md:py-6 py-3 w-full disabled:bg-gray-400 disabled:cursor-not-allowed hover:bg-red-700 transition ease-in-out"
        >
          Plan Date
        </button>
      )
    } else {
      return (
        <button
          disabled={!isValid}
          onClick={completeFormStep}
          type="button"
          className="mt-6 bg-red-500 text-white rounded font-serif md:px-8 md:py-6 py-3 sm:py-3 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next Step
        </button>
      )
    }
  }
  return (
    <div className="sm:min-w-[500px] md:min-h-screen bg-red-900 flex flex-col items-start text-gray-900 antialiased relative">
      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 80%, 0% 100%)",
          height: "34rem",
        }}
        className="absolute bg-red-400 inset-x-0 top-0"
      ></div>
      <div className="mx-auto z-10 md:mt-48 mt-28 text-center">
        <h1 className="text-white text-5xl font-thin">Plan</h1>
        <p className="text-white mt-2 italic">
          Get a custom date in 3 easy steps!
        </p>
      </div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form>
            {formStep >= 0 && (
              <section className={formStep === 0 ? "block" : "hidden"}>
                
                
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Name"
                  className="text-input w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
                  {...register("username", {
                    required: {
                      value: true,
                      message: "Please enter your name",
                    },
                  })}
                />
                {errors.username && <p className="text-red-600 text-sm my-2">{errors.username.message}</p>}
              </section>
            )}
            {formStep >= 1 && (
              <section className={formStep === 1 ? "block" : "hidden"}>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Location"
                  className="text-input w-full h-12 px-4 py-1 rounded-r-md border border-gray-100 text-gray-800 focus:outline-none"
                  {...register("address", {
                    required: {
                      value: true,
                      message: "Please enter a location",
                    },
                  })}
                />
                {errors.address && <p className="text-red-600 text-sm my-2">{errors.address.message}</p>}
              </section>
            )}
            {formStep >= 2 && (
              <section className={formStep === 2 ? "grid grid-cols-1 md:grid-cols-2 gap-1 text-center -mx-5 lg:mx-0" : "hidden"}>
                <h2 className="font-thin md:text-4xl sm:text-2xl opacity-50 text-xl italic font-serif">Choose one or more</h2>
                <ButtonAct htmlFor="adventure" name="Adventure" xlmns="http://www.w3.org/2000/svg"/>
                <input
                id="adventure"
                name="adventure"
                type="checkbox"
                className="text-input hidden"
                {...register("adventure", {
                })}
                />
                <ButtonAct htmlFor="athome" name="From Home" xlmns="http://www.w3.org/2000/svg"/>
                <input
                id="athome"
                name="athome"
                type="checkbox"
                className="text-input hidden"
                {...register("athome", {
                })}
                />
                <ButtonAct htmlFor="drinks" name="Drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                id="drinks"
                name="drinks"
                type="checkbox"
                className="text-input hidden"
                {...register("drinks", {
                })}
                />
                <ButtonAct htmlFor="romantic" name="Romantic" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="romantic"
                  name="romantic"
                  type="checkbox"
                  className="text-input hidden"
                  {...register("romantic", {
                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {

                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {
                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {

                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {

                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {

                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {

                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {

                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {

                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {

                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {

                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {

                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {

                  })}
                />
                <ButtonAct htmlFor="drinks" name="drinks" xlmns="http://www.w3.org/2000/svg"/>
                <input
                  id="address"
                  name="address"
                  type="checkbox"
                  placeholder="Location"
                  className="text-input hidden"
                  {...register("address", {

                  })}
                />
              </section>
            )}
            {formStep >= 3 && (
              <section className={formStep === 3 ? "block mb-9" : "hidden"}>
                <div className="text-center text-gray-700 mb-10 ">
                <Typed
                className='md:text-3xl sm:text-4xl text-xl font-md align-center justify-center mx-auto font-sans'
                strings={['Gathering Data . .', 'Finding Activities Near You', 'Packaging. . .', "Sending To Scheduler. . ."]}
                typeSpeed={70}
                backSpeed={150}
                loop/>
                </div>
                  <div role="status">
                    <svg aria-hidden="true" className="align-center justify-center mx-auto h-10 w-10 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                </div>
              </section>
            )}
            {renderButton()}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Formpage
