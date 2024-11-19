import clsx from "clsx";
import { useStepContext } from "../context/StepContextProvider";

function NextButton({ formSubmitted }) {
  const { step, setStep } = useStepContext();
  const handleClick = () => {
    if (step < 5 && !formSubmitted) {
      setStep(step + 1);
    }else{
      setStep(1);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={clsx(
        "border-none bg-MarineBlue text-white px-4 my-4 mx-4 rounded-[0.25rem] text-sm lg:my-3 lg:mx-0 lg:px-5 lg:text-base",
        { hidden: step === 5 || formSubmitted }
      )}
    >
      Next
    </button>
  );
}

export default NextButton;
