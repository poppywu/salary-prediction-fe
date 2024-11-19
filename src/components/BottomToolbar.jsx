import clsx from "clsx";
import { useStepContext } from "../context/StepContextProvider";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";
import SubmitButton from "./SubmitButton";

function BottomToolbar({ formSubmitted, handleSubmit, handleRestart }) {
  const { step } = useStepContext();
  return (
    <div
      className={clsx(
        " flex fixed lg:absolute bottom-0 left-0 bg-white h-[4.5rem] w-[100%] lg:mb-1",
        { "justify-end": step === 1, "justify-between": step !== 1 }
      )}
    >
      <PrevButton formSubmitted={formSubmitted} />
      <NextButton formSubmitted={formSubmitted} />
      <SubmitButton formSubmitted={formSubmitted} handleSubmit={handleSubmit} />
    </div>
  );
}

export default BottomToolbar;
