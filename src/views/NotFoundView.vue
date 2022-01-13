<template>
  <div
    class="not-found h-screen w-screen flex flex-col items-center justify-center grayscale"
  >
    <div class="text-white text-lg">
      <span class="font-bold">404</span> | {{ $t("nav.notFound") }}
    </div>
    <div class="pt-5">
      <router-link :to="{ name: 'Goal' }">
        <button
          class="text-white font-semibold rounded-full bg-teal-700 hover:bg-teal-400 py-2 px-7"
        >
          {{ $t("nav.backMainPage") }}
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$i18n.locale);
  }
};
</script>

<style>
.not-found {
  background-image: url("../assets/jungle.jpg");
  background-position: center;
  background-size: cover;
}
</style>
