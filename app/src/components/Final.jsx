import React from "react";
import icon from "../assets/images/icon-thank-you.svg";

const Final = () => {
  return (
    <div className="max-w-xl mx-auto flex flex-col items-center justify-center gap-8 -mt-8">
      <img src={icon} alt="" />
      <h2 className=" text-primary-500 text-2xl text-center font-bold">Thank you!</h2>
      <p className="text-sm text-cool_gray text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
};

export default Final;
