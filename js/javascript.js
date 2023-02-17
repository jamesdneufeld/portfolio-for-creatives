$(document).ready(function() {
  $('.experiment-image-1').click(function() {
    $('.experiment-image-2').fadeToggle("slow");
    // Alternative animation for example
    // slideToggle("fast");
  });
});