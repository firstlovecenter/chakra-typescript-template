import React from "react";

function UKFlag() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500">
      <g strokeWidth="1pt" transform="scale(16.667)">
        <path fill="#006" d="M0 0H60V30H0z"></path>
        <g>
          <path
            fill="#fff"
            d="M0 0v3.354L53.292 30H60v-3.354L6.708 0H0zm60 0v3.354L6.708 30H0v-3.354L53.292 0H60z"
          ></path>
          <path fill="#fff" d="M25 0v30h10V0H25zM0 10v10h60V10H0z"></path>
          <path fill="#c00" d="M0 12v6h60v-6H0zM27 0v30h6V0h-6z"></path>
          <path
            fill="#c00"
            d="M0 30l20-10h4.472l-20 10H0zM0 0l20 10h-4.472L0 2.236V0zm35.528 10l20-10H60L40 10h-4.472zM60 30L40 20h4.472L60 27.764V30z"
          ></path>
        </g>
      </g>
    </svg>
  );
}

export default UKFlag;
