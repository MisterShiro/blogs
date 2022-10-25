// 内置路径包
const path = require("path");

// 定义resolve方法，获取绝对路径
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // 一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例
  // 允许对内部的 webpack 配置进行更细粒度的修改
  chainWebpack: config => {
    // 配置svg默认规则排除icons目录中svg文件处理
    config.module
      .rule("svg")
      .exclude.add(resolve("src/icons"))
      .end();

    // 新增icons规则，设置svg-sprite-loader处理icons目录中svg文件
    config.module
      .rule("icons")
      .test(/\.svg$/)
      .include.add(resolve("src/icons"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({ symbolId: "icon-[name]" })
      .end();
  }
}
