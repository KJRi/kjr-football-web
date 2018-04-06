<template>
  <div class="myNav">
    <div>
      <blur :blur-amount=40 :url="url">
        <p class="center">
          <img :src="url">
          
          <!-- 页面跳转 -->
          <router-link to="/my/login"><span>登录</span></router-link>
          <span>/</span>
          <router-link to="/my/register"><span>注册</span></router-link>
          
        </p>
      </blur>
    </div>
  </div>

</template>
<script>
  import { Flexbox, FlexboxItem, Blur } from "vux";
  export default {
    name: "myNav",
    components: {
      Blur,
      Flexbox,
      FlexboxItem
    },
    data() {
      return {
        url: "https://o3e85j0cv.qnssl.com/waterway-107810__340.jpg"
      };
    }
  };
</script>
<style scoped>
  .center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
  }

  .center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
    clear: both;
    display: block;
    margin: auto;
  }
  a{
    color: white;
  }
</style>