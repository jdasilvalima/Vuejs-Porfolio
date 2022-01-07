<template>
  <div class="dark:bg-gray-800 md:pt-16 px-6 md:px-0 pb-20">
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <div
        class="text-gray-500 dark:text-teal-200 text-lg font-semibold text-left mb-5 md:col-start-3 col-span-6 md:col-span-8"
      >
        Projects list
      </div>
      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-3 col-span-6 md:col-span-8 row-start-2"
      >
        <ul class="list-disc list-outside">
          <li class="mb-5">
            Built a planning application (Java / Vue.js) for a training center
            to help both the Sales and the HR teams keep track of trainers’
            schedules and the list of courses available for sales ;
          </li>
          <li class="mb-5">
            Developed an Android version (Java) of the planning application for
            non-admin users ;
          </li>
          <li class="mb-5">Built a calendar application for the HR team (C# / Vue.js) ;</li>
          <li class="mb-5">
            Developed a web scraping program with Selenium to analyze the
            competitive market (Java / Angular) ;
          </li>
          <li class="mb-5">Created a computerized quality management system ;</li>
          <li class="mb-5">
            Coded <router-link class="text-teal-400" :to="{ name: 'PortfolioProject'}">a portfolio</router-link> (Vue.js) to explain how I am using my knowledge in
            project & quality management with software development.
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
