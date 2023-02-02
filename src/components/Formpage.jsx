import React from "react"
import { useForm } from 'react-hook-form'

const Formpage = () => {
  const [formStep, setFormStep] = React.useState(0)
  const { watch, register, formState: {errors}, } = useForm({ mode: "all" })
  const completeFormStep = () => {
    setFormStep(cur => cur + 1)
  }
  const renderButton = () => {
    if (formStep > 2) {
      return undefined
    } else if (formStep === 2) {
      return (
        <button
          onClick={completeFormStep}
          type="button"
          className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Plan My Date 
        </button>
      )
    } else {
      return (
        <button
          onClick={completeFormStep}
          type="button"
          className="mt-6 bg-green-600 text-white rounded px-8 py-6 w-full disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Next Step 
        </button>
      )
    }
  }
  return (
    <div className="min-h-screen bg-red-900 flex flex-col items-start text-gray-900 antialiased relative">
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
            {formStep === 0 && (
            <section>
              <h2 className="font-semibold text-3xl mb-8">
              Name
              </h2>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Name"
                className="text-input"
                {...register("register", {
                  required: {
                  value: true,
                  message: "Please enter your name",
                  },
                })}
              />
                {errors.username && <p>{errors.username.message}</p>}
            </section>
            )}
            {formStep === 1 && (
            <section>
            <h2 className="font-semibold text-3xl mb-8">Location</h2>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Location"
              className="text-input"
            />
            </section>
            )}
            {formStep === 2 && (
            <section>
            <h2 className="font-semibold text-3xl mb-8">Activities</h2>
            <div className="block mt-6">
            </div>
            </section>
            )}
            {formStep === 3 && (
            <section>
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
