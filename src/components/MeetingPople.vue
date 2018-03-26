<template>
  <div>
      <div class="meeting-list">
          <div class="meeting-list-box">
              <div class="left">
                  <img src="" alt="">
                  <div class="time">123</div>
              </div>
              <div class="right" >
                  <h2>123</h2>
                  <p>name add / adds</p>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="less" scoped>
    .meeting-list{
        width: 6.5rem;
        height: 1.2rem;
        margin:0 auto;
        padding: 0 .5rem;
        background: rgb(81, 40, 156) ;
        overflow: hidden;
        .meeting-list-box{
            display: flex;
            margin-top: .2rem
        }
    }
    .left{
        img{
            display: block;
            width: .6rem;
            height: .6rem;
            background: red;
            
        }
    }
    .right{
        margin-left: 1rem
    }
</style>
