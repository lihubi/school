<template>
    <div class="marginbox">
        <HeaderTop>
            <span class="topname" slot="left">首页</span>
            <span class="mui-icon mui-icon-location" slot="right"></span>
        </HeaderTop>
           <!--轮播图-->
        <div class="swiper-container">
            <div class="swiper-wrapper" id="sw">
                <div class="swiper-slide" tapmode>
                    <img src="./images/banner.jpeg" alt="">
                </div>
                <div class="swiper-slide" tapmode>
                    <img src="./images/banner1.jpeg" alt="">
                </div>
                <div class="swiper-slide" tapmode>
                    <img src="./images/banner2.jpeg" alt="">
                </div>
                <div class="swiper-slide" tapmode>
                    <img src="./images/bannnerbanner.jpeg" alt="">
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
        <div class="fenleibox">
            <div class="fenlei">栏目</div>
            <div class="fenlei">栏目</div>
            <div class="fenlei">栏目</div>
            <div class="fenlei">栏目</div>
            <div class="fenlei">栏目</div>
            <div class="fenlei">栏目</div>
        </div>
        <router-link class="box container" to="/home/news">
            <span>校内新闻</span>
            <span class="mui-icon mui-icon-arrowright"></span>
        </router-link>
        <news></news>
    </div>
</template>

<script>
    import HeaderTop from '../../components/HeaderTop/HeaderTop'
    import news from '../../components/news/news'
    import Swiper from 'swiper'
    import 'swiper/css/swiper.min.css'
    export default {
        name: "home",
        mounted(){
            new Swiper ('.swiper-container', {
                loop: true, // 循环模式选项
                autoplay:true,
                pagination: {
                    el: '.swiper-pagination',
                },
            })
                },
        components: {
            HeaderTop,
            news
        }

    }
</script>

<style scoped>
    .topname{
        font-size: 20px;
        font-weight: bold;
        line-height: 44px;
    }
    .swiper-container {
        width: 95vw;
        height: 25vh;
        box-shadow: -1vw 1vw 2vw 0vw
        rgba(0, 0, 0, 0.5);
        border-radius: 4vw;
        margin-bottom: 5vw;
    }
    .swiper-slide img{
        width: 100%;
    }
    .fenleibox{
        width: 95vw;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
    .fenlei{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 29vw;
        height: 13vw;
        margin: 1vw;
        border-radius: .5rem;
        color:#fff;
    }
    .fenlei:nth-child(1){
        background: linear-gradient(to right,#2fddfb,#32affe);
    }
    .fenlei:nth-child(2){
        background: linear-gradient(to right,#fec161,#ff74a1);
    }
    .fenlei:nth-child(3){
        background: linear-gradient(to right,#5be1b4,#8fe0e7);
    }
    .fenlei:nth-child(4){
        background: linear-gradient(to right,#f8aac4,#bf88f8);
    }
    .fenlei:nth-child(5){
        background: linear-gradient(to right,#b6f7d5,#1bb9fd);
    }
    .fenlei:nth-child(6){
        background: linear-gradient(to right,#f4b7ba,#e2d0e9);
    }
    .box{
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #242424;
    }

</style>