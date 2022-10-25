<template>
  <div class="layout">
    <!-- 切换主题demo -->
    <!-- <p style="color: red" @click="theme('one-theme')">红</p>
    <p style="color: black" @click="theme('tow-theme')">黑</p> -->
    <!-- 导航 -->
    <!-- <div class="index-nav" @click="tabNav()">导航</div> -->
    <!-- 头部 -->
    <Header></Header>
    <!-- 主体 -->
    <router-view></router-view>
    <!-- 尾部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "layout",
  components: { Header, Footer },
  methods: {
    // 主题切换
    theme(type) {
      window.document.documentElement.setAttribute("data-theme", type);
    },
    // 导航
    tabNav() {
      this.$route.push("/about");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/theme.scss";
.layout {
  background-color: #f6f6f6;
  .index-nav {
    width: 100%;
    height: 60px;
    background-color: rgb(160, 218, 233);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 20221;
  }
  // 主题切换
  // @include base-background('bg-color');
  // @include text-color('text-color');
  // transition-property: color,background;
  // transition-duration: 500ms;
  .footer {
    height: 60px;
    background-color: #333;
  }
}
</style>


