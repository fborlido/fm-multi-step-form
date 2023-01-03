import React from "react";
import { Field, ErrorMessage, useFormikContext } from "formik";

const FormOne = () => {
  const { errors, touched } = useFormikContext();
  return (
    <>
      <h1 className="text-3xl font-bold text-primary-500">Personal info</h1>
      <p className=" text-cool_gray mb-6">
        Please provide your name, email address, and phone nummber.
      </p>
      <div className="flex flex-col gap-1 mb-4 relative">
        <label htmlFor="name" className="text-primary-500 font-medium">
          Name
        </label>
        <Field
          id="name"
          name="name"
          placeholder="e.g. Stephan King"
          className={`border py-2 px-4 rounded-md ${
            errors.name && touched.name && "border-primary-600"
          }`}
        />
        <ErrorMessage
          name="name"
          component="p"
          className="absolute text-primary-600 right-0"
        />
      </div>
      <div className="flex flex-col gap-1 mb-4 relative">
        <label htmlFor="email" className="text-primary-500 font-medium">
          Email
        </label>
        <Field
          id="email"
          name="email"
          placeholder="e.g. stephanking@lorem.com"
          className={`border py-2 px-4 rounded-md ${
            errors.email && touched.email && "border-primary-600"
          }`}
        />
        <ErrorMessage
          name="email"
          component="p"
          className="absolute text-primary-600 right-0"
        />
      </div>
      <div className="flex flex-col gap-1 mb-4 relative">
        <label htmlFor="phone" className="text-primary-500 font-medium">
          Phone Number
        </label>
        <Field
          id="phone"
          name="phone"
          placeholder="e.g. 123 123 123"
          className={`border py-2 px-4 rounded-md ${
            errors.phone && touched.phone && "border-primary-600"
          }`}
        />
        <ErrorMessage
          name="phone"
          component="p"
          className="absolute text-primary-600 right-0"
        />
      </div>
    </>
  );
};

export default FormOne;
