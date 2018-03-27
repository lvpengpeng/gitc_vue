<template>
    <div>
        <div v-for="item in this.poples" :key="item.id">
        <div class="meeting-list">
            <div class="meeting-list-box">
                <div class="left">
                    <img :src="item.pic" alt="">
                    <div class="time">{{item.stime}}</div>
                </div>
                <div class="right" >
                    <h2>{{item.stheme}}</h2>
                    <p>{{item.name}} {{item.company}} {{item.position}}</p>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    props:{
        poples :{
          type:Array,
          default() {
            return []
          }
        },
    },
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
