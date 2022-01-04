<template>
  <nav>
    <!-- Start top navbar -->
    <div class="h-20 flex justify-around items-center bg-gray-300">
      <div class="text-teal-600 text-2xl font-bold">{{ $t("nav.title") }}</div>
      <div>
        <img
          class="h-16 w-16 rounded-full"
          src="../../assets/color.jpg"
          alt="profile picture"
        />
      </div>
    </div>
    <!-- End top navbar -->
    <!-- Start bottom navbar -->
    <div class="h-7 flex justify-around items-center bg-gray-400">
      <div class="flex space-x-5">
        <div
          v-for="navbar in navbars"
          :key="navbar.names"
          class="text-teal-400 font-medium"
        >
          <router-link :to="navbar.router">{{ navbar.names }}</router-link>
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/jade-da-silva-lima/"
            target="_blank"
          >
            <img src="../../assets/linkedin-icon.svg" alt="LinkedIn logo"/>
          </a>
        </div>
      </div>

      <div class="flex space-x-3 mr-3">
        <img src="../../assets/moon.svg" alt="dark or light mode" class="h-5 w-5 cursor-pointer"/>
        <span class="text-gray-600 font-bold capitalize cursor-pointer" v-if="$i18n.locale === 'en' ? language = 'fr' : language = 'en'" @click="setLocale(language)">{{ language }}</span>
      </div>
    </div>
    <!-- End bottom navbar -->
  </nav>
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
      language: 'fr',
    };
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>

<style></style>
