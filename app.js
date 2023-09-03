const API_KEY = "";
const weather = document.querySelector('.weather');
const main = weather.querySelector(".main");
const input_field = main.querySelector('input');
const temperature_info = input_field.querySelector("button");
// // console.log(temperature_info);
const weather_temp = weather.querySelector(".weather_info");
const weather_temperature_b = document.getElementById('temp');
const description_information = weather_temp.querySelector(".description");
const results=document.getElementById("description1");
const locations = document.getElementById("locate");

const weather_icons = document.querySelector("weather_icon");
// weather_temperature_b.innerHTML = "289"+"&deg"+"c";
// locations.innerText = "UK"
let api_url;

// api_url
// $("input[type='text']").keydown(function(event){
//   if(event.key ==='Enter'){
//     const field = input_field.value; 
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${field}&appid=ede1be2bb8d510eab027dc286e7a6248`)
//     .then(response => console.log(response)).catch(error => {
//       console.error('Error fetching data:', error);
//       // resultElement.textContent = 'Error fetching data';
//   });
//     preventDefault();

    
//   }
//   else{
//     console.log(event.key);
//   }
// })


$('button').click(function(e){
  var text = input_field.value;
  console.log(text);
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=ede1be2bb8d510eab027dc286e7a6248&units=metric`)
  .then(response => response.json()).then(result => processData(result));



results.innerText = "sunny";

  e.preventDefault();
})

function processData(information){

  console.log(information);
  const name = information.name;
  const place = information.sys.country;

  const descrip = information.weather[0].main;
  // console.log(descrip);
  const temperature = information.main.temp;
  // console.log(temperature);
  weather_temperature_b.innerHTML = `${Math.floor(temperature)}&deg c`;
  results.innerText = descrip;
  locations.innerText = `${name}, ${place}`;
  if(information.weather[0].main =="Clouds" ){
    $(".weather_icon").attr("src","icons/clouds.png");
    $(".weather_icon").css("display","inline-block")

  }
  else if(information.weather[0].main =="Clear" ){
    // weather_icons.src = "icons/sunny.png"

    $(".weather_icon").attr("src","icons/sunny.png");
    $(".weather_icon").css("display","inline-block")


  }
  else if(information.weather[0].main =="Rain" ){
    $(".weather_icon").attr("src","icons/thunder.png");
    $(".weather_icon").css("display","inline-block")

    
  }
  else if(information.weather[0].main =="Drizzle" ){
    $(".weather_icon").attr("src","icons/drizzle.png");
    $(".weather_icon").css("display","inline-block")

    
  }
  else if(information.weather[0].main =="Haze"){
    // weather_icons.src = "icons/snowy.png"
    $(".weather_icon").attr("src","icons/snowy.png");
    $(".weather_icon").css("display","inline-block")

    
  }

}

$(document).keydown(function(event) {
  if (event.which === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Call function, trigger events and everything you want to do. Example: Trigger the button element with a click
    $("button").trigger('click');

  }
})