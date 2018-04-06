<template>
  <div class="find">
      <Header :title="title"></Header>
      <DataNav></DataNav>




      <div class="div"></div>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import DataNav from '../components/find/DataNav.vue';
export default {
  components: {
    Header,
    DataNav,
  },
  data () {
      return {
        title: "足球咨询",
      }
  },
}
</script>
