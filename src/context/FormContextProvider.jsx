import { useState, useContext, createContext } from "react";

const FormContext = createContext();
export const useFormContext = () => useContext(FormContext);

function FormContextProvider({ children }) {
  const [formInput, setFormInput] = useState({
    title: "",
    location: "",
    industry: "",
    experience: "",
    description: "",
  });

  return (
    <FormContext.Provider value={{ formInput, setFormInput }}>
      {children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;
