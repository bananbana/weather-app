import React from "react";
import { FC } from "react";

interface MainCompartmentProps {
  cityName: string;
  countryCode: string;
  mainTemp: number;
  maxTemp: number;
  minTemp: number;
  weather: string;
  weatherDescr: string;
  iconId: string;
}

const MainCompartment: FC<MainCompartmentProps> = ({
  cityName,
  countryCode,
  mainTemp,
  maxTemp,
  minTemp,
  weather,
  weatherDescr,
  iconId,
}) => {
  return (
    <div className="mt-40 flex flex-col w-1/2 bg-gray-50/70 p-8 rounded-lg">
      <h1 className="text-xl">
        {cityName}, {countryCode}
      </h1>
      <p className="text-8xl font-semibold pb-4">{Math.floor(mainTemp)}°C</p>
      <div className="flex items-center bg-gray-50/50 text-gray-700 rounded-md">
        <img
          className="h-24 w-24"
          id="wicon"
          src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
          alt="weather icon"
        ></img>
        <div className="ml-8">
          <p className="text-base">{weather}</p>
          <p className="text-xs">{weatherDescr}</p>
        </div>
      </div>
      <div className="flex gap-4 md:w-2/5 sm:w-full mt-6 justify-between pl-2">
        <span className="text-sm">
          Max temperature: <p className="text-xl">{Math.floor(maxTemp)}°C</p>
        </span>

        <span className="text-sm">
          Min temperature: <p className="text-xl">{Math.floor(minTemp)}°C</p>
        </span>
      </div>
    </div>
  );
};

export default MainCompartment;
