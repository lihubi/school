<template>
    <div class="box">
           <div class="topbg">
               <img src="./images/touxiang.jpeg" alt="">
           </div>
           <div class="main">
               <div class="touxiangbox">
                   <div class="touxiang">
                       <img src="./images/touxiang.jpeg" alt="">
                   </div>
                   <div class="name">一琛</div>
                   <div class="name2">
                       <span>20岁</span>
                       <span>石家庄</span>
                   </div>
               </div>
               <div class="list">
                   <div class="childlist">
                       <span class="mui-icon mui-icon-image"></span>
                       <div>我的相册</div>
                   </div>
                   <div class="childlist">
                       <span class="mui-icon mui-icon-email-filled"></span>
                       <div>我的钱包</div>
                   </div>
                   <div class="childlist">
                       <span class="mui-icon mui-icon-star-filled"></span>
                       <div>我的相册</div>
                   </div>
               </div>
           </div>
    </div>
</template>

<script>
    export default {
        name: "user",
        components:{

        }
    }
</script>

<style scoped>

    .box{
        width: 100%;
        height: 100%;
    }
    .topbg{
        width: 100%;
        height: 15rem;
        position: relative;
        -webkit-filter: blur(4px);
        filter: blur(3px);
    }
    .topbg>img{
        position: absolute;
        width: 100%;
        top: -50%;
    }
    .main{
        width: 100%;
        height: 75%;
        background-color: #fff;
        position: absolute;
        bottom: 0;
        border-radius: 1.5rem;
    }
    .touxiangbox{
        text-align: center;
        width: 90vw;
        height: 35vw;
        margin: 0 auto;
        position: absolute;
        left: 50%;
        top: -11vw;
        transform: translateX(-45vw);
    }
    .touxiang{
        width: 22vw;
        height: 22vw;
        border: 3px solid #fff;
        border-radius: 50%;
        overflow: hidden;
        margin: 0 auto;
    }
    .touxiang>img{
        width: 100%;
    }
    .name{
        margin: .5rem;
    }
    .name2{
        font-size: .8rem;
        color: #767676;
        display: flex;
        justify-content: center;
        line-height: 1;
    }
    .name2>span{
        padding: 0 .4rem 0 .4rem;
    }
    .name2>span:nth-child(1){
        border-right: 1px solid #767676;
    }
    .list{
        width: 90%;
        margin: 0 auto;
        margin-top: 26vw;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        font-size: 1rem;
    }
    .childlist{
        width: 100%;
        height: 3.5rem;
        display: flex;
        align-items: center;
    }
    .childlist>span{
        margin: .5rem;
        width: 1.5rem;
    }
    .childlist>div{
        display: flex;
        align-items: center;
        height: 100%;
        width: 90%;
        border-bottom: 1px solid #e9e9e9;
    }
</style>