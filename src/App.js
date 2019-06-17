import React, { Component, Fragment } from "react";
import Home from './Components/Home';
import Form from './Components/Form'
const API_KEY = "0ff1118f587bd7dd844a93c77e450e99"

export default class App extends Component {

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://openweathermap.org/data/2.5/weather?q=Miami&appid=${API_KEY}`);
    const data = await api_call.json();
    console.log(data)
  }


  render() {
    return (
      < Fragment >
        <Home />
        <Form getWeather={this.getWeather} />



      </Fragment >
    )
  }
}
