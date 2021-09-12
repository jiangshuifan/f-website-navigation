.<template>
  <div class="setting">
    <div class="set-item">
      <div class="set-item-type">站点背景</div>
      <div class="set-item-content">
        <div class="set-item-content-item" v-for="item in colorlist" @click="changecolor(item)" :style="{'background-color':item.color}" >{{item.name}}</div>
      </div>
    </div>
    <button class="set-save-btn" @click="setsave">保存</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorlist:[
        {'name':'山雾','color':'#ededed'},
        {'name':'素白','color':'#ffffff'},
        {'name':'桃夭','color':'#f5d9d9'},
        {'name':'荔枝','color':'#8d6262'},
        {'name':'天色','color':'#b9d7ea'},
        {'name':'青川','color':'#aacfd0'},
        {'name':'深海','color':'#283c63'},
        {'name':'陆离','color':'#928a97'},
        {'name':'青纯','color':'#444f5a'},
        {'name':'石墨','color':'#373c38'},
        {'name':'月色','color':'#40514e'},
        {'name':'消炭','color':'#4d4545'}
      ],
      currentColor:""
    }
  },
  methods:{
    changecolor(item){
      this.currentColor = item.color;
      this.$store.commit('changeThemeColor',{
        color:item.color
      })
    },
    setsave(){
      localStorage.setItem('siteThemeColor',this.currentColor)
    }
  }
}
</script>

<style>
  .setting{
    height: 400px;
    padding: 30px 30px 0;
    width: 100%;
    position: relative;
  }
  .set-item-type{
    margin-bottom: 15px;
    font-size: 14px;
    font-weight: bold;
    color: rgb(54, 54, 54);
  }
  .set-item-content{
    display: flex;
    justify-content: space-between;
  }
  .set-item-content-item{
    padding: 6px 16px;
    color: white;
    text-shadow: 0 0 2px #000;
    box-shadow: 0 0 2px #777;
    cursor: pointer;
  }
  .set-item-content-item:hover{
    box-shadow: 0 1px 2px rgba(0,0,0,0.6);
  }
  .set-save-btn{
    position: absolute;
    bottom: 16px;
    padding: 8px 16px;
    letter-spacing: 4px;
    box-shadow: 0 0 3px rgba(0,0,0,0.6);
    cursor: pointer;
  }
  .set-save-btn:hover{
    box-shadow:  0 1px 3px rgba(0,0,0,0.6);;
  }
</style>