import React from "react";
import { FC } from "react";

interface AddInfoProps {
  feelTemp: number;
  humidity: number;
  windSpeed: number;
}

const AddInfo: FC<AddInfoProps> = ({ feelTemp, humidity, windSpeed }) => {
  return (
    <div className="mt-16 px-12 sm:px-4 flex w-1/2 h-fit justify-around bg-gray-50/70 py-8 rounded-lg">
      <div className="flex flex-wrap flex-col items-center h-16 justify-between">
        <span className="font-bold text-4xl">{Math.floor(feelTemp)}°C</span>
        Feels Like
      </div>
      <div className="flex flex-wrap flex-col items-center h-16 justify-between">
        <span className="font-bold text-4xl">{Math.floor(humidity)}%</span>
        Humidity
      </div>
      <div className="flex flex-wrap flex-col items-center h-16 justify-between">
        <span className="font-bold text-4xl">{Math.floor(windSpeed)}kM/h</span>
        Wind Speed
      </div>
    </div>
  );
};

export default AddInfo;
