import React from "react";

function HomeIcon(props) {
  return (
    <span className={props.classes}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="12"
        fill="none"
        viewBox="0 0 14 12"
      >
        <path
          fill="#333"
          d="M5.656 11.344H2.344V6h-2L7 0l6.656 6h-2v5.344H8.344v-4H5.656v4z"
        ></path>
      </svg>
    </span>
  );
}

export default HomeIcon;