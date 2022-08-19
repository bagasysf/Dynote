import React from "react";
import BrandPurple from "./BrandPurple";
import FooterIcon from "./FooterIcon";

function FooterLarge() {
  return (
    <footer className="font-poppins h-[440px] gap-[10px] justify-center items-center p-[20px] hidden lg:flex lg:flex-col">
      <BrandPurple text="Dynote." />
      <p className="text-center text-[14px] w-[261px] text-[#D287F9] gap-[10px] p-[10px]">
        Thanks dicoding x IM3 Ooredoo for all the course. It’s fun and full of
        benefits especially for me. Hope, God bless you all
      </p>
      <FooterIcon />
    </footer>
  );
}

export default FooterLarge;
