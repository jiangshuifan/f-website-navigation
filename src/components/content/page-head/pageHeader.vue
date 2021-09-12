.<template>
    <div class="pageContainer_head">
        <div class="head_position">
          <a href="javascript:;"><span  class="pointer iconfont icon-F"></span></a>
          <div class="menuBtn" @click="hanlde_show_menu">
            <span class="menu_t"></span>
            <span class="menu_m"></span>
            <span class="menu_b"></span>
          </div>
        </div>
      </div>
</template>

<script>
export default {
    name:"pageheader",
    methods: {
      hanlde_show_menu(){
        this.$emit('menuclick')
      }
    },
}
</script>

<style>
  .pageContainer_head{
    padding: 60px 90px 63px 90px;
  }
      .menuBtn{
        height: 20px;
        width: 20px;
        float: right;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
      .menuBtn>span{
        height: 2px;
        background-color: black;
      }
      .menu_b{
        width: 14px;
        margin-left:6px ;
      }

.pointer{
  cursor: pointer;
  font-size: 18px;
}
</style>