<template>
  <div id="app" :style="{'background-color':themecolor}">
    <PageBody />
  </div>
</template>

<script>
import PageBody from 'views/index';

export default {
    name: 'App',
      components:{
        PageBody
      },
      data(){
        return {
          themecolor:""
        }
      }
    ,
    created() {
      let color = this.$store.state.themecolor;
      if(color){
        this.themecolor=color
      }else{
        this.themecolor = 'rgb(77, 69, 69)'
      }
    },
    watch:{
       "$store.state.themecolor"(){
          let color = this.$store.state.themecolor;
          console.log(color);
          if(color){
            this.themecolor=color
          }else{
            this.themecolor = 'rgb(77, 69, 69)'
          }
       }
    }
}

</script>

<style>
@import 'assets/css/base.css';
</style>
