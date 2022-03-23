<template>
    <div class="bg-orange-600">
        <div class="max-w-screen-xl mx-auto py-2 px-3 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between flex-wrap">
                <div class="w-0 flex-1 flex items-center">
                <span class="flex p-2 rounded-lg bg-orange-800">
                    <svg class="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
                </span>
                    <p class="ml-3 font-medium text-white text-sm truncate">
                    <span class="md:hidden">
                        Currently impersonating {{ //auth('customer')->user()->fullName }}
                    </span>
                        <span class="hidden md:inline">
                        You are currently impersonating customer ID {{ //auth('customer')->user()->id }} ({{ //auth('customer')->user()->fullName }})
                    </span>
                    </p>
                </div>
                <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
                    <div class="rounded-md shadow-sm">
                        <a href="#" class="flex items-center justify-center px-3 py-1.5 border border-transparent text-sm leading-5 text-sm font-medium rounded-md text-orange-600 bg-white hover:text-orange-500 focus:outline-none focus:shadow-outline transition ease-in-out duration-150">
                            End Impersonation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Announcement',
};
</script>