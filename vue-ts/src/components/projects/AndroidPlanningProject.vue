<template>
  <div class="md:pt-16 px-6 md:px-0 pb-20">
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <div
        class="text-gray-500 dark:text-teal-200 text-lg font-semibold text-left mb-5 md:col-start-3 col-span-6 md:col-span-8"
      >
        Project - Android planning application (Java)
      </div>

      <!-- Start Analysis -->
      <div class="mt-10 md:col-start-3 col-span-6 md:col-span-8 flex">
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
          Analysis
        </div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-3 col-span-6 md:col-span-4"
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
          alt="Use case image for Planning Web Application project"
          class=""
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
          Design
        </div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-7 col-span-6 md:col-span-4"
      >
        <ul
          class="list-disc list-inside text-justify"
          v-for="d in design"
          :key="d"
        >
          <li class="mb-3">{{ d }}</li>
        </ul>
      </div>

      <div
        class="md:col-start-3 col-span-6 md:col-span-4 md:mr-7 flex justify-center md:row-start-5"
      >
        <img
          src="@/assets/notion-planning.png"
          alt="Use case image for Planning Web Application project"
          class="max-h-48"
        />
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
          Coding
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
            <span class="font-semibold">SGBD :</span> MariaDB
          </li>
          <li>
            <span class="font-semibold">Code versioning :</span> Git & GitLab
          </li>
        </ul>
      </div>

      <div class="md:col-start-7 col-span-6 md:col-span-2 flex justify-center">
        <img
          src="@/assets/layers-planning-back.png"
          alt="Organization layers planning web appliation - Back-End"
          class="max-h-48"
        />
      </div>

      <div class="md:col-start-9 col-span-6 md:col-span-2 flex justify-center">
        <img
          src="@/assets/layers-planning-android.png"
          alt="Organization layers planning web appliation - Front-End"
          class="max-h-48"
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
          Testing
        </div>
      </div>

      <div
        class="md:col-start-3 col-span-6 md:col-span-8 grid md:grid-cols-2 md:grid-row-1"
      >
        <div class="text-gray-800 dark:text-teal-50 text-left md:order-last">
          <ul class="list-disc list-inside">
            <li class="mb-3">
              <span class="font-semibold">Structural tests :</span> JUnit
              5 (Jacoco for code coverage)
            </li>
            <li class="mb-3">
              <span class="font-semibold">Performance tests :</span> JMeter
            </li>
            <li class="mb-3">
              <span class="font-semibold">Security testing :</span> OWASP Guide
              & OWASP ZAP
            </li>
            <li class="mb-3">
              <span class="font-semibold">Quality testing :</span> SonarQube
            </li>
            <li>
              <span class="font-semibold">User testing :</span> Spreadsheets for
              Admin & Non-Admin
            </li>
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
          Implementation
        </div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-3 col-span-6 md:col-span-4"
      >
        <ul class="list-disc list-inside">
          <li class="mb-3">CI / CD with GitLab</li>
          <li class="mb-3">Created a link to download the APK</li>
          <li class="mb-3">
            Created a user guide
          </li>
        </ul>
      </div>

      <div class="md:col-start-7 col-span-6 md:col-span-4 flex justify-center">
        <img
          src="@/assets/planning-android.png"
          alt="Planning Web Application project screen shot"
          class="max-h-72"
        />
      </div>
      <!-- End implementation -->

      <div
        class="my-16 md:col-start-3 col-span-6 md:col-span-8 grid justify-items-center"
      >
        <img class="w-28" :src="darkLightDots" alt="dots image" />
      </div>

      <!-- Start feedback -->
      <div
        class="md:col-start-3 col-span-8 md:col-span-8 grid grid-cols-8 grid-rows-auto"
      >
        <div
          class="text-teal-700 dark:text-teal-50 font-semibold text-left mb-3 col-span-6 md:col-span-4"
        >
          😀 What I enjoyed with this project
        </div>

        <div
          class="text-gray-800 dark:text-teal-50 text-left md:mr-10 mb-10 col-span-8 md:col-span-4 md:row-start-2"
        >
          <ul
            class="list-disc list-inside text-justify"
            v-for="p in positive"
            :key="p"
          >
            <li>{{ p }}</li>
          </ul>
        </div>

        <div
          class="text-teal-700 dark:text-teal-50 font-semibold text-left mb-3 md:col-start-5 col-span-8 md:col-span-4 md:row-start-1"
        >
          🤔 What I would like to do better next time
        </div>

        <div
          class="text-gray-800 dark:text-teal-50 text-left md:col-start-5 col-span-8 md:col-span-4 md:row-start-2"
        >
          <ul
            class="list-disc list-inside text-justify"
            v-for="i in improvement"
            :key="i"
          >
            <li>{{ i }}</li>
          </ul>
        </div>
      </div>
      <!-- End feeback -->
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
        "Learned about customers' requirements",
        "Wrote functional and technical specifications file (eg: Use cases view, Logical (functional) view, Realization view, Deployment view, ...)",
        "Created a lean canvas",
      ],
      design: [
        "The wireframing tool, Figma, was used to create the mock-up.",
        "Accessibility and security were taking in consideration while doing the design",
        "I created a Kanban task board with all the users stories in Notion",
      ],
      positive: [
        "Created an Android application from scratch",
        "Have positive feedbacks from users",
        "Improve an application performance",
      ],
      improvement: ["Respect TDD method during the whole project"],
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
