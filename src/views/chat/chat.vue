<template>
    <div class="box">
        <header id="header" class="mui-bar mui-bar-nav ">
            <span class="mui-icon mui-icon-back" @click="back"></span>
            <div class="headername">
                <img src="../user/images/touxiang.jpeg"/>
                <div>老八</div>
            </div>
            <span class="mui-icon mui-icon-chatboxes-filled"></span>
        </header>
        <div class="chats">
            <div class="time">8:30</div>
            <div class="chatsdivself">
                <div class="self">你好</div>
            </div>
            <div class="chatsdivothers">
                <div class="others">移动端的长度单位移动端的长度单位移动端的长度单位移动端的长度单位移动端的长度单位移动端的长度单位移动端的长移动端的长度单位度单位移动端的长度单位移动端的长度单位移动端的长度单位</div>
            </div>
            <div class="chatsdivself">
                <div class="self">移动端的长度单位移动端的长度单位移动端的长度单位移动端的长度单位移动端的长度单位移动端的长度单位移动端的长移动端的长度单位度单位移动端的长度单位移动端的长度单位移动端的长度单位</div>
            </div>
            <div class="time">8:30</div>
            <div class="chatsdivself">
                <div class="self">撒啊实打实公司股东分红</div>
            </div>
            <div class="chatsdivothers">
                <div class="others">度单位移动端的长度单位</div>
            </div>
            <div class="chatsdivself">
                <div class="self">端一般都用rem布局，这样可以适用不同屏幕，一般情况该高度如果要限制死那么就要计算。
                    具体情况你看下这个博客，我第一次做移动端页面的时候也是看了</div>
            </div>
            <div class="chatsdivothers">
                <div class="others">你你你</div>
            </div>

        </div>
        <div class="input">
            <span class="mui-icon mui-icon-map"></span>
            <input type="text">
            <button type="button" class="mui-btn">
                发送
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "chat",
        methods:{
            back(){
                this.$router.go(-1);//返回上一层
            }
        }
    }
</script>

<style scoped>
    .box{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    header{
        display: flex;
        justify-content: space-between;
        height: auto;
        padding: .5rem;
    }
    .headername{
        text-align: center;
        font-size: .95rem;
    }
    .headername>img{
        width: 3rem;
        border-radius: 50%;
    }
    .chats{
        margin: 90px 0 50px 0;
    }
    .time{
        font-size: .8rem;
        text-align: center;
        color: #c3c3c3;
        margin: 1rem;
    }
    .chatsdivself{
        margin: 1rem;
        display: flex;
        justify-content: flex-end;
    }
    .chatsdivothers{
        margin: 1rem;
        display: flex;
        justify-content: flex-start;
    }
    .self{
        max-width: 60vw;
        padding: .5rem;
        /*float: right;*/
        background-color: #12aafd;
        border-radius: .5rem;
        color: #fff;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .others{
        max-width: 60vw;
        padding: .5rem;
        /*float: left;*/
        background-color: #fff;
        border-radius: .5rem;
        color: #282828;
        font-size: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .input{
        width: 100%;
        height: 50px;
        position: fixed;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        z-index: 100;
    }
    .input>button{
        width: 70px;
        height: 40px;
        margin: .5rem;
        border-radius: .5rem;
    }
    .input>span{
        margin: .5rem;
    }
    .input>input{
        flex: 1;
        margin: 0;
        border-radius: .5rem;
    }

</style>