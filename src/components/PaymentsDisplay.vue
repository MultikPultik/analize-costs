<template>
  <div class="list">
    <div class="list_header">
      <div class="col1">#</div>
      <div class="col2">Дата</div>
      <div class="col3">Категория</div>
      <div class="col4">Значение</div>
    </div>

    <div class="list_data" v-for="item in items" :key="item.id">
      <div class="col1">{{ item.id }}</div>
      <div class="col2">{{ item.date }}</div>
      <div class="col3">{{ item.category }}</div>
      <div class="col4">{{ item.value }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    itemsList: {
      type: Array,
      default: () => [],
    },
    page: {
      type: Number,
      default: 1,
    },
    rows: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    items: function() {
      return this.itemsList.slice(
        (this.page - 1) * this.rows,
        this.page * this.rows
      );
    },
  },
};
</script>

<style scoped>
.list {
  width: 700px;
  font-family: Arial, sans-serif;
}
.list_header,
.list_data {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  padding: 2px 5px;
  border-bottom: 1px solid grey;
  font-weight: 600;
}
.list_data {
  height: 30px;
  font-weight: normal;
}
.col1 {
  flex: 2;
}
.col2 {
  flex: 5;
}
.col3 {
  flex: 5;
}
.col4 {
  flex: 3;
}
</style>
