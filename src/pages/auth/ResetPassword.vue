<template>
    <AuthLayout>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="mx-auto h-12 w-64">
                <img
                    src="~@/assets/images/logo.svg"
                >
            </div>
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                {{ $t('passwordReset.header_cta') }}
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                {{ $t('global.or') }}

                <router-link to="/login" class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    {{ $t('passwordReset.header_sub') }}
                </router-link>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 mx-4 sm:mx-0">
                <form action="#" method="POST">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                            {{ $t('passwordReset.email') }}
                        </label>
                        <div class="mt-1 relative  rounded-md shadow-sm">
                            <input id="email"
                                   name="email"
                                   type="email"
                                   class="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue"
                                   autocomplete="username"
                                   required
                            />
<!--                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">-->
<!--                                <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">-->
<!--                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />-->
<!--                                </svg>-->
<!--                            </div>-->
                        </div>
<!--                        <p class="mt-2 text-sm text-red-600">-->
<!--                            {{ $message }}-->
<!--                        </p>-->
                    </div>

                    <div class="mt-6">
                        <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                            {{ $t('passwordReset.password') }}
                        </label>
                        <div class="mt-1 relative  rounded-md shadow-sm">
                            <input id="password"
                                   name="password"
                                   type="password"
                                   class="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue"
                                   required
                            />
<!--                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">-->
<!--                                <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">-->
<!--                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />-->
<!--                                </svg>-->
<!--                            </div>-->
                        </div>
<!--                        <p class="mt-2 text-sm text-red-600">-->
<!--                            {{ $message }}-->
<!--                        </p>-->
<!--                        <p class="mt-2 text-sm text-gray-500" id="email-description">-->
<!--                            {{ $t('passwordReset.password_instructions') }}-->
<!--                        </p>-->
                    </div>

                    <div class="mt-6">
                        <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                            {{ $t('passwordReset.password_confirmation') }}
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input id="password_confirmation"
                                   name="password_confirmation"
                                   type="password"
                                   class="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue"
                                   required
                            />
<!--                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">-->
<!--                                <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">-->
<!--                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />-->
<!--                                </svg>-->
<!--                            </div>-->
                        </div>
<!--                        <p class="mt-2 text-sm text-red-600">-->
<!--                            {{ $message }}-->
<!--                        </p>-->
                    </div>

                    <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                            {{ $t('passwordReset.reset') }}
                        </button>
                    </span>
                    </div>
                </form>

            </div>
            <div class="mx-auto text-center mt-4 text-gray-600 text-sm">
                <a href="#" target="_blank">
                    {{ $t('global.legal_notice') }}
                </a>
                &bull;
                <a href="#" target="_blank">
                    {{ $t('global.privacy') }}
                </a>
            </div>
        </div>
    </AuthLayout>
</template>

<script>
import AuthLayout from '@/components/layout/AuthLayout.vue'

export default {
    name: 'ResetPassword',
    components: { AuthLayout }
}
</script>