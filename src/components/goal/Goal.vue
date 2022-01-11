<template>
  <div class="md:pt-16 px-6 md:px-0 pb-20">
    <div class="dark:text-teal-50 text-xl font-semibold">
      {{ $t("goal.title") }}
    </div>
    <div class="dark:text-teal-50 font-semibold italic pb-10">
      {{ $t("goal.subtitle") }}
    </div>
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <div
        class="text-gray-500 dark:text-teal-200 text-lg font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("goal.purpose") }}
      </div>
      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-3 col-span-6 md:col-span-8 mb-10 md:mb-16"
      >
        {{ $t("goal.purposeText") }}
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("goal.subtitle1") }}
      </div>
      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-3 col-span-6 md:col-span-5"
      >
        {{ $t("goal.subtitle1Text") }}
      </div>
      <div
        class="md:row-start-4 md:col-start-8 col-span-6 md:col-span-3 md:ml-10 grid justify-items-center md:items-center"
      >
        <img
          class="max-h-32 md:max-h-40"
          :src="darkLightAnalytic"
          alt="chart image"
        />
      </div>

      <div
        class="row-start-8 md:row-start-6 md:col-start-3 col-span-6 md:col-span-3 md:mr-10 grid justify-items-center md:items-center"
      >
        <img
          class="max-h-32 md:max-h-40"
          :src="darkLightFiles"
          alt="files image"
        />
      </div>
      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left mt-10 md:mt-20 md:col-start-6 col-span-6 md:col-span-5 row-start-6 md:row-start-5"
      >
        {{ $t("goal.subtitle2") }}
      </div>
      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-6 col-span-6 md:col-span-5 grid content-start row-start-7 md:row-start-6"
      >
        {{ $t("goal.subtitle2Text") }}
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8 md:row-start-7 mt-10 md:mt-20"
      >
        {{ $t("goal.subtitle3") }}
      </div>
      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-3 col-span-6 md:col-span-5 md:row-start-8"
      >
        {{ $t("goal.subtitle3Text") }}
      </div>
      <div
        class="md:row-start-8 md:col-start-8 col-span-6 md:col-span-3 md:ml-10 grid justify-items-center md:items-center"
      >
        <img
          class="max-h-32 md:max-h-48"
          :src="darkLightAccept"
          alt="accept image"
        />
      </div>
      <div class="md:col-start-3 col-span-6 md:col-span-8 my-10 md:my-14">
        <button class="text-white font-semibold rounded-full bg-teal-400 hover:bg-teal-700 py-2 px-2 md:w-5/12">
          <router-link :to="{ name: 'Projects' }">
            {{ $t("goal.projectsList") }}</router-link
          >
        </button>
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
