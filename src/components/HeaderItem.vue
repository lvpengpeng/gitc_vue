<template>
  <div>
    <div class="header-box">
      <div class="box-left">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="box-right">
        <a href="https://www.baidu.com">现场购票</a>
        <span @click="myticket">我的门票</span>
        <em @click="togglePop"></em>
      </div>
    </div>
    <Menu class="meun"  v-on:message="handleMessage" v-show="togglePopShow"/>
  </div>
</template>

<script>
import Menu from './Meun'
export default {
  data (){
    return {
      togglePopShow:false
    }
  },
  components:{
    Menu
  },
  methods:{
    togglePop:function(){
      this.togglePopShow=!this.togglePopShow
    },
    close: function () {
      this.togglePopShow=false;
    },
    handleMessage: function () {
      this.togglePopShow=false
    },
    myticket:function(){
        if(localStorage.getItem("phone")){
            this.$router.push('/ticket');
        }else{
        this.$emit('showtoggle')   
        }         
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header-box{
  display: flex;
  align-items: center;
  justify-content:space-between;
  width: 80%;
  padding: 10px 10%;
  background: #ccc;
  img{
    width:20px;
  }
  .box-right,.box-left{
    width: 50%;
    em{
      display: block;
      width: 20px;
      height: 20px;
      background: url(../assets/0.jpg);
      background-size:cover;
    }
  }
  .box-right,{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
.meun{
  width: 100%;
   height: calc(100vh);
    background: rgba(0, 0, 0, .6);
    position:fixed;
    left: 0;
    top: 0
}
</style>
