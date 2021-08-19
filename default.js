fetch(
  `http://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=023831ae929ef5ca05e8f9764c820c2e`
)
  .then((res) => res.json())
  .then((weather) => {
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

    var card = document.getElementById("card")
    
      if(weather.weather[0].main === "Clouds"){
        card.style.backgroundImage ="url('/image/cloud.jpg')" 
        document.querySelector("#icon").src = "/image/cloud_icon.svg"
      }else if(weather.weather[0].main === "Clear"){
        card.style.backgroundImage ="url('/image/clear.jpg')" 
        document.querySelector("#icon").src = "/image/clear_icon.svg"
      }else if(weather.weather[0].main === "Sunny"){
        card.style.backgroundImage ="url('/image/sunny.jpg')" 
        document.querySelector("#icon").src = "/image/sunny_icon.svg"
      }else if(weather.weather[0].main === "Rain"){
        card.style.backgroundImage ="url('/image/rain.jpg')" 
        document.querySelector("#icon").src = "/image/rain_icon.svg"
      }else if(weather.weather[0].main === "Thunderstrom"){
        card.style.backgroundImage ="url('/image/thunderstrom.jpg')" 
        document.querySelector("#icon").src = "/image/thunderstrom_icon.svg"
      }else if(weather.weather[0].main === "Mist"){
        card.style.backgroundImage ="url('/image/mist.jpg')" 
        document.querySelector("#icon").src = "/image/mist_icon.svg"
      }else if(weather.weather[0].main === "Haze"){
        card.style.backgroundImage ="url('/image/haze.jpg')" 
        document.querySelector("#icon").src = "/image/haze.svg"
      }else if(weather.weather[0].main === "Sand"){
        card.style.backgroundImage ="url('/image/sand.jpg')" 
        document.querySelector("#icon").src = "/image/sand_icon.svg"
      }else if(weather.weather[0].main === "Snow"){
        card.style.backgroundImage ="url('/image/snow.jpg')" 
        document.querySelector("#icon").src = "/image/snow_icon.svg"
      }else{
        card.style.backgroundImage="url('/image/default.jpg')"
        document.querySelector("#icon").src = "/image/cloud_icon.svg"
      }

  });

const file = `https://api.openweathermap.org/data/2.5/onecall?lat=-6.2146&lon=106.8451&units=metric&exclude=minutely,alerts&appid=023831ae929ef5ca05e8f9764c820c2e`;

fetch(file)
  .then((res) => res.json())
  .then((data) => {
    let day1 = data.daily[0].temp.day;
    let day2 = data.daily[1].temp.day;
    let day3 = data.daily[2].temp.day;
    let day4 = data.daily[3].temp.day;
    let day5 = data.daily[4].temp.day;

    document.getElementById("day1").innerHTML = day1 + "ºC";
    document.getElementById("day2").innerHTML = day2 + "ºC";
    document.getElementById("day3").innerHTML = day3 + "ºC";
    document.getElementById("day4").innerHTML = day4 + "ºC";
    document.getElementById("day5").innerHTML = day5 + "ºC";

    let desc1 = data.daily[0].weather[0].main;
    let desc2 = data.daily[1].weather[0].main;
    let desc3 = data.daily[2].weather[0].main;
    let desc4 = data.daily[3].weather[0].main;
    let desc5 = data.daily[4].weather[0].main;

    document.getElementById("status1").innerHTML = desc1;
    document.getElementById("status2").innerHTML = desc2;
    document.getElementById("status3").innerHTML = desc3;
    document.getElementById("status4").innerHTML = desc4;
    document.getElementById("status5").innerHTML = desc5;

    let icon1 = data.daily[0].weather[0].icon;
    let icon2 = data.daily[1].weather[0].icon;
    let icon3 = data.daily[2].weather[0].icon;
    let icon4 = data.daily[3].weather[0].icon;
    let icon5 = data.daily[4].weather[0].icon;

    document.getElementById("icon1").src ="http://openweathermap.org/img/w/" + icon1+ ".png";
    document.getElementById("icon2").src ="http://openweathermap.org/img/w/" + icon2+ ".png";
    document.getElementById("icon3").src ="http://openweathermap.org/img/w/" + icon3+ ".png";
    document.getElementById("icon4").src ="http://openweathermap.org/img/w/" + icon4+ ".png";
    document.getElementById("icon5").src ="http://openweathermap.org/img/w/" + icon5+ ".png";

  });
