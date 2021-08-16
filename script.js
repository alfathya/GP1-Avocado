const getWeather = city => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=023831ae929ef5ca05e8f9764c820c2e`)
      .then(res => res.json())
      .then(res => res)
  }
  
  
  const searchButton = document.querySelector(".search-btn")
  searchButton.addEventListener('click', async () => {
    const inputCity = document.querySelector('.search')
    const weather = await getWeather(inputCity.value)
    const suhu  = Math.round(weather.main.temp - 273.15)
    
  
  
    document.querySelector('.derajat').innerHTML = `${suhu} &#8451`
    document.querySelector('.kelembapan').innerHTML = `${weather.main.humidity}%`
    document.querySelector('.angin').innerHTML = `${weather.wind.speed}m/h`
    document.querySelector('.jarakpandang').innerHTML = `${weather.visibility/1000}km`
    document.querySelector('.statusText').innerHTML = `${weather.weather[0].main}`
    document.querySelector('.name-city').innerHTML = `${weather.name}`
    document.querySelector('.tekanan').innerHTML = `${weather.main.pressure}hPa`
    inputCity.value = ""
  })
  
  
  