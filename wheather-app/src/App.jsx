import React, { useEffect, useState } from "react";
import SearchIcon from "./images/search.png";
import Clear from "./images/clear.png";
import Clouds from "./images/clouds.png";
import Drizzle from "./images/drizzle.png";
import Humidity from "./images/humidity.png";
import Mist from "./images/mist.png";
import Rain from "./images/rain.png";
import snow from "./images/snow.jpg";
import Wind from "./images/wind.png";
import "./App.css";
import { FaHeart } from "react-icons/fa";
import { MdError } from "react-icons/md";

const WheatherDetails = ({
  icon,
  temp,
  city,
  country,
  lat,
  log,
  humidity,
  wind,
  apidata,
  citynotfound,
}) => {
  return (
    <>
      <div className="image">
        <img src={icon} alt="Imgae" />
      </div>
      <div className="details-container">
        <div className="details">
          <div className="texp">{temp}°C</div>
          <div className="location">{city}</div>
          <div className="country">{country}</div>
        </div>
        <div className="cord">
          <div>
            <span className="lat">latitude:  </span>
            <span>{lat}</span>
          </div>
          <div>
            <span className="log">longtitude:</span>
            <span>{log}</span>
          </div>
        </div>
      </div>
      <div className="data-container">
        <div>
          <div className="element">
            <img src={Humidity} alt="" />
          </div>
          <div className="humidity-percent">{humidity}%</div>
          <div className="text">Humidity</div>
        </div>
        <div>
          <div className="element">
            <img src={Wind} alt="" />
          </div>
          <div className="humidity-percent">{wind}%</div>
          <div className="text">Wind</div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  let API_KEY = "060ecf3bbaa0256cab90296be8824df6";

  const [icon, setIcon] = useState(Rain);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);

  const [text, setText] = useState("");
  const [citynotfound, setcitynotfound] = useState(false);
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(false);

  const [apidata, setData] = useState(null);

  const weatherIconMap = {
    "01d": Clear,
    "01n": Clear,
    "02d": Clear,
    "02n": Clear,
    "03d": Drizzle,
    "03n": Drizzle,
    "04d": Drizzle,
    "04n": Drizzle,
    "09d": Rain,
    "09n": Rain,
    "10d": Rain,
    "10n": Rain,
    "13d": snow,
    "13n": snow,
  };

  useEffect(() => {
    fetchData();
  }, []);

const fetchData = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${API_KEY}&units=Metric`;

    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);
      setData(data);
      if (data.cod === "404") {
        console.error("city not found");
        setcitynotfound(true);

        seterror("Api not not working");
        return;
      } else {
        setcitynotfound(false);
        seterror(false);
      }
      setTemp(Math.floor(data.main.temp));
      setHumidity(data.main.humidity);
      setWind(data.wind.speed);
      setCity(data.name);
      setCountry(data.sys.country);
      setLat(data.coord.lat);
      setLog(data.coord.lon);
      const weatherIconsCode = data.weather[0].icon;
      setIcon(weatherIconMap[weatherIconsCode] || Clear);
    } catch (error) {
      console.error("error is", error.message);
    } finally {
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleClick = () => {
    setText("");
    fetchData();
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchData();
      setText("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input
            type="text"
            className="cityInput"
            placeholder="Search City"
            onChange={handleChange}
            onSubmit={handleClick}
            value={text}
            onKeyDown={handleKeyDown}
          />
          <div className="search-icon " onClick={handleClick}>
            <img src={SearchIcon} className="searchicon" alt="search" />
          </div>
        </div>
       {error && <div className="erro-container">
          {citynotfound && <div className="city-not">City Not Found</div>}
          {error && <div className="erro-message">{error}</div>}
          {error && <MdError className="icon" />}
        </div>}
        {!citynotfound && !error && (
          <WheatherDetails
            icon={icon}
            temp={temp}
            city={city}
            country={country}
            lat={lat}
            log={log}
            humidity={humidity}
            wind={wind}
            data={apidata}
            citynotfound={citynotfound}
          />
        )}
        <p className="foot">With <FaHeart className="foot-icon"/> Naveen </p>
      </div>
    </>
  );
};

export default App;
