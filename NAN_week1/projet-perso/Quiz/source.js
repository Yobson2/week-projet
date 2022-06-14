//var divquestions=document.querySelector("#questions");
// console.log(divquestions);
//var question1=document.querySelector("#q1");
//let valider=document.querySelector("#valider");
// valider.addEventListener("click", function(){
//     let score=0;
//     let tableau1=question1.classList
    
// })
// let score=0;
//     let tableau1=question1.classList
    // console.log(tableau1);
    // for(var i=0; i<=tableau1.length;i++){
    //     console.log(tableau1[i]);
    // }


let tableau1=[
    question1=["n existe pas en JavaScript",
    "locales ou globales","locales uniquement"],
     question2=["est un moteur de bases de données",
     "ne peut pas être manipulé par JavaScript",
     "décrit la structure du document HTML ou XML"],
     question3=["ABCDE","AB","CD","BC"],
     question4=["width(Nom)","Nom.length","Nom.width"],
     question5=["supprime la première valeur","supprime la dernière valeur",
     "supprime et renvoie la dernière valeur","supprime et renvoie la première valeur"],
     question6=["une erreur","Y","Z","true"]
    ];
    fetch("./fichier.json")
.then(response => {
   return response.json();
})
.then(jsondata => console.log(jsondata));
    
    