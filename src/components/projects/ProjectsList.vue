<template>
  <div class="md:pt-16 px-6 md:px-0 pb-20">
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <div
        class="text-gray-500 dark:text-teal-200 text-lg font-semibold text-left mb-5 md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("project.title") }}
      </div>
      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-3 col-span-6 md:col-span-8 row-start-2"
      >
        <ul class="list-disc list-inside text-justify">
          <li class="mb-5">
            {{ $t("project.planningWeb1") }} <router-link class="text-teal-400 hover:underline" :to="{ name: 'PlanningWebProject'}"> {{ $t("project.planningWeb2") }} </router-link> {{ $t("project.planningWeb3") }}
          </li>
          <li class="mb-5">
            {{ $t("project.planningAndroid1") }} <router-link class="text-teal-400 hover:underline" :to="{ name: 'PlanningAndroidProject'}">{{ $t("project.planningAndroid2") }}</router-link> {{ $t("project.planningAndroid3") }}
          </li>
          <li class="mb-5">{{ $t("project.calendar") }}</li>
          <li class="mb-5">
            {{ $t("project.comparator") }}
          </li>
          <li class="mb-5">{{ $t("project.quality1") }} <router-link class="text-teal-400 hover:underline" :to="{ name: 'QualityProject'}">{{ $t("project.quality2") }}</router-link> {{ $t("project.quality3") }}</li>
          <li class="mb-5">
            {{ $t("project.portfolio1") }} <router-link class="text-teal-400 hover:underline" :to="{ name: 'PortfolioProject'}">{{ $t("project.portfolio2") }}</router-link> {{ $t("project.portfolio3") }}
          </li>
        </ul>
      </div>

      <div
        class="mt-10 md:col-start-3 col-span-6 md:col-span-8 row-start-3 grid justify-items-center"
      >
        <img
          class="h-32 md:h-40"
          :src="darkLightComputer"
          alt="computer image"
        />
      </div>

    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: ["updateModeChild"],
  data: function () {
    return {
      darkLightComputer: null,
    };
  },
  watch: {
    updateModeChild: function () {
      this.switchMode();
    },
  },
  created() {
    this.switchMode();
  },
  methods: {
    switchMode() {
      localStorage.getItem("theme") === "light"
        ? this.lightMode()
        : this.darkMode();
    },
    lightMode() {
      document.documentElement.classList.remove("dark");
      this.darkLightComputer = require(`@/assets/drawing/computer_light.svg`);
    },
    darkMode() {
      document.documentElement.classList.add("dark");
      this.darkLightComputer = require(`@/assets/drawing/computer_dark.svg`);
    },
  },
};
</script>

<style></style>
