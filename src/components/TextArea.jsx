import clsx from "clsx";
import { useFormContext } from "../context/FormContextProvider";

function TextArea({ name }) {
  const { formInput, setFormInput } = useFormContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });
  };

  return (
    <div className="pb-5 relative">
      <label
        htmlFor={name}
        className="pb-1 text-sm text-MarineBlue block font-medium"
      >
        {name}
      </label>
      <textarea
        id={name}
        name={name}
        value={formInput[name]}
        onChange={handleChange}
        placeholder={name}
        className={clsx(
          "border rounded-lg border-gray-300 w-full placeholder:text-gray-400 px-3 py-3 placeholder:font-medium max-w-lg hover:cursor-pointer hover:border-PurplishBlue focus-visible:border-PurplishBlue"
        )}
        rows={5}
        required
      />
    </div>
  );
}

export default TextArea;
