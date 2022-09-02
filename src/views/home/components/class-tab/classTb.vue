<template>
  <navbody>
    <navitem
      v-for="item in linkdata"
      :key="item.id"
      @click="handleClick(item.value)"
      :value="item.value"
      :active-value="activeItem"
    >
      <div :style="{ color: fontcolor }" slot="itemtext">{{ item.text }}</div>
    </navitem>
  </navbody>
</template>

<script>
import navbody from 'components/common/tabbar/navbody'
import navitem from 'components/common/tabbar/navitem'
import { mapState } from 'vuex'

export default {
  name: 'classTb',
  components: {
    navbody,
    navitem,
  },
  data() {
    return {
      linkdata: [],
      activeItem: '',
    }
  },
  computed: {
    ...mapState(['fontcolor']),
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let tabData = [
        { id: '1', value: 'design', text: '设计' },
        { id: '2', value: 'entertainment', text: '娱乐' },
        { id: '3', value: 'learn', text: '学习' },
        { id: '4', value: 'live', text: '生活' },
        { id: '5', value: 'technology', text: '技术' },
        { id: '6', value: 'usuallyUse', text: '常用' },
      ]
      this.linkdata = tabData
      this.handleClick(tabData[0].value)
    },
    handleClick(field) {
      this.activeItem = field
      this.$emit('click', field)
    },
  },
}
</script>
