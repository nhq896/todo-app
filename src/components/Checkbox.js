import React from "react";
import { BsCheck } from "react-icons/bs";

export const Checkbox = ({ checked = false, onClick }) => {
  return (
    <label
      // onClick={onClick}
      className="relative flex justify-center items-center max-w-max"
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onClick}
        className="appearance-none p-2 cursor-pointer rounded-sm border-2 border-[#61dafb] checked:bg-[#61dafb]"
      />
      {checked && (
        <span className="absolute pointer-events-none text-[#17181f] text-xl">
          <BsCheck />
        </span>
      )}
    </label>
  );
};
