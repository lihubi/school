<template>
    <div class="marginbox">
        <HeaderTop >
            <span class="topname" slot="left">简讯</span>
            <span class="mui-icon mui-icon-more-filled" slot="right"></span>
        </HeaderTop>
        <div class="topbox">
            <div class="list">
                <router-link tag="div" to="/information/mail">消息</router-link>
                <router-link tag="div" to="/information/mailList">通讯录</router-link>
            </div>
        </div>
        <router-view></router-view>

    </div>
</template>

<script>
    import HeaderTop from "../../components/HeaderTop/HeaderTop";
    export default {
        name: "information",
        components:{
            HeaderTop
        }
    }
</script>

<style scoped>
    .topname{
        font-size: 20px;
        font-weight: bold;
        line-height: 44px;
    }
    .marginbox{
        margin: 45px 0;
    }
    .topbox{
        background-color: #fff;
        margin-bottom: 1rem;
    }

    .mui-bar-nav{
        box-shadow: none;
    }
    .list{
        width: 70%;
        height: 5rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .list>div{
        height: 3rem;
        width: 8rem;
        border-radius: .5rem;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .list>div:nth-child(1){
        background: linear-gradient(to right,#2fddfb,#32affe);
    }
    .list>div:nth-child(2){
        background: linear-gradient(to right,#fec161,#ff74a1);
    }

</style>