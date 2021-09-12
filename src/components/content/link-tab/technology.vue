<template>
  <div class="link_container">
    <div class="link_line" v-for="item in pagelist"  >
      <div class="link_tag">{{item.tag}}</div>
      <div v-for="child in item.link"><a :href="child.url">{{child.name}}</a></div>
    </div>
  </div>
</template>

<script>
export default {
  name:"technology",
  data() {
    return {
      pagelist:[]
    }
  },
  created() {
    this.pagelist=this.$store.state.links[4].list;
},
}
</script>

<style>

</style>