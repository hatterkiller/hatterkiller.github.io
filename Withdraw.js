function Withdraw(t) {

        $.ajax({
            type: 'GET',
            url: 'sendoffer.php', 
            data: {
            ID: t,
        }
        })
 

        return false;
 
    };



	function WaitWindow() {

        $.ajax({
            type: 'POST',
            url: 'WaitWindow.php', 
        })
        .done(function(data){
             
			$('#response3').fadeIn('slow');
            $('#response3').html(data);
             
        })

 

        return true;
 
    };
function CloseWindow() {

        $.ajax({
            type: 'POST',
            url: 'CloseWindow.php', 
        })
        .done(function(data){
             
			clearInterval(myInterval);
            $('#response3').html(data);
             
        })

 

        return false;
 
    };
	
	function updateCounter() {

        $.ajax({
            type: 'POST',
            url: 'http://hatterkiller.github.io/counter.php', 
        })
        .done(function(data){
             
            $('#time_left').html(data);
             
        })

 

        return false;
 
    };
	
$(document).ready(function(){
	$('html').on('click','.close_part',function(){
		$('#response3').fadeOut('slow');
	})
	
	var myInterval;

myInterval = setInterval(function(){   updateCounter() }, 1000);
})


	