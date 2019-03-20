import React from 'react';

const Api_Key = "6c8af4cbc13ff086bb4744c23fa6fc75"

getWeather = async () => {

  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Api_Key}`);

  const response = await api_call.json();
  
  console.log(response);
  
}

const Weather = (props) => {
    return (
      <div>
        // Weather Info
      </div>
    )
  }

export default Weather;