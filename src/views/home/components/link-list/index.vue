<template>
  <div class="link_container">
    <div class="link_line" v-for="item in pagelist">
      <div :style="{ opacity: 0.7 }" class="link_tag">
        {{ item.tag }}
      </div>
      <div :style="{ opacity: 0.9 }" v-for="child in item.link">
        <a :href="child.url">{{ child.name }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pagelist: [],
      reflect: {
        design: 0,
        entertainment: 1,
        learn: 2,
        live: 3,
        technology: 4,
        usuallyUse: 5,
      },
    }
  },
  methods: {
    loadData(field) {
      let index = this.reflect[field]
      this.pagelist = this.$store.state.links[index].list
    },
  },
}
</script>
