const num1=document.getElementById('uno');
const num2=document.getElementById('dos');
var mostrar=document.getElementById('mostrar')
var operacion=document.getElementById('operacion')
var operando=0


function operaciones(){
  switch(operando){
    case '-':
      resultado=parseInt(num1.value)-parseInt(num2.value);
      console.log(num1.value,num2.value)
      mostrar.textContent=resultado;
      operacion.textContent='-'
      break;
    case '*':
      resultado=parseInt(num1.value)*parseInt(num2.value);
      mostrar.textContent=resultado;
      operacion.textContent='*'
      break;
    case '/':
      resultado=parseInt(num1.value)/parseInt(num2.value);
      mostrar.textContent=resultado;
      operacion.textContent='/' 
      break;
    case '+':
      resultado=parseInt(num1.value)+parseInt(num2.value);
      mostrar.textContent=resultado;
      operacion.textContent='+' 
      

  }
}

  function sum(){
    operacion.textContent='+'
    operando="+"
  }

  function rest(){
    operacion.textContent='-'
    operando="-"
  }

  function multi(){
    operacion.textContent='*'
    operando="*"
  }

  function divi(){
    operacion.textContent='/'
    operando="/"
  }

  function ac(){
    mostrar.textContent=0;
    operacion.textContent='' 
    num1.value=""
    num2.value=""
  }

  
