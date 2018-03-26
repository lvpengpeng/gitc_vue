<template>
  <div id="app">
    <header-item />
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import HeaderItem from '@/components/HeaderItem'
export default {
  name: 'App',
  components:{
    HeaderItem
  }
}
</script>

<style lang="less">
#app {
  h6{
    color:red;
  }
}
</style>
