import React from "react";
import WeatherData from "./components/WeatherData";
import Titles from "./components/Titles";
import Form from "./components/Form";
import {jsx, css} from '@emotion/core';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      })
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "There was an error!"
      })
    }

  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: [],
  //     isLoaded: false
  //   };
  // }

  // componentDidMount() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then(res => res.json())
  //     .then(json => {
  //       this.setState({
  //         isLoaded: true,
  //         items: json
  //       });
  //     });
  // }

  render() {
    // const { isLoaded, items } = this.state;
    // if (!isLoaded) {
    //   return <div>Loading...</div>;
    // } else {


    return (
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <div style={{  width: 600, height: 300, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', }}>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Route component={WeatherData} />
      </div>
      </div>
    );
  }
}

export default App;
