import { useState } from "react";
import axios from "axios";
import Icon from "./icons/Icon";
import SearchBar from "./components/SearchBar";
import MainCompartment from "./components/MainCompartment";
import AddInfo from "./components/AddInfo";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5eea1c1b66d08a9792afdecaee47cd10&units=metric`;

  const searchLocation = () => {
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
        setInvalidInput(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 404) setInvalidInput(true);
      });
  };
  return (
    <div className="flex items-center justify-center bg-cyan-700 h-full pb-8">
      <div className="fixed top-0 inset-x-0 p-8 w-full h-fit bg-zinc-100 border-b border-zinc-300 z-10 py-2">
        <div className="h-full mx-auto flex items-center gap-4">
          <Icon />
          <SearchBar
            invalidInput={invalidInput}
            searchLocation={searchLocation}
            setLocation={setLocation}
          />
        </div>
      </div>
      {data.main !== undefined && (
        <div className="flex flex-col w-full justify-center items-center">
          <MainCompartment
            cityName={data.name}
            countryCode={data.sys.country}
            mainTemp={data.main.temp}
            maxTemp={data.main.temp_max}
            minTemp={data.main.temp_min}
            weather={data.weather[0].main}
            weatherDescr={data.weather[0].description}
            iconId={data.weather[0].icon}
          />
          <AddInfo
            feelTemp={data.main.feels_like}
            humidity={data.main.humidity}
            windSpeed={data.wind.speed}
          />
        </div>
      )}
    </div>
  );
}

export default App;
