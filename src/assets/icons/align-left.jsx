import React from "react";
import AlignLeftSVG from '../images/align-left.svg';

const AlignLeftIcon = ({ primaryColor, style }) => {
  return (
    <svg
      fill={primaryColor} // This will override the fill color
      width="24px"
      height="24px"
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={AlignLeftSVG} />
    </svg>
  );
};

export default AlignLeftIcon;

