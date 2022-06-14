// creation des div
let div1=document.createElement("div");
let div2=document.createElement("div");
let div3=document.createElement("div");
let divmère=document.createElement("div");


// creation des bouttons
let boutton1=document.createElement("button")
boutton1.textContent="BONJOUR";
let boutton2=document.createElement("button")
boutton2.textContent="Hello";
let boutton3=document.createElement("button")
boutton3.textContent="Cliquez";

// affichage des elements sur la page
// document.divmère.append(boutton1,div1,boutton2,div2,boutton3,div3);
// document.body.append(divmère);

//mise en forme



// les evenements 
boutton1.addEventListener("click", function(){
        div1.style.backgroundColor="grey";
})
boutton2.addEventListener("click",function(){
  div2.style.backgroundColor="blue";
})
boutton3.addEventListener("click", function(){
    div3.style.backgroundColor="yellow";
  });
