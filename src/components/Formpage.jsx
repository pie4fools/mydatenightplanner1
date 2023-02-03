import React from "react"
import { useForm } from 'react-hook-form'



const Formpage = () => {
  const [formStep, setFormStep] = React.useState(0)
  const { watch,
    register, 
    formState: {errors, isValid }, 
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
          className="mt-6 bg-red-400 text-white rounded md:px-8 md:py-6 py-5 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Plan My Date 
        </button>
      )
    } else {
      return (
        <button
          disabled={!isValid}
          onClick={completeFormStep}
          type="button"
          className="mt-6 bg-red-400 text-white rounded md:px-8 md:py-6 py-5 sm:py-3 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
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
      <div className="mx-auto z-10 mt-48 text-center">
        <h1 className="text-white text-5xl font-semibold">Plan</h1>
        <p className="text-white mt-2 italic">
          Get a custom date in 3 easy steps!
        </p>
      </div>
      <div className="max-w-xl w-full mt-24 mb-24 rounded-lg shadow-2xl bg-white mx-auto overflow-hidden z-10">
        <div className="px-16 py-10">
          <form>
            {formStep >= 0 && (
            <section className={formStep === 0 ? "block" : "hidden"}>
              <h2 className="font-semibold text-3xl mb-8">
              Name
              </h2>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Name"
                className="text-input"
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
            <h2 className="font-semibold text-3xl mb-8">Location</h2>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Location"
              className="text-input"
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
            <section className={formStep === 2 ? "grid grid-cols-2 gap-2 text-center" : "hidden"}>
            <h2 className="font-semibold md:text-3xl sm:text-2xl italic font-serif">Activities</h2>
            <label htmlFor="adventures" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-3 text-black hover:bg-black hover:text-white transition ease-in-out">Adventures</label>
              <input
              id="adventures"
              name="adventures"
              type="checkbox"
              className="text-input hidden"
              {...register("adventures", { 
              })}
              />
              <label htmlFor="drinks" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Drinks</label>
              <input
              id="drinks"
              name="drinks"
              type="checkbox"
              className="text-input hidden"
              {...register("drinks", {
              })}
              />
              <label htmlFor="romantic" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Romantic</label>
              <input
              id="romantic"
              name="romantic"
              type="checkbox"
              className="text-input hidden"
              {...register("romantic", {
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
              <input
              id="address"
              name="address"
              type="checkbox"
              placeholder="Location"
              className="text-input hidden"
              {...register("address", {
                
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
              <input
              id="address"
              name="address"
              type="checkbox"
              placeholder="Location"
              className="text-input hidden"
              {...register("address", {
                
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
              <input
              id="address"
              name="address"
              type="checkbox"
              placeholder="Location"
              className="text-input hidden"
              {...register("address", {
                
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
              <input
              id="address"
              name="address"
              type="checkbox"
              placeholder="Location"
              className="text-input hidden"
              {...register("address", {
                
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
              <input
              id="address"
              name="address"
              type="checkbox"
              placeholder="Location"
              className="text-input hidden"
              {...register("address", {
                
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
              <input
              id="address"
              name="address"
              type="checkbox"
              placeholder="Location"
              className="text-input hidden"
              {...register("address", {
                
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
              <input
              id="address"
              name="address"
              type="checkbox"
              placeholder="Location"
              className="text-input hidden"
              {...register("address", {
                
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
              <input
              id="address"
              name="address"
              type="checkbox"
              placeholder="Location"
              className="text-input hidden"
              {...register("address", {
                
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
              <input
              id="address"
              name="address"
              type="checkbox"
              placeholder="Location"
              className="text-input hidden"
              {...register("address", {
                
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
              <input
              id="address"
              name="address"
              type="checkbox"
              placeholder="Location"
              className="text-input hidden"
              {...register("address", {
                
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
              <input
              id="address"
              name="address"
              type="checkbox"
              placeholder="Location"
              className="text-input hidden"
              {...register("address", {
                
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
              <input
              id="address"
              name="address"
              type="checkbox"
              placeholder="Location"
              className="text-input hidden"
              {...register("address", {
                
              })}
              />
              <label htmlFor="adventure" className="z-10 relative rounded-full border-2 border-black bg-transparent py-1.5 text-xs px-5 text-black hover:bg-black hover:text-white transition ease-in-out">Adventure</label>
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
              <section className={formStep === 3 ? "block" : "hidden"}>
              <h2 className="font-semibold text-1xl mb-8 text-center">Congratulations! Your date night is being planned</h2>
              </section>
            )}
            {renderButton()}
            <pre>{JSON.stringify(watch(), null, 2)}</pre>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Formpage
