<template>
  <inscription/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Inscription from './components/Inscription.vue'

export default {
  name: 'App',
  components: {
    Inscription
   
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
body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #eee;
}
</style>
