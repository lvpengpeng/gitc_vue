<template>
  <div class="header-box">
    <div class="box-left">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="box-right">
      <a href="https://www.bagevent.com/event/768490">现场购票</a>
      <span>我的门票</span>
      <em></em>
    </div>
  </div>
</template>

<script>
export default {
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
</style>
