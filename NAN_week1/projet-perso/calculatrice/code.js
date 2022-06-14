function calculer(){
    let a = document.querySelector(".input").value 
             let b = eval(a) 
             document.getElementById("input").value = b 

}
function afficher(val) 
         { 
             document.querySelector(".input").value+=val 
         } 

 function effacer() 
         { 
             document.querySelector(".input").value = "" 
         } 
var AC=document.querySelector('#arret');
var Ecran=document.querySelector('.input');
var allumer=document.querySelector('#allumer');
// eteindre la calco
AC.addEventListener('click', function(){
  Ecran.style.backgroundColor= 'black';
  Ecran.innerHTML=' ';
});
allumer.addEventListener('click', function(){
    Ecran.style.backgroundColor= ' white';
  });
  function log() {
    Ecran = document.querySelector(".input");
    var resultat = Math.log(Ecran.value);
    Ecran.value = resultat;
}
function expo() {
    Ecran = document.querySelector(".input");
    var resultat = Math.exp(Ecran.value);
    Ecran.value = resultat;
}
