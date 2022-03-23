<template>
    <AppLayout>
        <template v-slot:header>
            <secondary-nav></secondary-nav>
        </template>
        <div class="mx-4 sm:mx-0">
            <div>
                <nav class="hidden sm:flex items-center text-sm leading-5 font-medium">
                    <a href="#" class="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                        {{ $t('support.ticket.support') }}
                    </a>
                    <svg class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <a href="#" class="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                        {{ $t('support.ticket.tickets') }}
                    </a>
                    <svg class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <a href="#" class="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                        {{ $t('support.ticket.create_ticket') }}
                    </a>
                </nav>
            </div>
            <div class="mt-2 md:flex md:items-center md:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                        {{ $t('support.ticket.create_ticket') }}
                    </h2>
                </div>
                <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                      <router-link to="/support/ticket" >
                <span class="inline-flex rounded-md shadow-sm">
                    <a href="#" class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                        <svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd"></path></svg>
                        {{ $t('support.ticket.back') }}
                    </a>
                </span>
                      </router-link>
                </div>
            </div>
        </div>

        <div>
            <div class="bg-white overflow-hidden overflow-hidden shadow rounded-lg my-8">
                <div class="px-4 py-5 sm:p-6">
                    <div>
                        <div>
                            <div>
                                <fieldset>
                                    <legend class="text-lg leading-6 font-medium text-gray-900">
                                        {{ $t('support.ticket.create_step_1_header') }}
                                    </legend>
                                    <p class="mt-1 text-sm leading-5 text-gray-500">
                                        {{ $t('support.ticket.create_step_1_sub') }}
                                    </p>
                                    <div class="mt-4">
                                        <div class="flex items-center">
                                            <input id="concern_server" value="server" type="radio" class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
                                            <label for="concern_server" class="ml-3">
                                                <span class="block text-sm leading-5 font-medium text-gray-700">
                                                    {{ $t('support.ticket.concern_server') }}
                                                </span>
                                            </label>
                                        </div>
                                        <div class="mt-4 flex items-center">
                                            <input id="concern_payment" value="payment" type="radio" class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
                                            <label for="concern_payment" class="ml-3">
                                                <span class="block text-sm leading-5 font-medium text-gray-700">
                                                    {{ $t('support.ticket.concern_payment') }}
                                                </span>
                                            </label>
                                        </div>
                                        <div class="mt-4 flex items-center">
                                            <input id="concern_other" value="other" type="radio" class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out" />
                                            <label for="concern_other" class="ml-3">
                                                <span class="block text-sm leading-5 font-medium text-gray-700">
                                                    {{ $t('support.ticket.concern_other') }}
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </fieldset>
                            </div>
                            <div v-cloak v-if="concern !== null" class="mt-8 pt-8">
                                <div v-if="concern === 'server'">
                                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                                        {{ $t('support.ticket.create_step_2_server_header') }}
                                    </h3>
                                    <p class="mt-1 text-sm leading-5 text-gray-500">
                                        {{ $t('support.ticket.create_step_2_server_sub') }}
                                    </p>
                                </div>
                                <div v-else-if="concern === 'payment'">
                                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                                        {{ $t('support.ticket.create_step_2_payment_header') }}
                                    </h3>
                                    <p class="mt-1 text-sm leading-5 text-gray-500">
                                        {{ $t('support.ticket.create_step_2_payment_sub') }}
                                    </p>
                                </div>
                                <div v-else-if="concern === 'other'">
                                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                                        {{ $t('support.ticket.create_step_3_header') }}
                                    </h3>
                                    <p class="mt-1 text-sm leading-5 text-gray-500">
                                        {{ $t('support.ticket.create_step_3_sub') }}
                                    </p>
                                </div>

                                <div v-cloak v-if="concern !== null" class="mt-6 grid grid-cols-1 row-gap-6 col-gap-4 sm:grid-cols-6">
                                    <div v-if="concern === 'server'" class="sm:col-span-3">
                                        <div v-if="servers.length > 0">
                                            <label for="affectedServer" class="block text-sm leading-5 font-medium text-gray-700">
                                                {{ $t('support.ticket.affected_server') }}
                                            </label>
                                            <select id="affectedServer" v-model="affectedServer" class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                                                <option v-for="server in servers" :key="server.id">
                                                    VM @{{ server.id }}
                                                </option>
                                            </select>
                                        </div>
                                        <div v-else>
                                            <div class="rounded-md bg-blue-50 p-4">
                                                <div class="flex">
                                                    <div class="flex-shrink-0">
                                                        <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                                                        </svg>
                                                    </div>
                                                    <div class="ml-3 flex-1 md:flex md:justify-between">
                                                        <p class="text-sm leading-5 text-blue-700">
                                                            {{ $t('support.ticket.affected_server_no_servers') }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-else-if="concern === 'payment'" class="sm:col-span-3">
                                        <div v-if="payments.length > 0">
                                            <label for="affectedPayment" class="block text-sm leading-5 font-medium text-gray-700">
                                                {{ $t('support.ticket.affected_payment') }}
                                            </label>
                                            <select id="affectedPayment" v-model="affectedPayment" class="mt-1 form-select block w-full pl-3 pr-10 py-2 text-base leading-6 border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5">
                                                <option v-for="payment in payments" :key="payment.id">
                                                    @{{ payment.id }}
                                                </option>
                                            </select>
                                        </div>
                                        <div v-else>
                                            <div class="rounded-md bg-blue-50 p-4">
                                                <div class="flex">
                                                    <div class="flex-shrink-0">
                                                        <svg class="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                                                        </svg>
                                                    </div>
                                                    <div class="ml-3 flex-1 md:flex md:justify-between">
                                                        <p class="text-sm leading-5 text-blue-700">
                                                            {{ $t('support.ticket.affected_payment_no_payments') }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div v-cloak v-if="submittable" class="sm:col-span-4">
                                        <div v-if="throttled" class="rounded-md bg-yellow-50 p-4 mb-6 shadow">
                                            <div class="flex">
                                                <div class="flex-shrink-0">
                                                    <svg class="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
                                                    </svg>
                                                </div>
                                                <div class="ml-3">
                                                    <h3 class="text-sm leading-5 font-medium text-yellow-800">
                                                        {{ $t('support.ticket.too_many_requests_header') }}
                                                    </h3>
                                                    <div class="mt-2 text-sm leading-5 text-yellow-700">
                                                        <p>
                                                            {{ $t('support.ticket.too_many_requests_text') }} @{{ retryAfter }} {{ $t('support.ticket.seconds') }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div class="flex-shrink-0 block focus:outline-none">
                                                <div class="flex items-center">
                                                    <div>
                                                        <span class="mt-1.5 inline-block h-9 w-9 rounded-full overflow-hidden bg-gray-100">
                                                            <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                                                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div class="ml-3">
                                                        <p class="text-sm leading-5 font-medium text-gray-700">
                                                            {{ customer.fullName }}
                                                        </p>
                                                        <p class="text-xs leading-4 font-medium text-gray-500">
                                                            {{ customer.email }}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-4">
                                            <label for="subject" class="block text-sm font-medium leading-5 text-gray-700">
                                                {{ $t('support.ticket.subject') }}
                                            </label>
                                            <div class="mt-1 relative rounded-md shadow-sm">
                                                <input id="subject" type="text" class="form-input block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5" :class="{'has-error': _.has(this.errors, 'subject')}" />
<!--                                                <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">-->
<!--                                                    <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">-->
<!--                                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />-->
<!--                                                    </svg>-->
<!--                                                </div>-->
                                            </div>
<!--                                            <p v-if="_.has(this.errors, 'subject')" class="mt-2 text-xs text-red-600">-->
<!--                                                @{{ this.errors['subject'][0] }}-->
<!--                                            </p>-->
                                        </div>
                                        <div class="mt-6">
                                            <label for="text" class="block text-sm font-medium leading-5 text-gray-700">
                                                {{ $t('support.ticket.your_message') }}
                                            </label>
                                            <div class="mt-1 relative rounded-md shadow-sm">
                                                <textarea id="text" rows="6" class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
<!--                                                <div v-if="_.has(this.errors, 'text')" class="absolute pt-3 top-0 right-0 pr-3 flex items-center pointer-events-none">-->
<!--                                                    <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">-->
<!--                                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />-->
<!--                                                    </svg>-->
<!--                                                </div>-->

                                            </div>
                                            <div class="flex justify-between">
<!--                                                <p v-if="_.has(this.errors, 'text')" class="mt-2 text-xs text-red-600">-->
<!--                                                    @{{ this.errors['text'][0] }}-->
<!--                                                </p>-->
                                                <p class="mt-2 text-right text-xs text-gray-500 flex items-center">
                                                    <svg class="w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"></path></svg>
                                                    {{ $t('support.ticket.markdown_available') }}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-cloak v-if="submittable || (affectedPayment !== null || affectedServer !== null)" class="border-t border-gray-200 px-4 py-4 sm:px-6">
                    <div class="flex justify-end">
                    <span class="inline-flex rounded-md shadow-sm">
                        <a href="#" type="button" class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                            {{ $t('support.ticket.cancel') }}
                        </a>
                    </span>
                        <span class="ml-3 inline-flex rounded-md shadow-sm">
                        <button type="submit" :disabled="loading" @click="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                            {{ $t('support.ticket.create_ticket') }}
                        </button>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout.vue'
import SecondaryNav from '@/components/support/SecondaryNav.vue'

export default {
    name: 'CreateTicket',
    data() {
        return {
            customer: {
                id: 1,
                fullName: 'Something',
                first_name: 'Name',
                last_name: 'surname',
                email: 'test@gmail.com',
                balance: 0,
            },
            subject: null,
            text: null,
            concern: null,
            affectedServer: null,
            affectedPayment: null,

            loading: false,
            throttled: false,
            retryAfter: null,
            errors: {},
        };
    },
    components: { SecondaryNav, AppLayout },
    methods: {
        submit() {
            if (this.loading) return;
            this.loading = true;
            this.throttled = false;

            axios.post(`/support/ticket`, {
                text: this.text,
                subject: this.subject,
                concern: this.concern,
                affectedServer: this.affectedServer,
                affectedPayment: this.affectedPayment,
            }).then(res => {
                // Redirect the customer to the freshly created ticket
                window.location.href = `/support/ticket/${res.data.ticket.id}`;
            }).catch(err => {
                if (err.response.status === 422) {
                    // Unprocessable entity
                    this.errors = err.response.data.errors;
                } else if (err.response.status === 429) {
                    // Too many requests
                    this.throttled = true;
                    this.retryAfter = err.response.headers['retry-after'];
                } else {
                    // Other kind of error
                }

                this.loading = false;
            });
        },
    },
    computed: {
        submittable() {
            return this.concern !== null && (this.affectedServer !== null || this.affectedPayment !== null || this.concern === 'other');
        },
    }
}
</script>