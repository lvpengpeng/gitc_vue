<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <h6>less</h6>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  h6{
    color:red;
  }
}
</style>
