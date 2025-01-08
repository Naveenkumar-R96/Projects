import React, { useState } from "react";
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

const WheatherDetails = ({ icon, temp, city, country, lat, log }) => {
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
            <span className="lat">latitude</span>
            <span>{lat}</span>
          </div>
          <div>
            <span className="log">longtitude</span>
            <span>{log}</span>
          </div>
        </div>
      </div>
      <div className="data-container">
        <div>
          <div className="element">
            <img src={Humidity} alt="" />
          </div>
          <div className="humidity-percent">%</div>
          <div className="text">Humidity</div>
        </div>
        <div>
          <div className="element">
            <img src={Wind} alt="" />
          </div>
          <div className="humidity-percent">%</div>
          <div className="text">Humidity</div>
        </div>
      </div>
    </>
  );
};

const App = () => {
  const [icon, setIcon] = useState(Rain);
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("chennai");
  const [country, setCountry] = useState("In");
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);

  return (
    <>
      <div className="container">
        <div className="input-container">
          <input type="text" className="cityInput" placeholder="Search City" />
          <div className="search-icon">
            <img src={SearchIcon} className="searchicon" alt="search" />
          </div>
        </div>
        <WheatherDetails
          icon={icon}
          temp={temp}
          city={city}
          country={country}
          lat={lat}
          log={log}
        />
      </div>
    </>
  );
};

export default App;
