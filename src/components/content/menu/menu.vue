.<template>
  <div class="menu">
    <div
      :class="{ 'menu-origin': true, 'menu-close': pagemenustate }"
      @click="unfoldmenu"
    ></div>
    <ul class="menu-item">
      <li
        @click="redirectTo(item.path)"
        v-for="item in menuData"
        :key="item.id"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'page-menu',
  data() {
    return {
      socialmenuUnFold: false,
      pagemenustate: false,
      menuData: [
        { id: 1, path: '/home', name: '首页' },
        // { id: 2, path: '/contact', name: '联系' },
        { id: 3, path: '/about', name: '关于' },
        { id: 4, path: '/setting', name: '设置' },
      ],
    }
  },
  methods: {
    unfoldmenu() {
      this.$emit('unfold')
    },
    redirectTo(path) {
      this.$router.replace(path)
      this.unfoldmenu()
    },
    handlesocial() {
      this.socialmenuUnFold = !this.socialmenuUnFold
    },
  },

  props: {
    menustate: {
      default: false,
    },
    socialmenu: {
      default: false,
    },
  },
  watch: {
    socialmenu(newV) {
      this.socialmenuUnFold = newV
    },
    menustate(newV) {
      this.pagemenustate = newV
    },
  },
}
</script>

<style>
.menu {
  position: fixed;
  right: 0;
  top: 0;
  padding: 80px;
  width: 506px;
  height: 100%;
  background-color: #fff;
  font-size: 25px;
  color: #444;
}
.menu-close {
  float: left;
  position: absolute;
  height: 30px;
  width: 30px;
}
.menu-close::before,
.menu-close::after,
.menu-origin::before,
.menu-origin::after {
  position: absolute;
  content: '';
  background-color: black;
  width: 20px;
  height: 2px;
  top: 50%;
  transform: translate(0, -50%);
  /* top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); */
  transform-origin: 15px, 15px;
}
.menu-close::before {
  transform: rotate(45deg);
  animation: 'anticlockwise' 0.6s linear;
}
.menu-close::after {
  transform: rotate(-45deg);
  animation: 'clockwise' 0.6s linear;
}
.menu-item {
  float: right;
  padding: 50px;
}
.menu-item > li {
  margin-bottom: 50px;
  cursor: pointer;
}
@keyframes clockwise {
  0% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(-45deg);
  }
}
@keyframes anticlockwise {
  0% {
    transform: rotate(0);
  }
  75% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(45deg);
  }
}
</style>
