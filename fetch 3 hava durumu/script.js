let  url='https://api.openweathermap.org/data/2.5/'
let key='0472bde9a2c3ffb2c0197772e1e7b375'

let city=document.querySelector(".city");
let desc=document.querySelector(".desc");
let minmax=document.querySelector(".minmax");
let temp=document.querySelector(".temp")

let setQuery =(e)=>{
    if(e.keyCode=='13'){
        getResult(svalue.value)
    }
}

let getResult=(value)=>{
let weatherValue=`${url}weather?q=${value}&appid=${key}&units=metric&lang=tr`
fetch(weatherValue).then(weather =>{
    return weather.json()
})
.then(displayResult)
}

let displayResult=(result)=>{
city.innerHTML=`${result.name}, ${result.sys.country}`
temp.innerHTML=`${result.main.temp}°C`
desc.innerHTML=`${result.weather[0].description}`
minmax.innerHTML=`${result.main.temp_min}°C ${result.main.temp_max}°C`
}

let svalue=document.getElementById("searchBar");
svalue.addEventListener('keypress',setQuery);