

window.addEventListener("load", okay, false);

//resig helper function to add event
function addEvent( obj, type, fn ) {
  if ( obj.attachEvent ) {
    obj['e'+type+fn] = fn;
    obj[type+fn] = function(){obj['e'+type+fn]( window.event );}
    obj.attachEvent( 'on'+type, obj[type+fn] );
  } else
    obj.addEventListener( type, fn, false );
}


function okay()
{
//get new date
var date= new Date();
document.getElementById("date").innerHTML=date;


}



