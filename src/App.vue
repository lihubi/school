<template>
  <div id="app">

    <router-view></router-view>
    <!--  底部 tabbar-->
    <div class="bottom">
      <nav class="mui-bar mui-bar-tab">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/publish">
          <span class="mui-icon mui-icon-plus-filled"></span>
          <span class="mui-tab-label">发表</span>
        </router-link>
        <router-link class="mui-tab-item" to="/information">
          <span class="mui-icon mui-icon-chat"></span>
          <span class="mui-tab-label">消息</span>
        </router-link>
        <router-link class="mui-tab-item" to="/user">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">我的</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {

  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #282828;
  word-wrap :break-word;
}
  .marginbox{
    margin: 50px 0;
  }
  .container{
    width: 95vw;
    margin: 0 auto;
  }
 .mui-bar{
   background-color: #fff!important;
 }

</style>
