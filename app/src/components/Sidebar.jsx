import React from "react";

const Sidebar = ({ steps, currentStepIndex }) => {
  return (
    <div className="bg-primary-400 p-6 rounded-lg flex flex-col gap-4 basis-1/4 bg-[url(./assets/images/bg-sidebar-desktop.svg)] bg-bottom bg-no-repeat">
      {steps.map((step) => (
        <div key={step.id} className="flex items-center gap-4">
          <div
            className={` border rounded-full  aspect-square flex w-8 items-center justify-center ${
              step.id === currentStepIndex + 1
                ? "bg-primary-200 border-primary-200"
                : " bg-transparent border-white text-white"
            }`}
          >
            <p>{step.id}</p>
          </div>
          <div className="flex flex-col">
            <p className="text-cool_gray text-xs">STEP {step.id}</p>
            <p className="text-white font-bold uppercase text-sm">{step.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
