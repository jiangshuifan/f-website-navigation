.<template>
  <div class="pageContainer_searchway">
    <div class="searchBox">
      <ul class="searchway_select">
        <li
          :style="{
            opacity: item.isChecked ? 1 : 0.8,
          }"
          v-for="(item, index) in searchList"
          :key="item.id"
          @click="changeSearch(index)"
          :class="{ active: item.isChecked }"
        >
          {{ item.name }}
        </li>
      </ul>
      <div class="search-content">
        <input
          ref="input"
          @input="handleInputWord"
          @focus="handleInputFocus"
          @blur="handleInputBlur"
          @keydown.enter="search"
          @keydown.up.prevent="focusWord(false)"
          @keydown.down="focusWord(true)"
          type="text"
          class="searchInput"
          v-model.trim="searchContents"
          :placeholder="placeHolderText"
        />
        <button class="searchBtn" @click="search">搜索</button>
        <div
          v-show="associateWordsShow"
          @mousedown.prevent=""
          class="associate-container"
        >
          <div
            v-show="showHistoryRecord"
            class="history-search-record flex-ac-js"
          >
            <div>历史搜索记录</div>
            <div
              @click="clearRecord"
              class="btn-clear-record"
              style="cursor:pointer"
            >
              清空
            </div>
          </div>
          <div
            v-show="showHistoryRecord && associateWords.length === 0"
            style="opacity: 0.6;padding-bottom: 10px;text-align: center;"
          >
            暂无历史记录
          </div>
          <div
            :class="[
              'associate-item',
              'flex-ac-js',
              { 'associate-active-item': item.isActive },
            ]"
            @click.prevent="handleQueryWord(item.word)"
            v-for="item in associateWords"
            :key="item.word"
          >
            <div
              style="overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
            >
              {{ item.word }}
            </div>
            <div
              @click.stop="removeRecord(item.word)"
              v-show="showHistoryRecord"
            >
              <img
                style="height: 20px;cursor: pointer;"
                src="./delete.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import fetchJsonp from 'fetch-jsonp'
