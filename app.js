// app.js

function getWeather() {
    const locationInput = document.getElementById('location');
    const location = locationInput.value;

   
    const apiKey = '49cc8c821cd2aff9af04c9f98c36eb74';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weather-info');
            if (data.cod === '404') {
                weatherInfo.innerHTML = 'Location not found. Please enter a valid city, country.';
            } else {
                const temperature = Math.round(data.main.temp - 273.15); // Convert temperature to Celsius
                const description = data.weather[0].description;
                const cityName = data.name;
                const country = data.sys.country;

                weatherInfo.innerHTML = `Current Weather in ${cityName}, ${country}: ${temperature}°C, ${description}`;
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
