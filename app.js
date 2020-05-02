const formElement = document.querySelector("form");
formElement.addEventListener("submit", e => {
  const numOne = Number(e.target.elements.numberOne.value)
  const numTwo = Number(e.target.elements.numberTwo.value)
  
  var small;
  var large;
  let primeNums = [];
  var divideCheck;

  if(numOne > numTwo){
    small = numTwo;
    large = numOne
  } 
  else{
    small = numOne
    large = numTwo
  }

  if((numOne < 2 || numOne > 100||numTwo < 2 || numTwo > 100 || isNaN(numOne) || isNaN(numTwo))){document.getElementById("output").innerHTML=`<p class="text-danger pl-3">Invalid input, please try again.</p>`;}

  else {
    for(var i = small; i<=large;i+=1){
      divideCheck=0
      for(var j = 2; j<i;j+=1){
        if(i%j===0){divideCheck+=1}
      }
      if(divideCheck===0){primeNums.push(i)}
    }
    document.getElementById("output").innerHTML=`<h5 class="text-info pl-3">There are ${primeNums.length} prime numbers.</h5>`;

    if(primeNums.length > 0){
      document.getElementById("output").innerHTML+=`<p class="text-danger font-weight-bold pl-3">${primeNums.toString()}</p>`;
    }
  
  
  }
  e.preventDefault(); 
});