<template>
  <div>
      <div class="meeting-title" @click="toggleClick()"> {{this.heights.name}}</div>
      <div v-show="toggle">
          <h3>时间 ：{{JSON.parse(this.heights.content).time}}</h3>
          <h4>地址 {{JSON.parse(this.heights.content).addr}}</h4>
          <p>介绍 ：{{JSON.parse(this.heights.content).summary}}</p>
          <router-link v-if="this.heights.name=='品牌专场'" to="/index1"> 查看详情品牌专场</router-link>
          <router-link v-if="this.heights.name=='活动路演'" to="/index2"> 查看详情活动路演</router-link>
          <router-link v-if="this.heights.name=='集印章 赢好礼'" to="/index3"> 查看详情集印章 赢好礼</router-link>
      </div>
      <!-- <MeetingPople v-show="toggle" :poples="this.pople.data"/> -->
  </div>
</template>
<script>
// import MeetingPople from '@/components/MeetingPople'
export default {
    props:{
        heights :{
          type:Object,
          default() {
            return {}
          }
        },
    },
    data (){
        return {
            toggle:false
        }
    },
    mounted(){
        console.log(this.heights,'light')
    },
    methods:{
        toggleClick:function(){
            this.toggle=!this.toggle
        }
    },
    components:{
        // MeetingPople
    }
}
</script>
<style lang="less" scoped>
    .meeting-title{
        width: 6.5rem;
        height: .8rem;
        line-height: .8rem;
        background: rgb(43, 216, 216) ;
        margin:0 auto;
        padding: 0 .5rem;
        color: #ffffff; 
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;        
    }
</style>
