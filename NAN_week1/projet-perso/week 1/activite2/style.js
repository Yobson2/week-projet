const api_keys="api_key=6d5844f725cdbf8e0d22ba1fc518cac6";
const url="https://api.themoviedb.org/3";
const img_url="https://image.tmdb.org/t/p/w500";
let data;
let Divs=document.querySelector(".Grand");


 const ajouter_element=function(data){
    // console.log("data", data);

     for(var i=0;i<data.results.length;i++){
        var recuperation=data.results[i];
      //   console.log("res", recuperation);
        var content=`<div class="element1">
        <img src="${img_url+recuperation.poster_path}" alt="">
        <h3>
        ${recuperation.title}
        </h3>
        <p>${recuperation.release_date}</p>
    </div>`
    Divs.innerHTML+=content;
   
    }
 }

 window.addEventListener("load",async()=>{
     var donnee= await fetch("https://api.themoviedb.org/3/discover/movie?api_key=6d5844f725cdbf8e0d22ba1fc518cac6&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate")
      donnee= await donnee.json();
    ajouter_element(donnee)
    console.log(donnee);

 })


//  traitement des informations du formulaire
let connexion=document.querySelector('#connect');
let enregistrer=document.querySelector("#enregistrer");

let adresse=document.querySelector("#adresse");
let Nom=document.querySelector("#nom")
let prenom=document.querySelector("#prenom")
let date=document.querySelector("#date")
// console.log(localStorage)
var monStockage = localStorage;
console.log(monStockage)


enregistrer.addEventListener("click",function(){
   localStorage.setItem('adresse e-mail', adresse.value);
   localStorage.setItem('Nom',Nom.value );
   localStorage.setItem('Prenom',prenom.value );
  localStorage.setItem('Date de naissance',date.value );  
});