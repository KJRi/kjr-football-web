<template>
  <div class="header">
    <x-header title="use prop:title">{{title}}</x-header>
  </div>
</template>
<script>
import { XHeader } from 'vux';
import bus from '../bus.js'
export default {
  components: {
    XHeader,
  },
  props: ['title'],
}
</script>

