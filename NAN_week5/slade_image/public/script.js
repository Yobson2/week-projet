window.addEventListener('load',()=>{
    let droite=document.querySelector('#suivant');
    let gauche=document.querySelector('#precedent');
    let container=document.querySelector('.elements');
    let content=document.querySelector('.content');
    let slider=document.querySelector('.images');
    let deplacement=null
    let count=0;
 
     console.log(content);

    function avance(){
        
        deplacement=-1
        slider.style.transition=`0.5s`
        slider.style.transform=`translate(-300px)`
        donnee()
    }
    
    function retour(){
        deplacement=1
        slider.style.transition=`0.5s`
        slider.style.transform=`translate(300px)`
        donnee()
       
    }
    droite.addEventListener('click',avance);
    gauche.addEventListener('click',retour);

    function donnee(){
        if(deplacement===-1){
            slider.appendChild(slider.firstElementChild)
            console.log( slider);
        }else{
            console.log( slider);
            slider.prepend(slider.lastElementChild)
        }
        slider.style.transition="none";
        
        slider.style.transform=`translate(10px)`;
    }
     


})