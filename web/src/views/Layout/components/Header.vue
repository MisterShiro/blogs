<template>
  <div class="header">
    <div class="content w">
      <!-- canvas动画 -->
      <!-- <div id="canvasbg"></div>
      <vue-canvas-nest :config="{ color: '38,155,183', count: 200 }" :el="'#canvasbg'" ></vue-canvas-nest> -->
      <div class="title">
        <div class="content">
          <div class="name fy-title">MY Shiro</div>
          <div class="sign fy-title">MY Shiro</div>
        </div>
        <div class="filter30"></div>
      </div>
      <div class="down" @click="down()">
        <img :src="require('@/assets/images/icon/pull-down.svg')" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
// import vueCanvasNest from "vue-canvas-nest";
export default {
  // components: { vueCanvasNest },
  data() {
    return {
      WindowHeight: "",
      timer: "",
    };
  },
  methods: {
    // 页面下拉
    down() {
      document.querySelector(".article") .scrollIntoView({ behavior: "smooth", block: "start" });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 65vh;
  padding-top: 80px;
  box-sizing: border-box;
  background: url("../../../assets/images/home/topBg.jpg") no-repeat;
  background-color: #fff;
  background-size: cover;
  #canvasbg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
  }
  .content {
    height: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .title {
      flex: 1;
      width: 60%;
      margin: 20px 0 50px 0;
      position: relative;
      .filter30 {
        content: "";
        width: 100%;
        height: 100%;
        filter: blur(30px);
        background: url("../../../assets/images/home/topBg.jpg") 50% center / cover no-repeat;
        position: absolute;
        top: 0;
        left: 0;
      }
      .content {
        color: #fff;
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        text-shadow: 0 0 0.5rem #2e2e2e;
        box-shadow: inset 0 0 20px 10px #fff;
        border-radius: 5px;
        position: relative;
        z-index: 1;
        .name {
          font-size: 3rem;
          margin-bottom: 5%;
        }
        .sign {
          font-size: 2rem;
        }
      }
    }
    .link {
      margin: 20px 0;
    }
    .down {
      width: 28px;
      height: 28px;
      margin-bottom: 40px;
      position: relative;
      z-index: 99999;
      img {
        width: 100%;
      }
    }
  }
}
</style>
