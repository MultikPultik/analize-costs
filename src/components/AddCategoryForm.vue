<template>
  <div class="category_form">
    <input type="text" v-model="value" placeholder="Категория" />
    <button @click="addCategory">Добавить категорию</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "AddCategoryForm",
  data() {
    return {
      value: "",
    };
  },
  methods: {
    ...mapMutations(["addCategoryList"]),

    addCategory() {
      let isEqual = false;
      let list = this.$store.getters.getCategoryList;
      isEqual = list.find((el) => {
        if (el === this.value) {
          console.log(el);
          return true;
        }
      });
      if (!isEqual && this.value != '') {
        this.addCategoryList(this.value);
      }
    },
  },
};
</script>

<style>
</style>