<template>
  <div id="app">
    <header-item />
    <!-- <img src="./assets/logo.png"> -->
    <router-view   v-on:showtoggle="handleMessage"/>
    <div class="login-pop" v-if="toggle">
      <button class="close" @click="close">close</button>
      <input type="text">
      <div>
      <input type="text">
      <button type="button">发送验证码</button>   
      </div>
      <button type="button">登录</button>   
    </div>
  </div>
</template>

<script>
import HeaderItem from '@/components/HeaderItem'
export default {
  data(){
    return {
      toggle:false
    }
  },
  name: 'App',
  components:{
    HeaderItem
  },
  methods:{
    handleMessage:function(){
      this.toggle=true;
    },
    close:function(){
      this.toggle=false;     
    }
  }
}
</script>

<style lang="less">
#app {
  h6{
    color:red;
  }
  .close{
    width: 100%;
    text-align: center;
    color:#333;
    font-size:20px;
    display: inline-block;
    margin-top: 4rem;
  }
  .login-pop{
    width: 100%;
    height: calc(100vh);
    background: rgba(0, 0, 0, 1);
    position: fixed;
    left: 0;
    top:0rem
  }
}
</style>
