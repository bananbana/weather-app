import React from "react";
import { FC } from "react";

interface TempProps {
  className: string;
}

const Temp: FC<TempProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 512"
      className={className}
    >
      <path d="M192 384c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-23.7 12.9-44.3 32-55.4V224c0-17.7 14.3-32 32-32s32 14.3 32 32v104.6c19.1 11.1 32 31.7 32 55.4zm32-84.7c19.9 22.6 32 52.2 32 84.7 0 70.7-57.3 128-128 128-.3 0-.6 0-.9 0C56.8 511.5-.4 453.6 0 383.3 .2 351.1 12.2 321.8 32 299.3V96c0-53 43-96 96-96s96 43 96 96v203.3zM208 384c0-34.3-19.4-52.2-32-66.5V96c0-26.5-21.5-48-48-48S80 69.5 80 96v221.5c-12.7 14.4-31.8 32.1-32 66.1-.2 43.9 35.6 80.1 79.4 80.4L128 464c44.1 0 80-35.9 80-80z" />
    </svg>
  );
};

export default Temp;
