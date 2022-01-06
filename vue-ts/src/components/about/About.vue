<template>
  <div class="dark:bg-gray-800 md:pt-16 px-6 md:px-0 pb-20">
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <!-- Start presentation -->
      <div
        class="text-gray-500 dark:text-teal-200 text-lg font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        “Simple & Efficient”
      </div>
      <div
        class="text-gray-800 dark:text-teal-50 text-left mb-5 md:col-start-3 col-span-6 md:col-span-8"
      >
        Throughout my career as a quality manager for food companies, I have
        often wanted to be able to
        <span class="font-semibold">code tools</span> that would allow me to
        automate and do better monitoring. Back from my four-year stay in the
        United States, I decided to take the plunge and obtain a
        <span class="font-semibold">computer science degree</span>.
        <div class="mb-1"><br /></div>
        Today I am happy to be able to make the link between my knowledge in
        <span class="font-semibold">quality management</span> and the one in
        <span class="font-semibold">software development</span>. I am currently
        creating simple and efficient softwares to help teams in their daily
        tasks and to take decisions on the long term.
      </div>
      <!-- End presentation -->

      <div
        class="my-10 md:col-start-3 col-span-6 md:col-span-8 grid justify-items-center"
      >
        <img class="w-28" :src="darkLightDots" alt="dots image" />
      </div>

      <div
        class="text-gray-500 dark:text-teal-200 text-lg font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        My double experience as a Quality Manager & a Software Developer
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
            <div class="text-sm">{{ job.location }}</div>
          </div>

          <div
            v-if="collapseElement[job.id - 1]"
            class="bg-gray-50 dark:bg-gray-600"
          >
            <ul
              class="text-gray-800 dark:text-teal-50 text-sm text-left px-5 md:px-10 py-5 list-disc list-inside"
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
        class="text-gray-500 dark:text-teal-200 text-lg font-semibold text-left mb-5 md:col-start-3 col-span-6 md:col-span-10"
      >
        Education along the way
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
          Computer Science degree - Apprenticeship program
        </div>
        <div class="text-gray-800 dark:text-teal-50 italic">
          September 2020 - December 2021
        </div>
        <div class="font-medium text-teal-600 dark:text-teal-100">Dawan</div>
        <div class="text-gray-800 dark:text-teal-50">Paris (France)</div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left mb-5 md:col-start-4 col-span-7"
      >
        <span class="font-bold">Relevant Coursework : </span> Object-oriented
        programming, design patterns, software development, mobile development,
        database and information systems, test-driven development, agile
        software projects
      </div>

      <div
        class="col-start-1 md:col-start-3 col-span-6 md:col-span-1 flex justify-center"
      >
        <img src="@/assets/bsa.png" alt="BSA logo" class="max-h-14" />
      </div>

      <div
        class="text-left md:col-start-4 col-span-7 grid grid-cols-1 md:grid-cols-2"
      >
        <div class="font-semibold text-teal-700 dark:text-teal-500">
          Master of Agriculture and Food Sciences
        </div>
        <div class="text-gray-800 dark:text-teal-50 italic">
          September 2011 – September 2014
        </div>
        <div class="font-medium text-teal-600 dark:text-teal-100">
          Bordeaux Sciences Agro
        </div>
        <div class="text-gray-800 dark:text-teal-50">Bordeaux (France)</div>
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-left md:col-start-4 col-span-7"
      >
        <span class="font-bold">Relevant Coursework : </span> Quality,
        Integrated Management and Sustainable Development, QSE Management tools
        for engineers in food value chains, Business Economics
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
        Contact me through LinkedIn
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
          title: "Software Developer",
          dates: "September 2020 – December 2021",
          company: "Dawan - Consulting & IT training center",
          location: "Paris (France)",
          tasks: [
            "Built a planning application, for a training center, to help both the Sales and the HR team to keep track of trainers’ schedules and the list of courses sold (Java / Vue.js)",
            "Created the planning Android application connected to the Rest API with Retrofit for non-admin users",
            "Built a calendar application for the HR team to replace their spreadsheet used as an employee scheduling solution (C# / Vue.js)",
            "Developed a web scraping program with Selenium to help a company to analyze the market (Java / Angular)",
          ],
        },
        {
          id: 2,
          title: "Quality Manager",
          dates: "August 2016 – June 2020",
          company: "Cuisine Solutions - Sous-Vide food company",
          location: "Alexandria - VA (the U.S.A)",
          tasks: [
            "Ensured BRC level AA, Organic, ABF, Halal and Gluten-Free certifications, FDA / USDA inspections and customer audits for the plant in Alexandria (Virginia). Traveled also to different factories (the United States and Thailand) to provide technical assistance to help them to prepare their audits",
            "Managed a quality team with 13 persons (2 managers, 3 supervisors, and 8 technicians)",
            "Worked with the R&D team to develop new products (from supplier approval to packaging creation)",
            "Reported the performance of the quality system to senior management during quarterly reviews",
          ],
        },
        {
          id: 3,
          title: "Quality Assistant Manager",
          dates: "August 2016 – June 2020",
          company: "Florette - Fresh food company",
          location: "Lessay (France)",
          tasks: [
            "Performed internal audits, prepared and participated in external audits (customer audits and IFS/BRC audit)",
            "Trained and monitored 11 new quality controllers, managed their schedule, and followed up their projects",
            "Collected data, followed and presented KPIs to the Management Team",
          ],
        },
        {
          id: 4,
          title: "Quality Assistant Manager",
          dates: "January 2015 – May 2015",
          company: "Neuhauser - Fresh & frozen bakery products",
          location: "Maubeuge (France)",
          tasks: [
            "Managed internal non-conformities and complaints to suppliers",
            "Monitored and managed customer satisfaction: customer complaints, specifications, create and update final specifications",
            "Helped to create new products (production and quality records to create, final specification and packaging)",
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
