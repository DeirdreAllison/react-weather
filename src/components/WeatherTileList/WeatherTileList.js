import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';
import WeatherIcon from '../../components/WeatherIcon/WeatherIcon';

class WeatherTileList extends Component {

  render() {
    return (
      <div className="flexContainer">
        {this.props.weather.map(this.renderWeatherTile)}
      </div>
    );
  }

  renderWeatherTile({summary, icon, temperatureMax, temperatureMin, time}) {
    return (
      <div key={time} className="weatherTile">
        <p className="date">{new Date(time * 1000).toDateString()}</p>
        <WeatherIcon icon={icon} />
        <p>{summary}</p>
        <p className="temperatureLabel">Low:</p>
        <p className="temperature"><strong>{temperatureMin}</strong> <WeatherIcons name="degrees" size="lg" /></p>
        <p className="temperatureLabel">High:</p>
        <p className="temperature"><strong>{temperatureMax}</strong> <WeatherIcons name="degrees" size="lg" /></p>
      </div>
      )
    }
}

export default WeatherTileList;
