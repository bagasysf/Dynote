import React from "react";
import Brand from "./Brand";
import Button from "./Button";
import FormCreateNote from "./FormCreateNote";
import ImageHeader from "./ImageHeader";

function Header() {
  return (
    <header className="relative h-[366px] overflow-hidden">
      <div className="absolute w-full font-poppins flex flex-col gap-[20px] justify-center items-center h-[366px]">
        <div className="flex flex-col items-center">
          <Brand text="Dynote." />
          <span className="font-[500] text-white">
            101 Solution for your daily notes
          </span>
        </div>
        <Button text="Make a note" />
      </div>
      <ImageHeader />
    </header>
  );
}

export default Header;
