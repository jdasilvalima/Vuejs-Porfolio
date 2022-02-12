<template>
  <div class="md:pt-16 px-6 md:px-0 pb-20">
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <div
        class="text-gray-500 dark:text-teal-50 text-lg font-semibold text-left mb-5 md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("powerbi-quality.title") }}
      </div>

      <!-- Start Introduction -->
      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("quality.subtitle1") }}
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("powerbi-quality.issueText") }}
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("quality.subtitle3") }}
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("powerbi-quality.solutionText") }}
      </div>

      <div
        class="mt-5 md:col-start-3 col-span-6 md:col-span-8 flex justify-center"
      >
        <img
          src="@/assets/power-bi.gif"
          alt="Gif Planning Android Application project"
          class="object-scale-down max-h-80"
        />
      </div>
      <!-- End Introduction -->

      <div
        class="my-10 md:col-start-3 col-span-6 md:col-span-8 grid justify-items-center"
      >
        <img class="w-28" :src="darkLightDots" alt="dots image" />
      </div>

      <!-- Start Prepare -->
      <div class="md:col-start-3 col-span-6 md:col-span-8 flex">
        <div
          class="h-10 w-10 rounded-full bg-teal-700 mr-5 flex items-center justify-center"
        >
          <span class="text-teal-50 font-bold capitalize cursor-pointer"
            >1.</span
          >
        </div>
        <div
          class="text-teal-700 dark:text-teal-50 font-semibold text-left md:col-start-4 col-span-5 md:col-span-7 flex items-center"
        >
          {{ $t("powerbi-quality.prepare") }}
        </div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-3 col-span-6 md:col-span-4"
      >
        {{ $t("powerbi-quality.prepareText") }}
      </div>

      <div class="md:col-start-7 col-span-6 md:col-span-4 flex justify-center">
        <img
          src="@/assets/power-query.png"
          alt="Use case image for Planning Web Application project"
          class="object-scale-down max-h-52"
        />
      </div>
      <!-- End Prepare -->

      <!-- Start Model -->
      <div class="mt-16 md:col-start-7 col-span-6 md:col-span-4 flex">
        <div
          class="h-10 w-10 rounded-full bg-teal-700 mr-5 flex items-center justify-center"
        >
          <span class="text-teal-50 font-bold capitalize cursor-pointer"
            >2.</span
          >
        </div>
        <div
          class="text-teal-700 dark:text-teal-50 font-semibold text-left md:col-start-8 col-span-5 md:col-span-7 flex items-center"
        >
          {{ $t("powerbi-quality.model") }}
        </div>
      </div>

      <div
        class="md:col-start-3 col-span-6 md:col-span-8 grid md:grid-cols-2 md:grid-row-1"
      >
        <div class="text-gray-800 dark:text-teal-50 text-left md:order-last">
          {{ $t("powerbi-quality.modelText") }}
        </div>

        <div class="md:mr-7 flex justify-center">
          <img
            src="@/assets/relations-power-bi.png"
            alt="Use case image for Planning Web Application project"
            class="object-cover max-h-60"
          />
        </div>
      </div>
      <!-- End Model -->

      <!-- Start Visualize -->
      <div class="mt-16 md:col-start-3 col-span-6 md:col-span-8 flex">
        <div
          class="h-10 w-10 rounded-full bg-teal-700 mr-5 flex items-center justify-center"
        >
          <span class="text-teal-50 font-bold capitalize cursor-pointer"
            >3.</span
          >
        </div>
        <div
          class="text-teal-700 dark:text-teal-50 font-semibold text-left md:col-start-4 col-span-5 md:col-span-7 flex items-center"
        >
          {{ $t("powerbi-quality.visualize") }}
        </div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:mr-7 md:col-start-3 col-span-6 md:col-span-4"
      >
        {{ $t("powerbi-quality.visualizeText") }}
      </div>

      <div class="md:col-start-7 col-span-6 md:col-span-4 flex justify-center">
        <img
          src="@/assets/screens-power-bi.png"
          alt="Organization layers planning web appliation"
          class="object-scale-down max-h-60"
        />
      </div>
      <!-- End Visualize -->

      <!-- Start Analyze -->
      <div class="mt-16 md:col-start-7 col-span-6 md:col-span-4 flex">
        <div
          class="h-10 w-10 rounded-full bg-teal-700 mr-5 flex items-center justify-center"
        >
          <span class="text-teal-50 font-bold capitalize cursor-pointer"
            >4.</span
          >
        </div>
        <div
          class="text-teal-700 dark:text-teal-50 font-semibold text-left md:col-start-8 col-span-5 md:col-span-7 flex items-center"
        >
          {{ $t("powerbi-quality.analyze") }}
        </div>
      </div>

      <div
        class="md:col-start-3 col-span-6 md:col-span-8 grid md:grid-cols-2 md:grid-row-1"
      >
        <div class="text-gray-800 dark:text-teal-50 text-left md:order-last">
          {{ $t("powerbi-quality.analyzeText") }}
        </div>

        <div class="md:mr-7 flex justify-center">
          <img
            src="@/assets/bone-powerbi.png"
            alt="Use case image for Planning Web Application project"
            class="object-scale-down max-h-52"
          />
        </div>
      </div>
      <!-- End Analyze -->

      <!-- Start Manage -->
      <div class="mt-16 md:col-start-3 col-span-6 md:col-span-8 flex">
        <div
          class="h-10 w-10 rounded-full bg-teal-700 mr-5 flex items-center justify-center"
        >
          <span class="text-teal-50 font-bold capitalize cursor-pointer"
            >5.</span
          >
        </div>
        <div
          class="text-teal-700 dark:text-teal-50 font-semibold text-left md:col-start-4 col-span-5 md:col-span-7 flex items-center"
        >
          {{ $t("powerbi-quality.manage") }}
        </div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-3 col-span-6 md:col-span-4"
      >
        {{ $t("powerbi-quality.manageText") }}
      </div>

      <div class="md:col-start-7 col-span-6 md:col-span-4 flex justify-center">
        <img
          src="@/assets/manage.png"
          alt="Planning Web Application project screen shot"
          class="max-h-60"
        />
      </div>
      <!-- End Manage -->

      <div
        class="my-16 md:col-start-3 col-span-6 md:col-span-8 grid justify-items-center"
      >
        <img class="w-28" :src="darkLightDots" alt="dots image" />
      </div>

      <!-- Start feedback -->
      <div class="col-span-6 md:col-span-8 md:col-start-3">
        <div
          class="text-teal-700 dark:text-teal-50 font-semibold text-left mb-5"
        >
          {{ $t("planning-web.positive") }}
        </div>

        <div
          class="text-gray-800 dark:text-teal-50 text-left md:mr-10 mb-10 md:row-start-2"
        >
          <ul
            class="list-disc list-inside text-justify"
            v-for="p in positive"
            :key="p"
          >
            <li>{{ p }}</li>
          </ul>
        </div>
      </div>
      <!-- End feeback -->
      <button
        class="text-white text-sm rounded-full bg-teal-400 mb-16 px-5 py-1 md:py-3 hover:bg-teal-700 col-start-5 md:col-start-9 col-span-2 w-24"
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
      darkLightDots: null,
      positive: [
        this.$t("powerbi-quality.positivetext1"),
        this.$t("powerbi-quality.positivetext2"),
        this.$t("powerbi-quality.positivetext3"),
      ],
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
      this.darkLightDots = require(`@/assets/drawing/dots_light.svg`);
    },
    darkMode() {
      document.documentElement.classList.add("dark");
      this.darkLightDots = require(`@/assets/drawing/dots_dark.svg`);
    },
  },
};
</script>

<style></style>
