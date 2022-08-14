import React from "react";

function IconDelete({ onDelete, id }) {
  return (
    <div
      className="inline-flex rounded-[10px] bg-custom-pink px-[15px] py-[12px] items-center justify-center"
      onClick={() => onDelete(id)}
    >
      <svg
        width="17"
        height="24"
        viewBox="0 0 17 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2.78461 6.98734C2.07089 6.98734 1.4923 7.5314 1.4923 8.20253V22.7848C1.4923 23.4559 2.07089 24 2.78461 24H14.4154C15.1291 24 15.7077 23.4559 15.7077 22.7848V8.20253C15.7077 7.5314 15.1291 6.98734 14.4154 6.98734H2.78461ZM4.79487 9.41772C4.39836 9.41772 4.07692 9.71998 4.07692 10.0928V20.8945C4.07692 21.2674 4.39836 21.5696 4.79487 21.5696C5.19138 21.5696 5.51282 21.2674 5.51282 20.8945V10.0928C5.51282 9.71998 5.19138 9.41772 4.79487 9.41772ZM7.95384 10.0928C7.95384 9.71998 8.27528 9.41772 8.67179 9.41772C9.0683 9.41772 9.38974 9.71998 9.38974 10.0928V20.8945C9.38974 21.2674 9.0683 21.5696 8.67179 21.5696C8.27528 21.5696 7.95384 21.2674 7.95384 20.8945V10.0928ZM12.5487 9.41772C12.1522 9.41772 11.8308 9.71998 11.8308 10.0928V20.8945C11.8308 21.2674 12.1522 21.5696 12.5487 21.5696C12.9452 21.5696 13.2667 21.2674 13.2667 20.8945V10.0928C13.2667 9.71998 12.9452 9.41772 12.5487 9.41772Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.36923 0C4.83394 0 4.4 0.408044 4.4 0.911393V3.34177H1.4923C0.778583 3.34177 0.199997 3.88583 0.199997 4.55696C0.199997 5.22809 0.778583 5.77215 1.4923 5.77215H15.7077C16.4214 5.77215 17 5.22809 17 4.55696C17 3.88583 16.4214 3.34177 15.7077 3.34177H12.8V0.911393C12.8 0.408044 12.3661 0 11.8308 0H5.36923ZM10.8615 3.34177V1.82279H6.33846V3.34177H10.8615Z"
          fill="white"
        />
      </svg>
    </div>
  );
}

export default IconDelete;