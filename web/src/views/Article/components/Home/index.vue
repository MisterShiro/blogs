<template>
  <div class="w home">
    <!-- 置顶文章 -->
    <div class="topArticle shadow">
      <p class="title">stick</p>
      <div class="tips">置顶文章提示</div>
      <div class="content overflow2">内容</div>
    </div>
    <!-- 文章列表 -->
    <div class="articleList shadow">
      <div class="item" v-for="item in articleList" :key="item.id">
        <div class="imgbox cursor">
          <img  src="../../../../assets/images/home/fill.jpg" alt="" />
        </div>
        <div class="info">
          <div class="title mb20">
            <div class="item cursor">
              <svg-icon icon-class="  " class-name="icon"></svg-icon>
              <span class="fs12 fy-title">120</span>
            </div>
            <div class="item cursor">
              <svg-icon icon-class="check" class-name="icon"></svg-icon>
              <span class="fs12 fy-title">120</span>
            </div>
            <div class="item cursor">
              <svg-icon icon-class="pen" class-name="icon"></svg-icon>
              <span class="fs12 fy-title">120</span>
            </div>
          </div>
          <!-- 内容 -->
          <div class="content">
            <p class="mb10 fs18 cursor fy-article" @click="toDetails()">标题Title</p>
            <div class="text lh24 fy-article overflow4">内容Content</div>
          </div>
          <div class="tips">
            <svg-icon icon-class="tips" class-name="icon"></svg-icon>
            <span class="fs12 fy-title">前端</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getActicle } from "@/api/home";
export default {
  name: "Home",
  data() {
    return {
      articleList: [
        { id: 0, title: "文章标题", image: "" },
        { id: 0, title: "文章标题", image: "" },
      ],
    };
  },
  created(){
    this.getActicle()
  },
  methods: {
    toDetails(){
      this.$router.push('article-details')
    },
    async getActicle(){
      const res = await getActicle()
      this.articleList=res.data.data
      console.log(res);
    },
  },
};
</script>

<style lang="scss"  scoped>
@media (max-width: 600px) {
  .articleList{
    .info{
      display: none;
    }
    .imgbox{
      clip-path:none !important;
      margin: 0 !important;
    }
  }
}
.home {
  .topArticle {
    height: 300px;
    margin: 0 0 1.5rem;
    border-radius: 5px;
    padding: 1rem 2rem;
    background-color: #fff;
    .title {
      text-align: center;
      font-size: 2em;
      color: #1c1e21;
    }
    .tips {
      font-size: 1em;
      line-height: 2rem;
      border: 1px solid #efefef;
      border-left: 10px solid #efefef;
      margin: 30px 0;
      padding: 10px 30px;
    }
    .content {
      text-indent: 40px;
      line-height: 2rem;
      margin-bottom: 20px;
      height: 64px;
    }
  }
  .articleList {
    background-color: #fff;
    padding: 1rem 2rem;
    border-radius: 5px;
    > .item:nth-child(2n) {
      flex-direction: row-reverse;
      .imgbox {
        clip-path: polygon(0 0,100% 0,100% 100%,10% 100%);
        margin-left: 20px;
      }
      .info {
        padding-left: 20px;
        .title {
          justify-content: flex-start;
        }
      }
      .tips{
        text-align: right;
      }
    }
    > .item:nth-child(2n+1) {
      .imgbox {
        clip-path: polygon(0 0, 90% 0, 100% 100%, 0 100%);
        margin-right: 20px;
      }
      .info {
        padding-right: 20px;
        .title {
          justify-content: flex-end;
        }
      }
    }
    // 通用样式
    > .item {
      height: 220px;
      display: flex;
      overflow: hidden;
      border-radius: 8px;
      margin: 30px 0;
      box-shadow: 0 0.625rem 1.875rem -0.9375rem rgba($color: #000000, $alpha: 0.1);
      transition: 0.3s all;
      &:hover {
        box-shadow: 0 0 20px #d9d9d980;
        transition: 0.3s all;
        img {
          transform: scale(1.2);
          transition: 0.3s all;
        }
      }
      .imgbox {
        flex:1;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          overflow: hidden;
          object-fit: cover;
          transition: 0.3s all;
        }
      }
      .info {
        width: 50%;
        padding: 10px 0;
        .title {
          display: flex;
          align-items: center;
          color: #999;
          .item {
            margin-right: 20px;
            .icon {
              width: 18px;
              height: 18px;
              margin-right: 5px;
            }
          }
        }
      }
      .content {
        height: 130px;
        overflow: hidden;
        p{
          color: #e9546b;
        }
      }
      .tips {
        margin-top: 10px;
        .icon {
          width: 14px;
          height: 14px;
          margin-right: 5px;
        }
      }
    }
  }
}
</style>
