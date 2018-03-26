<template>
  <div>
      <div class="meeting-title" @click="toggleClick()">主会场</div>
      <MeetingPople v-show="toggle"/>
  </div>
</template>
<script>
import MeetingPople from '@/components/MeetingPople'
export default {
    props:{
        // pople :{
        //   type:Object,
        //   default() {
        //     return [
        //       // {price:10,count:1} 模拟有一物品，如果父组件没有selectFoods，就现实这么默认的了。
        //       ]
        //   }
        // },
    },
    data (){
        return {
            toggle:true
        }
    },
    mounted(){
        // console.log(this.pople)
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
