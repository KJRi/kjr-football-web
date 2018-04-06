<template>
  <div class="shoppingCart">
      <Header :title="title"></Header>
      <h1>购物车</h1>
  </div>
</template>
<script>
import Header from '../../components/Header.vue';
export default {
  components:{
      Header,
  },
  data(){
      return{
          title:'购物车'
      }
  }
}
</script>

