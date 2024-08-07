// sidebar item 280 36
// sidebar padding 17

// credits
// clock icon https://www.flaticon.com/free-icons/clock
// settings icon https://www.flaticon.com/free-icons/settings
// credit icon https://www.flaticon.com/free-icons/info
// partly cloudy icon https://www.flaticon.com/free-icons/sun
// storm icon https://www.flaticon.com/free-icons/storm
// cloudy icon  https://www.flaticon.com/free-icons/cloud
// rainy icon https://www.flaticon.com/free-icons/rainy
// drizzle icon https://www.flaticon.com/free-icons/drizzle
// fog icon https://www.flaticon.com/free-icons/foggy
// snow icon https://www.flaticon.com/free-icons/snow
// windy icon https://www.flaticon.com/free-icons/wind
// hail icon https://www.flaticon.com/free-icons/hail
// default icon https://www.flaticon.com/free-icons/question-mark
// weather icon https://www.flaticon.com/free-icons/app
// wind direction icon https://www.flaticon.com/free-icons/anemometer
// wind speed icon https://www.flaticon.com/free-icons/wind
// chance of rain icon https://www.flaticon.com/free-icons/percent
// forecast icon https://www.flaticon.com/free-icons/forecast

document.addEventListener('DOMContentLoaded', async () => {
    const temperature = document.getElementById("temperature")
    const chanceOfRain = document.getElementById("chance-of-rain")
    const windSpeed = document.getElementById("wind-speed")
    const windDirection = document.getElementById("wind-direction")
    const forecast = document.getElementById("forecast")

    const sidebar = document.getElementById('sidebar');

    async function fetchWeatherData(latitude, longitude) {
        try {
            const response = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`);
            const data = await response.json();
            const { gridId, gridX, gridY } = data.properties;

            const forecastResponse = await fetch(`https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast`);
            const forecastData = await forecastResponse.json();

            const periods = forecastData.properties.periods;

            console.log(forecastData.properties.periods[0])

            temperature.textContent = String(forecastData.properties.periods[0].temperature) + forecastData.properties.periods[0].temperatureUnit
            chanceOfRain.textContent = forecastData.properties.periods[0].probabilityOfPrecipitation.value + "%"
            windSpeed.textContent = forecastData.properties.periods[0].windSpeed
            windDirection.textContent = forecastData.properties.periods[0].windDirection
            forecast.textContent = forecastData.properties.periods[0].shortForecast

            periods.forEach(period => {
                if (!period.name.includes('Night')) {
                    const button = document.createElement('button');
                    button.classList.add('sidebar-item');
                    button.setAttribute("number", period.number)

                    const span = document.createElement('span');
                    span.classList.add('sidebar-item-text');
                    span.textContent = period.name;

                    const icon = document.createElement('span');
                    icon.classList.add('sidebar-item-icon');

                    // Create an image element for the icon
                    const img = document.createElement('img');
                    img.classList.add('weather-icon');
                    img.src = getWeatherIcon(period.shortForecast);
                    img.width = 20;

                    icon.appendChild(img);
                    button.appendChild(icon);
                    button.appendChild(span);
                    sidebar.appendChild(button);

                    const buttons = document.querySelectorAll('.sidebar-item');

                    if (period.number == 1) {
                        button.classList.add("sidebar-item-active")
                    }

                    buttons.forEach(button => {
                        button.addEventListener('click', () => {
                        buttons.forEach(btn => btn.classList.remove('sidebar-item-active'));

                        button.classList.add('sidebar-item-active');

                        if (button.hasAttribute("number")) {
                            var newPeriod = button.getAttribute("number") - 1
                            console.log(button.getAttribute("number"))

                            temperature.textContent = String(forecastData.properties.periods[newPeriod].temperature) + forecastData.properties.periods[0].temperatureUnit
                            chanceOfRain.textContent = forecastData.properties.periods[newPeriod].probabilityOfPrecipitation.value + "%"
                            windSpeed.textContent = forecastData.properties.periods[newPeriod].windSpeed
                            windDirection.textContent = forecastData.properties.periods[newPeriod].windDirection
                            forecast.textContent = forecastData.properties.periods[newPeriod].shortForecast
                        }
                        });
                    });
                }
            });
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function getWeatherIcon(description) {
        // Map keywords in descriptions to icons
        const iconMap = [
            { keyword: 'Sunny', icon: 'assets/images/weather/sunny.png' },
            { keyword: 'Partly Cloudy', icon: 'assets/images/weather/partly-cloudy.png' },
            { keyword: 'Cloudy', icon: 'assets/images/weather/cloudy.png' },
            { keyword: 'Rain', icon: 'assets/images/weather/rainy.png' },
            { keyword: 'Drizzle', icon: 'assets/images/weather/drizzle.png' },
            { keyword: 'Snow', icon: 'assets/images/weather/snow.png' },
            { keyword: 'Fog', icon: 'assets/images/weather/foggy.png' },
            { keyword: 'Windy', icon: 'assets/images/weather/windy.png' },
            { keyword: 'Hail', icon: 'assets/images/weather/hail.png' },
            { keyword: 'Thunderstorm', icon: 'assets/images/weather/stormy.png' }
        ];

        // Check if any keyword is present in the description
        for (const { keyword, icon } of iconMap) {
            if (description.includes(keyword)) {
                return icon;
            }
        }

        // Return a default icon if no match is found
        return 'assets/images/weather/default.png';
    }

    function successCallback(position) {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
    }

    function errorCallback(error) {
        console.log(`Error: ${error.message}`);
    }

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    const buttons = document.querySelectorAll('.sidebar-item');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('sidebar-item-active'));

            button.classList.add('sidebar-item-active');
        });
    });
});