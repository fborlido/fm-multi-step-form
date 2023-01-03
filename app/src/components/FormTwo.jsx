import React from "react";
import { Field, useFormikContext } from "formik";
import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

const FormTwo = () => {
  const { values } = useFormikContext();

  return (
    <>
      <h1 className="text-3xl font-bold text-primary-500">Select your plan</h1>
      <p className=" text-cool_gray mb-6">
        You have the option of monthly or yearly billing
      </p>
      <div className="flex gap-4 mb-4 relative">
        <label
          className={`p-4 border rounded-lg flex-1 cursor-pointer hover:bg-magnolia ${
            values.plan === "arcade" && " border-primary-500 bg-magnolia"
          }`}
        >
          <Field
            id="plan"
            type="radio"
            name="plan"
            value="arcade"
            className={`hidden`}
          />
          <img src={arcade} alt="" className="mb-8" />
          <p className="text-primary-500 font-medium">Arcade</p>
          <p className="text-sm text-cool_gray">{values.pricing ? "$90/yr" : "$9/mo"}</p>
        </label>
        <label
          className={`p-4 border rounded-lg flex-1 cursor-pointer hover:bg-magnolia ${
            values.plan === "advanced" && " border-primary-500 bg-magnolia"
          }`}
        >
          <Field
            id="plan"
            type="radio"
            name="plan"
            value="advanced"
            className={`hidden`}
          />
          <img src={advanced} alt="" className="mb-8" />
          <p className="text-primary-500 font-medium">Advanced</p>
          <p className="text-sm text-cool_gray">{values.pricing ? "$120/yr" : "$12/mo"}</p>
        </label>
        <label
          className={`p-4 border rounded-lg flex-1 cursor-pointer hover:bg-magnolia ${
            values.plan === "pro" && " border-primary-500 bg-magnolia"
          }`}
        >
          <Field
            id="plan"
            type="radio"
            name="plan"
            value="pro"
            className={`hidden`}
          />
          <img src={pro} alt="" className="mb-8" />
          <p className="text-primary-500 font-medium">Pro</p>
          <p className="text-sm text-cool_gray">{values.pricing ? "$150/yr" : "$15/mo"}</p>
        </label>
      </div>
      <div className="bg-magnolia flex justify-center gap-8 py-4">
        <label htmlFor="pricing" className={`font-medium ${values.pricing ? "text-cool_gray" : " text-primary-500"}`}>Monthly</label>
        <Field id="pricing" name="pricing" type="checkbox" className="hidden" />
        <label
          htmlFor="pricing"
          className={`bg-primary-500 rounded-full w-12 flex p-[3px] ${
            values.pricing ? "justify-end" : "justify-start"
          }`}
        >
          <span className="bg-white w-4 aspect-square rounded-full" />
        </label>
        <label htmlFor="pricing" className={`font-medium ${!values.pricing ? "text-cool_gray" : " text-primary-500"}`}>Yearly</label>
      </div>
    </>
  );
};

export default FormTwo;
