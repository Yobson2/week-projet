const express=require('express')
const mysql=require('mysql');
const myConnexion=require("express-myconnection");


const optionBD={
    
}

const app=express();

// pour specifier que notre page est ejs
app.set('view engine','ejs')
// mettre les elements en public
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render('inscription')
})
app.listen(8081,()=>{})