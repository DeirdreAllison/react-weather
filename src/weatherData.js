import fetchJsonp from 'fetch-jsonp';

function getWeather() {
    fetchJsonp('https://api.darksky.net/forecast/' + process.env.REACT_APP_DARK_SKY + '/47.6062,-122.3321?exclude=hourly,minutely,currently')
    .then(function(response) {
    return response.json()
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
}

const WeatherData = {getWeather};
export default WeatherData;