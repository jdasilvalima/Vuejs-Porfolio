<template>
  <div class="h-full dark:bg-gray-800 xl:px-28">
    <Navbar
      :title="$t('nav.titleProjects')"
      :key="$i18n.locale"
      @darkLightChild="darkLightParent"
    />
    <ProjectsList
      v-if="$route.path == '/projects'"
      :updateModeChild="updateMode"
    />
    <PortfolioProject
      v-if="$route.path == '/projects/portfolio'"
      :updateModeChild="updateMode"
    />
    <PlanningProject
      v-if="$route.path == '/projects/planning-web'"
      :updateModeChild="updateMode"
    />
    <AndroidPlanningProject
      v-if="$route.path == '/projects/planning-android'"
      :updateModeChild="updateMode"
    />
    <QualityProject
      v-if="$route.path == '/projects/quality'"
      :updateModeChild="updateMode"
    />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import ProjectsList from "@/components/projects/ProjectsList.vue";
import PortfolioProject from "@/components/projects/PortfolioProject.vue";
import PlanningProject from "@/components/projects/PlanningProject.vue";
import AndroidPlanningProject from "@/components/projects/AndroidPlanningProject.vue";
import QualityProject from "@/components/projects/QualityProject.vue";

export default {
  components: {
    Navbar,
    ProjectsList,
    PortfolioProject,
    PlanningProject,
    QualityProject,
    AndroidPlanningProject,
  },
  data: function () {
    return {
      updateMode: false,
    };
  },
  methods: {
    darkLightParent() {
      this.updateMode = !this.updateMode;
    },
  },
};
</script>
