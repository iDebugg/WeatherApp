function checkWeather(params) {
    window.location.href = "main.html"
}


const fetchInfo = () => {
    let input = cityInput.value
    let apiKey = "bba908c0144e0539e5d9d883db42813c"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${apiKey}&units=metric`

    cityInput.value = ""
    fetch(url)
        .then(res => res.json())
        .then((result) => {
            show.innerHTML = `<h3 style="text-transform: capitalize;">${result.weather[0].description}</h3>
        
            <h1>${result.main.temp} °C
            </h1>
            <h4 class="h6fonts"><i class="fa-solid fa-location-dot fa-sm" style="color: #e41111;"></i> ${result.name}</h4>
            <div class="condition">
            <h6 class="h6fonts">Country:${result.sys.country} </h6>
            <h6 class="h6fonts">Wind Speed:${result.wind.speed}Km/h </h6>
            <h6 class="h6fonts">Humidity:${result.main.humidity}% </h6>
            </div>
            `

        })
}