

$(document).ready(function(){

 $(".header").hide();
 $(".maincontent").hide();

$(".content").children("img").fadeToggle(1000).fadeIn();
//first effect
$(".logo").mouseenter(

     function()
     {
     	$(".word").fadeTo("slow",0.01);
        $(".logo").delay(500).fadeTo("slow",0.10).fadeOut();
         $(".logo").delay(5000).hide();
        $(".header").show().fadeIn();
         $(".about").show();
         $(".maincontent").show();


     }

  	);




 //end of effect

});