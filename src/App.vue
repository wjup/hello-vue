<template>
  <div id="app">
    <!--    <img src="./assets/logo.png">-->
    <router-link :to="'/'">主页</router-link>|
    <router-link :to="'test'">测试页面</router-link>|
    <router-link :to="'/param'">传参页</router-link>|
    <router-link :to="'/hidden'">隐藏显示</router-link>|
    <router-link :to="'/stop'">冒泡</router-link>|
    <router-link :to="'calculator'">双向绑定</router-link>|
    <router-link :to="'/list'">列表数据操作</router-link>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
