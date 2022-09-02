<template>
  <div id="app" :style="{ 'background-color': themecolor, color: fontcolor }">
    <PageBody />
    <div class="background-grid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
import PageBody from 'views/index'
import { mapState } from 'vuex'
import color from './utils/color'

export default {
  name: 'App',
  components: {
    PageBody,
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(['themecolor', 'fontcolor']),
  },
}
</script>

<style scoped>
@import 'assets/css/base.css';
.background-grid {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;

  -webkit-pointer-events: none;
  -moz-pointer-events: none;
  -ms-pointer-events: none;
  -o-pointer-events: none;
  pointer-events: none;
  /* background-color: black; */
}
.background-grid > div {
  flex: 1;
  border-left: 1px solid rgba(151, 151, 151, 0.2);
  border-right: 1px solid rgba(151, 151, 151, 0.2);
  margin-right: 2.6vw;
}
.background-grid > div:first-child {
  margin-left: 2.6vw;
}
</style>
