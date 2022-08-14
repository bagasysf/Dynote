import React from "react";

function Button({ headerlink, text }) {
  return (
    <a
      href={headerlink}
      className="py-[15px] px-[30px] bg-primary-yellow text-primary-purple font-bold rounded-[10px] hover:bg-primary-yellow-hover cursor-pointer"
    >
      {text}
    </a>
  );
}

export default Button;
