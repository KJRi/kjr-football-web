<template>
  <div class="member">
      <Header :title="title"></Header>




      
      <div class="div"></div>
  </div>
</template>
<script>
import Header from '../../components/Header.vue';
export default {
  components: {
    Header,
  },
  data () {
      return {
        title: "会员中心",
      }
  },
}
</script>