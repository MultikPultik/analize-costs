<template>
  <div>
    <button :class="[$style.btnAddCost]" @click="AddNewCost">
      ДОБАВИТЬ +
    </button>
  </div>
</template>

<script>
export default {
  name: "AddNewCost",

  data() {
    return {
      isView: false,
    };
  },

  methods: {
    AddNewCost() {
      this.isView = !this.isView;
      this.$emit("onAddNewCost", this.isView);
    },
  },
};
</script>

<style scoped module>
.btnAddCost {
  padding: 10px;
  font-weight: 600;
  margin-bottom: 10px;
  background: #08a37f;
  color: white;
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  border: none;
  border-radius: 5px;
}
</style>
