<template>
  <div class="content">
    <v-navbar></v-navbar>
    <div class="box">
    	<router-view></router-view>
    </div>
  </div>
</template>

<style src="./assets/reset.css"></style>
<style src="./assets/icon.css"></style>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
