var formEl = document.querySelector('#formEl');
var query = document.querySelector('.searchBar.text');
var searchBtn = document.querySelector('#search');
var searchBar = document.querySelector('#searchBar');
var recentSearches = document.querySelector('#recentSearches');
var icon = document.querySelector('#icon');

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
    var url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + 
    query +
    '&units=imperial&appid=2095a6157c020cb112f39f8fb6535387';

    fetch(url)
        .then((response) => response.json())
        .then((data) => renderFiveDayWeather(data));
}

function renderFiveDayWeather(weather) {
        var date1 = document.querySelector('#date1');
        date1.textContent = weather.list[0].dt_txt;
        
        document.getElementById('#icon').src = 'https://openweathermap.org/img/wn' + weather.list[0].weather[0].icon + '.png'
        console.log(icon);
        console.log(icon.src);
        
        var temp1 = document.querySelector('#temp1');
        temp1.textContent = weather.list[0].main.temp + ' °F';

        var humidity1 = document.querySelector('#humidity1');
        humidity1.textContent = weather.list[0].main.humidity + ' %';


        var date2 = document.querySelector('#date2');
        date2.textContent = weather.list[8].dt_txt;

        var temp2 = document.querySelector('#temp2');
        temp2.textContent = weather.list[8].main.temp + ' °F';

        var humidity2 = document.querySelector('#humidity2');
        humidity2.textContent = weather.list[8].main.humidity + ' %';


        var date3 = document.querySelector('#date3');
        date3.textContent = weather.list[16].dt_txt;

        var temp3 = document.querySelector('#temp3');
        temp3.textContent = weather.list[16].main.temp + ' °F';

        var humidity3 = document.querySelector('#humidity3');
        humidity3.textContent = weather.list[16].main.humidity + ' %';
        


        var date4 = document.querySelector('#date4');
        date4.textContent = weather.list[24].dt_txt;

        var temp4 = document.querySelector('#temp4');
        temp4.textContent = weather.list[24].main.temp + ' °F';

        var humidity4 = document.querySelector('#humidity4');
        humidity4.textContent = weather.list[24].main.humidity + ' %';



        var date5 = document.querySelector('#date5');
        date5.textContent = weather.list[32].dt_txt;

        var temp5 = document.querySelector('#temp5');
        temp5.textContent = weather.list[32].main.temp + ' °F';

        var humidity5 = document.querySelector('#humidity5');
        humidity5.textContent = weather.list[32].main.humidity + ' %';
        }


function submitHandler() {
    event.preventDefault();
    var searchInput = searchBar.value.trim();

    if (searchInput) {
        fetchCurrentWeather(searchInput);
        fetchFiveDayWeather(searchInput);
        // var recent = document.createElement('a');
        // recent.classList = 'list-group-item border';

        // recent.textContent = searchInput;
        // console.log(searchInput);
        // recentSearches.appendChild(recent);
    } else {
        alert('Please enter a valid city name');
    }
}



formEl.addEventListener('submit', submitHandler);

