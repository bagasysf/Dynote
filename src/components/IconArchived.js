import React from "react";

function IconArchived({ category, onArchived, id }) {
  if (category === false) {
    return (
      <div
        className="inline-flex rounded-[10px] bg-white border-custom-light-blue border-[2px] px-[12px] py-[15px] items-center justify-center"
        onClick={() => onArchived(id)}
      >
        <svg
          width="24"
          height="17"
          viewBox="0 0 24 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.29231C0 0.578586 0.565535 0 1.26316 0H6.31579C7.01341 0 7.57895 0.578586 7.57895 1.29231V2.4H22.7368C23.4345 2.4 24 2.97858 24 3.6923V3.87692H3.78947C3.09185 3.87692 2.52632 4.45551 2.52632 5.16923V15.5077C2.52632 16.2204 1.96243 16.7983 1.26621 16.8H1.26316C0.565535 16.8 0 16.2214 0 15.5077V3.6923C0 3.66127 0.00106935 3.63049 0.00317242 3.6H0V1.29231Z"
            fill="#81BBFF"
          />
          <path
            d="M2.52937 16.8H22.7368C23.4345 16.8 24 16.2214 24 15.5077V5.16923H5.05263C4.35501 5.16923 3.78947 5.74782 3.78947 6.46154L3.78947 5.16923V15.5077C3.78947 16.2204 3.22559 16.7983 2.52937 16.8Z"
            fill="#81BBFF"
          />
        </svg>
      </div>
    );
  } else {
    return (
      <div
        className="inline-flex rounded-[10px] bg-custom-light-blue border-custom-light-blue border-[2px] px-[12px] py-[15px] items-center justify-center"
        onClick={() => onArchived(id)}
      >
        <svg
          width="24"
          height="17"
          viewBox="0 0 24 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.29231C0 0.578586 0.565535 0 1.26316 0H6.31579C7.01341 0 7.57895 0.578586 7.57895 1.29231V2.4H22.7368C23.4345 2.4 24 2.97858 24 3.6923V3.87692H3.78947C3.09185 3.87692 2.52632 4.45551 2.52632 5.16923V15.5077C2.52632 16.2204 1.96243 16.7983 1.26621 16.8H1.26316C0.565535 16.8 0 16.2214 0 15.5077V3.6923C0 3.66127 0.00106935 3.63049 0.00317242 3.6H0V1.29231Z"
            fill="white"
          />
          <path
            d="M2.52937 16.8H22.7368C23.4345 16.8 24 16.2214 24 15.5077V5.16923H5.05263C4.35501 5.16923 3.78947 5.74782 3.78947 6.46154L3.78947 5.16923V15.5077C3.78947 16.2204 3.22559 16.7983 2.52937 16.8Z"
            fill="white"
          />
        </svg>
      </div>
    );
  }
}

export default IconArchived;
