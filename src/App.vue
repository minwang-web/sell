<template>
  <div id="app">
    <Header :seller="seller"></Header>
    <div class="tab">
      <div class="tab-item">
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <!-- 路由出口 -->
    <!-- 路由匹配到的组件将渲染在这里 -->
    <router-view />
  </div>
</template>

<script>
// H一定要大写 跟header标签区别开来
import Header from "./components/header/header.vue";
import api from "@/api/index";

export default {
  name: "App",
  data() {
    return {
      seller: {},
    };
  },
  components: {
    Header,
  },
  methods: {
    async getSeller() {
      const response = await api.getSeller();
      this.seller = response.data.data;
    },
  },
  created() {
    this.getSeller();
  },
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
  .tab
    width 100%
    height 40px
    display flex
    line-height 40px
    border-bottom 1px solid rgba(7, 17, 27, 0.1)
    .tab-item
      flex 1
      text-align center
      &a
        display block
        font-size 14px
        color rgb(77, 85, 93)
      .active
        color rgb(240, 20, 20)
</style>
