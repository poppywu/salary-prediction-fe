import { useState, useContext, createContext } from "react";

const StepContext = createContext();
export const useStepContext = () => useContext(StepContext);

function StepContextProvider({ children }) {
  const [step, setStep] = useState(1);

  return (
    <StepContext.Provider value={{ step, setStep }}>
      {children}
    </StepContext.Provider>
  );
}

export default StepContextProvider;
