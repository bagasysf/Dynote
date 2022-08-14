import React from "react";
import CardBody from "./CardBody";
import CardHeader from "./CardHeader";
import CardIcon from "./CardIcon";
function Card({ name, category, date, desc, id, onDelete, onArchived }) {
  return (
    <div className="relative bg-white rounded-[10px] border-dark-blue border-[2px] border-opacity-30">
      <CardIcon
        id={id}
        category={category}
        onDelete={onDelete}
        onArchived={onArchived}
      />
      <CardHeader name={name} category={category} date={date} />
      <CardBody desc={desc} />
    </div>
  );
}

export default Card;
