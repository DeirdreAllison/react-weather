import React from 'react';
import ReactDOM from 'react-dom';
import WeatherTileList from './WeatherTileList';

it('renders the weather tile list', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherTileList />, div);
});
