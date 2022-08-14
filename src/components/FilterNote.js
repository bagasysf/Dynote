import React, { useState } from "react";

function FilterNote({ selected }) {
  const [isActive, setIsActive] = useState(false);
  const options = ["Active", "Archived"];

  return (
    <div className="flex flex-col gap-[20px] relative">
      <div
        onClick={() => setIsActive(!isActive)}
        className="flex justify-between items-center py-[15px] px-[20px] bg-primary-linear-purple text-white font-bold rounded-[10px] hover:bg-primary-yellow-hover cursor-pointer"
      >
        <span>All Notes</span>
        <svg
          width="20"
          height="14"
          viewBox="0 0 20 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isActive ? "rotate-180" : ""}
        >
          <path
            d="M11.0385 13.0222C10.5139 13.6593 9.48612 13.6593 8.9615 13.0222L0.27448 2.47254C-0.388923 1.6669 0.225421 0.499997 1.31298 0.499997L18.687 0.499999C19.7746 0.499999 20.3889 1.6669 19.7255 2.47254L11.0385 13.0222Z"
            fill="white"
          />
        </svg>
      </div>
      {isActive && (
        <ul className="flex z-10 absolute w-full top-[75px] flex-col justify-between items-start font-bold rounded-[10px] overflow-hidden cursor-pointer">
          {options.map((option) => (
            <li
              key={option}
              onClick={(e) => {
                selected = option;
                setIsActive(false);
              }}
              className="flex w-full bg-primary-linear-purple text-white py-[15px] px-[20px] hover:bg-primary-yellow-hover hover:text-white"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterNote;
