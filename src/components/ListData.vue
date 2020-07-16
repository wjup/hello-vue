<template>
  <div class="listData">
    <hr />姓名搜索
    <input type="text" v-model="searchData" />
    <hr />
    <input type="text" placeholder="id" v-model="id" />
    <input type="text" placeholder="name" v-model="name" />
    <br />
    <input type="text" placeholder="age" v-model="age" />
    <input type="text" placeholder="addr" v-model="addr" />
    <input type="button" value="add" @click="add" />
    <hr />
    <table>
      <tr v-for="user in searchList" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.age}}</td>
        <td>{{user.addr}}</td>
        <td>
          <button @click.prevent="remove(user.id)">删除</button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "listData",
  data() {
    return {
      id: "",
      name: "",
      age: "",
      addr: "",
      searchData: "",
      listData: [
        { id: "001", name: "tom", age: 21, addr: "shanghai" },
        { id: "002", name: "jack", age: 31, addr: "nanjing" },
        { id: "003", name: "rose", age: 24, addr: "beijing" },
        { id: "004", name: "jecksen", age: 31, addr: "shandong" }
      ]
    };
  },
  computed: {
    searchList: function() {
      var list = [];
      var searchData = this.searchData;

      if (!searchData) {
        return this.listData;
      }

      this.listData.forEach(item => {
        // 判断循环的记录是否包含的查询的关键字
        if (item.name.indexOf(searchData) > -1) {
          // 将循环的记录添加到新的数组中
          list.push(item);
        }
      });

      return list;
    }
  },
  created() {},
  mounted() {},
  methods: {
    remove(id) {
      // some方法循环数组，返回true终止循环
      this.listData.some((itme, i) => {
        if (itme.id == id) {
          // 调用数组的splice方法来移除记录
          this.listData.splice(i, 1);
          return true;
        }
      });
    },
    add() {
      this.listData.push({
        id: this.id,
        name: this.name,
        addr: this.addr,
        age: this.age
      });
      this.id = this.name = this.age = this.addr = "";
    }
  }
};
</script>
<style scoped>
</style>
