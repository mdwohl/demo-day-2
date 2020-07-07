'use strict';

/* 
  guessing game about ginger

  is ginger a dog (y/n)
    if they answer y - "correct"
    else - "well it's not a cat"

  Does Nicholas love Ginger (y/n)
    if y "of course"
    if no - "you monster!"
    else - "quit messing around"

  How old is she? ('two')
    if zero - she's older
    if 'one' or 'three' - almost
    if 'two' - correct
    if 'four' not close
    else - not even in the ballpark
  */

var gingerIsDog = prompt('Is Ginger a dog? Y/N');

if(gingerIsDog === 'Y'){
  alert('Correct.');
} else {
  alert('Well, she is not a cat.');
}

var gingerLoveAnswer = prompt('Does Nicholas love Ginger?');

if(gingerLoveAnswer === 'Y'){
  alert('Of course!');
} else if( 'N' ) {
  alert('You monster!');
} else {
  alert('Quit messing around!');
}

var gingerAgeAnswer = prompt('How old is she?');

//this will use a switch statement: an if/else that is more efficient if you have more than two answers

switch(gingerAgeAnswer){
case 'zero':
  alert('She is definitely older.');
  break;
case 'one': 
  alert('Almost there.');
  break;
case 'three"':
  alert('Almost there.');
  break;
default:
  alert('Not even in the ballpark!');

}