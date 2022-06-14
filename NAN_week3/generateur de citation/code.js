// recuperations

let nextButton=document.querySelector(".btn");
let body=document.querySelector('body');
let card=document.querySelector('.card');
let data=null;
let keys=0


window.addEventListener('load',async ()=>{
data= await fetch("fichier.json");
data= await data.json();
console.log(data);
randowCitation()
})

const randowCitation= function(){

    keys=Object.keys(data) 
   let number=Math.floor(Math.random()*keys.length)

    card.innerHTML=`<h3>${keys[number]}</h3>
    <q class="cita_text">${data[keys[number]].text}</q>
   <blockquote>-----${data[keys[number]].auteur}-----</blockquote>`

};

nextButton.addEventListener('click', function(){
randowCitation();
});