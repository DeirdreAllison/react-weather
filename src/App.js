import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WeatherTile from './components/WeatherTile/WeatherTile';
import WeatherData from './weatherData';
import './App.css';

class App extends Component {
  render() {
    var weatherData = WeatherData.getWeather();
    var weatherTiles = weatherData.daily.data.map(function(day) {
      return <WeatherTile day={day} />
    })
    return (
      <div className="App">
        <Header />
        {weatherTiles}
        <Footer />
      </div>
    );
  }
}

export default App;
