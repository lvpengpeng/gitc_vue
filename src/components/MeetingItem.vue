<template>
  <div>
      <div class="meeting-title" @click="toggleClick()">{{this.pople.name}}</div>
      <MeetingPople v-show="toggle" :poples="this.pople.data"/>
  </div>
</template>
<script>
import MeetingPople from '@/components/MeetingPople'
export default {
    props:{
        pople :{
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
        console.log(this.pople,1234)
    },
    methods:{
        toggleClick:function(){
            this.toggle=!this.toggle
        }
    },
    components:{
        MeetingPople
    }
}
</script>
<style lang="less" scoped>
    .meeting-title{
        width: 6.5rem;
        height: .8rem;
        line-height: .8rem;
        background: teal ;
        margin:0 auto;
        padding: 0 .5rem;
        color: #ffffff;
    }
</style>
