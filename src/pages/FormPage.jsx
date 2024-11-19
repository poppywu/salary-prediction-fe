import clsx from "clsx";
import axios from "axios";
import { useState } from "react";
import Steps from "../components/Steps";
import BottomToolbar from "../components/BottomToolbar";
import Experience from "../components/Experience";
import PredictSalary from "../components/PredictSalary";
import TextInput from "../components/TextInput";
import TextArea from "../components/TextArea";
import { useStepContext } from "../context/StepContextProvider";
import { useFormContext } from "../context/FormContextProvider";
import { TITLE_SUGGESTION } from "../data/data";
import { LOCATION_SUGGESTION } from "../data/data";
import { INDUSTRY_SUGGESTION } from "../data/data";
import { URL } from "../data/data";

function FormPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [predictedSalary, setPredictedSalary] = useState(null);
  const [skills, setSkills] = useState({});
  const { step, setStep } = useStepContext();
  const { formInput, setFormInput } = useFormContext();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post(URL, formInput, {
        headers: {
          'Content-Type': 'application/json',
        }});
      setFormSubmitted(true);
      setPredictedSalary(response.data.predictedSalary);
      setSkills(response.data.extractedSkills);
      setLoading(false);
    } catch (error) {
      console.log("error while submitting");
      console.error(error);
    }
  };

  const handleRestart = () => {
    setFormInput({
      title: "",
      location: "",
      industry: "",
      experience: "",
      description: "",
    });
    setPredictedSalary(null);
    setSkills({});
    setFormSubmitted(false);
    setStep(1);
  };

  const stepComponents = {
    1: {
      title: "Title",
      description: "Please provide a title you want to predict salary for",
      component: <TextInput name="title" suggestion={TITLE_SUGGESTION} />,
    },
    2: {
      title: "Location",
      description: "Please provide a location you want to work at",
      component: <TextInput name="location" suggestion={LOCATION_SUGGESTION} />,
    },
    3: {
      title: "Industry",
      description: "Please provide an industry you are interested in",
      component: <TextInput name="industry" suggestion={INDUSTRY_SUGGESTION} />,
    },
    4: {
      title: "Experience",
      description: "Please your experience level",
      component: <Experience />,
    },
    5: {
      title: "Description",
      description: "Please provide a description of your skills",
      component: <TextArea name="description" />,
    },
  };

  return (
    <div className="flex flex-col mx-2">
      <div className="flex flex-col lg:flex-row bg-white rounded-xl p-6 lg:p-4 mx-2 mt-[6.125rem] lg:mt-0 shadow-lg gap-y-14 lg:gap-y-0 lg:w-[57.75rem]">
        <Steps step={step} />
        <div
          className={clsx(
            "lg:relative lg:ml-[5.25rem] lg:mr-[4.75rem] lg:mt-9 lg:w-full",
            { hidden: formSubmitted }
          )}
        >
          <h2 className=" text-2xl text-MarineBlue font-bold pb-2 lg:text-[2rem]">
            {stepComponents[step].title}
          </h2>
          <p className="text-gray-400 pr-4 pb-6 lg:pb-9">
            {stepComponents[step].description}
          </p>
          <form id="main-form">{stepComponents[step].component}</form>
          {loading && <p>Please wait, we are busy predicting your salary...</p>}
          <BottomToolbar
            formSubmitted={formSubmitted}
            handleSubmit={handleSubmit}
            handleRestart={handleRestart}
          />
        </div>

        {formSubmitted && predictedSalary ? (
            <PredictSalary predictedSalary={predictedSalary} skills={skills} handleRestart={handleRestart}/>
        ) : (
          ""
        )}
        
      </div>
      
    </div>
  );
}

export default FormPage;
