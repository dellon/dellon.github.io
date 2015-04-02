
$(document).ready(function(){
  var randomNumber = Math.floor((Math.random() * 100) + 1);//find a way for the program to choose a random number between 1 and 100, save this as a variable
  
  
  //when the player clicks the 'guess' button
  $('button').on('click', function(){
   var userGuess =  parseInt ($('input').val()); //save their guess in the console
    console.log(userGuess);
    
    if (userGuess==randomNumber){
      alert("You Guess Right")
    } else if (userGuess > randomNumber ){
      alert("too high")
    } else if(userGuess < randomNumber){
      alert("too low")
    }
