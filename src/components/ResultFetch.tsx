import { LucideDroplet, LucideMapPinned, LucideWind } from "lucide-react";
import { City } from "../types/city";

type ResultFetchProps = {
  city: City;
};

const ResultFetch = ({ city }: ResultFetchProps) => {
  return (
    <div className="p-6 bg-white rounded shadow-md flex flex-col">
      <div className="flex justify-center text-sky-700">
        <LucideMapPinned size={30} strokeWidth={0.8} />
      </div>
      <h2 className="text-3xl font-bold text-sky-700 text-center">
        {city.name} - {city.sys.country}
      </h2>
      <span className="border my-3"></span>
      <p className="text-center text-5xl font-semibold tracking-wide text-slate-500">
        {city.main.temp}º
      </p>
      <div className="flex justify-center gap-2 mt-4">
        <div className="flex items-center font-bold text-slate-500">
          <LucideDroplet size={30} strokeWidth={0.8} />
          <span className="sr-only">Umidade</span>
          {city.main.humidity}%
        </div>
        <div className="flex items-center gap-1 font-bold text-slate-500">
          <LucideWind size={30} strokeWidth={0.8} />
          <span className="sr-only">Umidade</span>
          {city.wind.speed} km/h
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img
          src={`http://openweathermap.org/img/wn/${city.weather[0].icon}@2x.png`}
          alt={city.weather[0].description}
          className="size-16"
        />
        <p className="text-lg capitalize text-slate-500">
          {city.weather[0].description}
        </p>
      </div>
    </div>
  );
};

export default ResultFetch;
