<template>
  <nav>
    <!-- Start top navbar -->
    <div class="h-20 flex justify-around items-center">
      <div class="text-teal-600 text-2xl font-bold">Bonjour, I'm Jade</div>
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
    <div class="h-10 flex justify-around items-center">
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
            <img src="../../assets/linkedin-icon.svg" alt="LinkedIn logo" />
          </a>
        </div>
      </div>

      <div class="flex space-x-3 mr-4">
        <img src="../../assets/moon.svg" alt="dark or light mode" class="h-5 w-5"/>
        <span class="text-gray-600 font-bold">Fr</span>
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
        { names: "Goal", router: "/goal" },
        { names: "Projects", router: "/projects" },
        { names: "About", router: "/about" },
      ],
    };
  },
};
</script>

<style></style>
