let city=(document.querySelector("input"));
let search=document.querySelector("button");
let cityval=document.querySelector("#val2");
let temp=document.querySelector("#val1");
let wind=document.querySelector("#windspeed")
let humidity=document.querySelector("#humid")
let getWeather= async ()=>{
    let getcity=city.value;
    let api_key ='d2fe295c989d3c6b4226cc1f2446c472';
    let promise = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${getcity}&appid=${api_key}`);
    let real= await promise.json(); 
    console.log(real)
    if(real.cod===200){
    if(document.querySelector("#humidity").getAttribute("id")){
        console.log("removing")
        let newDiv = document.createElement("div")
        cityval.innerText=getcity.toUpperCase();
        temp.innerText=Math.round(real.main.temp)+" °F";
        wind.innerText=real.wind.speed +"km/h";
        humidity.innerText=real.main.humidity +"%";
        
    }
}
    else{
        cityval.innerText="Sorry!! location not found"
        document.querySelector("#img").setAttribute("src","images/not found.webp")
    }
    
    Wimages(real);
    document.querySelector("")

}
let Wimages=(string)=>{
if(string.weather[0].main==="Clouds" || string.weather[0].main==="Mist" ){
    document.querySelector("#img").setAttribute("src","images/cloudy.jpg")
}
else if(string.weather[0].main==="Haze"){
   document.querySelector("#img").setAttribute("src","images/Haze.jpg")
}
else if(string.weather[0].main==="Clear" || string.weather[0].main==="Sunny"){
   document.querySelector("#img").setAttribute("src","images/sunny.jpg")
}
else{
   document.querySelector("#img").setAttribute("src","images/rainy.jpg")
}

}


search.addEventListener("click",getWeather);






