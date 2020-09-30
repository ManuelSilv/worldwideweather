import React, { useState } from 'react';
const api = {
  key: "f938bcfa8b22602b2c619fc8af408fd6",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const {query, setQuery}= useState('');
  const {weather, setWeather}= useState({});

  const dateBuilder = (d) =>{

    let months = ["January", "February", "March", "April", "May", "June", "July", "August",
     "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
     "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }
  return (
    <div className="app warm ">
      <main>
        <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
          />
        </div> 
        <div className="location-box">
          <div className="location">New Orleans, Louisiana</div> 
          <div className="date">{dateBuilder(new Date())}</div>   
        </div>
        <div className="weather-box">
          <div className="temp">
            15°C
          </div>
          <div className="weather">
            Sunny
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
