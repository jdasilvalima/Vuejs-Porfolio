<template>
  <router-view />
</template>

<script>
export default {
  data: function () {
    return {};
  },
  beforeCreate() {
    if (localStorage.getItem("theme") === null)
      localStorage.setItem("theme", "light");

    if (localStorage.getItem("language") === null)
      localStorage.setItem("language", "en")
    else if(localStorage.getItem("language") === "fr" || localStorage.getItem("language") === "en")
      this.$i18n.locale = localStorage.getItem("language");
  },
  beforeUnmount() {
    //localStorage.removeItem('theme');
  },
  methods: {},
};
</script>

<style>
body::-webkit-scrollbar {
  background-color: #e6e6e6;
  width: 15px;
}

body::-webkit-scrollbar-thumb {
  background-color: #0F766E;
  border-radius: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
