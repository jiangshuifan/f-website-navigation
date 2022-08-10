<template>
  <div class="link_container">
    <div class="link_line" v-for="item in pagelist">
      <div class="link_tag">{{ item.tag }}</div>
      <div v-for="child in item.link">
        <a :href="child.url">{{ child.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'entertainment',
  data() {
    return {
      pagelist: [],
    }
  },
  activated() {
    this.pagelist = this.$store.state.links[1].list
  },
}
</script>
