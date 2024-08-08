// issues
// please make an issue thing at github type shi

// <a href="https://www.flaticon.com/free-icons/to-do" title="to do icons">To do icons created by Freepik - Flaticon</a>

document.addEventListener('DOMContentLoaded', async () => {
    const todoButton = document.getElementById("todo")
    const creditsButton = document.getElementById("credits")

    // special thanks to the us gov!
    async function fetchWeatherData(latitude, longitude) {
        try {
            // just gotta define some stuff fr (i dont quite know whats happening here chatgpt did this for me)
            const response = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`);
            const data = await response.json();
            const { gridId, gridX, gridY } = data.properties;
            const forecastResponse = await fetch(`https://api.weather.gov/gridpoints/${gridId}/${gridX},${gridY}/forecast`);
            const forecastData = await forecastResponse.json();
            const periods = forecastData.properties.periods;

            // create a list of the weather stuff
            createSkinnyList("Temperature", "temperature", "temperature", forecastData.properties.periods[0].temperature + forecastData.properties.periods[0].temperatureUnit)
            createSkinnyList("Chance of Rain", "chance-of-rain", "chance-of-rain", forecastData.properties.periods[0].probabilityOfPrecipitation.value + "%")
            createSkinnyList("Wind Speed", "wind-speed", "wind-speed", forecastData.properties.periods[0].windSpeed)
            createSkinnyList("Wind Direction", "wind-direction", "wind-direction", forecastData.properties.periods[0].windDirection)
            createSkinnyList("Forecast", 'forecast', 'forecast', forecastData.properties.periods[0].shortForecast)

            periods.forEach(period => {
                // nights are irrelevent... maybe... just doesnt look clean idk
                if (!period.name.includes('Night')) {
                    makeSidebarButton(period.number, period.name, period.shortForecast)
                }
                const buttons = document.querySelectorAll('.sidebar-item');
                
                // this is what happens when a weather button on the sidebar gets clicked, how exciting
                buttons.forEach(button => {
                    button.addEventListener('click', () => {

                        buttons.forEach(btn => btn.classList.remove('sidebar-item-active'));

                        button.classList.add('sidebar-item-active');

                        // this is just if its credits or settings it doesnt also do this
                        if (button.hasAttribute("number")) {
                            var newPeriod = button.getAttribute("number") - 1

                            if (!document.getElementById("temperature")) {
                                clearMain()
                                createSkinnyList("Temperature", "temperature", "temperature", forecastData.properties.periods[newPeriod].temperature + forecastData.properties.periods[0].temperatureUnit)
                                createSkinnyList("Chance of Rain", "chance-of-rain", "chance-of-rain", forecastData.properties.periods[newPeriod].probabilityOfPrecipitation.value + "%")
                                createSkinnyList("Wind Speed", "wind-speed", "wind-speed", forecastData.properties.periods[newPeriod].windSpeed)
                                createSkinnyList("Wind Direction", "wind-direction", "wind-direction", forecastData.properties.periods[newPeriod].windDirection)
                                createSkinnyList("Forecast", 'forecast', 'forecast', forecastData.properties.periods[newPeriod].shortForecast)
                            }

                            changeWeatherListInfo("temperature", forecastData.properties.periods[newPeriod].temperature + forecastData.properties.periods[newPeriod].temperatureUnit)
                            changeWeatherListInfo("chance-of-rain", forecastData.properties.periods[newPeriod].probabilityOfPrecipitation.value + "%")
                            changeWeatherListInfo("wind-speed", forecastData.properties.periods[newPeriod].windSpeed)
                            changeWeatherListInfo("wind-direction", forecastData.properties.periods[newPeriod].windDirection)
                            changeWeatherListInfo("forecast", forecastData.properties.periods[newPeriod].shortForecast)
                        }
                    });
                });
            });
        }
        // now tbh i dont know why this is here but its here and i dont wanna remove it
        catch (error) {
            console.error('Error:', error);
        }
    }

    // success!
    function successCallback(position) {
        const { latitude, longitude } = position.coords;
        fetchWeatherData(latitude, longitude);
    }

    // OMG THERE WAS AN ERROR headass
    function errorCallback(error) {
        console.log(`Error: ${error.message}`);
    }

    // please turn on ur location so i can eat ur ip, yum
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

    todoButton.addEventListener('click', () => {
        clearMain()
        createSkinnyList("Make the location search work", "search")
    })

    creditsButton.addEventListener('click', () => {
        clearMain()
        createSkinnyListLink("Weather Icon", "assets/images/weather.png", "Go", "https://www.flaticon.com/free-icons/app")
        createSkinnyListLink("Todo Icon", "assets/images/todo.png", "Go", "https://www.flaticon.com/free-icons/to-do")
        createSkinnyListLink("Credit Icon", "assets/images/credits.png", "Go", "https://www.flaticon.com/free-icons/info")
        createSkinnyListLink("Temperature Icon", "assets/images/temperature.png", "Go", "https://www.flaticon.com/free-icons/temperature")
        createSkinnyListLink("Chance of Rain Icon", "assets/images/chance-of-rain.png", "Go", "https://www.flaticon.com/free-icons/percent")
        createSkinnyListLink("Wind Speed Icon", "assets/images/wind-speed.png", "Go", "https://www.flaticon.com/free-icons/wind")
        createSkinnyListLink("Wind Direction Icon", "assets/images/wind-direction.png", "Go", "https://www.flaticon.com/free-icons/anemometer")
        createSkinnyListLink("Forecast Icon", "assets/images/forecast.png", "Go", "https://www.flaticon.com/free-icons/forecast")
        createSkinnyListLink("Unknown Conditions Icon", "assets/images/default.png", "Go", "https://www.flaticon.com/free-icons/question-mark")
        createSkinnyListLink("Hail Icon", "assets/images/hail.png", "Go", "https://www.flaticon.com/free-icons/hail")
        createSkinnyListLink("Storm Icon", "assets/images/stormy.png", "Go", "https://www.flaticon.com/free-icons/storm")
        createSkinnyListLink("Rain Icon", "assets/images/rainy.png", "Go", "https://www.flaticon.com/free-icons/rainy")
        createSkinnyListLink("Drizzle Icon", "assets/images/drizzle.png", "Go", "https://www.flaticon.com/free-icons/drizzle")
        createSkinnyListLink("Fog Icon", "assets/images/foggy.png", "Go", "https://www.flaticon.com/free-icons/foggy")
        createSkinnyListLink("Wind Icon", "assets/images/windy.png", "Go", "https://www.flaticon.com/free-icons/wind")
        createSkinnyListLink("Snow Icon", "assets/images/snow.png", "Go", "https://www.flaticon.com/free-icons/snow")
        createSkinnyListLink("Cloud Icon", "assets/images/cloudy.png", "Go", "https://www.flaticon.com/free-icons/cloud")
        createSkinnyListLink("Partly Cloudy Icon", "assets/images/partly-cloudy.png", "Go", "https://www.flaticon.com/free-icons/sun")
        createSkinnyListLink("Sun Icon", "assets/images/sunny.png", "Go", "https://www.flaticon.com/free-icons/sun")
    })
});