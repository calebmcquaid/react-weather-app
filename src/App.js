import React from "react";
import WeatherData from "./components/WeatherData";
import Form from "./components/Form";
import Background from "./components/Background";
import { ThemeProvider } from "emotion-theming";
import Button from "./components/Button";

const lightTheme = {
  skyColor: "#37d8e6",
  buttonObjectColor: "#ffdd00",
  buttonObjectBorderColor: "#2c3e50"
};

const darkTheme = {
  skyColor: "#2c3e50",
  buttonObjectColor: "#bdc3c7",
  buttonObjectBorderColor: "#37d8e6"
};

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
    icon: undefined,
    isLoaded: false,
    isLight: true,
    theme: lightTheme
  };

  handleClick() {
    const isLight = !this.state.isLight;
    this.setState({
      isLight: isLight,
      theme: isLight ? lightTheme : darkTheme
    });
  }

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`
    );
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        icon:
          "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
        error: "",
        isLoaded: true
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        icon: undefined,
        error: "There was an error!"
      });
    }
  };

  render() {
    const isLoaded = this.state.isLoaded;
    var div;

    if (isLoaded) {
      div = (
        <div
          style={{
            width: 600,
            height: 300,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 5,
            boxShadow: " 0px 0px 20px rgba(0,0,0,0.5)"
          }}
        >
          <div style={{ display: "flex" }}>
            <WeatherData
              city={this.state.city}
              country={this.state.country}
              temperature={this.state.temperature}
              humidity={this.state.humidity}
              description={this.state.description}
              icon={this.state.icon}
              error={this.state.error}
            />
          </div>
        </div>
      );
    } else {
      div = <div />;
    }

    return (
      <ThemeProvider
        style={{ backgroundSize: "cover", height: "100%" }}
        theme={this.state.theme}
      >
        <Background>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              backgroundSize: "cover",
              height: 978
            }}
          >
            <div
              style={{
                width: 600,
                height: 300,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: this.state.theme.buttonObjectBorderColor,
                margin: 20,
                borderRadius: 5,
                boxShadow: " 0px 0px 20px rgba(0,0,0,0.5)"
              }}
            >
              <h1 style={{ color: this.state.theme.skyColor }}>
                Get Your Weather
              </h1>
              <Form getWeather={this.getWeather} />
              <Button onClick={() => this.handleClick()}>MODE</Button>
            </div>

            {div}
          </div>
        </Background>
      </ThemeProvider>
    );
  }
}

export default App;
