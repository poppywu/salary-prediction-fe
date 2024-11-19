import clsx from "clsx";
import { useStepContext } from "../context/StepContextProvider";

function PrevButton({ formSubmitted }) {
  const { step, setStep } = useStepContext();
  const handleClick = () => {
    if (step > 1 && !formSubmitted) {
      setStep(step - 1);
    }
  };
  return (
    <button
      onClick={handleClick}
      className={clsx(
        "border-none text-CoolGray hover:text-MarineBlue pr-4 pl-4 my-4 mx-4 rounded-[0.25rem] text-sm lg:my-3 lg:mx-0 lg:pr-5 lg:pl-0 lg:text-base",
        { hidden: step === 1 || formSubmitted }
      )}
    >
      Prev
    </button>
  );
}

export default PrevButton;
