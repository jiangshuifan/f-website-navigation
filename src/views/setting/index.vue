<template>
  <div class="setting-content">
    <backSet></backSet>
    <page-loading />
  </div>
</template>

<script>
import PageLoading from 'components/content/loading/loading'
import backSet from './components/setting.vue'
export default {
  components: {
    backSet,
    PageLoading,
  },
}
</script>

<style scoped>
.setting-content {
  padding: 130px 90px;
}
</style>
