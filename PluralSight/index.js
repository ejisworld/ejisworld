const event={
  country: "usa",
  state: "new york city",
  fullname: function(){
    return this.country + " " + this.state;

  }
}
const x = event.fullname();
document.getElementById("country-Name").innerHTML= x;


//display of weather state
function functionName(weather){
  weather = "mostly rainy";
  return weather;
}
const y = functionName();

document.getElementById("weather-Condition").innerHTML= y;


//shows current time and date
const d = new Date();
document.getElementById("current-Date").innerHTML= d.toDateString();

const f = new Date();
document.getElementById("current-time").innerHTML= f.toLocaleTimeString();
//display of waether situation
const weatherInfo = {
  view:"partly hot",
  cloud:"20&#8451",
  cloudy : "cold",
  temp2 : "58&#8451",
  degree : "18&#8451",
  wind: "wind",
  speed: "km/hr",
  today : "today",



};

//others
const display =weatherInfo.view;
const display1 =weatherInfo.cloud;
const display2 =weatherInfo.cloudy;
const display3 =weatherInfo.temp2;
const display4 =weatherInfo.degree;
const display5 =weatherInfo.speed;
const display6 =weatherInfo.wind;



document.getElementById("cold").innerHTML= display;
document.getElementById("cold1").innerHTML= display1;
document.getElementById("coldy1").innerHTML= display2;
document.getElementById("coldy2").innerHTML= display3;
document.getElementById("sunny").innerHTML= display4;
document.getElementById("speed").innerHTML= display5;
document.getElementById("wind").innerHTML= display6;



const weatherInfo1 = {
    period: "today",
    condition: "weather condition",
    morning : "6:00am 50&#8451-cold",
    noon : "12:00pm   25&#8451-cold",
    afternoon : "2:00pm  20&#8451-cold",
    evening : "4:00pm   20&#8451-sunny",




};
const volt = weatherInfo1.period;
const volt1 = weatherInfo1.morning;
const volt2 = weatherInfo1.noon;
const volt3 = weatherInfo1.afternoon;
const volt4 = weatherInfo1.evening;

const volt6 = weatherInfo1.condition;

document.getElementById('time').innerHTML=volt;
document.getElementById('morningtime').innerHTML=volt1;
document.getElementById('noontime').innerHTML=volt2;
document.getElementById('afternoontime').innerHTML=volt3;
document.getElementById('eveningtime').innerHTML=volt4;

document.getElementById('Condition').innerHTML=volt6;
