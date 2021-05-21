"use strict";

var input = document.querySelector('input');
var button = document.getElementById('bt');
var display = document.querySelector('.display');
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    display.innerHTML += input.value;
  }
});
var exp = "(1+4)*2"; // getting user input from input tag

var res = eval(exp); //evaluate Expression compile , Execute

console.log(res); // 4