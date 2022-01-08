<template>
  <div class="dark:bg-gray-800 md:pt-16 px-6 md:px-0 pb-20">
    <div class="grid grid-cols-6 md:grid-cols-12 grid-rows-auto gap-4">
      <div
        class="text-gray-500 dark:text-teal-200 text-lg font-semibold text-left mb-5 md:col-start-3 col-span-6 md:col-span-8"
      >
        Project - Quality management system design
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        ❔ The Problem
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 text-justify mb-10 md:col-start-3 col-span-6 md:col-span-8"
      >
        How to help quality teams with their daily tasks while preparing for
        audits during the year ?
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        🎯 The Goals
      </div>

      <div
        class="text-gray-800 dark:text-teal-50 mb-10 md:col-start-3 col-span-6 md:col-span-8"
      >
        <ul class="list-disc list-inside text-justify">
          <li>
            <span class="font-semibold">Monitoring :</span> Dashboard, alert NC
            not claused or when recurrence of a NC
          </li>
          <li>
            <span class="font-semibold">Automate :</span> send email, organize
            documents received from suppliers, use API from suppliers like
            laboratory.
          </li>
          <li>
            <span class="font-semibold">Decision helper :</span> Quaterly
            review, KPI indicators, follow up on audit preparation, IA to follow
            some sensitive processes
          </li>
        </ul>
      </div>

      <div
        class="text-teal-700 dark:text-teal-400 font-semibold text-left md:col-start-3 col-span-6 md:col-span-8"
      >
        ✔️ Solutions
      </div>

      <ul
        class="text-gray-800 dark:text-teal-50 md:col-start-3 col-span-6 md:col-span-8 list-disc list-inside text-justify"
      >
        <li>
          <span class="font-semibold">Monitoring :</span> Dashboard for QA team,
          notify managers immediately when there is a quality issue, different
          pages : suppliers, food fraud, trainings, etc.
        </li>
      </ul>

      <div
        class="my-5 md:col-start-3 col-span-6 md:col-span-8 flex justify-center"
      >
        <img
          src="@/assets/quality-dashboard.png"
          alt="quality dashboard image"
          class="md:w-3/4"
        />
      </div>

      <ul
        class="text-gray-800 dark:text-teal-50 md:col-start-3 col-span-6 md:col-span-8 list-disc list-inside text-justify"
      >
        <li>
          <span class="font-semibold">Automate :</span> send email, organize
          documents received from suppliers, use API from suppliers like
          laboratory.
        </li>
      </ul>

      <div
        class="text-gray-800 dark:text-teal-50 mb-5 md:col-start-3 col-span-6 md:col-span-8 grid grid-cols-8 justify-items-center"
      >
        <div class="col-span-6 md:col-span-2 flex flex-col items-center">
          <img src="@/assets/outlook.png" alt="outlook image" class="w-24" />
          <p>Send automaticaly emais to suppliers</p>
        </div>

        <div class="col-span-6 md:col-span-1 text-teal-500 flex items-center">. . . . . . . .</div>

        <div class="col-span-6 md:col-span-2 md:col-start-4 flex flex-col items-center">
          <img src="@/assets/folder.png" alt="folder image" class="w-24" />
          <p>Save files from suppliers in their folders</p>
        </div>

        <div class="col-span-6 md:col-span-1 text-teal-500 flex items-center">. . . . . . . .</div>

        <div class="col-span-6 md:col-span-2 md:col-start-7 flex flex-col items-center">
          <img src="@/assets/teams.png" alt="teams image" class="w-24" />
          <p>Notify QA team to review new documents</p>
        </div>
      </div>

      <ul
        class="text-gray-800 dark:text-teal-50 md:col-start-3 col-span-6 md:col-span-8 list-disc list-inside text-justify"
      >
        <li>
          <span class="font-semibold">Decision helper :</span> Quaterly review,
          KPI indicators, follow up on audit preparation, IA to follow some
          sensitive processes.
        </li>
      </ul>

      <div
        class="my-5 md:col-start-3 col-span-6 md:col-span-8 flex justify-center"
      >
        <img
          src="@/assets/quality-page.png"
          alt="quality page example"
          class="md:w-3/4"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
