const getWeather = (city) => {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=023831ae929ef5ca05e8f9764c820c2e`)
    .then((res) => res.json())
    .then((res) => res);
};

const searchButton = document.querySelector(".search-btn");
searchButton.addEventListener("click", async () => {
  const inputCity = document.querySelector(".search");
  const weather = await getWeather(inputCity.value);
  const suhu = Math.round(weather.main.temp - 273.15);
  const lat = weather.coord.lat;
  const lon = weather.coord.lon;

  document.querySelector(".derajat").innerHTML = `${suhu} &#8451`;
  document.querySelector(".kelembapan").innerHTML = `${weather.main.humidity}%`;
  document.querySelector(".angin").innerHTML = `${weather.wind.speed}m/h`;
  document.querySelector(".jarakpandang").innerHTML = `${weather.visibility / 1000}km`;
  document.querySelector(".statusText").innerHTML = `${weather.weather[0].main}`;
  document.querySelector(".name-city").innerHTML = `${weather.name}`;
  document.querySelector(".tekanan").innerHTML = `${weather.main.pressure}hPa`; 
  document.querySelector('#icon').src = "http://openweathermap.org/img/w/"+weather.weather[0].icon+".png"
  inputCity.value = "";

  const file =  `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&exclude=minutely,alerts&appid=023831ae929ef5ca05e8f9764c820c2e`;

  async function forecast () {
    let url = await fetch(file)
    .then((res) => res.json())
    .then((data) => {

      let day1 = data.daily[0].temp.day;
      let day2 = data.daily[1].temp.day;
      let day3 = data.daily[2].temp.day;
      let day4 = data.daily[3].temp.day;
      let day5 = data.daily[4].temp.day;
      
      document.getElementById('day1').innerHTML = day1  + "ºC"
      document.getElementById('day2').innerHTML = day2 + "ºC"
      document.getElementById('day3').innerHTML = day3 + "ºC"
      document.getElementById('day4').innerHTML = day4 + "ºC"
      document.getElementById('day5').innerHTML = day5 + "ºC"

      let desc1 = data.daily[0].weather[0].main
      let desc2 = data.daily[1].weather[0].main
      let desc3 = data.daily[2].weather[0].main
      let desc4 = data.daily[3].weather[0].main
      let desc5 = data.daily[4].weather[0].main

      document.getElementById('status1').innerHTML = desc1
      document.getElementById('status2').innerHTML = desc2
      document.getElementById('status3').innerHTML = desc3
      document.getElementById('status4').innerHTML = desc4
      document.getElementById('status5').innerHTML = desc5

    })
    return url

  }
  forecast()
  
})


const dateToday = () => {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let today = new Date();
  let day = days[today.getDay()];
  let dd = today.getDate();
  let mm = months[today.getMonth()];
  let yyyy = today.getFullYear();

  if (dd < 10) dd = `0${dd}`;
  if (mm < 10) mm = `0${mm}`;

  let dayName = document.getElementById("dayname");
  let date = document.getElementById("date");
  let month = document.getElementById("months");
  let year = document.getElementById("year");

  dayName.innerHTML = day;
  date.innerHTML = dd;
  month.innerHTML = mm;
  year.innerHTML = yyyy;

  today = `${day} ${dd} ${mm} ${yyyy}`;

  return today;
};
var Interval = setInterval(dateToday);
const getTime = () => {
  let time = "";
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let AmPm = "";

  if (hour >= 12) {
    AmPm = "PM";
  } else {
    AmPm = "AM";
  }

  if (hour < 10) hour = `0${hour}`;
  if (minute < 10) minute = `0${minute}`;

 
  let hours = document.getElementById("hours");
  hours.innerHTML = hour;
  let minutes = document.getElementById("minutes");
  minutes.innerHTML = minute;
  let periode = document.getElementById("periode");
  periode.innerHTML = AmPm;

  return (time = `${hour} : ${minute} ${AmPm}`);
};
var test = setInterval(getTime);