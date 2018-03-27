<template>
  <div class="home-box clearfix">
    <h2>大会专家</h2>
    <Pople :pro="item" v-for="item in this.guester" :key="item.id" class="fl"/>
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
                guester:[]
            }
        },
        components:{
            Pople
        },
        created(){
            axios.get("http://120.92.10.182:8000/api/gitc/person-46/list.json?token=1afb756d16740266efde290917ca1a8e&phone=13800138000&order_by=ename").then((response)=>{
            this.guester=response.data.data;
            console.log(this.guester,"guester")
        }).catch((error)=> {
              console.log(error);
        })
        }
    }
</script>
<style scoped lang="less">
  h2{
    font-size: 30px;
    width: 100%;
    text-align: center;
  }
</style>
