import React from "react";
import IconArchived from "./IconArchived";
import IconDelete from "./IconDelete";

function CardIcon({ id, onDelete, category, onArchived }) {
  return (
    <div className="absolute top-[20px] right-[-12px] inline-flex flex-col gap-[20px]">
      <IconDelete id={id} onDelete={onDelete} />
      <IconArchived id={id} category={category} onArchived={onArchived} />
    </div>
  );
}

export default CardIcon;
