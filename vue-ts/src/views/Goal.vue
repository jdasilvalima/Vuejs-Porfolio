<template>
  <NavbarMobile :title="$t('nav.titleGoal')" :key="$i18n.locale"/>
  <div>Goal Page</div>
</template>

<script>
import NavbarMobile from '../components/navbar/NavbarMobile';

export default {
  components: {
    NavbarMobile,
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