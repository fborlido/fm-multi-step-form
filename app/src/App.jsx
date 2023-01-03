import React, { useState } from "react";
import FormFour from "./components/FormFour";
import FormOne from "./components/FormOne";
import FormThree from "./components/FormThree";
import FormTwo from "./components/FormTwo";
import Sidebar from "./components/Sidebar";
import useMultiForm from "./useMultiForm";
import { Formik, Form } from "formik";
import * as yup from "yup";
import Final from "./components/Final";

const App = () => {
  const steps = [
    {
      id: 1,
      title: "Your Info",
      content: <FormOne />,
    },
    {
      id: 2,
      title: "Select Plan",
      content: <FormTwo />,
    },
    {
      id: 3,
      title: "Add-ons",
      content: <FormThree />,
    },
    {
      id: 4,
      title: "Summary",
      content: <FormFour />,
    },
  ];
  const { step, currentStepIndex, isFirstStep, isLastStep, next, back } =
    useMultiForm(steps);

  const [isConfirmed, setIsConfirmed] = useState(false)

  return (
    <div className=" bg-magnolia h-screen flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg shadow-xl flex items-stretch w-full max-w-5xl gap-8 h-[65%]">
        <Sidebar steps={steps} currentStepIndex={currentStepIndex} />
        {isConfirmed ? (
          <Final />
        ) : (
          <Formik
            initialValues={{
              name: "",
              email: "",
              phone: "",
              plan: "arcade",
              pricing: false,
              addons: [],
            }}
            validationSchema={yup.object({
              name: yup.string().required("Name is required"),
              email: yup
                .string()
                .required("Email is required")
                .email("Email is not valid"),
              phone: yup
                .string()
                .required("Phone is required")
                .matches(/([0-9]){9}/, "PHONE")
                .max(9, "Needs to have 9 digits MAX"),
              plan: yup
                .string()
                .required("Please select a plan")
                .oneOf(
                  ["arcade", "advanced", "pro"],
                  "Please select from the available options"
                ),
              pricing: yup.boolean().required("Please select a method"),
            })}
            onSubmit={(values) => {
              if (isLastStep) {
                setIsConfirmed(true)
              } else {
                next();
              }
            }}
          >
            <Form className="p-8 flex flex-col flex-1">
              <div className="flex-1">{step.content}</div>
              <div className="flex items-center justify-between">
                {!isFirstStep && (
                  <button
                    type="button"
                    className="text-cool_gray"
                    onClick={back}
                  >
                    Go Back
                  </button>
                )}
                <button
                  type="submit"
                  className={`ml-auto  text-white py-2 px-4 rounded-lg ${
                    isLastStep ? "bg-primary-400" : "bg-primary-500"
                  }`}
                >
                  {isLastStep ? "Confirm" : "Next Step"}
                </button>
              </div>
            </Form>
          </Formik>
        )}
      </div>
    </div>
  );
};

export default App;
