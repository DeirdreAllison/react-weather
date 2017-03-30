import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';

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

class WeatherTileList extends Component {

  render() {
    return (
      <div>
        {this.props.weather.map(this.renderWeatherTile)}
      </div>
    );
  }

  renderWeatherTile({summary, icon, temperatureMax, temperatureMin, time}) {
    return (
      <div key={time}>
      <WeatherIcons name="day-cloudy" size="2x" />
        <p>{summary}</p>
        <p>Low: {temperatureMin} <WeatherIcons name="degrees" size="2x" /></p>
        <p>High: {temperatureMax} <WeatherIcons name="degrees" size="2x" /></p>
      </div>
      )
    }
}

export default WeatherTileList;
