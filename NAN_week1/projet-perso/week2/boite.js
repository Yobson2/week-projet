let cadre2=document.querySelector(".cadre2");
// console.log(cadre2);
let buttonCheck=document.querySelector('.button');
let cadre3=document.querySelector(".cadre3");
let mapage=document.querySelector(".page");



buttonCheck.addEventListener("click",function(){ 
    if(buttonCheck.checked){
        cadre2.classList.remove("entrer")
        cadre2.classList.add("sortir");
        cadre3.classList.remove("sortir")
        cadre3.classList.add("entrer");
    }else{
        cadre3.classList.remove("entrer");
        cadre3.classList.add("sortir");
        cadre2.classList.remove("sortir")
        cadre2.classList.add("entrer");
    }
});

let Envoyer=document.querySelector('#Envoyer')
// console.log(Envoyer);
let monstockage=localStorage
Envoyer.addEventListener("click",function(){
    let donnee=document.querySelectorAll(".conct1")
    for (let i = 0; i <= donnee.length; i++) {
        const element = donnee [i];
        localStorage.setItem("Nom",donnee[0].value);
        localStorage.setItem("e- mail",donnee[1].value);
        localStorage.setItem("password",donnee[2].value);
    }
})
console.log(monstockage)

// gestion de la connexion

