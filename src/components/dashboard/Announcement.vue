<template>
  <template v-for="announcement in announcements" :key="announcement.id">
    <div class="bg-blue-600">
      <!--          <div class="bg-green-600">-->
      <div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between flex-wrap">
          <div class="w-0 flex-1 flex items-center">
                  <span v-if="announcement.type ==='info'" class="flex p-2 rounded-lg bg-blue-800">
                                <svg class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd"
                                                                                                                                                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                                                                                                                                 fill-rule="evenodd"></path></svg>
                            </span>
            <span v-else-if="announcement.type ==='warning'" class="flex p-2 rounded-lg bg-yellow-800">
                                <svg class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd"
                                                                                                                                                 d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                                                                                                                 fill-rule="evenodd"></path></svg>
                            </span>
            <span v-else-if="announcement.type ==='danger'" class="flex p-2 rounded-lg bg-red-800">
                                <svg class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd"
                                                                                                                                                 d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                                                                                                                                                 fill-rule="evenodd"></path></svg>
                            </span>
            <span v-else class="flex p-2 rounded-lg bg-green-800">
                                <svg class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd"
                                                                                                                                                 d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                                                                                                                 fill-rule="evenodd"></path></svg>
                            </span>
            <p class="ml-3 font-medium text-sm text-white truncate">
                            <span class="md:hidden">
                                {{ announcement.title }}
                            </span>
              <span class="hidden md:inline">
                                {{ announcement.title }}
                            </span>
            </p>
          </div>
          <div class="order-2 flex-shrink-0 sm:mt-0 sm:w-auto">
            <div class="rounded-md shadow-sm">
              <a class="flex items-center justify-center px-3 py-1 border border-transparent text-xs leading-5 font-medium rounded-md text-blue-600 bg-white hover:text-blue-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150"
                 href="#">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
      <!--          </div>-->
    </div>
  </template>
</template>

<script>
export default {
  name: 'Announcement',
};
</script>

<style scoped>

</style>