// let feuille1=document.querySelector(".contenu1");
// let feuille2=document.querySelector(".contenu2");
// let button=document.querySelector(".button");
// let message=document.querySelector(".span");
// let minidiv=document.createElement("div");




// const motReserve=[
//     "santé","manger","salle","mot",
//     "ville","monde","france","tourner"
// ];
// let note="ce mot appartient deja à la liste";

// button envoi
// button.addEventListener("toggle",function(){
//     for(var i=0;i<=motReserve.length;i++){
//         if(feuille2.value!==motReserve[i]){
//             //feuille1.innerHTML=feuille2.value;  
//             feuille1.appendChild(minidiv);
//             minidiv.textContent=feuille2.value 
//             for(var j=0; j<=minidiv.length;j++){
//                 if(feuille1.value!=0 )
//                 minidiv++;
//             }
//         }else{
//             feuille2.value=" ";
//             feuille1.innerHTML=feuille2.value;
//             message.innerHTML=note;
//         }
//     }
// });



// manipulation du json
var pt= function(){
    return new Promise((succes,failed)=> succes('ok'))
}

window.addEventListener('load', async ()=>{
   let arr= await fetch("./index.txt")
  // arr=await arr.json()
  // let v=await pt()
  // console.log(v);

})
