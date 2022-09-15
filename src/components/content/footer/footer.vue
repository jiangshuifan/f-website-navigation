.<template>
  <div class="footer">
    <div class="footer_content">
      <div class="footer_content_info">
        <div>一以贯之的努力，不得懈怠的人生</div>
        <div>世界如你所见</div>
      </div>
      <div class="footer_content_link">
        <a href=""><div class="iconfont icon-CSDN"></div></a>
        <a href=""><div class="iconfont icon-bzhan"></div></a>
        <a href=""><div class="iconfont icon-zhihu"></div></a>
        <a href="https://github.com/jiangshuifan/f-website-navigation"
          ><div class="iconfont icon-GitHub"></div
        ></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page_footer',
}
</script>

<style>
.footer {
  padding: 100px 0;
  width: 100%;
}
.footer_content {
  height: 133px;
  padding: 0 90px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.footer_content_link {
  height: 28px;
  display: flex;
  justify-content: center;
}
.footer_content_link > a {
  margin-right: 28px;
  font-size: 24px;
}
.footer_content_link > a:last-child {
  margin-right: 0;
}
.footer_content_info {
  font-size: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer_content_info > div {
  margin-bottom: 4px;
}
</style>
