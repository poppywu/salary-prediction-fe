import clsx from "clsx";
import { useStepContext } from "../context/StepContextProvider";

function SubmitButton({ formSubmitted, handleSubmit }) {
  const { step } = useStepContext();
  return (
    <button
      form="main-form"
      type="submit"
      onClick={handleSubmit}
      className={clsx(
        "border-none bg-PurplishBlue text-white px-4 my-4 mx-4 rounded-[0.25rem] text-sm lg:my-3 lg:mx-0 lg:px-5 lg:text-base min-w-[95px]",
        { block: step === 5, hidden: step !== 5 || formSubmitted }
      )}
    >
      Submit
    </button>
  );
}

export default SubmitButton;
