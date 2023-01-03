import React from "react";
import { Field, useFormikContext } from "formik";

const FormThree = () => {
  const { values } = useFormikContext();

  return (
    <>
      <h1 className="text-3xl font-bold text-primary-500">Pick add-ons</h1>
      <p className=" text-cool_gray mb-6">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="flex flex-col gap-4 mb-4 relative">
        <label
          htmlFor="online_service"
          className={`p-4 border rounded-lg cursor-pointer hover:bg-magnolia flex items-center w-full justify-between ${
            values.addons.includes("online_service") &&
            " border-primary-500 bg-magnolia"
          }`}
        >
          <div className="flex items-center gap-4">
            <span
              className={`aspect-square w-5  rounded-sm flex items-center justify-center overflow-hidden text-white ${
                values.addons.includes("online_service")
                  ? "bg-primary-400"
                  : "border"
              }`}
            >
              &#10004;
            </span>
            <Field
              id="online_service"
              name="addons"
              type="checkbox"
              value="online_service"
              className={`hidden`}
            />
            <div>
              <p className="text-primary-500 font-medium">Online sevice</p>
              <p className="text-sm text-cool_gray">
                Access to multiplayer games
              </p>
            </div>
          </div>
          <span className="text-sm text-primary-400">
            {values.pricing ? "+$10/yr" : "+$1/mo"}
          </span>
        </label>
        <label
          htmlFor="larger_storage"
          className={`p-4 border rounded-lg cursor-pointer hover:bg-magnolia flex items-center w-full justify-between ${
            values.addons.includes("larger_storage") &&
            " border-primary-500 bg-magnolia"
          }`}
        >
          <div className="flex items-center gap-4">
            <span
              className={`aspect-square w-5  rounded-sm flex items-center justify-center overflow-hidden text-white ${
                values.addons.includes("larger_storage")
                  ? "bg-primary-400"
                  : "border"
              }`}
            >
              &#10004;
            </span>
            <Field
              id="larger_storage"
              name="addons"
              type="checkbox"
              value="larger_storage"
              className={`hidden`}
            />
            <div>
              <p className="text-primary-500 font-medium">Larger storage</p>
              <p className="text-sm text-cool_gray">Extra 1TB of cloud save</p>
            </div>
          </div>
          <span className="text-sm text-primary-400">
            {values.pricing ? "+$20/yr" : "+$2/mo"}
          </span>
        </label>
        <label
          htmlFor="custom_profile"
          className={`p-4 border rounded-lg cursor-pointer hover:bg-magnolia flex items-center w-full justify-between ${
            values.addons.includes("custom_profile") &&
            " border-primary-500 bg-magnolia"
          }`}
        >
          <div className="flex items-center gap-4">
            <span
              className={`aspect-square w-5  rounded-sm flex items-center justify-center overflow-hidden text-white ${
                values.addons.includes("custom_profile")
                  ? "bg-primary-400"
                  : "border"
              }`}
            >
              &#10004;
            </span>
            <Field
              id="custom_profile"
              name="addons"
              type="checkbox"
              value="custom_profile"
              className={`hidden`}
            />
            <div>
              <p className="text-primary-500 font-medium">
                Customizable profile
              </p>
              <p className="text-sm text-cool_gray">
                Custom theme on your profile
              </p>
            </div>
          </div>
          <span className="text-sm text-primary-400">
            {values.pricing ? "+$20/yr" : "+$2/mo"}
          </span>
        </label>
      </div>
    </>
  );
};

export default FormThree;
