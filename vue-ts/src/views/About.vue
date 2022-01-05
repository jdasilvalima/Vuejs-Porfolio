<template>
  <div class="about">
    <Navbar :title="$t('nav.titleAbout')" :key="$i18n.locale"/>
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar';

export default {
  components: {
    Navbar,
  },
  data: function () {
    return {
    };
  },
  methods: {
  }
}
</script>