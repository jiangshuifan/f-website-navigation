<template>
  <div>
    <SearchTab @focus="showLinks = false" @blur="showLinks = true" />
    <div class="linksBox" v-show="showLinks">
      <div class="classTab">
        <class-tb @click="handleChangeClass" />
      </div>
      <div class="linksContent">
        <LinkList ref="links"></LinkList>
      </div>
    </div>
    <gallery v-show="showLinks" />
  </div>
</template>

<script>
import SearchTab from './components/engine-tab/index'
import ClassTb from './components/class-tab/classTb'
import Gallery from './components/gallery/index'
import LinkList from './components/link-list/index'

export default {
  name: 'fdream',
  data() {
    return {
      foldMenu: false,
      showLinks: true,
    }
  },
  components: {
    SearchTab,
    ClassTb,
    Gallery,
    LinkList,
  },
  methods: {
    handleFocusInput() {},
    handlefold() {
      this.foldMenu = true
    },
    handleunfold() {
      this.foldMenu = false
    },
    handleChangeClass(field) {
      this.$refs.links.loadData(field)
    },
  },
}
</script>

<style></style>
