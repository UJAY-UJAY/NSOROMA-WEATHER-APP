import React from 'react';
import './index.css';

const id = 'c1e02e8db36a1accbeb63619c7d1d6e8'
const website = 'https://api.openweathermap.org/data/2.5/'

function App() {
  const [ query, setQuery ] = React.useState('');
  const [ weather, setWeather ] = React.useState({});

  const handleSearch = (e) => {
    e.preventDefault();

    fetch(`${website}weather?q=${query}&units=metric&APPID=${id}`)
    .then((res) => res.json())
    .then((result) => {
        setQuery("");
        setWeather(result);
        console.log(result);
    });
  }

  return (
    <div className="App">
      <div className='search-bar'>
        <input className='p'
          type='search'
          value={query}
          placeholder='Destination...'
          onChange={ e => setQuery(e.target.value)}
        />
        <input className='pp'
          type='submit'
          value='Click'                         
          onClick={handleSearch}
        />
      </div>

      <div>
      {typeof weather.main != "undefined" ? (
      <main>
          <div className="allweather">
            <div className="location">
              <h6>{weather.name}, {weather.sys.country} </h6>
            </div>
            <br/>
            <br/>
           
           
            <div className="justtemp">
              <div className="">
                  <h5><span>{Math.round(weather.main.temp)}°C</span> </h5>
              </div>
              <br/>
              <br/>
              
              <div className="justweather">
                 <h5><span>{weather.weather[0].main}</span></h5>
              </div>

            </div>
          </div>
      </main>
          
        ) : null }
      </div>
      
    </div>
  );
}
export default App;
