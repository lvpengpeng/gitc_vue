<template>
    <div class="pople" @click="poplePop">
        <img :src="this.pro.pic" alt="">
        <div class="name">{{this.pro.name}}</div>
        <div class="adds">{{this.pro.company}}</div>
        <div class="positon">{{this.pro.position}}</div>
    </div>
</template>
<script>
    export default {
        props:{
           pro: {
               type:Object,
               default(){
                   return {}
               }    
           }
        },
        mounted(){
        },
        methods:{
            poplePop:function(){
                this.$emit('message',{ message: this.pro })                
            }
        }
    }
</script>
<style lang="less" scoped>
.pople{
    width: 25%;
    height: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    img{
         width: 1.2rem;
        height: 1.2rem;
        border-radius: 50%;
        display: block
    }
}
</style>

