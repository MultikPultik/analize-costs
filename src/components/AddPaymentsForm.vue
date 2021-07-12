<template>
  <div class="payment-form">
    <input v-model.number="value" type="number" placeholder="Количество" />
    <!-- <input v-model.trim="category" type="text" placeholder="Категория" /> -->
    <select v-model="category">
      <option
        v-for="(item, idx) in categorylist"
        :key="idx"
        :value="item"
      >
      {{item}}
      </option>
    </select>
    <input v-model.trim="date" type="text" placeholder="Дата" />
    <button @click="onClick">Сохранить</button>
  </div>
</template>

<script>
export default {
  name: "AddPaymentsForm",
  props: {
    categorylist: [],
  },
  data() {
    return {
      value: 0,
      category: "Food",
      date: "",
    };
  },
  methods: {
    getCurrentDate() {
      const today = new Date();
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();

      return `${d < 9 ? "0" + d : d}.${m < 9 ? "0" + m : m}.${y}`;
    },
    onClick() {
      const { value, category } = this;
      const data = {
        date: this.date || this.getCurrentDate(),
        category,
        value,
      };
      this.$emit("onAddNewPayment", data);
    },
  },
};
</script>

<style></style>
