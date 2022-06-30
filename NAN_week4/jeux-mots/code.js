// selection des elements

let section=document.querySelector('.contenu');
let motEntre=document.querySelector('#mot_ent');
let buttonValider=document.querySelector('#valider');
let levels=[];
let niveau=null;
let found=0;
        //  les span 
let level=document.querySelector('.element1');
let temps=document.querySelector('.element2');
let score=document.querySelector('.element3');

let tableau1=['hello','salut','maths','linux'];
let tableau2=['joyeux','whisky','window','jockey','sphynx'];
let tableau3=['affects','anarque','serpents','aubiers','attrappe']

//   les fonctions de mots aleatoires

// function random1(){
//  let index=Math.floor(Math.random()*tableau1.length);
//  let valeurMot=tableau1[index];
//   return valeurMot
// }
// function random2(){
//  let index=Math.floor(Math.random()*tableau2.length);
//  let valeurMot=tableau2[index];
//     return valeurMot
// }
// function random3(){
//  let index=Math.floor(Math.random()*tableau3.length);
//  let valeurMot=tableau3[index];
//     return valeurMot
// }
   
// //    utilisations des differents elements

// function afficheScore(){
//     var count=0;
//    return count+=1
// }
// function niveau(){
//     var niv=0;
//     return niv+=1
// }
// var tp=parseInt(temps.textContent)
// function afficheTemps(){
//         if(tp>0){
//             tp-=1
//             temps.textContent=tp;
//         }
//         else if( tp==0){
//             temps.textContent =0;
//         }
//      }
// setInterval(afficheTemps,1000)
// window.addEventListener('load',function(){
//     section.textContent=random1();
// })

/////////////////////////////////////////events

// function inverse(){   
// }

// buttonValider.addEventListener('click',function(){

// })

// correction

function getWord(length){
    var alphabet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let output="";
    while(output.length<length){
    let index=Math.floor(Math.random()*alphabet.length);
    output+=alphabet[index];
    }
 return output;
}

let inter=null;

function chrono(time){
    let count=0;
    inter=setInterval(()=>{

        temps.textContent=time-count;
        motEntre.style.border="1px solid grey"
        count++;
        // console.log(count)
        if(count == time){
            motEntre.style.border="1px solid red"
            found=0;
             score.textContent=found;
            // arret du chrono
            clearInterval(inter)
            // generer un nouveau mot et temps reprend
            section.textContent=getWord(niveau.word_length);
            chrono(niveau.time)

        }
    },1000)
 
}
window.addEventListener('load',async()=>{
    levels= await fetch('level.json');
    levels=await levels.json();
    niveau=levels[0];
    level.textContent=niveau.level
    section.textContent=getWord(niveau.word_length);
    chrono(niveau.time)
    motEntre.addEventListener('input',(e)=>{
        // console.log(e.target.value)

        if(e.target.value==section.textContent.split('').reverse().join('')){
            clearInterval(inter)
            found++
            if(found==niveau.count_found){
                niveau=levels[niveau.level]
                found=0;
                level.textContent=niveau.level;

            }
            score.textContent=found;
            // pour vider le input
            e.target.value='';
            e.target.style.border='1px solid lime'
            // generer un nouveau mot et temps reprend
            section.textContent=getWord(niveau.word_length);
            chrono(niveau.time)


        }
        
    })
})


