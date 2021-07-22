<template>
  <div id="app">
    <div :class="[$style.header]">
      <h1>Мои персональные расходы</h1>
    </div>
    <div class="menu">
      <a href="" @click="goToPage('dashboard')">Dashboard / </a>  
      <a href="" @click="goToPage('about')">About</a>
    </div>

    <router-view />
    <br />
  </div>
</template>

<script>
export default {
  name: "App",

  methods: {
    goToPage(page) {
      this.$router.push({
        name: page,
        // params: {
        //   id: 123,
        // },
        // query: {
        //   value: 100,
        // }
      }).catch(()=>{
        console.log('duplicate');
      });
    },
  },
  created() {
    this.$store.dispatch("fetchData");
    this.$store.dispatch("fetchCategoryList");
  },
  
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 30px;
}
</style>

<style lang="scss" scoped module>
.header {
  font-size: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  margin-bottom: 70px;
}
</style>
