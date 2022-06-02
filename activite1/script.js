let feuille1=document.querySelector(".contenu1");
let feuille2=document.querySelector(".contenu2");
let button=document.querySelector(".button");
let message=document.querySelector(".span");


const motReserve=[
    "santé","manger","salle","mot",
    "ville","monde","france","tourner"
];
let note="ce mot appartient deja à la liste";

// button envoi
button.addEventListener("click",function(){
    for(var i=0;i<=motReserve.length;i++){
        if(feuille2.value!==motReserve[i]){
            feuille1.innerHTML=feuille2.value;   
        }else{
            feuille2.value=" ";
            feuille1.innerHTML=feuille2.value;
            message.innerHTML=note;
        }
    }
});