import { mapState } from 'vuex'
import { debounce } from 'throttle-debounce'
export default {
  name: 'searchTab',
  data() {
    return {
      searchList: '',
      placeHolderText: '',
      baseStr: '',
      searchContents: '',
      associateWords: [],
      associateWordsShow: false,
      showHistoryRecord: false,
      currentIndex: 0,
      rememberWord: '',
    }
  },
  computed: {
    ...mapState(['historyRecord']),
  },
  methods: {
    changeSearch(index) {
      self = this
      //forEach(value,index)函数，，，记住了遍历数组用的,value就是每个子对象
      this.searchList.forEach((v, i) => {
        index === i
          ? (v.isChecked = true) &&
            (self.placeHolderText = v.placeHolderText) &&
            (self.baseStr = v.baseStr)
          : (v.isChecked = false)
      })
      localStorage.setItem('searchList', JSON.stringify(this.searchList))
    },
    saveToLocal() {
      if (!localStorage.searchList) {
        let searchList = [
          {
            id: 1,
            name: '百度',
            baseStr: 'https://www.baidu.com/s?ie=UTF-8&wd=',
            isChecked: true,
            placeHolderText: '百度一下，你就知道',
          },
          {
            id: 2,
            name: '谷歌',
            baseStr: 'https://www.google.com/search?q=',
            isChecked: false,
            placeHolderText: 'Google搜索',
          },
          {
            id: 3,
            name: '必应',
            baseStr: 'https://cn.bing.com/search?q=',
            isChecked: false,
            placeHolderText: '微软 Bing搜索',
          },
        ]
        localStorage.setItem('searchList', JSON.stringify(searchList))
      }
      this.searchList = JSON.parse(localStorage.searchList)
    },
    search() {
      if (this.searchContents.length > 0) {
        this.handleQueryWord(this.searchContents)
      }
    },
    focusWord(isDown) {
      let len = this.associateWords.length
      let allResultsNum = len + 1
      let currentIndex = this.currentIndex
      if (currentIndex === 0) {
        this.currentIndex = allResultsNum
      } else {
        isDown ? this.currentIndex++ : this.currentIndex--
      }
      let ind = this.currentIndex % allResultsNum
      if (ind === 0) {
        this.searchContents = this.rememberWord
      }
      this.associateWords.forEach((item, index) => {
        if (this.currentIndex % allResultsNum === index + 1) {
          item.isActive = true
          this.searchContents = item.word
        } else {
          item.isActive = false
        }
      })
      this.$nextTick(() => {
        this.$refs.input.setSelectionRange(-1, -1)
      })
    },
    handleInputFocus() {
      this.$emit('focus')
      this.associateWordsShow = true
      this.showHistoryRecord = this.judgeShowRecord()
    },
    handleInputBlur() {
      this.associateWordsShow = false
      this.$emit('blur')
    },
    handleQueryWord(word) {
      let url = this.baseStr + word
      let recordList = this.historyRecord
      const position = recordList.findIndex((item) => {
        return item === word
      })
      if (position === -1) {
        if (recordList.length < 10) {
          recordList.unshift(word)
        } else {
          recordList.unshift(word)
          recordList.pop()
        }
      } else {
        recordList.splice(position, 1)
        recordList.unshift(word)
      }
      localStorage.setItem('siteHistoryRecords', JSON.stringify(recordList))
      this.$store.commit('UPDATEHISTORYRECORDS', {
        records: recordList,
      })
      this.searchContents = ''
      this.associateWords = []
      window.open(url)
    },
    clearRecord() {
      localStorage.setItem('siteHistoryRecords', JSON.stringify([]))
      this.$store.commit('UPDATEHISTORYRECORDS', {
        records: [],
      })
      this.associateWords = []
    },
    removeRecord(word) {
      let recordList = this.historyRecord
      const target = recordList.filter((item) => {
        return item !== word
      })
      localStorage.setItem('siteHistoryRecords', JSON.stringify(target))
      this.$store.commit('UPDATEHISTORYRECORDS', {
        records: target,
      })
      let records = target.map((item) => {
        return { word: item, isActive: false }
      })
      this.associateWords = records
    },
    async getAssociateWords() {
      let keyword = this.searchContents
      this.rememberWord = this.searchContents
      if (keyword !== '') {
        let params = { wd: keyword, p: '3' }
        let fetchData = await fetchJsonp(
          'http://suggestion.baidu.com/su?' + qs.stringify(params),
          {
            jsonpCallback: 'cb',
          }
        )
        let targetData = await fetchData.json()
        this.associateWords = targetData.s.map((item) => {
          return { word: item, isActive: false }
        })
      } else {
        this.associateWords = []
      }
      this.showHistoryRecord = this.judgeShowRecord()
    },
    judgeShowRecord() {
      if (this.associateWordsShow && this.searchContents === '') {
        let records = this.historyRecord.map((item) => {
          return { word: item, isActive: false }
        })
        this.associateWords = records
        return true
      }
      return false
    },
  },
  created() {
    let _this = this
    this.handleInputWord = debounce(500, _this.getAssociateWords)
    this.saveToLocal()
    this.searchList.forEach((v) => {
      v.isChecked === true
        ? (this.placeHolderText = v.placeHolderText) &&
          (this.baseStr = v.baseStr)
        : ''
    })
  },
}
</script>

<style scoped>
.searchBox {
  max-width: 650px;
  margin: 0 auto;
}

.searchway_select {
  height: 33px;
  width: 300px;
  display: flex;
  justify-content: space-between;
}
.searchway_select li {
  position: relative;
  height: 32px;
  width: 80px;
  cursor: pointer;
  overflow: hidden;
}

/* 搜索框部分 */
.search-content {
  margin-top: 20px;
  height: 47px;
  position: relative;
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

.searchway_select > li::before {
  left: 0;
  background-color: inherit;
}
.searchway_select > li::after {
  left: -100%;
  transition: 1.5s;
}
.searchway_select > li::after,
.searchway_select > li::before {
  position: absolute;
  content: '';
  bottom: 0;
  width: 100%;
  height: 2px;
  border-radius: 1px;
}
.active::after {
  transition: 1.5s;
  left: 0 !important;
  bottom: 0;
  background-color: rgba(151, 151, 151, 0.9);
}
.associate-container {
  position: absolute;
  left: 0;
  top: 50px;
  max-width: 438px;
  width: 75%;
  background-color: #fff;
  color: #222;
  padding: 0 10px;
  z-index: 99999;
}
.associate-item {
  padding: 4px;
  margin: 4px 0;
  cursor: pointer;
}
.associate-item:hover {
  color: rgb(101, 47, 210);
  background-color: #efefef;
}
.associate-active-item {
  color: rgb(101, 47, 210);
}
.flex-ac-js {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.history-search-record {
  padding: 4px;
  margin: 4px 0;
  font-weight: bold;
}
.btn-clear-record {
  cursor: pointer;
  opacity: 0.8;
}
.btn-clear-record:hover {
  opacity: 1;
}
</style>
