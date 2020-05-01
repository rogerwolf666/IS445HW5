const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
  const numOne = Number(e.target.elements.numberOne.value)
  const numTwo = Number(e.target.elements.numberTwo.value)
  
  var small;
  var large;

  if(numOne > numTwo){
    small = numTwo;
    large = numOne
  } 
  else{
    small = numOne
  large = numTwo
}


  if((numOne < 2 || numOne > 100||numTwo < 2 || numTwo > 100 || isNaN(numOne) || isNaN(numTwo))){document.getElementById("output").innerHTML=`<p>Invalid input, please try again</p>`;}




  else {
    
    
    
    
    document.getElementById("output").innerHTML=`<p>${small} and ${large}</p>`;}
  
  
  
  
  /*if(pwone!==pwtwo){document.getElementById("passwordHelp").innerHTML = 'Error: The two inputted passwords must be identical.';}
else if(pwone.length<6){document.getElementById("passwordHelp").innerHTML = 'Error: The minimal password length is 6 characters.';}
else if(!regex.test(pwone)){document.getElementById("passwordHelp").innerHTML = 'Error: The password must contain at least one digit.';}
  else {document.getElementById("passwordHelp").innerHTML = 'The sumbission is valid!';}*/
  e.preventDefault(); 
});