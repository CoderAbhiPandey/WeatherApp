let city="";
document.getElementById("btn").addEventListener("click", display)
function display(){
  city=document.getElementById("city").value;
  let a='';
fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=89598a94d7969ffd8a8bda751e09d98f')
  .then((response) => {
      return response.json()
  })
  .then(data =>{
    console.log(data["main"].humidity);
    document.getElementById("box").innerHTML=
  `<div id="weatherBox" style="display: flex; justify-content: center; margin-top: 3vmin;">
  <p style="color: white; margin-top: 3vmin;">Weather Details</p>
  <div id="databox" style="width: 70vmin;height:55vmin; background-color: rgb(32, 70, 126)">
  <div style="display: flex; justify-content: center;">
  <div class="container" style="height: 15vmin; width: 15vmin;margin-top: 3vmin;">
  <img src="weather.png" style="max-width: 100%; max-height: 100%; object-fit: contain;">
  </div>
  </div>
  <p style="text-align: center;color: white;font-size: 4vmin; margin-top: 2vmin;letter-spacing: 2px;">${city}</p>
  <div style="margin-top: 4vmin;">
  <p style="text-align: center;color: white;font-size: 2.75vmin; margin-top: 2vmin;letter-spacing: 2px;">Temperature: ${Math.round(data["main"].temp-273)}C</p>
  <p style="text-align: center;color: white;font-size: 2.75vmin; margin-top: 2vmin;letter-spacing: 2px;">Humidity: ${data["main"].humidity}%</p>
  <p style="text-align: center;color: white;font-size: 2.75vmin; margin-top: 2vmin;letter-spacing: 2px;">Weather Condition: ${data["weather"][0].main}</p>
  <p style="text-align: center;color: white;font-size: 2.75vmin; margin-top: 2vmin;letter-spacing: 2px;">Description: ${data["weather"][0].description}</p>
  <p style="text-align: center;color: white;font-size: 2.75vmin; margin-top: 2vmin;letter-spacing: 2px;">Wind Speed: ${data["wind"].speed}Km/h</p>
  </div>
</div>

</div>`
  }) 
}



