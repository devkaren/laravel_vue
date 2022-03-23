<template>
    <AuthLayout>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="mx-auto h-12 w-64">
                <img
                    src="~@/assets/images/logo.svg"
                >
            </div>
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                {{ $t('login.header_cta') }}
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                {{ $t('global.or') }}

                <router-link to="/register" class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    {{ $t('login.header_sub') }}
                </router-link>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 mx-4 sm:mx-0">
                <form method="POST" @submit="userLogin" @submit.prevent="$emit('submit')">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                            {{ $t('login.email') }}
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input id="email"
                                   name="email"
                                   type="email"
                                   class="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue"
                                   autocomplete="username"
                                   :value="form.email"
                                   @input="handleInputChange('email', $event.target.value)"
                                   required
                            />
<!--                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" v-if="formErrors.email.length">-->
<!--                                <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">-->
<!--                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />-->
<!--                                </svg>-->
<!--                            </div>-->
                        </div>
<!--                        <p class="mt-2 text-sm text-red-600" v-if="formErrors.email.length">-->
<!--                            {{ formErrors.email[0] }}-->
<!--                        </p>-->
                    </div>

                    <div class="mt-6">
                        <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                            {{ $t('login.password') }}
                        </label>
                        <div class="mt-1 relative rounded-md shadow-sm">
                            <input id="password"
                                   name="password"
                                   type="password"
                                   class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                   autocomplete="current-password"
                                   :value="form.password"
                                   @input="handleInputChange('password', $event.target.value)"
                                   required
                            />
<!--                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none" v-if="formErrors.password.length">-->
<!--                                <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">-->
<!--                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />-->
<!--                                </svg>-->
<!--                            </div>-->
                        </div>
<!--                        <p class="mt-2 text-sm text-red-600" v-if="formErrors.password.length">-->
<!--                            {{ formErrors.password[0] }}-->
<!--                        </p>-->
                    </div>

                    <div class="mt-6 flex items-center justify-between">
                        <div class="flex items-center">
                            <input id="remember_me" name="remember_me" value="1" type="checkbox" class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
                            <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
                                {{ $t('login.remember_me') }}
                            </label>
                        </div>

                        <div class="text-sm leading-5">

                            <router-link to="/forgot-password" class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                                {{ $t('login.forgot_password') }}
                            </router-link>
                        </div>
                    </div>

                <div class="mt-6">
                    <span class="block w-full rounded-md shadow-sm">
                        <button
                            type="submit"
                            class="disabled:opacity-75 w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out"
                            :disabled="form.submit"
                        >
                            <svg v-show="form.submit" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            {{ $t('login.sign_in') }}
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
import { mapActions, mapGetters } from 'vuex'
import AuthLayout from '@/components/layout/AuthLayout'

export default {
    name: 'Login',
    components: { AuthLayout },
    data() {
        return {
            form: {
                email: '',
                password: '',
                remember: false,
                submit: false
            },
            formErrors: {
                password: [],
                email: []
            }
        }
    },
    computed: {
        ...mapGetters([
            'userLoginSuccess',
            'loginResponseMessage',
            'userLoginError'
        ])
    },
    async beforeCreate() {
        const customer = localStorage.getItem('customer')

        if (customer) {
            await this.$router.push({ path: '/' })
        }
    },
    methods: {
        ...mapActions({
            handleUserLogin: 'userLogin'
        }),
        handleInputChange(inputName, value) {
            this.formErrors[inputName] = []
            this.form[inputName] = value
        },
        userLogin() {
            this.form.submit = true

            this.$store.dispatch('userLogin', {
                email: this.form.email,
                password: this.form.password,
            })
        }
    },
    watch: {
        userLoginError(newValue) {
            if (newValue) {
                this.form.submit = false
                const { errors, message } = this.loginResponseMessage
                this.formErrors = {
                    ...this.formErrors,
                    ...errors
                }
                this.$toast.error(message)
            }
        },
        userLoginSuccess(newValue) {
            if (newValue) {
                this.form.submit = false

                this.$toast.success(this.$t('login.login_message'), {
                    duration: 2000,
                    onClose: () => {
                        this.$router.push('/')
                    }
                })
            }
        },
    },
    destroyed() {
        this.$destroy()
    }
}
</script>