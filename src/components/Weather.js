import React, { Component } from 'react';
import Clear from '../assets/clear.svg';
const axios = require('axios');
const moment = require('moment');

class WeatherComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weather: [],
      todaysTemp: 'we'
    };
  }

  getWeatherData = () => {
    axios
      .get(
        'https://api.openweathermap.org/data/2.5/forecast/daily?q=Melbourne&units=metric&lang=tr&appid=a3f46c687f2144a15d0adc8b5d513af2'
      )
      .then(response => {
        this.setState({
          weather: response.data.list,
          todaysTemp: response.data.list[0].temp.day
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getMoment = date => {
    date = date * 1000;
    return moment(date)
      .locale('tr')
      .format('dddd');
  };

  componentWillMount() {
    this.getWeatherData();
  }
  render() {
    return (
      <div>
        <h1>
          Melbourne is{' '}
          <span style={{ fontWeight: 'bold' }}>
            {Math.round(this.state.todaysTemp)}
          </span>{' '}
          &#8451; right now.{' '}
        </h1>
        <h4>A great day to ride a bike!</h4>
        <ul className="weather">
          {this.state.weather.map(day => {
            return (
              <li className="weather__block">
                <h3>{this.getMoment(day.dt)}</h3>
                <img src={Clear} alt="açık" />
                <span>{Math.round(day.temp.day)}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default WeatherComponent;
