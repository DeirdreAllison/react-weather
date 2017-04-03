import React from 'react';
import ReactDOM from 'react-dom';
import WeatherIcon from './WeatherIcon';

it('renders the icon', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeatherIcon icon="rain" />, div);
});
