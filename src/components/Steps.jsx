import clsx from "clsx";

function Step({ step, stepNo, stepName }) {
  return (
    <div className="items-center flex gap-x-5">
      <div
        className={clsx(
          "aspect-square w-8 rounded-[100%] border grid place-content-center",
          {
            " border-white text-white": step !== stepNo,
            " bg-LightBlue text-MarineBlue": step === stepNo,
          }
        )}
      >
        <span>{stepNo}</span>
      </div>
      <div className="hidden lg:flex uppercase flex-col font-body">
        <p className="text-xs text-PastelBlue">step {stepNo}</p>
        <p className=" text-sm text-white font-semibold tracking-wide">
          {stepName}
        </p>
      </div>
    </div>
  );
}

function Steps({ step }) {
  return (
    <div className=" flex items-center justify-center gap-x-4 mt-[-5.5rem] lg:mt-0 lg:bg-sidebar-dt lg:h-[568px] lg:min-w-[274px] lg:flex-col lg:justify-start lg:items-start lg:gap-7 lg:p-8">
      {" "}
      {/* steps p-8 lg:bg-sidebar-dt lg:h-[568px] */}
      {[
        [1, "Title"],
        [2, "Location"],
        [3, "Industry"],
        [4, "Experience"],
        [5, "Description"],
      ].map((stepArr,index) => {
        return (
          <Step key={index} step={step} stepNo={stepArr[0]} stepName={stepArr[1]}></Step>
        );
      })}
    </div>
  );
}

export default Steps;
