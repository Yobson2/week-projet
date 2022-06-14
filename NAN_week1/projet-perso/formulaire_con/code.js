
var connexion=document.querySelector("#connexion");
var formulaire=document.querySelector('#formulaire');
var button=document.querySelector('#button')
var corps=document.querySelector('.body');
// console.log(corps);

// apparution du formulaire

connexion.addEventListener('click',function(){
  // console.log(formulaire);
  formulaire.style.display='block';
  corps.style.display='block';
})


// disparution du formulaire

button.addEventListener('click',function(){
    formulaire.style.display='none';
})


// Inscription

var Inscription=document.querySelector("#inscription");
var formulaire=document.querySelector('#inscription_form');
var boutton=document.querySelector('#button2');
var corps=document.querySelector('.body');

