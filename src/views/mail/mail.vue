<template>
    <div class="container">
        <router-link class="list" tag="div" to="/information/chat" >
            <img class="mui-media-object mui-pull-left" src="./images/toux.jpeg">
            <div class="mui-media-body">
                老八
                <span class="time">8:30</span>
                <p class="mui-ellipsis">奥利给</p>
            </div>
            <div class="mailnum">1</div>
        </router-link>
        <router-link class="list" tag="div" to="/information/chat" >
            <img class="mui-media-object mui-pull-left" src="./images/toux.jpeg">
            <div class="mui-media-body">
                一沉
                <span class="time">8:30</span>
                <p class="mui-ellipsis">奥利给</p>
            </div>
            <div class="mailnum">1</div>
        </router-link>
        <router-link class="list" tag="div" to="/information/chat" >
            <img class="mui-media-object mui-pull-left" src="./images/toux.jpeg">
            <div class="mui-media-body">
                郭梁
                <span class="time">8:30</span>
                <p class="mui-ellipsis">奥利给</p>
            </div>
            <div class="mailnum">1</div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "mailList"
    }
</script>

<style scoped>
    .list{
        position: relative;
        height: 5rem;
        border-radius: .5rem;
        box-shadow: 0rem 0rem 1rem 0rem
        rgba(8, 1, 3, 0.13);
        margin-bottom: 1rem;
        padding: 1rem;
        background-color: #f3f3f3;
    }
    .list>img{
        width: 3rem;
        border-radius: 50%;
        margin-right: .5rem;
    }
    .time{
        float: right;
        color: #989898;
        font-size: 14px;
    }
    .mailnum{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 2rem;
        height: 2rem;
        background-color: #f93f22;
        border-radius: .5rem 0 .5rem 0;
        line-height: 2rem;
        text-align: center;
        font-size: 13px;
        color: #fff;
    }

</style>