<template>
    <navbody>
    <navitem path="/home/design">
      <div slot="itemtext">设计</div>
    </navitem>
    <navitem path="/home/entertainment">
      <div slot="itemtext">娱乐</div>
    </navitem>
    <navitem path="/home/learn">
      <div slot="itemtext">学习</div>
    </navitem>
    <navitem path="/home/life">
      <div slot="itemtext">生活</div>
    </navitem>
    <navitem path="/home/technology">
      <div slot="itemtext">技术</div>
    </navitem>
    <navitem path="/home/usuallyUse">
      <div slot="itemtext">常用</div>
    </navitem>
      <navitem path="/home/setting">
      <div slot="itemtext" class="iconfont icon-chilun"></div>
    </navitem>
  </navbody>
</template>

<script>
import navbody from "components/common/tabbar/navbody";
import navitem from "components/common/tabbar/navitem";

export default {
  name: "classTb",
  components: {
    navbody,
    navitem,
  },
  data() {
    return {
      linkdata: "",
    };
  },
  created() {
    
  },
  methods: {

  },
};
</script>

<style>

</style>