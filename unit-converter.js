/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meterToFeet = 3.281
const literToGallon = 0.264
const kiloToPound = 2.204

let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")
let volEl = document.getElementById("vol-el")
let kiloEl = document.getElementById("kilo-el")


convertBtn.addEventListener("click", function() {
  let inputValue = inputEl.value
  lengthEl.textContent = `${inputValue} meter = ${inputValue * meterToFeet} feet`
  volEl.textContent = `${inputValue} volume = ${inputValue * literToGallon} gallons`
  kiloEl.textContent = `${inputValue} kilogram = ${inputValue * kiloToPound} pounds`
})