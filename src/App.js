import React, { Component, Fragment } from "react";
import Home from './Components/Home';
import Form from './Components/Form'
const API_KEY = "86af03787c0dd17e9115a463f68f4658"

export default class App extends Component {

  getWeather = async () => {
    const api_call = await fetch(`https://openweathermap.org/data/2.5/weather?q=Miami&appid=${API_KEY}`);
    const data = await api_call.json();
  }


  render() {
    return (
      < Fragment >
        <Home />
        <Form />



      </Fragment >
    )
  }
}
