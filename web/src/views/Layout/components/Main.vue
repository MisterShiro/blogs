<template>
  <div class="w main">
    <!-- 左边 -->
    <div class="left">
      <router-view />
    </div>
    <!-- 右边 -->
    <div class="right shadow" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss"  scoped>
.main {
  height: 10000px;
  padding: 2%;
  display: flex;
  justify-content: space-between;

  .left{
    flex: 1;
    margin-right: 10px;
  }
  .right {
    width: 300px;
    height: 300px;
    background-color: #fff;
    position: sticky;
    top: 0;
  }
}
</style>

