.<template>
      <div class="menu">
        <div :class="{'menu-origin':true,'menu-close':pagemenustate}" @click="unfoldmenu"></div>
        <ul class="menu-item">
          <li @click="unfoldmenu"><router-link to="/home">首页</router-link></li>
          <li><span @click="handlesocial">社交</span>
          <transition name="foldmenu">
                      <ul v-show="socialmenuUnFold" class="social-type">
                <li><a>CSDN</a></li>
                <li><a>Bilibili</a></li>
                <li><a>Zhihu</a></li>
                <li><a>GitHub</a></li>
            </ul>
          </transition>
          </li @click="unfoldmenu">
          <li  @click="unfoldmenu"><router-link to="/contact">联系</router-link></li>
          <li @click="unfoldmenu"><router-link to="/about">关于</router-link></li>
        </ul>
      </div>
</template>

<script>
export default {
  name: "page-menu",
  methods: {
    unfoldmenu() {
      this.$emit("unfold");
    },
    handlesocial(){
      this.socialmenuUnFold = !this.socialmenuUnFold
    }
  },
  data() {
    return {
      socialmenuUnFold:false,
      pagemenustate:false
    }
  },
  props:{
    menustate:{
      default:false
    },
    socialmenu:{
      default:false
    }
  },
  watch:{
    socialmenu(newV){
      this.socialmenuUnFold = newV
    },
    menustate(newV){
      this.pagemenustate = newV
    }
  }
};
</script>

<style>

.menu {
  position: fixed;
  right: 0;
  top: 0;
  padding: 80px;
  width: 506px;
  height: 100%;
  background-color: white;
  font-size: 25px;
}
.menu-close{
  float: left;
  position: relative;
  height: 30px;
  width: 30px;
}
.menu-close::before,.menu-close::after,.menu-origin::before,.menu-origin::after{
  position: absolute;
  content: '';
  background-color: black;
  width: 20px;
  height: 2px;
  top: 50%;
  transform: translate(0,-50%);
  /* top: 50%;
  left: 50%;
  transform: translate(-50%,-50%); */
  transform-origin: 15px,15px;
}
.menu-close::before{
  transform: rotate(45deg);
  animation: 'anticlockwise' 0.6s linear;
}
.menu-close::after{
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
.social-type{
    overflow: hidden;
}
.social-type>li{
      margin-top:2px;
    text-align: right;
}
.social-type>li>a{
    font-size: 14px;
    color: rgba(80,80,80,0.8);
}
@keyframes clockwise {
  0% {transform: rotate(0);}
  75%{transform: rotate(0);}
  100%{transform: rotate(-45deg);}
}
@keyframes anticlockwise {
  0% {transform: rotate(0);}
  75%{transform: rotate(0);}
  100%{transform: rotate(45deg);}
}
</style>