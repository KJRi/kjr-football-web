<template>
  <div class="new">
      <Header :title="title"></Header>
      <button-tab>
        <button-tab-item>今天</button-tab-item>
        <button-tab-item selected>本周</button-tab-item>
        <button-tab-item>本月</button-tab-item>
      </button-tab>



      <div class="div"></div>
  </div>
</template>
<script>
import Header from '../components/Header.vue';
import { ButtonTab, ButtonTabItem,} from 'vux'
export default {
  components: {
    Header,
    ButtonTab,
    ButtonTabItem,
  },
  data () {
      return {
        title: "赛事频道",
      }
  },
}
</script>
