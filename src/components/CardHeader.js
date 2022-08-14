import React from "react";

function CardHeader({ name, category, date }) {
  if (category === false) {
    return (
      <div className="flex flex-col gap-[10px] font-poppins px-[20px] pt-[20px]">
        <h1 className="text-[20px] font-[700] text-dark-purple">{name}</h1>
        <div className="inline-flex">
          <div className="px-[20px] py-[5px] bg-primary-yellow text-[#7800B7] rounded-[10px]">
            Active
          </div>
        </div>
        <span className="text-[12px] font-[500] text-secondary-purple">
          {date}
        </span>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-[10px] font-poppins px-[20px] pt-[20px]">
        <h1 className="text-[20px] font-[700] text-dark-purple">{name}</h1>
        <div className="inline-flex">
          <div className="px-[20px] py-[5px] bg-primary-purple text-white rounded-[10px]">
            Archived
          </div>
        </div>
        <span className="text-[12px] font-[500] text-secondary-purple">
          {date}
        </span>
      </div>
    );
  }
}

export default CardHeader;
