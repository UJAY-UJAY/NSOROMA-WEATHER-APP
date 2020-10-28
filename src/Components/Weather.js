{typeof weather.main != "undefined" ? (
    <div className="allweatherinfo">
      <div className="weather-name">
        <span>{weather.name}, {weather.sys.country} </span>
      </div>
      <div className="weather-temperature">
        <div className="temperature fig">
          <h3> <br/> <span>{Math.round(weather.main.temp)}°C</span> </h3>
        </div>
        <div className="weather fig">
          <h3> weather <br/> <span>{weather.weather[0].main}</span> </h3>
        </div>
      </div>
    </div>
  ) : null }