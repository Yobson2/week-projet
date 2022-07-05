var express= require('express');


var app=express()

app.use(express.static('public'));
app.get("/", function(req,res){
    res.sendFile(__dirname+'/views/slade.html')
})

app.listen(8080, function(){
})
