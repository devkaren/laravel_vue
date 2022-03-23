<template>
    <AuthLayout>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="mx-auto h-12 w-64">
                <img
                    src="~@/assets/images/logo.svg"
                >
            </div>
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                {{ $t('passwordRequest.header_cta') }}
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                {{ $t('global.or') }}

                <router-link to="/login" class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    {{ $t('passwordRequest.header_sub') }}
                </router-link>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
<!--            <div class="rounded-md bg-green-50 p-4 mb-4">-->
<!--                <div class="flex">-->
<!--                    <div class="flex-shrink-0">-->
<!--                        <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">-->
<!--                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>-->
<!--                        </svg>-->
<!--                    </div>-->
<!--                    <div class="ml-3">-->
<!--                        <p class="text-sm leading-5 font-medium text-green-800">-->
<!--                            {{ __('app.customer.auth.password-request.success') }}-->
<!--                        </p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->

            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 mx-4 sm:mx-0">
                <form action="#" method="POST" v-on:submit="redirectToResetPasswordPage">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                            {{ $t('passwordRequest.email') }}
                        </label>
                        <div class="mt-1 rounded-md shadow-sm">
                            <input id="email"
                                   name="email"
                                   type="email"
                                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                   autocomplete="username"
                                   required
                            />
                        </div>
                        <p class="mt-2 text-sm text-gray-500" id="email-description">
                            {{ $t('passwordRequest.reset_instructions') }}
                        </p>
                    </div>

                    <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                        <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                            {{ $t('passwordRequest.reset') }}
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
import AuthLayout from '@/components/layout/AuthLayout'

export default {
    name: 'ForgotPassword',
    components: { AuthLayout },
    methods: {
        redirectToResetPasswordPage() {
            this.$router.push({ path: '/reset-password' });
        }
    }
}
</script>