import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WeatherTileList from './components/WeatherTileList/WeatherTileList';
import fetchJsonp from 'fetch-jsonp';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = { weatherByDay: []}
  }

  componentDidMount() {
      fetchJsonp('https://api.darksky.net/forecast/' + process.env.REACT_APP_DARK_SKY + '/47.6062,-122.3321?exclude=hourly,minutely,currently')
        .then(function(response) {
        return response.json()
      }).then(function(json) {
        this.setState({weatherByDay: json.daily.data})
      }.bind(this)).catch(function(ex) {
        console.log('parsing failed', ex)
      })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <WeatherTileList weather={this.state.weatherByDay} />
        <Footer />
      </div>
    );
  }
}

export default App;
