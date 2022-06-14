let poids=document.querySelector('#poids')
let taille=document.querySelector('#taille');
let butonResult=document.querySelector('#res');
let resImc=document.querySelector('#imc');
let span=document.querySelector('span')


const calculImc=function(){
    var a=Number(poids.value); 
     var b=Number(taille.value);
  return (a*b)**2+ " mc";
    
}

butonResult.addEventListener('click',function(){
   span.textContent=calculImc();
})

