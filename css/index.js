const monthName=document.getElementById('monthName')

const dayName = document.getElementById('dayName')

const dayNumber = document.getElementById('dayNumber')

const year = document.getElementById('year')


//YEAR
const date = new Date();
document.getElementById('year').innerHTML = date.getFullYear();

//MONTH NAME
const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date ();
let month = months[d.getMonth()];
document.getElementById('monthName').innerHTML = month;

//DAY NAME
const days =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const newday = new Date();
let day = days[newday.getDay()];
document.getElementById('dayName').innerHTML = day;

//DAY NUMBER

const dayNu = new Date();
document.getElementById('dayNumber').innerHTML= dayNu.getDate();