const getWeather = city => {
  return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=023831ae929ef5ca05e8f9764c820c2e`)
    .then(res => res.json())
    .then(res => res)
}


const searchButton = document.querySelector(".search-btn")
searchButton.addEventListener('click', async () => {
  const inputCity = document.querySelector('.search')
  const weather = await getWeather(inputCity.value)

  document.querySelector('.derajat').innerHTML = `${weather.main.temp}`
  document.querySelector('.kelembapan').innerHTML = `${weather.main.humidity}%`
  document.querySelector('.angin').innerHTML = `${weather.wind.speed}km/h`
  document.querySelector('.jarakpandang').innerHTML = `${weather.visibility}km`
})