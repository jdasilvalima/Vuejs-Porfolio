<template>
  <div class="md:pt-16 px-6 md:px-0 pb-20">
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <div
        class="text-gray-500 dark:text-teal-50 text-lg font-semibold text-left mb-5 md:col-start-3 col-span-6 md:col-span-8"
      >
        Personal Project - Quality dashboard for food companies (Power BI)
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
        Quality has to work with various departments in order to meet customers
        and government requirements. Through the years, requirements increased
        and so did quality team workload. How to help teams ensure quality in a
        demanding environment?
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("quality.subtitle3") }}
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:col-start-3 col-span-6 md:col-span-8"
      >
        Creation of a QA dashboard with key indicators to follow company's goals
        and quality management. It helps teams to keep track of their objectives
        and know what to improve if needed.
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
          Prepare
        </div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-3 col-span-6 md:col-span-4"
      >
        Extract data from different data sources with Power Query. Profile,
        clean, and load data into Power BI in preparation for modeling data.
        <br />
        Extraction des données provenant de différentes sources avec Power
        Query. Profiler, nettoyer et charger les données dans Power BI pour
        pouvoir les modéliser.
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
          Model
        </div>
      </div>

      <div
        class="md:col-start-3 col-span-6 md:col-span-8 grid md:grid-cols-2 md:grid-row-1"
      >
        <div class="text-gray-800 dark:text-teal-50 text-left md:order-last">
          Organization of data coming in from more than one transactional
          system. Creating a schema to simplify the data model.
          <br />
          Organisation des données provenant de plusieurs systèmes
          transactionnels. Création d'un schéma pour simplifier le modèle de
          données.
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
          Visualize
        </div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-justify md:mr-7 md:col-start-3 col-span-6 md:col-span-4"
      >
        Use visuals to solve a specific problem. Create dashboards helping QA
        managers to analyze data.
        <br />
        Utilisez des visuels pour résoudre un problème spécifique. Créez des
        tableaux de bord aidant les responsables de l'assurance qualité à
        analyser les données.
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
          Analyze
        </div>
      </div>

      <div
        class="md:col-start-3 col-span-6 md:col-span-8 grid md:grid-cols-2 md:grid-row-1"
      >
        <div class="text-gray-800 dark:text-teal-50 text-left md:order-last">
          Examine data and Power BI reports in order to extract value with
          deeper analysis. Sort data and present the report in a cohesive
          manner. Apply and perform advanced analytics on the report for deeper
          and more meaningful data insights.
          <br />
          Examinez les données et les rapports Power BI afin d'extraire de la
          valeur grâce à une analyse plus approfondie. Triez les données et
          présentez le rapport de manière cohérente. Appliquez et effectuez des
          analyses avancées sur le rapport pour obtenir des informations plus
          approfondies et plus significatives sur les données.
        </div>

        <!-- Start icon testing -->
        <div>
          <div
            class="md:pr-10 mt-10 md:mt-0 grid grid-cols-3 grid-rows-2 gap-2 justify-items-center items-end"
          >
            <div>
              <img
                src="@/assets/jest.png"
                alt="Jest logo"
                class="max-h-16 md:max-h-20"
              />
              <span class="text-gray-800 dark:text-teal-50 row-start-2 mt-3"
                >Jest</span
              >
            </div>
            <div class="md:col-start-2 grid grid-rows-auto">
              <img
                src="@/assets/junit5.png"
                alt="JUnit 5 logo"
                class="max-h-16 md:max-h-20"
              />
              <span class="text-gray-800 dark:text-teal-50 row-start-2 mt-3"
                >Junit 5</span
              >
            </div>
            <div class="md:col-start-3 grid grid-rows-auto">
              <img
                src="@/assets/nightwatch.png"
                alt="Nightwatch logo"
                class="max-h-16 md:max-h-20"
              />
              <span class="text-gray-800 dark:text-teal-50 row-start-2 mt-3"
                >Nightwatch</span
              >
            </div>
            <div class="row-start-2">
              <img
                src="@/assets/jmeter.png"
                alt="JMeter logo"
                class="max-h-16 md:max-h-20"
              />
              <span class="text-gray-800 dark:text-teal-50 row-start-2 mt-3"
                >JMeter</span
              >
            </div>
            <div class="md:col-start-2 grid grid-rows-auto">
              <img
                src="@/assets/owasp.png"
                alt="OWASP logo"
                class="max-h-16 md:max-h-20"
              />
              <span class="text-gray-800 dark:text-teal-50 row-start-2 mt-3"
                >OWASP ZAP</span
              >
            </div>
            <div class="md:col-start-3 grid grid-rows-auto">
              <img
                src="@/assets/lighthouse.png"
                alt="Lighthouse logo"
                class="max-h-16 md:max-h-20"
              />
              <span class="text-gray-800 dark:text-teal-50 row-start-2 mt-3"
                >Lighthouse</span
              >
            </div>
          </div>
        </div>

        <!-- End icon testing -->
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
          Manage
        </div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-3 col-span-6 md:col-span-4"
      >
        Create a workspace in the Power BI service. Deploy Power BI artifacts
        and share them to users. Configure automatic refresh for the QA Power BI
        datasets. Users are restricted to see only the data that applies to
        them.
        <br />
        Créez un espace de travail dans le service Power BI. Déployez des
        artefacts Power BI et partagez-les avec les utilisateurs. Configurez
        l'actualisation automatique pour les jeux de données QA Power BI. Les
        utilisateurs sont limités à voir uniquement les données qui s'appliquent
        à eux.
      </div>

      <div class="md:col-start-7 col-span-6 md:col-span-4 flex justify-center">
        <img
          src="@/assets/planning-web.png"
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
      analysis: [
        this.$t("planning-web.subtitle1Text1"),
        this.$t("planning-web.subtitle1Text2"),
        this.$t("planning-web.subtitle1Text3"),
      ],
      design: [
        this.$t("planning-web.subtitle2Text1"),
        this.$t("planning-web.subtitle2Text2"),
        this.$t("planning-web.subtitle2Text3"),
        this.$t("planning-web.subtitle2Text4"),
      ],
      positive: [
        "Learned to use Power BI",
        "Practiced data visualization",
        "Identified KPI indicators",
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
