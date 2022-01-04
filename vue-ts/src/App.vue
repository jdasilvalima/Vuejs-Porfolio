<template>
  <router-view />
</template>

<script>
export default {
  data: function () {
    return {};
  },
  beforeCreate() {
    //this.darkModeCheck();
    if(localStorage.getItem('theme') === null)
      localStorage.setItem('theme', 'light');
  },
  beforeUnmount() {
    //localStorage.removeItem('theme');
  },
  methods: {
    darkModeCheck() {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
