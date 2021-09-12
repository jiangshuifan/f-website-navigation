.<template>
    <div class="gallery">
        <div class="gallery_left">
            <a class="whi" href="">
                <div class="whi-top">万花筒</div>
                <div class="whi-bottom">一个极简的网址导航，聚合了多种搜索引擎，收录了各种常用网站</div>
            </a>
        </div>
        <div class="gallery_right">
            <a class="author" href="">
                <div class="author-top">Jsthon</div>
                <div class="author-bottom">万花筒作者个人博客</div>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name:'gallery',
}
</script>

<style>
    .gallery{
        height: 320px;
        width: 100%;
        display: flex;
    }
    .gallery_left{
        flex: 2;
        background-image: url("~assets/img/thumb-1.jpg");
        background-size: cover;
        background-position: center center;
        position: relative;
    }

    .gallery_right{
        flex: 1;
        position: relative;
        background-image: url("~assets/img/thumb-2.jpg");
        background-size: cover;
        background-position: center center;
    }
    .whi,.author{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: white;
        opacity: 0;
    }
    .whi>div,.author>div{
        letter-spacing: 2px;
        opacity: 0;
    }
    .whi-top,.author-top{
        margin-bottom: 20px;
        font-weight: bold;
    }
    .whi-bottom,.author-bottom{
        font-size: 13px;
    }
    .whi:hover,.author:hover{
        background-color: rgba(0,0,0,0.6);
        opacity: 1;
    }
    .whi:hover .whi-top,.author:hover .author-top{
        margin-bottom:8px;
        opacity: 1;
        transition: 0.5s 
    }
    .whi:hover .whi-bottom,.author:hover .author-bottom{
        opacity: 1;
        transition: 0.5s 
    }
</style>