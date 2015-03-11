$(document).ready(function(){
  var my_array= ["1", "2", "5", "5", "1", "2", "6", "7", "6", "7"]
  for(i in my_array){
    $('#card_holder').append('<div class="card"><p>'+my_array[i]+'</p></div>');
  }
  var click_counter=0;
  var card1=0;
  var card2=0;
  $(".card").click(function(){
    if(click_counter==0){
      click_counter == 1;
      card1=$(this).find("p").text();
    	$(this).find("p").css("opacity", "1");}
    else{
      
    }
  });
});
