<template>
  <div class="bg-teal-700">
    <!-- Start arrow go back -->
    <div class="flex justify-end mt-10 mr-10">
      <img
        class="h-12 w-12 cursor-pointer mb-10"
        src="@/assets/drawing/arrow-back.svg"
        alt="arrow go back"
        @click="closeMobileNav(false)"
      />
    </div>
    <!-- End arrow go back -->

    <!-- Start mobile navigation -->
    <div class="grid justify-items-start">
      <div
        id="mob-nav-link"
        v-for="navbar in navbars"
        :key="navbar.names"
        class="text-white font-medium text-xl mb-5"
      >
        <router-link :to="navbar.router">{{ navbar.names }}</router-link>
      </div>
    </div>
    <!-- End mobile navigation -->

    <!-- Start button options -->
    <div class="flex justify-center space-x-5 mt-20">
      <div
        class="h-10 w-10 rounded-full bg-white flex items-center justify-center"
      >
        <img
          :src="darkLightIcon"
          alt="choose dark or light mode"
          class="h-5 w-5 cursor-pointer"
          @click="switchDarkLightMode"
        />
      </div>
      <div
        class="h-10 w-10 rounded-full bg-white flex items-center justify-center"
      >
        <span
          class="text-teal-400 font-bold capitalize cursor-pointer"
          v-if="$i18n.locale === 'en' ? (language = 'fr') : (language = 'en')"
          @click="mobileSetLocale(language)"
          >{{ language }}</span
        >
      </div>
    </div>
    <!-- End button options -->
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      navbars: [
        { names: this.$t("nav.goal"), router: "/goal" },
        { names: this.$t("nav.projects"), router: "/projects" },
        { names: this.$t("nav.about"), router: "/about" },
      ],
      language: "fr",
      darkLightIcon: null,
    };
  },
  created() {
    localStorage.getItem("theme") === "light"
      ? (this.darkLightIcon = require(`@/assets/moon-mobile.svg`))
      : (this.darkLightIcon = require(`@/assets/sun-mobile.svg`));
  },
  methods: {
    mobileSetLocale(locale) {
      this.$emit("mobileLocale", locale);
    },
    closeMobileNav(boolean) {
      document.getElementsByTagName("body")[0].style.overflowY = "scroll";
      this.$emit("mobileNav", boolean);
    },
    switchDarkLightMode() {
      if (localStorage.getItem("theme") === "light") {
        this.darkLightIcon = require(`@/assets/sun-mobile.svg`);
      } else {
        this.darkLightIcon = require(`@/assets/moon-mobile.svg`);
      }
      this.$emit("mobileTheme");
    },
  },
};
</script>

<style>
#mob-nav-link > .router-link-active {
  text-decoration: underline;
  text-decoration-color: #f0fdfa !important;
}

#mob-nav-link {
  margin-left: 25%;
}
</style>
