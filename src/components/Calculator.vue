<template>
  <div class="calculator">
    <hr />
    <br />
    <input type="number" v-model="oneNum" />
    <select v-model="moth">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    <input type="number" v-model="twoNum" />
    <input type="button" value="=" @click="result" />
    <input type="number" v-model="resultNum" />
  </div>
</template>

<script>
export default {
  name: "calculator",
  data() {
    return {
      oneNum: 0,
      moth: "+",
      twoNum: 0,
      resultNum: 0
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    result() {
      switch (this.moth) {
        case "+":
          this.resultNum = parseInt(this.oneNum) + parseInt(this.twoNum);
          break;
        case "-":
          this.resultNum = parseInt(this.oneNum) - parseInt(this.twoNum);
          break;
        case "*":
          this.resultNum = parseInt(this.oneNum) * parseInt(this.twoNum);
          break;
        case "/":
          this.resultNum = parseInt(this.oneNum) / parseInt(this.twoNum);
          break;
      }

      this.resultNum = this.oneNum + this.twoNum;
    }
  }
};
</script>
<style scoped>
</style>
