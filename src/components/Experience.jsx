import { useFormContext } from "../context/FormContextProvider";
function ExperienceRadioButton({ title }) {
  const { formInput, setFormInput } = useFormContext();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };
  return (
    <div>
      <input
        type="radio"
        name="experience"
        checked={formInput["experience"] === title}
        value={title}
        defaultChecked={title === "Entry level"}
        id={title}
        onChange={handleChange}
        className="peer appearance-none block"
      />
      <label
        htmlFor={title}
        className=" hover:border-PurplishBlue hover:border peer-checked:bg-Alabaster peer-checked:border-PurplishBlue peer-checked:border peer-checked:rounded-lg border-2 border-LightGray rounded-lg w-full h-full flex  items-start p-4 lg:flex-col lg:gap-11 lg:pr-10 lg:min-w-[8.5rem]"
      >
        <div className="inline-block">
          <span className="inline text-MarineBlue font-semibold">{title}</span>
        </div>
      </label>
    </div>
  );
}

function Experience() {
  const titles = [
    "Internship",
    "Entry level",
    "Mid-Senior level",
    "Associate",
    "Director",
    "Executive",
  ];
  return (
    <div>
    <fieldset className="flex flex-col gap-3 lg:flex-row lg:gap-4 flex-wrap">
    {titles.map((title, index) => (
      <ExperienceRadioButton key={index} id={index} title={title} />
    ))}
  </fieldset>
  </div>
  );
}

export default Experience;
