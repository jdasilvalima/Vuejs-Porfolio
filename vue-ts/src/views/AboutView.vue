<template>
  <div class="about h-screen dark:bg-gray-800">
    <Navbar
      :title="$t('nav.titleAbout')"
      :key="$i18n.locale"
      @darkLightChild="darkLightParent"
    />
    <About :updateModeChild="updateMode" />
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar.vue";
import About from "@/components/about/About.vue";

export default {
  components: {
    Navbar,
    About,
  },
  data: function () {
    return {
      updateMode: false,
    };
  },
  methods: {
    darkLightParent() {
      this.updateMode = !this.updateMode;
    },
  },
};
</script>
