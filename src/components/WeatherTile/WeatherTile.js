import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
// https://api.darksky.net/forecast/{process.env.REACT_APP_DARK_SKY}/47.6062,-122.3321?exclude=hourly,minutely,currently

// weather conditions, min and max temperatures and weather icons
// data[i].summary, data.icon, data.temperatureMin, data.temperatureMax
// degrees

// clear-day: day-sunny
// clear-night: night-clear
// rain: wi-rain
// snow: wi-snow
// sleet: wi-sleet
// wind: wi-cloudy-windy
// fog: wi-fog
// cloudy: wi-cloudy
// partly-cloudy-day: day-sunny-overcast
// partly-cloudy-night: night-alt-cloudy
// default: na
class WeatherTile extends Component {
  render() {
    return (
      <div>
        <WeatherIcons name="day-cloudy" size="2x" />
        <p>{this.props.day.summary}</p>
        <p>{this.props.day.temperatureMin}</p>
        <p>{this.props.day.temperatureMax}</p>
      </div>
    );
  }
}

export default WeatherTile;
