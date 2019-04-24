import React from 'react';
import Titles from "./components/titles";
import Form from "./components/form";
import Weather from "./components/weather";
import Picture from "./components/picture";

const Api_Key = "6c8af4cbc13ff086bb4744c23fa6fc75"

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    icon: "default",
    error: undefined
  }

  getWeather = async (e) => {

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    e.preventDefault();
  
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);
  
    const response = await api_call.json();
    
    console.log(response);

    if (city && country) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        icon: response.weather[0].icon,
        error: ""
      })
    }

    else {
      this.setState({
        error: "Please enter the values. . ."
      })
    }
  }

  render() {
    return (
      <div>
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
        <Picture
          icon={this.state.icon}
        />
      </div>
    )
  }
}

export default App;
