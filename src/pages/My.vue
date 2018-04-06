<template>
  <div class="my">
    <!-- 导航条 -->
    <Header :title="title"></Header>

    <!-- 头像,登录注册跳转部分 -->
    <myNav></myNav>

    <!-- 我的列表部分 -->
    <myList></myList>

    <div class="div"></div>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import myNav from '../components/my/myNav.vue';
import myList from '../components/my/myList.vue';
export default {
  components: {
    Header,
    myNav,
    myList,
  },
  data () {
      return {
        title: "个人中心",
      }
  },
}
</script>
