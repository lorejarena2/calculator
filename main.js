// const num1=document.getElementById('numero');
// var mostrar=document.getElementById('mostrar')
// var operacion=document.getElementById('operacion')
var su=document.getElementById('btn_sumar')
var operando=0
var nom=0
var uno=0
var dos=0


for (let i=0; i<=9; i++){
  document.getElementById('btn_'+ i ).addEventListener('click',(evento)=> mostrar(evento.target));
}

function mostrar(tecla){
  document.getElementById('mostrar').innerHTML=
  document.getElementById('mostrar').innerHTML+tecla.value
}

function mostrar2(tecla){
  document.getElementById('mostrar').innerHTML=
  document.getElementById('mostrar').innerHTML+tecla
}

addEventListener('keypress',evento=>{
  if(!isNaN(evento.key)){
    mostrar2(evento.key)
  }
})


addEventListener('keypress', (event) => {
  if(isNaN(event.key) && (event.key != 'Enter')){
  nom=event.key; 
  operando=event.key;
  uno=parseInt(document.getElementById('mostrar').innerHTML)
  document.getElementById('mostrar').innerHTML=""
  console.log(nom)
  console.log(uno)
  }
 
 })


addEventListener('keypress', (event) => {
  if((event.key)=='Enter'){
    console.log(uno)
    teclado()
  }
 
 })


 function teclado(){
  switch(nom){
    case '-':
    dos=parseInt(document.getElementById('mostrar').innerHTML)
    resultado=(uno-dos)
    document.getElementById('mostrar').innerHTML=resultado;
    console.log(uno)
    console.log(dos) 
    console.log('este es el resultado '+resultado)
    operando=""
    nom=""
      break;
   case '*':
    dos=parseInt(document.getElementById('mostrar').innerHTML)
    resultado=(dos*uno)
    document.getElementById('mostrar').innerHTML=resultado;
    console.log(uno)
    console.log(dos) 
    console.log('este es el resultado '+resultado)
    operando=""
    nom=""
      break;
    case '/':
    dos=parseInt(document.getElementById('mostrar').innerHTML)
     resultado=(uno/dos)
     document.getElementById('mostrar').innerHTML=resultado;
     console.log(uno)
     console.log(dos) 
     console.log('este es el resultado '+resultado)
     operando=""
     nom=""
       break;
    case '+':
      dos=parseInt(document.getElementById('mostrar').innerHTML)
      resultado=(dos+uno)
      document.getElementById('mostrar').innerHTML=resultado;
      console.log(uno)
      console.log(dos)
      console.log('este es el resultado '+resultado)
      operando=""
      nom=""
      
   }
 }


function operaciones(){
  switch(operando){
    case '-':
    dos=parseInt(document.getElementById('mostrar').innerHTML)
    resultado=(uno-dos)
    document.getElementById('mostrar').innerHTML=resultado;
    console.log(uno)
    console.log(dos) 
    console.log('este es el resultado '+resultado)
    operando=""
    nom=""
      break;
   case '*':
    dos=parseInt(document.getElementById('mostrar').innerHTML)
    resultado=(dos*uno)
    document.getElementById('mostrar').innerHTML=resultado;
    console.log(uno)
    console.log(dos) 
    console.log('este es el resultado '+resultado)
    operando=""
    nom=""
      break;
    case '/':
    dos=parseInt(document.getElementById('mostrar').innerHTML)
     resultado=(uno/dos)
     document.getElementById('mostrar').innerHTML=resultado;
      console.log(uno)
     console.log(dos) 
     console.log('este es el resultado '+resultado)
     operando=""
     nom=""
       break;
    case '+':
      dos=parseInt(document.getElementById('mostrar').innerHTML)
      resultado=(dos+uno)
      document.getElementById('mostrar').innerHTML=resultado;
       console.log(uno)
      console.log(dos)
      console.log('este es el resultado '+resultado)
      operando=""
      nom=""
      
   }
 }

  function sum(){
    operando="+"
    uno=parseInt(document.getElementById('mostrar').innerHTML)
    console.log(uno)
    document.getElementById('mostrar').innerHTML=""
  }

   function rest(){
    operando="-"
    uno=parseInt(document.getElementById('mostrar').innerHTML)
    console.log(uno)
    document.getElementById('mostrar').innerHTML=""
  }

  function divi(){
    operando="/"
    uno=parseInt(document.getElementById('mostrar').innerHTML)
    console.log(uno)
    document.getElementById('mostrar').innerHTML=""
  }

  function multi(){
    operando="*"
    uno=parseInt(document.getElementById('mostrar').innerHTML)
    console.log(uno)
    document.getElementById('mostrar').innerHTML=""
   }

  function ac(){
    document.getElementById('mostrar').innerHTML=""
 }




