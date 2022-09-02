<template>
  <div>
    <div class="about-intro">
      <div class="about-intro-head">访我所访</div>
      <div style="opacity 0.7" class="about-intro-text">
        一个网址导航，简约、易用
      </div>
    </div>
    <div class="about-pic">
      <img src="~assets/img/about.jpg" />
    </div>

    <div class="about-content" style="opacity: 0.9">
      <div class="about-content-left">
        <h5>一万个人里有一万个世界</h5>
        <h6>There are ten thousand worlds in ten thousand people's eyes.</h6>
      </div>
      <div class="about-content-right">
        <div>
          处处细微，一切都是理所当然。你会发现，不同的网络环境，将得到不同的搜索体验。
        </div>
        <div>
          不落俗套。优秀的产品始终不会流露出的艳俗气质，所谓的艳俗气质就是经不起时间的考验。
        </div>
        <div>
          人生必有痴，而后有成。不断地跟进技术，希望创造一些简洁的东西，以改善少数人的生活。
        </div>
      </div>
    </div>
    <page-loading />
  </div>
</template>

<script>
import PageLoading from 'components/content/loading/loading'
export default {
  components: {
    PageLoading,
  },
}
</script>

<style scoped>
.about-intro {
  padding: 130px 0;
}
.about-intro > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-intro-head {
  font-size: 30px;
  margin-bottom: 15px;
  height: 54px;
}
.about-intro-text {
  height: 28px;
}
.about-pic {
  width: 100%;
  max-height: 656px;
  overflow: hidden;
}
.about-pic > img {
  width: 100%;
}
.about-content {
  padding: 100px 90px;
  display: flex;
}
.about-content > div {
  flex: 1;
}
.about-content-left {
  margin-right: 30px;
}
h5 {
  font-size: 24px;
  margin-bottom: 15px;
}
h6 {
  font-size: 16px;
}
.about-content-right {
  margin-right: 0;
}
.about-content-right {
  line-height: 1.8;
}
.about-content-right > div {
  margin-bottom: 30px;
}
</style>
