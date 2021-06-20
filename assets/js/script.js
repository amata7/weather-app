var formEl = document.querySelector("#formEl");
var query = document.querySelector(".searchBar.text");
var searchBtn = document.querySelector("#search");
var searchBar = document.querySelector("#searchBar");
var recentSearches = document.querySelector("#recentSearches");
var icon1 = document.getElementById("icon1");

function fetchCurrentWeather(query) {
  var url =
    "https://api.openweathermap.org/data/2.5/find?q=" +
    query +
    "&units=imperial&appid=2095a6157c020cb112f39f8fb6535387";

  fetch(url)
    .then((response) => response.json())
    .then((data) => renderCurrentWeather(data));
}

function renderCurrentWeather(weather) {
  var url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    weather.list[0].coord.lat +
    "&lon=" +
    weather.list[0].coord.lon +
    "&appid=2095a6157c020cb112f39f8fb6535387";

  fetch(url)
    .then((response) => response.json())
    .then((data) => fetchUV(data));

  var resultsContainer = document.querySelector("#weather-response");

  var cityCurrent = document.querySelector("#cityCurrent");
  cityCurrent.textContent = weather.list[0].name;

  var tempCurrent = document.querySelector("#tempCurrent");
  tempCurrent.textContent = "Temp: " + weather.list[0].main.temp + " °F";

  var humidityCurrent = document.querySelector("#humidityCurrent");
  humidityCurrent.textContent =
    "Humidity: " + weather.list[0].main.humidity + " %";

  var windCurrent = document.querySelector("#windCurrent");
  windCurrent.textContent =
    "Wind: " +
    weather.list[0].wind.speed +
    " mph, " +
    weather.list[0].wind.deg +
    " deg";

  var weatherDetails = weather.list[0].weather[0];
  if (weatherDetails && weatherDetails.description) {
    var description = document.createElement("p");
    description.textContent = weatherDetails.description;
  }
}

function fetchFiveDayWeather(query) {
  var url =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    query +
    "&units=imperial&appid=2095a6157c020cb112f39f8fb6535387";

  fetch(url)
    .then((response) => response.json())
    .then((data) => renderFiveDayWeather(data));
}

function fetchUV(data) {
  console.log(data);
  var uvCurrent = document.querySelector("#uvCurrent");
  uvCurrent.textContent = "Current UV Index: " + data.current.uvi;
}

function renderFiveDayWeather(weather) {
  console.log(weather);
  var date1 = document.querySelector("#date1");
  const year1 = weather.list[0].dt_txt.substr(0, 4);
  const month1 = weather.list[0].dt_txt.substr(5, 2);
  const day1 = weather.list[0].dt_txt.substr(8, 2);
  const formatted1 = month1 + "/" + day1 + "/" + year1;
  date1.textContent = formatted1;

  var icon1 = weather.list[0].weather[0].icon;
  document.getElementById("icon1").src =
    "http://openweathermap.org/img/wn/" + icon1 + "@2x.png";

  var temp1 = document.querySelector("#temp1");
  temp1.textContent = weather.list[0].main.temp + " °F";

  var humidity1 = document.querySelector("#humidity1");
  humidity1.textContent = "Humidity: " + weather.list[0].main.humidity + " %";

  var date2 = document.querySelector("#date2");
  const year2 = weather.list[8].dt_txt.substr(0, 4);
  const month2 = weather.list[8].dt_txt.substr(5, 2);
  const day2 = weather.list[8].dt_txt.substr(8, 2);
  const formatted2 = month2 + "/" + day2 + "/" + year2;
  date2.textContent = formatted2;

  var icon2 = weather.list[8].weather[0].icon;
  document.getElementById("icon2").src =
    "http://openweathermap.org/img/wn/" + icon2 + "@2x.png";

  var temp2 = document.querySelector("#temp2");
  temp2.textContent = weather.list[8].main.temp + " °F";

  var humidity2 = document.querySelector("#humidity2");
  humidity2.textContent = "Humidity: " + weather.list[8].main.humidity + " %";

  var date3 = document.querySelector("#date3");
  const year3 = weather.list[16].dt_txt.substr(0, 4);
  const month3 = weather.list[16].dt_txt.substr(5, 2);
  const day3 = weather.list[16].dt_txt.substr(8, 2);
  const formatted3 = month3 + "/" + day3 + "/" + year3;
  date3.textContent = formatted3;

  var icon3 = weather.list[16].weather[0].icon;
  document.getElementById("icon3").src =
    "http://openweathermap.org/img/wn/" + icon3 + "@2x.png";

  var temp3 = document.querySelector("#temp3");
  temp3.textContent = weather.list[16].main.temp + " °F";

  var humidity3 = document.querySelector("#humidity3");
  humidity3.textContent = "Humidity: " + weather.list[16].main.humidity + " %";

  var date4 = document.querySelector("#date4");
  const year4 = weather.list[24].dt_txt.substr(0, 4);
  const month4 = weather.list[24].dt_txt.substr(5, 2);
  const day4 = weather.list[24].dt_txt.substr(8, 2);
  const formatted4 = month4 + "/" + day4 + "/" + year4;
  date4.textContent = formatted4;

  var icon4 = weather.list[24].weather[0].icon;
  document.getElementById("icon4").src =
    "http://openweathermap.org/img/wn/" + icon4 + "@2x.png";

  var temp4 = document.querySelector("#temp4");
  temp4.textContent = weather.list[24].main.temp + " °F";

  var humidity4 = document.querySelector("#humidity4");
  humidity4.textContent = "Humidity: " + weather.list[24].main.humidity + " %";

  var date5 = document.querySelector("#date5");
  const year5 = weather.list[32].dt_txt.substr(0, 4);
  const month5 = weather.list[32].dt_txt.substr(5, 2);
  const day5 = weather.list[32].dt_txt.substr(8, 2);
  const formatted5 = month5 + "/" + day5 + "/" + year5;
  date5.textContent = formatted5;

  var icon5 = weather.list[32].weather[0].icon;
  document.getElementById("icon5").src =
    "http://openweathermap.org/img/wn/" + icon5 + "@2x.png";

  var temp5 = document.querySelector("#temp5");
  temp5.textContent = weather.list[32].main.temp + " °F";

  var humidity5 = document.querySelector("#humidity5");
  humidity5.textContent = "Humidity: " + weather.list[32].main.humidity + " %";
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
    alert("Please enter a valid city name");
  }
}

formEl.addEventListener("submit", submitHandler);
