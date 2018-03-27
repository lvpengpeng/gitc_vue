<template>
  <div>
    <h2 v-on:click="handleSendMessage">close</h2>
    <div >
        <a href="javascript:;" v-on:click="handleSendMessage">我的门票</a>
        <a href="javascript:;" v-on:click="handleSendMessage">个人中心</a>
        <router-link  to="/news" v-on:click.native="handleSendMessage">新闻</router-link>
        <router-link  to="/home" v-on:click.native="handleSendMessage">主页</router-link>
        <router-link  to="/guest" v-on:click.native="handleSendMessage">大会演讲嘉宾</router-link>
        <router-link  to="/expert" v-on:click.native="handleSendMessage">专家</router-link>
        <router-link  to="/chairman" v-on:click.native="handleSendMessage">主席团</router-link>
    </div>
  </div>
</template>
<script>
    export default {
        props:{
            windowPop :{
            type:Boolean,
                default() {
                    return false
                }
            },
        },
        data(){
            return {
                message: false
            }
        },
        mounted(){
            console.log(this.windowPop)
        },
        methods:{
            handleSendMessage: function () {
            this.$emit('message')
            }
        }
}
</script>
<style lang="less" scoped>
h2,a{
    font-size: 40px;
    width: 100%;
    text-align: center;
    color: red;
    border: 1px solid #ffffff;
    display:block;
}
</style>

