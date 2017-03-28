import fetchJsonp from 'fetch-jsonp';
// 7db3e41169adb575af2375fff411d806
// {process.env.REACT_APP_DARK_SKY}
function getWeather() {
    fetchJsonp('https://api.darksky.net/forecast/7db3e41169adb575af2375fff411d806/47.6062,-122.3321?exclude=hourly,minutely,currently')
    .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
}

const WeatherData = {getWeather};
export default WeatherData;