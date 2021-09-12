<template>
  <div>
      <div class="pageContainer">
    <page-header @menuclick="handlefold"  />
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    <page-footer/>
  </div>
<transition name="fade">
  <div class="cover" v-show="fold_menu" @click="handleunfold"></div>
</transition>
  <transition name="fold">
    <page-menu v-show="fold_menu" :menustate="fold_menu" :socialmenu='socialmenu' @unfold="handleunfold" />
  </transition>
  </div>
</template>

<script>
import PageHeader from "components/content/page-head/pageHeader";
import PageFooter from "components/content/footer/footer";
import PageMenu from "components/content/menu/menu"

export default {
  name: "fdream",
  data() {
    return {
      fold_menu:false,
      path:"/home/design",
      socialmenu:false
    }
  },
  components: {
    PageHeader,
    PageFooter,
    PageMenu
  },
  methods: {
    handlefold(){
      this.fold_menu=true
    },
    handleunfold(){
      this.fold_menu=false
      this.socialmenu=false
    },
  },
  activated() {
    this.$router.replace(this.path) 
  },
   beforeRouteLeave(to,from,next){
    this.path=this.$route.path
    next()
 }
};
</script>

<style>

</style>