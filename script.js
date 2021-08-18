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

  document.querySelector(".derajat").innerHTML = `${suhu} &#8451`;
  document.querySelector(".kelembapan").innerHTML = `${weather.main.humidity}%`;
  document.querySelector(".angin").innerHTML = `${weather.wind.speed}m/h`;
  document.querySelector(".jarakpandang").innerHTML = `${weather.visibility / 1000}km`;
  document.querySelector(".statusText").innerHTML = `${weather.weather[0].main}`;
  document.querySelector(".name-city").innerHTML = `${weather.name}`;
  document.querySelector(".tekanan").innerHTML = `${weather.main.pressure}hPa`;

  var card = document.getElementById("card")
//coba coba
  if(weather.weather[0].main === "Clouds"){
    card.style.backgroundImage ="url('/image/cloud.jpg')" 
  }else if(weather.weather[0].main === "Clear"){
    card.style.backgroundImage ="url('/image/clear.jpg')" 
  }else if(weather.weather[0].main === "Sunny"){
    card.style.backgroundImage ="url('/image/sunny.jpg')" 
  }else if(weather.weather[0].main === "Rain"){
    card.style.backgroundImage ="url('/image/rain.jpg')" 
  }else if(weather.weather[0].main === "Thunderstrom"){
    card.style.backgroundImage ="url('/image/thunderstrom.jpg')" 
  }else if(weather.weather[0].main === "Mist"){
    card.style.backgroundImage ="url('/image/mist.jpg')" 
  }else if(weather.weather[0].main === "Haze"){
    card.style.backgroundImage ="url('/image/haze.jpg')" 
  }else if(weather.weather[0].main === "Sand"){
    card.style.backgroundImage ="url('/image/sand.jpg')" 
  }else if(weather.weather[0].main === "Snow"){
    card.style.backgroundImage ="url('/image/snow.jpg')" 
  }else{
    card.style.backgroundImage="url('/image/default.jpg')"
  }
  inputCity.value = "";
});




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

  // if (hour < 10) hour = `0${hour}`;
  // if (minute < 10) hour = `0${minute}`;

 
  let hours = document.getElementById("hours");
  hours.innerHTML = hour;
  let minutes = document.getElementById("minutes");
  minutes.innerHTML = minute;
  let periode = document.getElementById("periode");
  periode.innerHTML = AmPm;

  return (time = `${hour} : ${minute} ${AmPm}`);
};
var test = setInterval(getTime);
// console.log(dateToday());
// console.log(getTime());
