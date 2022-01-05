<template>
  <Navbar :title="$t('nav.titleProjects')" :key="$i18n.locale"/>
  <div>Projects Page</div>
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