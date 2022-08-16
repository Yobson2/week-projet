<template>
  <form >
      <label>E-mail:</label>
      <input type="text" required v-model="Email" class="Input">
       <label>Password:</label>
      <input type="text" required v-model="Password" class="Input">
       <label>Role:</label>
       <select v-model="role">
           <option value="developer">Web developer</option>
            <option value="designer">Web designer</option>
       </select>
        
      <label>skills:</label>
      <input type="text" v-model="tempSkill" class="Input" @keyup.alt="addSkill">
      <div v-for="skill in skills" :key="skill">
        <p>{{skill}}</p>
      </div>

       <div class="terms">
           <input type="checkbox" required v-model="terms">
           <label class="consigne">Accept terms and conditions</label>
       </div>
  </form>
  <p>Email:{{Email}}</p>
  <p>Password:{{Password}}</p>
  <p>Role:{{role}}</p>
  <p>temr accepted:{{terms}}</p>
  
</template>

<script>
export default {
data(){
    return{
        Email:'',
        Password:'',
        role:'',
        terms:false,
       tempSkill:'',
       skills:[]
    }
},
methods:{
    addSkill(e){
        if(e.key===',' && this.tempSkill) {
            if(! this.skills.includes(this.tempSkill) ){
               this.skills.push(this.tempSkill) 
            }
       
       this.tempSkill=''
        }
    }
}
}
</script>

<style>
     form{
        max-width: 420px;
        padding: 40px;
        margin: 30px auto;
        background-color: white;
        text-align: center;
        border-radius: 10px;
     }
     label{
         color: #aaa;
         display: inline-block;
         font-size: 1em;
         transform: uppercase; 
         letter-spacing: 1px;
         font-weight: bold;
         margin-right: 362px;
         margin-top: 40px;
     }
     .Input{
         display: block;
         padding: 10px 30px;
         width: 100%;
         box-sizing: border-box;
         border: none;
         border-bottom: 1px solid gray;
         color: #555;
          margin-top: 26px;
     }
     select{
        display: block;
         padding: 10px 30px;
         width: 100%;
         box-sizing: border-box;
         border: none;
         border-bottom: 1px solid gray;
         color: #555;
         margin-top: 26px;  
     }
     .terms:nth-child(1){
        display: inline-block;
         margin: 0 10px 0 0; 
         position: relative;
         top: 2px;
         width: 16px;
     }
    
     .terms{
         display: flex;
     }
     .consigne{
         margin-right: 0;
         position: relative;
        bottom: 20px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-left: 10px;
     }
</style>