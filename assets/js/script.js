var formEl = document.querySelector('#formEl');
var query = document.querySelector('.searchBar.text');
var searchBtn = document.querySelector('#search');
var searchBar = document.querySelector('#searchBar')
searchBtn.onclick = ()=>{

    console.log(query);
}

function fetchCurrentWeather(query) {
    var url = 'https://api.openweathermap.org/data/2.5/find?q=' + 
    query +
    '&units=imperial&appid=2095a6157c020cb112f39f8fb6535387';

    fetch(url)
        .then((response) => response.json())
        .then((data) => renderCurrentWeather(data));
}

function renderCurrentWeather(weather) {
    console.log(weather);
    var resultsContainer = document.querySelector('#weather-response')
    
    var cityCurrent = document.querySelector('#cityCurrent');
    cityCurrent.textContent = weather.list[0].name;

    var tempCurrent = document.querySelector('#tempCurrent');
    tempCurrent.textContent = 'Temp ' + weather.list[0].main.temp + ' °F';

    var humidityCurrent = document.querySelector('#humidityCurrent');
    humidityCurrent.textContent = 'Humidity: ' + weather.list[0].main.humidity + ' %';

    var windCurrent = document.querySelector('#windCurrent')
    windCurrent.textContent = 'Wind: ' + weather.list[0].wind.speed + ' mph, ' + weather.list[0].wind.deg + ' deg';

    var weatherDetails = weather.list[0].weather[0];
    if (weatherDetails && weatherDetails.description) {
        var description = document.createElement('p')
        description.textContent = weatherDetails.description;
    }
}

function fetchFiveDayWeather(query) {
    var url5 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + 
    query +
    '&units=imperial&appid=2095a6157c020cb112f39f8fb6535387';

    fetch(url5)
        .then((response) => response.json())
        .then((data) => console.log(data));
}

function renderFiveDayWeather(weather) {
    console.log(weather);

    for (let i = 2; i < 40; i = i + 8) {
        var city5 = document.querySelector('#city5');
        city5.textContent = weather.city.name + ' ' + weather.list[i].dt_txt;

console.log(i);
        // var icon5 = document.querySelector('#icon5');
        // icon5.textContent = weather.list[i].weather[0].icon;

        var temp5 = document.querySelector('#temp5');
        temp5.textContent = weather.list[i].main.temp + ' °F';

        var humidity5 = document.querySelector('#humidity5');
        humidity5.textContent = weather.list[i].main.humidity + ' %';
        }
    }

function submitHandler() {
    event.preventDefault();
    var searchInput = searchBar.value.trim();

    if (searchInput) {
        fetchCurrentWeather(searchInput);
        fetchFiveDayWeather(searchInput);
    }
}

formEl.addEventListener('submit', submitHandler);