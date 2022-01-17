<template>
  <div class="md:pt-16 px-6 md:px-0 pb-20">
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <div
        class="text-gray-500 dark:text-teal-50 text-lg font-semibold text-left mb-5 md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("quality.title") }}
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("quality.subtitle1") }}
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-justify mb-10 md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("quality.subtitle1Text") }}
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        {{ $t("quality.subtitle3") }}
      </div>

      <ul
        class="text-gray-800 dark:text-teal-50 md:col-start-3 col-span-6 md:col-span-8 list-disc list-inside text-justify"
      >
        <li v-html="$t('quality.subtitle3Monitoring')"></li>
      </ul>

      <div
        class="mt-5 mb-10 md:col-start-3 col-span-6 md:col-span-8 flex justify-center"
      >
        <img
          src="@/assets/quality-dashboard.png"
          alt="quality dashboard image"
          class="md:max-w-xl rounded-lg"
        />
      </div>

      <div class="text-gray-800 dark:text-teal-50 md:col-start-3 col-span-6 md:col-span-8 text-left">{{ $t("quality.subtitle3PowerBI") }}</div>

      <div
        class="mt-5 mb-10 md:col-start-3 col-span-6 md:col-span-8 flex justify-center"
      >
        <img
          src="@/assets/PowerBI.png"
          alt="Power BI image"
          class="md:max-w-xl rounded-lg"
        />
      </div>

      <ul
        class="text-gray-800 dark:text-teal-50 mb-5 md:col-start-3 col-span-6 md:col-span-8 list-disc list-inside text-justify"
      >
        <li v-html="$t('quality.subtitle3Automate')"></li>
      </ul>

      <div
        class="text-gray-800 dark:text-teal-50 mb-5 md:col-start-3 col-span-6 md:col-span-8 grid grid-cols-8 justify-items-center"
      >
        <div class="col-span-8 md:col-span-2 flex flex-col items-center">
          <img src="@/assets/outlook.png" alt="outlook image" class="w-16" />
          <p class="text-sm">{{ $t("quality.supplierEmail") }}</p>
        </div>

        <div
          class="col-span-6 md:col-span-1 text-teal-500 flex items-center invisible md:visible"
        >
          . . . . . . . .
        </div>

        <div
          class="col-span-8 md:col-span-2 md:col-start-4 flex flex-col items-center"
        >
          <img src="@/assets/folder.png" alt="folder image" class="w-16" />
          <p class="text-sm">{{ $t("quality.supplierFile") }}</p>
        </div>

        <div
          class="col-span-6 md:col-span-1 text-teal-500 flex items-center invisible md:visible"
        >
          . . . . . . . .
        </div>

        <div
          class="col-span-8 md:col-span-2 md:col-start-7 flex flex-col items-center"
        >
          <img src="@/assets/teams.png" alt="teams image" class="w-16" />
          <p class="text-sm">{{ $t("quality.notification") }}</p>
        </div>
      </div>

      <ul
        class="text-gray-800 dark:text-teal-50 mt-10 md:col-start-3 col-span-6 md:col-span-8 list-disc list-inside text-justify"
      >
        <li v-html="$t('quality.subtitle3Decision')"></li>
      </ul>

      <div
        class="mt-5 mb-10 md:col-start-3 col-span-6 md:col-span-8 flex justify-center"
      >
        <img
          src="@/assets/quality-improvement.svg"
          alt="schema quality improvement"
          class="md:max-h-96"
        />
      </div>
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
export default {};
</script>

<style></style>
