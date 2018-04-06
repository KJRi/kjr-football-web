<template>
  <div id="app">


    <!-- 底部导航栏 -->
    <tabbar style="position:fixed;">
      <tabbar-item link="/">
        <img slot="icon" src="./assets/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/new">
        <img slot="icon" src="./assets/map.png">
        <span slot="label">赛事频道</span>
      </tabbar-item>
      <tabbar-item link="/find">
        <img slot="icon" src="./assets/news.png">
        <span slot="label">足球咨询</span>
      </tabbar-item>
      <tabbar-item link="/ask" badge="3">
        <img slot="icon" src="./assets/ask.png">
        <span slot="label">球吧</span>
      </tabbar-item>
      <tabbar-item link="/my">
        <img slot="icon" src="./assets/my.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>


    <!-- 页面渲染 -->
    <router-view></router-view>

  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from "vux";
  export default {
    name: "app",
    components: {
      Tabbar,
      TabbarItem
    }
  };
</script>

<style lang="less">
  @import "~vux/src/styles/reset.less";
  .div{
    width: 100%;
    height: 50px;
  }
</style>
