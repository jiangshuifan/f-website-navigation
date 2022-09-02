.<template>
  <div class="pageContainer_head">
    <div class="head_position">
      <img src="@/assets/img/svg/logo.svg" class="header-logo" />
      <div class="menuBtn" @click="hanlde_show_menu">
        <span :style="{ 'background-color': fontcolor }" class="menu_t"></span>
        <span :style="{ 'background-color': fontcolor }" class="menu_m"></span>
        <span :style="{ 'background-color': fontcolor }" class="menu_b"></span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'pageheader',
  methods: {
    hanlde_show_menu() {
      this.$emit('menuclick')
    },
  },
  computed: {
    ...mapState(['fontcolor']),
  },
}
</script>

<style scoped>
.header-logo {
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
  -webkit-user-drag: none;
  -webkit-pointer-events: none;
  -moz-pointer-events: none;
  -ms-pointer-events: none;
  -o-pointer-events: none;
  pointer-events: none;
}
.pageContainer_head {
  padding: 60px 90px 63px 90px;
}
.head_position {
  position: relative;
}
.menuBtn {
  height: 30px;
  width: 30px;
  float: right;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.menuBtn > span {
  height: 3px;
}
.menu_b {
  width: 22px;
  margin-left: 8px;
}

.pointer {
  cursor: pointer;
  font-size: 18px;
}
</style>
