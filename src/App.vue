<template>
  <div id="app">
    <header-item v-on:showlogin="open" />
    <!-- <img src="./assets/logo.png"> -->
    <router-view   v-on:showtoggle="handleMessage"/>
    <div class="login-pop" v-if="toggle">
      <button class="close" @click="close">close</button>
      <input type="text" v-model="tel">
      <div>
      <input type="text" v-model="code">
      <button type="button" @click="send">发送验证码</button>   
      </div>
      <button type="button" @click="sendcode">登录</button>   
    </div>
  </div>
</template>

<script>
import HeaderItem from '@/components/HeaderItem'
import axios from 'axios'
export default {
  data(){
    return {
      toggle:false,
      token:'1afb756d16740266efde290917ca1a8e',
      tel:'',
      code:''
    }
  },
  name: 'App',
  components:{
    HeaderItem
  },
  mounted(){
    this.send()
  },
  methods:{
    handleMessage:function(){
      this.toggle=true;
    },
    close:function(){
      this.toggle=false;     
    },
    open:function(en){
          // console.log(en.oldurl,123)
      this.toggle=true;
      this.$router.push('/ticket');
    },
    send:function(){
      var params = new URLSearchParams();
      params.append('phone', this.tel);
      params.append('token', this.token);
      axios.post(`http://120.92.10.182:8000/api/gitc/code/${this.tel}.json?token=${this.token}`, params)
        .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    sendcode:function(){
      let num=this.tel
      var params = new URLSearchParams();
      params.append('phone', this.tel);
      params.append('token', this.token);
      params.append('code', this.code);
      var that=this
      axios.post(`http://120.92.10.182:8000/api/gitc/user/${this.tel}.json?token=${this.token}`, params)
        .then(function (response) {
        console.log(response.data,1);
        if(response.data.msg=="验证码不正确！"){
            // 模拟登录成功
            localStorage.setItem("phone",13000112233)
            that.toggle=false;
            alert('已经成功登录')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}



axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })

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
