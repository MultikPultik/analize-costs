<template>
  <div class="wrapper">
    <button @click="onPagination('left')"><i class="fas fa-chevron-left"></i></button>
    <button 
      v-for="item in pages" 
      @click="onPagination(item)"
      :key="item"
      
      >
      {{ item }}
    </button>
    <button @click="onPagination('right')" key="left"><i class="fas fa-chevron-right"></i></button>
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
  },
  methods: {
    onPagination: function(num){
      this.$emit("onPagePagination", num)
    }
  },
  computed: {
    pages: function() {
      return Math.trunc(this.records.length / 6 + 1);
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
  /* border: 1px solid grey; */
  padding: 8px 5px;
  margin: 0;
  margin-top: 5px;
  box-shadow: 0px 4px 10px -3px rgba(34, 60, 80, 0.2);
}
button {
  border: none;
  width: 40px;
  background: none;
  font-weight: 600;
}
button:hover {
  font-weight: 700;
  color: red;
}
</style>
