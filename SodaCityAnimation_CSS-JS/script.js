// Title: Soda City Script
// Author: Tommaso Bacci @kab-m
// Date: 11/02/2022
// Description: JavaScript for Soda City animation.html

// import html elements
var btn = document.getElementById('btn');
var fumo = document.getElementById('fumo');
var ing = document.getElementById('ingUno');
var ingg = document.getElementById('ingDue');
// set counter
var x = 1;
// Event Listening for button click
btn.addEventListener('click', function(){
  x++ //increment counter
  if(x%2==0){//if counter is even
    // on, add classes to elements and change button text
    fumo.classList.add('anim');
    ing.classList.add('ing1');
    ingg.classList.add('ing2');
    btn.innerHTML='Off!';
  }else{
    // off, remove classes from elements and change button text
    fumo.classList.remove('anim');
    ing.classList.remove('ing1');
    ingg.classList.remove('ing2');
    btn.innerHTML='On!';
  }
});
