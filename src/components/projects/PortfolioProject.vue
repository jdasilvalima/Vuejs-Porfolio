<template>
  <div class="md:pt-16 px-6 md:px-0 pb-20">
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <div
        class="text-gray-500 dark:text-teal-200 text-lg font-semibold text-left mb-5 md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("portfolio.title") }}
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("portfolio.subtitle1") }}
      </div>

      <div class="md:col-start-3 col-span-6 md:col-span-8">
        <img src="@/assets/mockup-portfolio.png" alt="portfolio mock up" class=" rounded-lg"/>
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left mt-10 md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("portfolio.subtitle2") }}
      </div>

      <div
        class="col-start-1 md:col-start-3 col-span-3 md:col-span-2 grid grid-rows-auto justify-items-center"
      >
        <img
          src="@/assets/figma.png"
          alt="figmalogo"
          class="h-16 row-start-1"
        />
        <div class="text-gray-800 dark:text-teal-50 row-start-2 mt-3">
          Figma
        </div>
      </div>

      <div
        class="col-start-4 md:col-start-5 col-span-3 md:col-span-2 grid grid-rows-auto justify-items-center"
      >
        <img src="@/assets/vue.png" alt="figmalogo" class="h-16 row-start-1" />
        <div class="text-gray-800 dark:text-teal-50 row-start-2 mt-3">
          Vue.js
        </div>
      </div>

      <div
        class="col-start-1 md:col-start-7 col-span-3 md:col-span-2 grid grid-rows-auto justify-items-center"
      >
        <img
          src="@/assets/tailwindcss.png"
          alt="figmalogo"
          class="h-16 row-start-1"
        />
        <div class="text-gray-800 dark:text-teal-50 row-start-2 mt-3">
          Tailwind css
        </div>
      </div>
      <div
        class="col-start-4 md:col-start-9 col-span-3 md:col-span-2 grid grid-rows-auto justify-items-center"
      >
        <img
          src="@/assets/github.png"
          alt="figmalogo"
          class="h-16 row-start-1"
        />
        <div class="text-gray-800 dark:text-teal-50 row-start-2 mt-3">
          Github
        </div>
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left mt-10 md:col-start-3 col-span-6 md:col-span-8"
      >
        Code
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left mb-16 md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("portfolio.subtitle3") }}
        <a
          href="https://github.com/jdasilvalima/Vuejs-Porfolio/tree/master/vue-ts"
          target="_blank"
        >
          <img src="@/assets/github.svg" alt="Github logo" class="ml-2 inline" />
        </a>
      </div>
      <button
        class="text-white text-sm rounded-full bg-teal-400 h-10 mb-16 px-5 hover:bg-teal-700 col-start-5 md:col-start-9 col-span-2 w-24"
        @click="$router.go(-1)"
      >
        {{ $t("nav.goBack") }}
      </button>
    </div>
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
      //this.darkLightComputer = require(`@/assets/drawing/computer_light.svg`);
    },
    darkMode() {
      document.documentElement.classList.add("dark");
      //this.darkLightComputer = require(`@/assets/drawing/computer_dark.svg`);
    },
  },
};
</script>

<style></style>
