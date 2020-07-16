<template>
  <div class="stop-test">
    <hr />
    <div :style="outer" @click="devHandlerA">
      <input type="button" value="会冒泡的按钮" @click="inputHandler" />
      <input type="button" value="不会冒泡的按钮" @click.stop="inputHandler2" />
    </div>
  </div>
</template>

<script>
export default {
  name: "stop-test",
  data() {
    return {
      outer: {
        padding: "40px",
        "background-color": "black"
      }
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    devHandlerA: function() {
      console.log("最外层div触发了。");
    },
    inputHandler: function() {
      console.log("div内的冒泡按钮触发了。");
    },
    inputHandler2: function() {
      console.log("div内的不冒泡按钮触发了。");
    }
  }
};
</script>
<style scoped>
.inner {
  height: 150px;
  background-color: gold;
}
</style>
