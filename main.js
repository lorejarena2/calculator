const num1=document.getElementById('numero');
var mostrar=document.getElementById('mostrar')
var operacion=document.getElementById('operacion')
var operando=0
var uno=0
var dos=0


function operaciones(){
  switch(operando){
    case '-':
    dos=parseInt(num1.value)
    resultado=(uno-dos)
    mostrar.textContent=resultado;
    console.log(uno)
    console.log(dos)
    num1.value=""
    operando=""
      break;
    case '*':
    dos=parseInt(num1.value)
    resultado=(dos*uno)
    mostrar.textContent=resultado;
    console.log(uno)
    console.log(dos)
    num1.value=""
    operando=""
      break;
    case '/':
    dos=parseInt(num1.value)
    resultado=(uno/dos)
    mostrar.textContent=resultado;
    console.log(uno)
    console.log(dos)
    num1.value=""
    operando=""
      break;
    case '+':
      dos=parseInt(num1.value)
      resultado=(dos+uno)
      mostrar.textContent=resultado;
      console.log(uno)
      console.log(dos)
      num1.value=""
      operando=""
      
  }
}

  function sum(){
    operando="+"
    uno=parseInt(num1.value)
    num1.value=""

  }

  function rest(){
    operando="-"
    uno=parseInt(num1.value)
    num1.value=""
  }

  function divi(){
    operando="/"
    uno=parseInt(num1.value)
    num1.value=""
  }

  function multi(){
    operando="*"
    uno=parseInt(num1.value)
    num1.value=""
  }




