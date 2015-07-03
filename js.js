var main = function() {
  $('.menuclicky').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

  $('.button-close').click(function() {
    $('.menu').animate({
      left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);
  });

};
var hide = function() {
$('.lol').hover(function() 
{ 
    $('.mainbody').css("background-color", "black"); 
}); 
};





$(document).ready(main);

$(document).ready(hide);
 
        