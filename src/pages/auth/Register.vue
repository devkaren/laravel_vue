<template>
    <AuthLayout>
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <div class="mx-auto h-12 w-64">
                <img
                    src="~@/assets/images/logo.svg"
                >
            </div>
            <h2 class="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
                {{ $t('register.header_cta') }}
            </h2>
            <p class="mt-2 text-center text-sm leading-5 text-gray-600 max-w">
                {{ $t('global.or') }}

                <router-link to="/login" class="font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                    {{ $t('register.header_sub') }}
                </router-link>
            </p>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-xl">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 mx-4 sm:mx-0">
                <form method="POST" @submit="userRegistration" @submit.prevent="$emit('submit')">
                    <div class="md:grid md:grid-cols-6 md:gap-6">
                        <div class="md:col-span-3">
                            <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">
                                {{ $t('register.first_name') }}
                            </label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <input id="first_name"
                                       name="first_name"
                                       type="text"
                                       class="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue"
                                       :value="form.first_name"
                                       @input="handleInputChange('first_name', $event.target.value)"
                                       required
                                />
                            </div>
<!--                            <p class="mt-2 text-sm text-red-600">-->
<!--                                {{ $message }}-->
<!--                            </p>-->
                        </div>

                        <div class="md:col-span-3 md:mt-0 mt-3">
                            <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">
                                {{ $t('register.last_name') }}
                            </label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <input id="last_name"
                                       name="last_name"
                                       type="text"
                                       class="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue"
                                       :value="form.last_name"
                                       @input="handleInputChange('last_name', $event.target.value)"
                                       required
                                />
                            </div>
<!--                            <p class="mt-2 text-sm text-red-600">-->
<!--                                {{ $message }}-->
<!--                            </p>-->
                        </div>

                        <div class="md:col-span-6 md:mt-0 mt-3">
                            <label for="email" class="block text-sm font-medium leading-5 text-gray-700">
                                {{ $t('register.email') }}
                            </label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <input id="email"
                                       name="email"
                                       type="email"
                                       class="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue"
                                       :value="form.email"
                                       @input="handleInputChange('email', $event.target.value)"
                                       required
                                />
                            </div>
<!--                            <p class="mt-2 text-sm text-red-600">-->
<!--                                {{ $message }}-->
<!--                            </p>-->
<!--                            <p class="mt-2 text-sm text-gray-500" id="email-description">-->
<!--                                {{ $t('register.email_instructions') }}-->
<!--                            </p>-->
                        </div>

                        <div class="md:col-span-6 md:mt-0 mt-3">
                            <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                                {{ $t('register.password') }}
                            </label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <input id="password"
                                       name="password"
                                       type="password"
                                       class="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5 border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue"
                                       :value="form.password"
                                       @input="handleInputChange('password', $event.target.value)"
                                       required
                                />
                            </div>
<!--                            <p class="mt-2 text-sm text-red-600">-->
<!--                                {{ $message }}-->
<!--                            </p>-->
<!--                            <p class="mt-2 text-sm text-gray-500" id="password-description">-->
<!--                                {{ $t('register.password_instructions') }}-->
<!--                            </p>-->
                        </div>

                        <div class="md:col-span-6 md:mt-0 mt-3">
                            <label for="password_confirmation" class="block text-sm font-medium leading-5 text-gray-700">
                                {{ $t('register.password_confirmation') }}
                            </label>
                            <div class="mt-1 relative rounded-md shadow-sm">
                                <input id="password_confirmation"
                                       name="password_confirmation"
                                       type="password"
                                       class="appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5 'border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue"
                                       :value="form.password_confirmation"
                                       @input="handleInputChange('password_confirmation', $event.target.value)"
                                       required
                                />
                            </div>
<!--                            <p class="mt-2 text-sm text-red-600">-->
<!--                                {{ $message }}-->
<!--                            </p>-->
                        </div>
                    </div>

                    <div class="mt-6 flex items-center">
                        <div class="flex items-justify">
                            <input style="margin-top: 2px"
                                   id="terms"
                                   name="terms"
                                   :value="terms"
                                   value="1"
                                   type="checkbox"
                                   class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                            />
                            <label for="terms" class="ml-2 block text-sm leading-5 text-gray-800">
                                <span v-html="$t('register.terms')"></span>
                            </label>
                        </div>
                    </div>

                    <div class="mt-4 flex items-center">
                        <div class="flex items-justify">
                            <input style="margin-top: 2px"
                                   id="newsletter"
                                   name="newsletter"
                                   :value="newsLetter"
                                   value="1"
                                   type="checkbox"
                                   class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                            />
                            <label for="newsletter" class="ml-2 block text-sm leading-5 text-gray-800">
                                {{ $t('register.newsletter') }}
                            </label>
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
                            {{ $t('register.register') }}
                        </button>
                    </span>
                    </div>
                </form>

            </div>
            <div class="mx-auto text-center mt-4 text-gray-600 text-sm">
                <a href="#" target="_blank">
                    {{ $t('global.legal_notice') }}
                </a>
                &bull
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
    name: 'Register',
    components: { AuthLayout },
    data() {
        return {
            terms: false,
            newsLetter: false,
            form: {
                first_name: '',
                last_name: '',
                email: '',
                password: '',
                password_confirmation: '',
                submit: false
            },
            formErrors: {
                first_name: [],
                last_name: [],
                email: [],
                password: [],
                password_confirmation: []
            }
        }
    },
    computed: {
        ...mapGetters([
            'registrationMessage',
            'registrationResponseMessage',
            'userRegistrationError'
        ])
    },
    async beforeCreate() {
        const customer = localStorage.getItem('customer');

        if (customer) {
            await this.$router.push({ path: '/' });
        }
    },
    methods: {
        ...mapActions({
            handleUserRegistration: 'userRegistration'
        }),
        handleInputChange(inputName, value) {
            this.formErrors[inputName] = []
            this.form[inputName] = value
        },
        userRegistration() {
            this.form.submit = true

            this.$store.dispatch('userRegistration', {
                first_name: this.form.first_name,
                last_name: this.form.last_name,
                email: this.form.email,
                password: this.form.password,
                password_confirmation: this.form.password_confirmation
            })
        }
    },
    watch: {
        userRegistrationError(newValue) {
            if (newValue) {
                this.form.submit = false
                const { errors, message } = this.registrationResponseMessage
                this.formErrors = {
                    ...this.formErrors,
                    ...errors
                }
                this.$toast.error(message)
            }
        },
        registrationMessage(newValue) {
            if (newValue) {
                this.form.submit = false
                this.$toast.success(this.$t('register.register_successfully'), {
                    duration: 2000,
                    onClose: () => {
                        this.$router.push('/login')
                    }
                })
            }
        }
    },
    destroyed() {
        this.$destroy()
    }
}
</script>