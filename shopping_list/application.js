$(document).ready(function(){
  $('#add').on('click',function(){
    var val1 = $('input').val();
    $('div').append("<p>"+val1+"</p>");
    console.log(val1);
    $('#clear').on('click',function(){
    $('div').empty();  
    });
  });
});
