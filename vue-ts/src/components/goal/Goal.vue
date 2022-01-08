<template>
  <div class="md:pt-16 px-6 md:px-0 pb-20">
    <div class="dark:text-teal-50 text-xl font-semibold pb-10">
      Software Developer & Project Manager
    </div>
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <div
        class="text-gray-500 dark:text-teal-200 text-lg font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        My Purpose
      </div>
      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-3 col-span-6 md:col-span-8 mb-10 md:mb-16"
      >
        Built softwares to help companies to automate their processes, do a
        better monitoring and help them to take decision throught their data 📊.
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        Monitoring
      </div>
      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-3 col-span-6 md:col-span-5"
      >
        It is important for companies to be reactive in this fast modern world
        🌍. Monitoring processes and indicators with the help of softwares can
        assist to catch issues before they happen. While working as a quality
        manager, I was able to see how motoring can help to save money and time
        🕖. That's why as a software developer I am trying to create simple and
        efficient dashboard for monitoring.
      </div>
      <div
        class="md:row-start-4 md:col-start-8 col-span-6 md:col-span-3 md:ml-10 mb-10 md:mb-16 grid justify-items-center md:items-center"
      >
        <img
          class="h-32 md:h-auto"
          :src="darkLightAnalytic"
          alt="chart image"
        />
      </div>

      <div
        class="row-start-8 md:row-start-6 md:col-start-3 col-span-6 md:col-span-3 md:mr-10 grid justify-items-center md:items-center"
      >
        <img
          class="h-32 md:h-auto"
          :src="darkLightFiles"
          alt="files image"
        />
      </div>
      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-6 col-span-6 md:col-span-5 row-start-6 md:row-start-5"
      >
        Automate
      </div>
      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-6 col-span-6 md:col-span-5 grid content-start row-start-7 md:row-start-6"
      >
        It happens frequently that teams are under pressure with an important
        amount of workload 🗃️. Softwares can automate some taks in order to save
        time, be more efficient and allocate time to more complex tasks. 🔎 I
        like to audit processes and search which IT tool I can implement to help
        teams in their daily tasks.
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8 md:row-start-7 mt-10 md:mt-16"
      >
        Decision helper
      </div>
      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-3 col-span-6 md:col-span-5 md:row-start-8"
      >
        Nowadays, we receive thousands of data in a week 🔢. I like to get
        revelant information from this data to help teams to take decision with
        for instance KPI indicators. IA can be from a great tool also to assist
        to take decision 🤖.
      </div>
      <div
        class="md:row-start-8 md:col-start-8 col-span-6 md:col-span-3 md:ml-10 grid justify-items-center md:items-center"
      >
        <img
          class="h-32 md:h-60"
          :src="darkLightAccept"
          alt="accept image"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["updateModeChild"],
  data: function () {
    return {
      darkLightAnalytic: false,
      darkLightFiles: false,
      darkLightAccept: false,
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
      this.darkLightAnalytic = require(`@/assets/drawing/analytics_light.svg`);
      this.darkLightFiles = require(`@/assets/drawing/add_files_light.svg`);
      this.darkLightAccept = require(`@/assets/drawing/accept_light.svg`);
    },
    darkMode() {
      document.documentElement.classList.add("dark");
      this.darkLightAnalytic = require(`@/assets/drawing/analytics_dark.svg`);
      this.darkLightFiles = require(`@/assets/drawing/add_files_dark.svg`);
      this.darkLightAccept = require(`@/assets/drawing/accept_dark.svg`);
    },
  },
};
</script>

<style></style>
