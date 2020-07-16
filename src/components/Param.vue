<template>
  <div class="param-test">
    <hr />
    <input type="text" v-model="userInput" />
    <input type="button" value="Go to route" @click="GoToRoute()">
  </div>
</template>

<script>
export default {
  name: "param-test",
  data() {
    return {
      userInput: ''
    };
  },
  methods: {
    GoToRoute: function() {
      this.$router.push({
        name: 'ParamData',
        params: {
          id: this.userInput
        }
      });
    }
  }
};
</script>
<style scoped>
</style>
