<template>
  <div class="md:pt-16 px-6 md:px-0 pb-20">
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <!-- Start presentation -->
      <div
        class="text-gray-500 dark:text-teal-50 text-lg font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("about.title1") }}
      </div>
      <div
        class="text-gray-800 dark:text-teal-50 text-justify mb-5 md:col-start-3 col-span-6 md:col-span-8"
        v-html="$t('about.title1Text')"
      ></div>
      <!-- End presentation -->

      <div
        class="my-10 md:col-start-3 col-span-6 md:col-span-8 grid justify-items-center"
      >
        <img class="w-28" :src="darkLightDots" alt="dots image" />
      </div>

      <div
        class="text-gray-500 dark:text-teal-50 text-lg font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("about.title2") }}
      </div>

      <!-- Start collapse experiences -->
      <div class="md:col-start-3 col-span-6 md:col-span-8">
        <div v-for="job in jobExperience" :key="job.id">
          <div
            class="text-gray-800 dark:text-teal-50 bg-gray-100 dark:bg-gray-700 border border-teal-400 md:text-left pl-10 cursor-pointer grid md:grid-cols-2 grid-rows-auto gap-1"
            @click="collapse(job.id - 1)"
          >
            <div class="font-semibold text-teal-700 dark:text-teal-500">
              {{ job.title }}
            </div>
            <div class="italic text-sm">{{ job.dates }}</div>
            <div class="font-medium text-teal-600 dark:text-teal-100">
              {{ job.company }}
            </div>
            <div class="text-sm">
              <img
                class="max-h-3 inline mr-2"
                :src="job.flag"
                alt="country flag"
              />
              {{ job.location }}
            </div>
          </div>

          <div
            v-if="collapseElement[job.id - 1]"
            class="bg-gray-50 dark:bg-gray-600"
          >
            <ul
              class="text-gray-800 dark:text-teal-50 text-sm text-justify px-5 md:px-10 py-5 list-disc list-inside"
            >
              <li v-for="task in job.tasks" :key="task">
                {{ task }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- End collapse experiences -->

      <div
        class="my-10 md:col-start-3 col-span-6 md:col-span-8 grid justify-items-center"
      >
        <img class="w-28" :src="darkLightDots" alt="dots image" />
      </div>

      <!-- Start education -->
      <div
        class="text-gray-500 dark:text-teal-50 text-lg font-semibold text-left mb-5 md:col-start-3 col-span-6 md:col-span-10"
      >
        {{ $t("about.title3") }}
      </div>

      <div
        class="col-start-1 md:col-start-3 col-span-6 md:col-span-1 flex justify-center"
      >
        <img src="@/assets/dawan.png" alt="Dawan logo" class="max-h-14" />
      </div>

      <div
        class="text-left md:col-start-4 col-span-7 grid grid-cols-1 md:grid-cols-2"
      >
        <div class="font-semibold text-teal-700 dark:text-teal-500">
          {{ $t("about.dawanSchool.title") }}
        </div>
        <div class="text-gray-800 dark:text-teal-50 italic">
          {{ $t("about.dawanSchool.dates") }}
        </div>
        <div class="font-medium text-teal-600 dark:text-teal-100">Dawan</div>
        <div class="text-gray-800 dark:text-teal-50">Paris (France)</div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-justify mb-5 md:col-start-4 col-span-7"
        v-html="$t('about.dawanSchool.coursework')"
      ></div>

      <div
        class="col-start-1 md:col-start-3 col-span-6 md:col-span-1 flex justify-center"
      >
        <img src="@/assets/bsa.png" alt="BSA logo" class="max-h-14" />
      </div>

      <div
        class="text-left md:col-start-4 col-span-7 grid grid-cols-1 md:grid-cols-2"
      >
        <div class="font-semibold text-teal-700 dark:text-teal-500">
          {{ $t("about.bsaSchool.title") }}
        </div>
        <div class="text-gray-800 dark:text-teal-50 italic">
          {{ $t("about.bsaSchool.dates") }}
        </div>
        <div class="font-medium text-teal-600 dark:text-teal-100">
          Bordeaux Sciences Agro
        </div>
        <div class="text-gray-800 dark:text-teal-50">Bordeaux (France)</div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-4 col-span-7"
        v-html="$t('about.bsaSchool.coursework')"
      ></div>

      <div
        class="text-gray-800 dark:text-teal-50 text-justify mt-10 md:col-start-3 col-span-6 md:col-span-8"
        v-html="$t('about.skills')"
      >
      </div>
      <!-- End education -->

      <div
        class="my-10 md:col-start-3 col-span-6 md:col-span-8 grid justify-items-center"
      >
        <img class="w-28" :src="darkLightDots" alt="dots image" />
      </div>

      <!-- Start contact -->
      <div
        class="text-gray-500 dark:text-teal-50 text-lg font-semibold text-left inline md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("about.title4") }}
        <span>
          <a
            href="https://www.linkedin.com/in/jade-da-silva-lima/"
            target="_blank"
          >
            <img
              src="@/assets/linkedin-icon.svg"
              alt="LinkedIn logo"
              class="inline"
            />
          </a>
        </span>
      </div>
      <div
        class="md:col-start-3 col-span-6 my-10 md:col-span-8 grid justify-items-center"
      >
        <a
          href="https://www.linkedin.com/in/jade-da-silva-lima/"
          target="_blank"
        >
          <img class="h-24" :src="darkLightLetter" alt="letter image" />
        </a>
      </div>
      <!-- End contact -->
    </div>
  </div>
</template>

<script>
export default {
  props: ["updateModeChild"],
  data: function () {
    return {
      darkLightDots: null,
      darkLightLetter: null,
      collapseElement: [false, false, false, false],
      jobExperience: [
        {
          id: 1,
          title: this.$t("about.dawan.title"),
          dates: this.$t("about.dawan.dates"),
          company: this.$t("about.dawan.company"),
          location: this.$t("about.dawan.location"),
          flag: require(`@/assets/france-flag.png`),
          tasks: [
            this.$t("about.dawan.tasks1"),
            this.$t("about.dawan.tasks2"),
            this.$t("about.dawan.tasks3"),
            this.$t("about.dawan.tasks4"),
          ],
        },
        {
          id: 2,
          title: this.$t("about.cuisine.title"),
          dates: this.$t("about.cuisine.dates"),
          company: this.$t("about.cuisine.company"),
          location: this.$t("about.cuisine.location"),
          flag: require(`@/assets/american-flag.png`),
          tasks: [
            this.$t("about.cuisine.tasks1"),
            this.$t("about.cuisine.tasks2"),
            this.$t("about.cuisine.tasks3"),
            this.$t("about.cuisine.tasks4"),
          ],
        },
        {
          id: 3,
          title: this.$t("about.florette.title"),
          dates: this.$t("about.florette.dates"),
          company: this.$t("about.florette.company"),
          location: this.$t("about.florette.location"),
          flag: require(`@/assets/france-flag.png`),
          tasks: [
            this.$t("about.florette.tasks1"),
            this.$t("about.florette.tasks2"),
            this.$t("about.florette.tasks3"),
          ],
        },
        {
          id: 4,
          title: this.$t("about.neuhauser.title"),
          dates: this.$t("about.neuhauser.dates"),
          company: this.$t("about.neuhauser.company"),
          location: this.$t("about.neuhauser.location"),
          flag: require(`@/assets/france-flag.png`),
          tasks: [
            this.$t("about.neuhauser.tasks1"),
            this.$t("about.neuhauser.tasks2"),
            this.$t("about.neuhauser.tasks3"),
          ],
        },
      ],
      studies: [
        {
          id: 1,
          title: "Computer Science degree - Apprenticeship program",
          dates: "September 2020 - December 2021",
          shcool: "Dawan",
          location: "Paris (France)",
          courses:
            "Object-oriented programming, design patterns, software development, mobile development, database and information systems, test-driven development, agile software projects",
        },
        {
          id: 2,
          title: "Master of Agriculture and Food Sciences",
          dates: "September 2011 – September 2014",
          shcool: "Bordeaux Sciences Agro",
          location: "Bordeaux (France)",
          courses:
            "Quality, Integrated Management and Sustainable Development, QSE Management tools for engineers in food value chains, Business Economics",
        },
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
      this.darkLightLetter = require(`@/assets/drawing/envelope_light.svg`);
    },
    darkMode() {
      document.documentElement.classList.add("dark");
      this.darkLightDots = require(`@/assets/drawing/dots_dark.svg`);
      this.darkLightLetter = require(`@/assets/drawing/envelope_dark.svg`);
    },
    collapse(id) {
      this.collapseElement[id] = !this.collapseElement[id];
    },
  },
};
</script>

<style></style>
