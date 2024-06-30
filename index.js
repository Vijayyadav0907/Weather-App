const inputBox=document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weatherImg =document.querySelector('.weather-img');
const temperatur = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementsByClassName('.wind-speed');
const locationNotFound = document.querySelector('.location-not-found');
const weatherBody = document.querySelector('.weather-body');
async function checkWeather(city){
    const api_key ="b4b3fa4679597ab1c7c2d9f43ef101ea";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data = await fetch(`${url}`).then(response =>response.json());


   

    if(weather_data.cod === '404'){
        locationNotFound.style.display = "flex";
        weatherBody.style.display = "none";
        console.log("error");
        return;
    } 
    locationNotFound.style.display ="none";
    weatherBody.style.display="flex";
     console.log(weather_data);
    
    temperatur.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}℃`;
    description.innerHTML =`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    windSpeed.innerHTML = `${weather_data.wind.speed} Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherImg.src = "Images/cloud.png";
           break;
        case 'Clear':
                weatherImg.src = "/Images/clear.png";
               break; 
        case 'Rain':
                    weatherImg.src = "/Images/rain.png";
                break;    
        case 'Haze':
                        weatherImg.src = "/Images/mist.png";
                break;        
         case 'Snow':
            weatherImg.src = "/Images/snow.png"
          break;
    }
}
searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value);
});