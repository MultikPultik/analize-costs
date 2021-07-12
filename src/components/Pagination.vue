<template>
  <div class="wrapper">
    <button @click="onPagination('left')">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button
      :class="{ activ: currentPage === item }"
      v-for="item in pages"
      @click="onPagination(item)"
      :key="item"
    >
      {{ item }}
    </button>
    <button @click="onPagination('right')">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    records: {
      type: Array,
      default: () => [],
    },
    pages: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {
      page: 1,
      currentPage: 1,
    };
  },
  methods: {
    onPagination: function(num) {
      if (Number.isInteger(num)) {
        this.$emit("onPagePagination", num);
        this.currentPage = num;
      } else {
        if (num == "left" && this.page > 1) {
          this.$emit("onPagePagination", --this.page);
          this.currentPage = this.page;
        }
        if (num == "right" && this.page < this.pages) {
          // debugger
          this.$emit("onPagePagination", ++this.page);
          this.currentPage = this.page;
        }
      }
    },
  },
};
</script>

<style scoped>
.wrapper {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 700px;
  margin: 10px;
  padding: 8px 5px;
  margin: 0;
  margin-top: 5px;
  box-shadow: 0px 4px 10px -3px rgba(34, 60, 80, 0.2);
}
button {
  border: none;
  width: 40px;
  height: 30px;
  background: none;
  font-weight: 600;
}
button:hover {
  font-weight: 700;
  color: red;
  cursor: pointer;
}
.activ {
  background: #dadada;
  font-weight: 700;
}
</style>
