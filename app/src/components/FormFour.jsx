import React from "react";
import { useFormikContext } from "formik";

const FormFour = () => {
  const { values } = useFormikContext();

  let plan;

  switch (values.plan) {
    case "arcade":
      plan = { name: "Arcade", price: values.pricing ? "$90/yr" : "$9/mo" };
      break;
    case "advanced":
      plan = { name: "Advanced", price: values.pricing ? "$120/yr" : "$12/mo" };
      break;
    case "pro":
      plan = { name: "Pro", price: values.pricing ? "$150/yr" : "$15/mo" };
      break;
    default:
      break;
  }

  let pricing = values.pricing ? "Yearly" : "Monthly";

  let addons = [
    ...values.addons.map((addon) => {
      if (addon === "online_service")
        return {
          name: "Online service",
          price: values.pricing ? "+$10/yr" : "+$1/mo",
        };
      if (addon === "larger_storage")
        return {
          name: "Larger storage",
          price: values.pricing ? "+$20/yr" : "+$2/mo",
        };
      if (addon === "custom_profile")
        return {
          name: "Customizable profile",
          price: values.pricing ? "+$20/yr" : "+$2/mo",
        };
    }),
  ];

  let total = parseInt(plan.price.split("$")[1].split("/")[0]);

  addons.forEach((addon) => {
    total += parseInt(addon.price.split("$")[1].split("/")[0]);
  });

  return (
    <>
      <h1 className="text-3xl font-bold text-primary-500">Finishing up</h1>
      <p className=" text-cool_gray mb-6">
        Double-check everything looks OK before confirming.
      </p>
      <div className=" bg-magnolia p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div className="">
            <p className=" text-primary-500 font-medium">
              {plan.name} ({pricing})
            </p>
            <p className=" text-cool_gray text-sm underline">Change</p>
          </div>
          <p className=" font-bold text-primary-500">{plan.price}</p>
        </div>
        <hr className="my-4" />
        <div className="flex flex-col gap-2">
          {addons.map((addon, i) => (
            <div key={i} className="flex justify-between">
              <p className=" text-cool_gray">{addon.name}</p>
              <p className=" text-primary-500">{addon.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-6 flex justify-between items-center px-6">
        <p className="text-sm text-cool_gray">Total ({values.pricing ? "per year" : "per month"})</p>
        <p className=" text-primary-400 font-bold text-lg">{`+$${total}/${values.pricing ? "yr" : "mo"}`}</p>
      </div>
    </>
  );
};

export default FormFour;
