import React, { useState } from "react";
import clsx from "clsx";
import { useFormContext } from "../context/FormContextProvider";

function TextInput({ name, suggestion }) {
  const { formInput, setFormInput } = useFormContext();
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput({ ...formInput, [name]: value });

    // Filter suggestions based on input
    const filtered = suggestion
      .filter(
        (suggestion) =>
          suggestion.toLowerCase().includes(value.toLowerCase()) && value
      )
      .slice(0, 10);

    setFilteredSuggestions(filtered);
    setShowSuggestions(filtered.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setFormInput({ ...formInput, [name]: suggestion });
    setShowSuggestions(false);
  };

  return (
    <div className="pb-5 relative">
      <label
        htmlFor={name}
        className="pb-1 text-sm text-MarineBlue block font-medium"
      >
        {name}
      </label>
      <input
        id={name}
        name={name}
        value={formInput[name]}
        onChange={handleChange}
        placeholder={name}
        className={clsx(
          "border rounded-lg border-gray-300 h-9 w-[100%] placeholder:text-gray-400 px-3 py-5 placeholder:font-medium max-w-lg hover:cursor-pointer hover:border-PurplishBlue focus-visible:border-PurplishBlue"
        )}
        required
        autoComplete="off"
      />
      {showSuggestions && (
        <ul className="absolute border border-gray-300 rounded-lg bg-white w-full max-w-lg mt-1 z-10 max-h-40 overflow-y-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-3 py-2 hover:bg-gray-200 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TextInput;
