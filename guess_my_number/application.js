$(document).ready(function(){
  var randomNumber = Math.floor((Math.random() * 100) + 1);//find a way for the program to choose a random number between 1 and 100, save this as a variable
  var guess_counter = 0 
  
  //when the player clicks on the 'guess' button
  $('button').on('click', function(){
   var userGuess =  parseInt ($('input').val()); //save their guess as a variable
    console.log(userGuess);
    guess_counter = guess_counter + 1 
    console.log(guess_counter)
    $("#guess_counter").text(guess_counter + " guesses so far") 

    if (userGuess==randomNumber){
      alert("You Guess Right")
    } else if (userGuess > randomNumber ){
      alert("Guess Lower")
    } else if(userGuess < randomNumber){
      alert("Guess Higher")
