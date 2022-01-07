<template>
  <Navbar :title="$t('nav.titleProjects')" :key="$i18n.locale" @darkLightChild="darkLightParent"/>
  <ProjectsList v-if="$route.path == '/projects'" :updateModeChild="updateMode"/>
  <PortfolioProject v-if="$route.path == '/projects/portfolio'" :updateModeChild="updateMode"/>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';
import ProjectsList from '@/components/projects/ProjectsList.vue';
import PortfolioProject from '@/components/projects/PortfolioProject.vue';

export default {
  components: {
    Navbar,
    ProjectsList,
    PortfolioProject,
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