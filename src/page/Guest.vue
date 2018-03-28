<template>
  <div class="home-box clearfix">
        <h2 >大会演讲嘉宾</h2>
        <Pople :pro="item" v-for="item in this.guester" class="fl" v-on:message="handleMessage"/>
        <div class="peple-pop" v-show="this.toggle">
            <h2 @click="close">close</h2>
            <img :src="this.poples.pic" alt="">
            <div class="name">{{this.poples.name}}</div>
            <div class="commit">{{this.poples.company}}</div>
            <div class="commit">{{this.poples.summary}}</div>
            <div class="add" @click="add">收藏</div>
        </div>
  </div>
</template>
<script>
import axios from 'axios';
import MeetingItem from '@/components/MeetingItem'
import HeightItem from '@/components/HeightItem'
import Pople from '@/components/Pople'
    export default {
        data(){
            return {
                guester:[],
                poples:{},
                toggle:false
            }
        },
        components:{
            Pople
        },
        created(){
            axios.get("http://120.92.10.182:8000/api/gitc/person/pages.json?token=1afb756d16740266efde290917ca1a8e&phone=13800138000&order_by=ename").then((response)=>{
            this.guester=response.data.data;
            console.log(response.data,"123guester")
        }).catch((error)=> {
              console.log(error);
        })
        },
        methods:{
            handleMessage:function(payload){
                this.poples=payload.message;
                console.log(this.poples,12345678)
                this.toggle=true;
            },
            close:function(){
                this.toggle=false;                
            },
            add:function(){
                this.$emit('showtoggle')            
            }
        }
    }
</script>
<style scoped lang="less">
  .name,h2{
    font-size: 30px;
    width: 100%;
    text-align: center;
    color:#fff;
  }
  .commit{
      width: 100%;
      font-size: 16px;
      color: #fff;
      text-align: center
  }
  img{
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      margin: 0 auto;
      display:block
  }
  .peple-pop{
    width: 100%;
    height: calc(100vh);
    background: rgba(0, 0, 0, .6);
    position:fixed;
    left: 0;
    top: 0;
    margin-top:2rem;
    h2{
    font-size: 30px;
    width: 100%;
    text-align: center;   
    color: #fff;     
    }
    .add{
        margin: 10px auto;
        width: .8rem;
        height: .8rem;
        font-size: .4rem;
        background: rgb(121, 146, 31);
        border-radius: 50%;
    }
  }
</style>
