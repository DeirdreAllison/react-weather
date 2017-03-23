import React, { Component } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import WeatherIcons from 'react-weathericons';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <WeatherIcons name="day-cloudy" size="2x" />
        <Footer />
      </div>
    );
  }
}

export default App;
