// 注册全局组件
import Vue from 'vue'


// 全局注册svg-icon组件
const req = require.context("@/icons/svg", false, /\.svg$/);
req.keys().map(req);
import SvgIcon from "@/components/SvgIcon";
Vue.component("svg-icon", SvgIcon);


