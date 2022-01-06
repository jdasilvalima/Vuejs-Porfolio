<template>
  <Navbar :title="$t('nav.titleProjects')" :key="$i18n.locale" @darkLightChild="darkLightParent"/>
  <ProjectsList :updateModeChild="updateMode"/>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';
import ProjectsList from '@/components/projects/ProjectsList.vue';

export default {
  components: {
    Navbar,
    ProjectsList,
  },
  data: function () {
    return {
      updateMode: false,
    };
  },
  methods: {
    darkLightParent() {
      this.updateMode = !this.updateMode;
    }
  }
}
</script>