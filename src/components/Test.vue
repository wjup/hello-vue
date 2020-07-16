<template>
  <div id="test-page">
    <hr />
    <input type="text" v-model="searchData" />
    <button @click="addList">add</button>
    <button @click="removeList">remove</button>
    <ol>
      <li v-for="(data,index) in nameList" :key="index">{{ data }}</li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "test-page",
  data: function() {
    return {
      searchData: "",
      dataList: ["aaa", "aac", "bcd", "bbd", "cde"]
    };
  },
  computed: {
    nameList: function() {
      var arr = this.dataList;
      var searchData = this.searchData;

      if (!searchData) {
        return arr;
      }

      arr = arr.filter(function(item) {
        if (item.toLowerCase().indexOf(searchData) > -1) {
          return item;
        }
      });
      return arr;
    }
  },
  methods: {
    removeList() {
      this.dataList.pop();
    },
    addList() {
       this.dataList.push(this.searchData)
    }
  }
};
</script>

<style scoped>
</style>
