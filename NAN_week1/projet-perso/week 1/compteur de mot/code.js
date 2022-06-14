let mots=document.querySelector("#mots");
let nbresMots=document.querySelector("#Nbres");
let nbresCaracteres=document.querySelector("#Nbrecar");

mots.value=" ";
mots.addEventListener("keyup",function(a){
   if(mots.value!=' '){
    nbresMots.textContent=nombesMots(mots.value);
    nbresCaracteres.textContent=nombresCaracteres(mots.value);
   }else{
    nbresMots.text=0;
   }
    
})

const nombesMots = (text)=>{
    return text.replace(/[!..,]/g,' ').trim().split(" ").length;
}

const nombresCaracteres = (text)=>{
    return text.trim().length;
}