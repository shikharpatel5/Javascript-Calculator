$( document ).ready(function() {

$("#1").click(function() {
 document.getElementById("Inputtext").value += '1';
});
  
$("#2").click(function() {
 document.getElementById("Inputtext").value += '2';
});
  
$("#3").click(function() {
 document.getElementById("Inputtext").value += '3';
});
  
$("#4").click(function() {
 document.getElementById("Inputtext").value += '4';
});  

$("#5").click(function() {
 document.getElementById("Inputtext").value += '5';
}); 
  
$("#6").click(function() {
 document.getElementById("Inputtext").value += '6';
}); 
  
$("#7").click(function() {
 document.getElementById("Inputtext").value += '7';
}); 
  
$("#8").click(function() {
 document.getElementById("Inputtext").value += '8';
}); 
  
$("#9").click(function() {
 document.getElementById("Inputtext").value += '9';
}); 
  
$("#0").click(function() {  document.getElementById("Inputtext").value += '0';
}); 
  
$("#dot").click(function() {  document.getElementById("Inputtext").value += '.';
});
  
  
$("#plus").click(function() {
 document.getElementById("Inputtext").value += ' + ';
});
  
$("#minus").click(function() {
 document.getElementById("Inputtext").value += ' - ';
});
  
$("#multiply").click(function() {
 document.getElementById("Inputtext").value += ' * ';
});
  
$("#divide").click(function() {
 document.getElementById("Inputtext").value += ' / ';
});
  
$("#modulus").click(function() {
 document.getElementById("Inputtext").value += ' % ';
});
    
$("#Exp").click(function() {
 document.getElementById("Inputtext").value += Math.exp(document.getElementById("Inputtext").value);
});    

$("#sqrt").click(function() {
 document.getElementById("Inputtext").value = Math.sqrt(document.getElementById("Inputtext").value);
});
    
$("#pie").click(function() {
if(document.getElementById("Inputtext").value.length == 0)
{
  document.getElementById("Inputtext").value = Math.PI.toFixed(8);   
}

else{    
 document.getElementById("Inputtext").value = document.getElementById("Inputtext").value*Math.PI;
    }
});   
  
  
$("#equals").click(function() {
 document.getElementById("Inputtext").value =  eval(document.getElementById("Inputtext").value);
});

$("#SIN").click(function() {
 document.getElementById("Inputtext").value =  Math.sin(document.getElementById("Inputtext").value);
}); 
    
$("#COS").click(function() {
 document.getElementById("Inputtext").value =  Math.cos(document.getElementById("Inputtext").value);
}); 
    
$("#TAN").click(function() {
 document.getElementById("Inputtext").value =  Math.tan(document.getElementById("Inputtext").value);
});
    
$("#Log").click(function() {
 document.getElementById("Inputtext").value =  Math.log(document.getElementById("Inputtext").value);
});
    
$("#BACK").click(function() {
 document.getElementById("Inputtext").value = document.getElementById("Inputtext").value.substring(0, document.getElementById("Inputtext").value.length - 1 ) ;
});
  
$("#clear").click(function() {
 document.getElementById("Inputtext").value =  '';
});   
  
  
  
});