import React from 'react';
import Titles from "./components/titles"
import Form from "./components/form"
import Weather from "./components/weather"

const Api_Key = "6c8af4cbc13ff086bb4744c23fa6fc75"

class App extends React.Component {

  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.preventDefault();
  
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
  
    const response = await api_call.json();
    
    console.log(response);
    
  }

  render() {
    return (
      <div>
        <Titles />
        <Form loadWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  }
}

export default App;
