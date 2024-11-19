import thankYouIcon from "../assets/images/icon-thank-you.svg";
import RestartButton from "./RestartButton";

function PredictSalary({ predictedSalary, skills, handleRestart }) {
  console.log(skills);
  const getSkills = (skills) => {
    return Object.keys(skills).map((skill, index) => (
      <span key={index} className="text-sm font-semibold text-MarineBlue">
        {skill.replace("_"," ")} : {skills[skill]}
      </span>
    ));
  };
  return (
    <div className="flex flex-col items-center justify-center lg:p-[84px] py-16 text-center">
      <img
        className="w-16 lg:w-20"
        src={thankYouIcon}
        alt="checkmark-icon-thank-you"
      />
      <span className=" text-2xl lg:text-3xl font-semibold text-MarineBlue mt-5 mb-2 lg:mt-7 lg:mb-3">
        Your predicted salary is ${predictedSalary}
      </span>
      <span className=" text-l lg:text-3xl font-semibold text-MarineBlue mt-5 mb-2 lg:mt-7 lg:mb-3">
        Extracted skills from description:
      </span>
        {Object.keys(skills).length > 0 && getSkills(skills)}
      <p className=" text-CoolGray">
        The prediction is based on Linkedin Dataset
      </p>
      <RestartButton handleRestart={handleRestart}/>
    </div>
  );
}

export default PredictSalary;
