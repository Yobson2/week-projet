<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png">  -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  

 <div v-if="showData">
   <SignUp/>
 </div>

 <button @click=" toggle" class="button">close</button>
  <button @click=" ouvert" class="button" ref="open">open</button>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
 import SignUp from './components/modal.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    SignUp
  },
  data(){
    return{
      showData:false,
  }},
  methods:{
       toggle(){
      this.showData=false
      console.log(this.$refs.open)
    },
    ouvert(){
      this.showData=true
    }
  }
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  width: 60px;
  height: 60px;
}

.button{
  width: 100px;
  height: 50px;
  border-radius: 100rem;
   border: 0.2px solid black;
   opacity: 0.5;
   display: block;
}
.button:hover{
  background-color: darkgray;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  cursor: pointer ;
  border: 0.2px solid black;
}
</style>
