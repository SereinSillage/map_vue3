<template>
  <div class="search_container">
    <div class="search_input">
      <input
        type="text"
        placeholder="请输入内容"
        v-model="input"
        :id="search_id"
      />
      <button class="search-button" @click="sendMsg">搜索</button>
    </div>
  </div>
</template>

<script>
import Bus from "../bus/bus";
export default {
  name: "SearchContainer",

  data() {
    return {
      search_id: "searchId",
      input: "",
    };
  },

  methods: {
    sendId() {
      Bus.$emit("share_id", this.search_id);
    },
    sendMsg() {
      Bus.$emit("share", this.input);
    },
  },
  mounted() {
    this.sendId();
  },
};
</script>

<style lang="scss" scoped>
.search_container {
  height: 30px;
  width: 500px;
  margin: auto;
  .search_input {
    width: 400px;
    height: 25px;
  }
  .search-button {
    height: 25px;
  }
}
</style>
