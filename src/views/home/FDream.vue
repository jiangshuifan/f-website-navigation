<template>
  <div>
    <search-tab />
    <div class="linksBox">
      <div class="classTab">
        <class-tb />
      </div>
      <div class="linksContent">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
      </div>
    </div>
    <gallery />
  </div>
</template>

<script>
import PageHeader from "components/content/page-head/pageHeader";
import SearchTab from "components/content/engine-tab/searchTab";
import ClassTb from "components/content/class-tab/classTb";
import Gallery from "components/content/gallery/gallery";
import PageFooter from "components/content/footer/footer";
import PageMenu from "components/content/menu/menu";


export default {
  name: "fdream",
  data() {
    return {
      fold_menu: false,
      path: "/home/design",
    };
  },
  components: {
    PageHeader,
    SearchTab,
    ClassTb,
    Gallery,
    PageFooter,
    PageMenu
  },
  methods: {
    handlefold() {
      this.fold_menu = true;
    },
    handleunfold() {
      this.fold_menu = false;
    },
  },
  created() {
    this.$router.replace(this.path);
  },
  activated() {
    this.$router.replace(this.path);
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    next();
  },
};
</script>

<style>
</style>