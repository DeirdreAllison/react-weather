import React, { Component } from 'react';
import WeatherIcons from 'react-weathericons';

class WeatherTileList extends Component {
  // constructor(props) {
  //   super(props);
  //   this.getIconName = this.getIconName().bind(this);
  // }

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
        {/*{this.renderWeatherIcon.bind(this, {icon})}*/}
      {/*<WeatherIcons name={this.getIconName({icon})} size="2x" />*/}
        <WeatherIcons name="day-sunny" size="4x" />
        <p>{summary}</p>
        <p className="temperatureLabel">Low:</p>
        <p className="temperature"><strong>{temperatureMin}</strong> <WeatherIcons name="degrees" size="lg" /></p>
        <p className="temperatureLabel">High:</p>
        <p className="temperature"><strong>{temperatureMax}</strong> <WeatherIcons name="degrees" size="lg" /></p>
      </div>
      )
    }

    // renderWeatherIcon(icon) {
    //   return ( <WeatherIcons name="day-sunny" size="2x" />
    //   // switch(icon) {
    //   //   case "clear-day":
    //   //     return <WeatherIcons name="day-sunny" size="2x" />;
    //   //     break;
    //   //   default:
    //   //     return <WeatherIcons name="na" size="2x" />;
    //   //     break;
    //   // }
    //   )}

    // getIconName({icon}) {
    //   switch(icon) {
    //     case "clear-day":
    //       return "day-sunny";
    //       break;
    //     case "clear-night":
    //       return "night-clear";
    //       break;
    //     case "rain":
    //       return "wi-rain";
    //       break;
    //     case "snow":
    //       return "wi-snow";
    //       break;
    //     case "sleet":
    //       return "wi-sleet";
    //       break;
    //     case "wind":
    //       return "wi-cloudy-windy";
    //       break;
    //     case "fog":
    //       return "wi-fog";
    //       break;
    //     case "cloudy":
    //       return "wi-cloudy";
    //       break;
    //     case "partly-cloudy-day":
    //       return "day-sunny-overcast";
    //       break;
    //     case "partly-cloudy-night":
    //       return "night-alt-cloudy";
    //       break;
    //     default:
    //       return "na";
    //   }
    // }
}

export default WeatherTileList;
