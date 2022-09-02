.<template>
  <div class="gallery">
    <div class="gallery_left">
      <a class="f" href="">
        <div class="f-top">访我所访</div>
        <div class="f-bottom">
          一个网址导航，简约、易用
        </div>
      </a>
    </div>
    <div class="gallery_right">
      <a class="author" href="">
        <div class="author-top">于未然</div>
        <div class="author-bottom">一个前端爱好者</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery',
}
</script>

<style>
.gallery {
  height: 320px;
  width: 100%;
  display: flex;
}
.gallery_left {
  flex: 2;
  background-image: url('~assets/img/thumb-1.jpg');
  background-size: cover;
  background-position: center center;
  position: relative;
}

.gallery_right {
  flex: 1;
  position: relative;
  background-image: url('~assets/img/thumb-2.jpg');
  background-size: cover;
  background-position: center center;
}
.f,
.author {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  opacity: 0;
}
.f > div,
.author > div {
  letter-spacing: 2px;
  opacity: 0;
}
.f-top,
.author-top {
  margin-bottom: 20px;
  font-weight: bold;
}
.f-bottom,
.author-bottom {
  font-size: 13px;
}
.f:hover,
.author:hover {
  background-color: rgba(0, 0, 0, 0.6);
  opacity: 1;
}
.f:hover .f-top,
.author:hover .author-top {
  margin-bottom: 8px;
  opacity: 1;
  transition: 0.5s;
}
.f:hover .f-bottom,
.author:hover .author-bottom {
  opacity: 1;
  transition: 0.5s;
}
</style>
