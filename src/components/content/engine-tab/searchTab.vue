.<template>
  <div class="pageContainer_searchway">
    <div class="searchBox">
      <ul class="searchway_select">
        <li
          v-for="(item, index) in searchList"
          :key="item.id"
          @click="changeSearch(index)"
          :class="{ active: item.isChecked }"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="searchContent">
        <input
          type="text"
          class="searchInput"
          v-model="searchContents"
          :placeholder="placeHolderText"
        />
        <button class="searchBtn" @click="search()">搜索</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "searchTab",
  data() {
    return {
      searchList: "",
      placeHolderText: "",
      baseStr: "",
      searchContents: "",
    };
  },
  methods: {
    changeSearch(index) {
      self = this;
      //forEach(value,index)函数，，，记住了遍历数组用的,value就是每个子对象
      this.searchList.forEach((v, i) => {
        index === i
          ? (v.isChecked = true) && (self.placeHolderText = v.placeHolderText)&&(self.baseStr=v.baseStr)
          : (v.isChecked = false);
      });
      localStorage.setItem("searchList", JSON.stringify(this.searchList));
    },
    saveToLocal() {
      if (!localStorage.searchList) {
        let searchList = [
          {
            id: 1,
            name: "百度",
            baseStr: "https://www.baidu.com/s?ie=UTF-8&wd=",
            isChecked: true,
            placeHolderText: "百度一下，你就知道",
          },
          {
            id: 2,
            name: "谷歌",
            baseStr: "https://www.google.com/search?q=",
            isChecked: false,
            placeHolderText: "Google搜索",
          },
          {
            id: 3,
            name: "必应",
            baseStr: "https://cn.bing.com/search?q=",
            isChecked: false,
            placeHolderText: "微软 Bing搜索",
          },
        ];
        localStorage.setItem("searchList", JSON.stringify(searchList));
      }
      this.searchList = JSON.parse(localStorage.searchList);
    },
    search() {
      if (this.searchContents.length > 0) {
        let str = this.baseStr + this.searchContents;
        this.searchContents = "";
        window.open(str);
      }
    },
  },
  created() {
    this.saveToLocal();
    this.searchList.forEach((v) => {
      v.isChecked === true
        ? (this.placeHolderText = v.placeHolderText) &&
          (this.baseStr = v.baseStr)
        : "";
    });
  },
};
</script>

<style>
.active,
.searchway_select li:hover {
  border-bottom: 2px solid #111;
  color: black !important;
}
.searchBox {
  max-width: 650px;
  margin: 0 auto;
}

.searchway_select {
  height: 33px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.searchway_select li {
  color: #ccc;
  height: 32px;
  width: 60px;
  text-align: center;
  cursor: pointer;
}

/* 搜索框部分 */
.searchContent {
  margin-top: 20px;
  height: 47px;
}
.searchInput {
  height: 46px;
  max-width: 438px;
  width: 75%;
  float: left;
  padding: 0 16px;
  background-color: #f5f5f5;
  color: #333;
  float: left;
  overflow: hidden;
}
.searchBtn {
  height: 46px;
  text-align: center;
  max-width: 130px;
  width: 20%;
  color: white;
  background-color: #444;
  float: right;
}
.searchBtn:hover {
  background-color: #222;
}
.pageContainer_searchway {
  padding: 40px 0 70px 0;
}
</style>