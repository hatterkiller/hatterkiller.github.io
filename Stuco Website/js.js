var main = function() {
 /*   $('.menuclicky').hover(function() 
{     

    $('.menuclicky').css("background-color", "#484A47"); 
}, function(){
        // change to any color that was previously used.
                 $('.menuclicky').css("background-color", "transparent"); 

    });*/
    
    
  $('.menuclicky').click(function() {
    $('.menu').animate({
      left: "0px"
    }, 200);

    $('body').animate({
      left: "285px"
    }, 200);
  });

    
 $('.button-close').click(function () {
    $('.menu').animate({
                left: "-285px"
    }, 200);

    $('body').animate({
      left: "0px"
    }, 200);

  });

};




/*var hide = function() {
$('.lol').hover(function() 
{     

    $('.mainbody').css("background-image", "url(walrus.jpg)"); 

}, function(){
        // change to any color that was previously used.
        $('.mainbody').css('background-image', 'none');
    });
};
*/




$(document).ready(main);

$(document).ready(hide);
 
        