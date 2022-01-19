<template>
  <div class="md:pt-16 px-6 md:px-0 pb-20">
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <div
        class="text-gray-500 dark:text-teal-50 text-lg font-semibold text-left mb-5 md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("planning-android.title") }}
      </div>

      <!-- Start Introduction -->
      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-5"
      >
        {{ $t("quality.subtitle1") }}
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-3 col-span-6 md:col-span-5"
      >
        {{ $t("planning-android.issueText") }}
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:mt-16 md:col-start-3 col-span-6 md:col-span-5"
      >
        {{ $t("quality.subtitle3") }}
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-3 col-span-6 md:col-span-5"
      >
        {{ $t("planning-android.solutionText") }}
      </div>

      <div
        class="md:col-start-8 col-span-6 md:col-span-3 md:row-start-2 md:row-span-5 flex justify-center"
      >
        <img
          src="@/assets/planning-android.gif"
          alt="Gif Planning Android Application project"
          class="object-scale-down max-h-96"
        />
      </div>
      <!-- End Introduction -->

      <div
        class="my-10 md:col-start-3 col-span-6 md:col-span-8 grid justify-items-center"
      >
        <img class="w-28" :src="darkLightDots" alt="dots image" />
      </div>

      <!-- Start Analysis -->
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
          {{ $t("planning-android.subtitle1") }}
        </div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left md:mr-7 md:col-start-3 col-span-6 md:col-span-4"
      >
        <ul
          class="list-disc list-inside text-justify"
          v-for="a in analysis"
          :key="a"
        >
          <li class="mb-3">{{ a }}</li>
        </ul>
      </div>

      <div class="md:col-start-7 col-span-6 md:col-span-4 flex justify-center">
        <img
          src="@/assets/use-case-planning-android.png"
          alt="Use case image for Planning Android Application project"
          class="object-scale-down max-h-60"
        />
      </div>
      <!-- End Analysis -->

      <!-- Start design -->
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
          {{ $t("planning-android.subtitle2") }}
        </div>
      </div>

      <div
        class="md:col-start-3 col-span-6 md:col-span-8 grid md:grid-cols-2 md:grid-row-1"
      >
        <div class="text-gray-800 dark:text-teal-50 text-left md:order-last">
          <ul
            class="list-disc list-inside text-justify"
            v-for="d in design"
            :key="d"
          >
            <li class="mb-3">{{ d }}</li>
          </ul>
        </div>

        <div class="md:mr-7 flex justify-center">
          <img
            src="@/assets/notion-planning.png"
            alt="Use case image for Planning Web Application project"
            class="object-cover max-h-60"
          />
        </div>
      </div>
      <!-- End design -->

      <!-- Start coding -->
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
          {{ $t("planning-android.subtitle3") }}
        </div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-3 col-span-6 md:col-span-4"
      >
        <ul class="list-disc list-inside">
          <li class="mb-3">
            <span class="font-semibold">Android application :</span> Java
          </li>
          <li class="mb-3">
            <span class="font-semibold">Back-End :</span> Frameworks Spring
          </li>
          <li class="mb-3">
            <span class="font-semibold">DBMS :</span> MariaDB
          </li>
          <li>
            <span class="font-semibold">Code versioning :</span> Git & GitLab
          </li>
        </ul>
      </div>

      <div class="md:col-start-7 col-span-6 md:col-span-4 flex justify-center">
        <img
          src="@/assets/layers-planning-android.png"
          alt="Organization layers planning android appliation"
          class="object-scale-down max-h-60"
        />
      </div>
      <!-- End coding -->

      <!-- Start testing -->
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
          {{ $t("planning-android.subtitle4") }}
        </div>
      </div>

      <div
        class="md:col-start-3 col-span-6 md:col-span-8 grid md:grid-cols-2 md:grid-row-1"
      >
        <div class="text-gray-800 dark:text-teal-50 text-left md:order-last">
          <ul class="list-disc list-inside">
            <li
              class="mb-3"
              v-html="$t('planning-android.subtitle4Text1')"
            ></li>
            <li
              class="mb-3"
              v-html="$t('planning-android.subtitle4Text2')"
            ></li>
            <li
              class="mb-3"
              v-html="$t('planning-android.subtitle4Text3')"
            ></li>
            <li
              class="mb-3"
              v-html="$t('planning-android.subtitle4Text4')"
            ></li>
            <li v-html="$t('planning-android.subtitle4Text5')"></li>
          </ul>
        </div>

        <!-- Start icon testing -->
        <div>
          <div
            class="md:pr-10 mt-10 md:mt-0 grid grid-cols-3 grid-rows-1 gap-2 justify-items-center items-end"
          >
            <div>
              <img
                src="@/assets/junit5.png"
                alt="junit5 logo"
                class="max-h-16 md:max-h-20"
              />
              <span class="text-gray-800 dark:text-teal-50 row-start-2 mt-3"
                >Junit 5</span
              >
            </div>
            <div class="md:col-start-2 grid grid-rows-auto">
              <img
                src="@/assets/jmeter.png"
                alt="jmeter logo"
                class="max-h-16 md:max-h-20"
              />
              <span class="text-gray-800 dark:text-teal-50 row-start-2 mt-3"
                >JMeter</span
              >
            </div>
            <div class="md:col-start-3 grid grid-rows-auto">
              <img
                src="@/assets/owasp.png"
                alt="owasp logo"
                class="max-h-16 md:max-h-20"
              />
              <span class="text-gray-800 dark:text-teal-50 row-start-2 mt-3"
                >OWASP ZAP</span
              >
            </div>
          </div>
        </div>

        <!-- End icon testing -->
      </div>

      <!-- End testing -->

      <!-- Start implementation -->
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
          {{ $t("planning-android.subtitle5") }}
        </div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-3 col-span-6 md:col-span-4"
      >
        <ul class="list-disc list-inside">
          <li class="mb-3">{{ $t("planning-android.subtitle5Text1") }}</li>
          <li class="mb-3">{{ $t("planning-android.subtitle5Text2") }}</li>
          <li class="mb-3">
            {{ $t("planning-android.subtitle5Text3") }}
          </li>
        </ul>
      </div>

      <div class="md:col-start-7 col-span-6 md:col-span-4 flex justify-center">
        <img
          src="@/assets/planning-android.png"
          alt="Planning Web Application project screen shot"
          class="object-scale-down max-h-72"
        />
      </div>
      <!-- End implementation -->

      <div
        class="my-16 md:col-start-3 col-span-6 md:col-span-8 grid justify-items-center"
      >
        <img class="w-28" :src="darkLightDots" alt="dots image" />
      </div>

      <!-- Start feedback -->
      <div class="col-span-6 md:col-start-5">
        <div
          class="text-teal-700 dark:text-teal-50 font-semibold text-left mb-5"
        >
          {{ $t("planning-android.positive") }}
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
      analysis: [
        this.$t("planning-android.subtitle1Text1"),
        this.$t("planning-android.subtitle1Text2"),
        this.$t("planning-android.subtitle1Text3"),
      ],
      design: [
        this.$t("planning-android.subtitle2Text1"),
        this.$t("planning-android.subtitle2Text2"),
        this.$t("planning-android.subtitle2Text3"),
      ],
      positive: [
        this.$t("planning-android.positivetext1"),
        this.$t("planning-android.positivetext2"),
        this.$t("planning-android.positivetext3"),
      ],
      improvement: [this.$t("planning-android.improvementText1")],
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
