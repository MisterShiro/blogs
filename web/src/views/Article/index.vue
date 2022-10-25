<template>
  <div class="w article">
    <!-- 左边 -->
    <div class="left">
      <router-view />
    </div>
    <!-- 右边 -->
    <div class="right shadow">
      <div class="top">
        <div class="avatar ftfy-lexend">
          <img @click="$router.push('/')" src="../../assets/images/home/avater.jpg" alt="头像">
        </div>
        <p class="name fy-title fs14 mt10 mb10">Shiro</p>
        <p class="sign fy-title fs16 mb20">路漫漫其修远兮</p>
        <div class="link">
          <svg-icon icon-class="qq" class-name="icon"></svg-icon>
          <svg-icon icon-class="email" class-name="icon"></svg-icon>
          <svg-icon icon-class="github" class-name="icon"></svg-icon>
          <svg-icon icon-class="gitee" class-name="icon"></svg-icon>
        </div>
        <!-- 数据统计 -->
        <!-- <div class="data">
          <div class="item" v-for="item in dataList" :key="item.num">
            <p>{{item.name}}</p>
            <p>{{item.num}}</p>
          </div>
        </div> -->
        <!--  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [
        { name: "文章", num: 10 },
        { name: "biao", num: 10 },
        { name: "文章", num: 10 },
      ],
    };
  },
};
</script>

<style lang="scss"  scoped>
@media (max-width: 1000px) {
  .left{
    margin-right: 0 !important;
    transition: 0.3s all;
  }
  .right{
    display: none;
  }
}
.article {
  padding: 2%;
  display: flex;
  justify-content: space-between;
  .left {
    flex: 1;
    margin-right: 30px;
  }
  .right {
    width: 300px;
    height: 300px;
    text-align: center;
    border-radius: 5px;
    background: #fff;
    padding: 20px 0;
    position: sticky;
    top: 0;
    .top {
      display: flex;
      flex-direction: column;
      align-items: center;
      .avatar {
        width: 106px;
        height: 106px;
        border-radius: 50%;
        overflow: hidden;
        border: #f1f1f1 3px solid;
        cursor: pointer;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .link {
        width: 85%;
        padding: 8px 30px;
        border-top: #cdcdcd solid 1px;
        border-bottom: #cdcdcd solid 1px;
        display: flex;
        justify-content: space-around;
        .icon {
          font-size: 50px;
          border-radius: 50%;
          width: 25px;
          height: 25px;
          cursor: pointer;
          &:hover {
            color: #fff;
            background: #000;
            transition: 0.5s all;
          }
        }
      }
    }
  }
}
</style>

