var connexion=document.querySelector('#con');
var inscription=document.querySelector('#insc');


// recuperation du formulaire
var form1=document.querySelector('.form1');
var form2=document.querySelector('.form2');
// console.log(form1);

// les traitements

var afficheconnexion=connexion.addEventListener('click',function(){
    form1.style.display='none';
    form2.style.display='block';
    });
    
   
    
inscription.addEventListener('click',function(){
    form2.style.display='none';
    form1.style.display='block';
   
});
