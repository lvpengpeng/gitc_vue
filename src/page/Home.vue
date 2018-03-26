<template>
  <div class="home-box">
    <!-- <img src="../../static/img/backgroungimg.jpg" alt="" class="bg-img"> -->
    <h2 class="h-title">大会日程</h2>
    <meeting-item :pople="meeting"/>
  </div>
</template>
<script>
import axios from 'axios';
import MeetingItem from '@/components/MeetingItem'
    export default {
        data (){
            return {
                meeting:""
            }
        },
        created() {
            axios.get('http://120.92.10.182:8000/api/gitc/person/beijing.json?token=1afb756d16740266efde290917ca1a8e&phone=13800138000&order_by=-weight').then((response)=>{
            this.meeting=response.data;
            alert(3)
            console.log(this.meeting,123)
        })
        .catch((error)=> {
              console.log(error);
        });
      },
        components:{
            MeetingItem
        }
    }
</script>
<style scoped lang="less">
    .home-box{
        width: 100%;
        .bg-img{
            width: 100%;
        }
        .h-title{
            width: 100%;
            padding: 10px 0;
            background: #123;
            line-height: 100%;
            text-align: center;
            color: #fff;
            font-size: 24px;
        }
    }
</style>
