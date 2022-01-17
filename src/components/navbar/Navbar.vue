<template>
  <MobileNavbar
    v-if="visibleMobileNav"
    class="md:hidden h-screen w-screen absolute"
    @mobileNav="closeMobileNav"
    @mobileLocale="setLocale"
    @mobileTheme="switchDarkLightMode"
  />
  <nav class="pt-10">
    <!-- Start mobile menu -->
    <div class="flex justify-end mr-10 md:hidden">
      <img
        class="h-12 w-12 cursor-pointer"
        :src="darkLightMenu"
        alt="mobile menu"
        @click="mobileNav()"
      />
    </div>
    <!-- End mobile menu -->
    <!-- Start top navbar -->
    <div class="grid grid-cols-6 md:grid-cols-12 mt-10 mb-1">
      <div
        class="md:order-last mb-5 md:mb-0 md:col-start-10 col-span-6 md:col-span-1 flex justify-center"
      >
        <img
          class="h-20 w-20 md:h-16 md:w-16 rounded-full"
          src="../../assets/color-square.jpg"
          alt="profile picture"
        />
      </div>
      <div
        class="text-teal-700 dark:text-teal-50 text-2xl md:text-left font-bold md:col-start-3 col-span-6 md:col-span-4 grid content-center"
      >
        {{ title }}
      </div>
    </div>
    <!-- End top navbar -->
    <!-- Start bottom navbar -->
    <div class="grid grid-cols-6 md:grid-cols-12 invisible md:visible">
      <div class="flex justify-start md:col-start-3 col-span-6 md:col-span-4">
        <div
          id="nav-link"
          v-for="navbar in navbars"
          :key="navbar.names"
          class="text-teal-400 hover:text-teal-700 font-medium mr-5"
        >
          <router-link :to="navbar.router">{{ navbar.names }}</router-link>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/jade-da-silva-lima/"
            target="_blank"
          >
            <img src="@/assets/linkedin-icon.svg" alt="LinkedIn logo" />
          </a>
        </div>
      </div>

      <div class="md:col-start-10 flex justify-center">
        <img
          :src="darkLightIcon"
          alt="choose dark or light mode"
          class="h-5 w-5 mr-3 cursor-pointer"
          @click="switchDarkLightMode"
        />
        <span
          class="text-gray-600 dark:text-teal-100 font-bold capitalize cursor-pointer"
          v-if="$i18n.locale === 'en' ? (language = 'fr') : (language = 'en')"
          @click="setLocale(language)"
          >{{ language }}</span
        >
      </div>
    </div>
    <!-- End bottom navbar -->
  </nav>
</template>

<script>
import MobileNavbar from "@/components/navbar/MobileNavbar.vue";

export default {
  props: ["title"],
  components: {
    MobileNavbar,
  },
  data: function () {
    return {
      navbars: [
        { names: this.$t("nav.goal"), router: "/goal" },
        { names: this.$t("nav.projects"), router: "/projects" },
        { names: this.$t("nav.about"), router: "/about" },
      ],
      language: "fr",
      darkLightIcon: null,
      darkLightMenu: null,
      visibleMobileNav: false,
    };
  },
  created() {
    localStorage.getItem("theme") === "light"
      ? this.lightMode()
      : this.darkMode();
    document.getElementsByTagName("body")[0].style.overflowY = "scroll";
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      localStorage.setItem("language", locale);
    },
    switchDarkLightMode() {
      if (localStorage.getItem("theme") === "light") {
        localStorage.setItem("theme", "dark");
        this.darkMode();
      } else {
        localStorage.setItem("theme", "light");
        this.lightMode();
      }
      this.$emit("darkLightChild");
      this.visibleMobileNav = false;
    },
    lightMode() {
      document.documentElement.classList.remove("dark");
      this.darkLightIcon = require(`../../assets/moon.svg`);
      this.darkLightMenu = require(`../../assets/drawing/menu_light.svg`);
    },
    darkMode() {
      document.documentElement.classList.add("dark");
      this.darkLightIcon = require(`../../assets/sun.svg`);
      this.darkLightMenu = require(`../../assets/drawing/menu_dark.svg`);
    },
    mobileNav() {
      this.visibleMobileNav = true;
      document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    },
    closeMobileNav(data) {
      this.visibleMobileNav = data;
    },
  },
};
</script>

<style>
.router-link-active {
  text-decoration: underline;
  text-decoration-color: #2dd4bf;
}
</style>
