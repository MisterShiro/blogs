<template>
  <div id="wrapper" ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import IScroll from "iscroll/build/iscroll-probe"; //专业版本可以监听滚动的细节
export default {
  name: "ScrollView",
  mounted() {
    this.iscroll = new IScroll(this.$refs.wrapper, {
      mouseWheel: true, //禁用鼠标滚轮
      scrollbars: true, //禁用滚动条
      // 解决拖拽卡顿问题
      scrollX: false,
      scrollY: true, //y方向滚动
      disablePointer: true,
      disableTouch: false,
      disableMouse: true,
    });
    // setTimeout(() => {
      // console.log(this.iscroll.maxScrollY)
    //   this.iscroll.refresh()
    //   // console.log(this.iscroll.maxScrollY)
    // }, 5000)
    // 1.创建一个观察者的对象
    /*
    MutationObserver构造函数只要监听到了指定内容发生了变化,就会执行传入的回调函数
    MutationList: 发生变化的数组
    observer:观察者对象
     */
    const observer = new MutationObserver((mutationList, observer) => {
      mutationList, observer;
      this.iscroll.refresh();
      // console.log(this.iscroll.maxScrollY)
    });
    // 2.告诉观察者对象我们需要观察什么内容
    const config = {
      childList: true, // 观察目标子节点的变化，是否有添加或者删除
      subtree: true, // 观察后代节点，默认为 false
      attributeFilter: ["height", "offsetHeight"], // 观察特定属性
    };
    // 3.告诉观察者对象,我们需要观察谁,需要观察什么内容
    /*
    第一个参数: 告诉观察者对象我们需要观察谁
    第二个参数: 告诉观察者对象我们需要观察什么内容
     */
    observer.observe(this.$refs.wrapper, config);
  },
};
</script>

<style scoped>
#wrapper {
  width: 100%;
  height: 100%;
}
</style>
