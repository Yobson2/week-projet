
<template>
<div class="card" >
<img src="../assets/logo_resto.jpeg" alt="">
<h1>
   {{titre}}
</h1>
<div class="insect">
    <p> <input type="text" placeholder="Name" class="info"></p>
     <p><input type="text" placeholder="E_mail" class="info"></p>
     <p><input type="password" placeholder="Password" class="info"></p>
    <p><button class="btn">Sign up</button></p>
</div>
 
</div>
 
  
</template>

<script>
export default { 
 
 data(){
    return{
     titre:'Sign up'
  }}
  
  
}
</script>

<style>
  h1{
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif ;
      font-size: xx-large;
  }
  img{
      width: 100px;
  }
  .info{
      width: 300px;
      height: 40px;
     font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
     font-size: large;
     border-color: rgb(237, 207, 100);
     margin-top: 10px;
  }
  .btn{
      width: 300px;
      height: 40px;
      border: none;
      cursor: pointer;
  }
  .btn:hover{
      background-color: goldenrod;
  }
</style>