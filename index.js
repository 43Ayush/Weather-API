const apikey="e78287cd5e5bdb6f67297619df1fa9d3";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");

async function checkweather(city){
    const response=await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status==404){
        $(".error").css({
            display:"block"
        });
        $(".weather").css({
            display:"none"
        });
    }
    else{
        var data= await response.json();


        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="Images/clouds.png";
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="Images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="Images/ain.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="Images/drizzle.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="Images/mist.png";
        }
    
        $(".weather").css({
            display:"block"
        });
        $(".error").css({
            display:"none"
        });
    }

   

}

searchbtn.addEventListener("click",()=>{
    checkweather(searchbox.value);
})
