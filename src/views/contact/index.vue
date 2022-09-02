<template>
  <div>
    <div class="contact-content">
      <div class="contact-content-info">
        <div class="contact-info-title">联系我</div>
        <div class="contact-info-text">你的支持使我们最大的动力</div>
        <div class="contact-info-text">gaojiale_mail@qq.com</div>
        <div class="contact-info-text">Telegram:@jsthon</div>
        <div class="contact-info-site">
          <a href="">作者博客</a>
          <a href="">提交链接</a>
        </div>
      </div>
    </div>
    <div class="contact-pic">
      <div class="contact-pic-container">
        <img src="~assets/img/contact-1.jpg" />
        <img src="~assets/img/contact-2.jpg" />
        <img src="~assets/img/contact-3.jpg" />
      </div>
    </div>
    <page-loading></page-loading>
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
.contact-content {
  height: 286px;
  padding: 130px 90px;
}
.contact-content-info {
  height: 86px;
}
.contact-pic {
  padding: 100px 0;
}
.contact-pic-container {
  padding: 0 90px;
}
.contact-pic-container > img {
  width: 100%;
  object-fit: contain;
  margin-bottom: 30px;
}
.contact-pic-container > img:last-child {
  margin-bottom: 0;
}
.contact-info-title {
  font-size: 30px;
  height: 54px;
  color: rgba(0, 0, 0, 0.8);
}
.contact-info-text {
  height: 28px;
  color: rgba(54, 54, 54, 0.8);
}
.contact-info-site {
  height: 28px;
  font-size: 14px;
}
.contact-info-site > a {
  color: rgba(88, 88, 88, 0.8);
}
.contact-info-site > a:first-child {
  margin-right: 15px;
}
.contact-content-info > div {
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
