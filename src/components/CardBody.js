import React from "react";

function CardBody({ desc }) {
  return (
    <p className="font-poppins font-[500] text-dark-blue px-[20px] p-[20px]">
      {desc}
    </p>
  );
}

export default CardBody;
