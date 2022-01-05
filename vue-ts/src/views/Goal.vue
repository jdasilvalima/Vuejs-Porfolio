<template>
  <Navbar :title="$t('nav.titleGoal')" :key="$i18n.locale"/>
  <div>Goal Page</div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';

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

<style>

</style>