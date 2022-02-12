<template>
  <div class="xl:px-32 2xl:px-44">
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
      :key="$i18n.locale"
    />
    <AndroidPlanningProject
      v-if="$route.path == '/projects/planning-android'"
      :updateModeChild="updateMode"
      :key="$i18n.locale"
    />
    <PowerBi
      v-if="$route.path == '/projects/power-bi'"
      :updateModeChild="updateMode"
      :key="$i18n.locale"
    />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import ProjectsList from "@/components/projects/ProjectsList.vue";
import PortfolioProject from "@/components/projects/PortfolioProject.vue";
import PlanningProject from "@/components/projects/PlanningProject.vue";
import AndroidPlanningProject from "@/components/projects/AndroidPlanningProject.vue";
import PowerBi from "@/components/projects/PowerBi.vue";

export default {
  components: {
    Navbar,
    ProjectsList,
    PortfolioProject,
    PlanningProject,
    PowerBi,
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
