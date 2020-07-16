<template>
  <div class="hidden">
    <hr />
    <button @click="isShowClick">显示/隐藏</button>
    <div-test v-show="isShow"></div-test>
    <ol v-show="isShow">
      <li v-for="(data,index) in lists" :key="index">{{data}}---{{index}}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "hidden",
  data() {
    return {
      lists: ["redis", "rabbitMQ", "nginx", "mysql", "tomcat"],
      isShow: false
    };
  },
  components: {
    "div-test": {
      template: "<div style='background:red'>hhhhhhhhh<br>hhhhhhh</div>"
    }
  },
  created() {},
  mounted() {},
  methods: {
    isShowClick: function() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
<style scoped>
</style>
