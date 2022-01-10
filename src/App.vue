<template>
  <router-view/>
</template>

<script>
export default {
  data: function () {
    return {};
  },
  beforeCreate() {
    if(localStorage.getItem('theme') === null)
      localStorage.setItem('theme', 'light');
  },
  beforeUnmount() {
    //localStorage.removeItem('theme');
  },
  methods: {
  
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
</style>
