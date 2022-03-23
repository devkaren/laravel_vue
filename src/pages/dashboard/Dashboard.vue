<template>
<!--    <banner type="info" :customer="customer" />-->
    <AppLayout>
        <template v-slot:header>
            <small-header>
                {{ $t('dashboard.hello') }}, {{ customer.first_name }}!
            </small-header>
        </template>

        <div v-if="customer.transactions.length === 0  || updateSuccess" class="rounded-md bg-green-50 p-4 mb-6 shadow">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" fill-rule="evenodd"/>
                    </svg>
                </div>
                <div class="ml-3 flex-1 md:flex md:justify-between">
                    <p class="text-sm leading-5 text-green-700">
                        <b>{{ $t('dashboard.great') }}</b> {{ $t('dashboard.getting_started') }}
                    </p>
                    <p class="mt-3 text-sm leading-5 md:mt-0 md:ml-6">
                        <a class="whitespace-no-wrap font-medium text-green-700 hover:text-green-600 transition ease-in-out duration-150" href="#">
                            {{ $t('dashboard.charge_now_long') }} &rarr;
                        </a>
                    </p>
                </div>
            </div>
        </div>

        <div class="mx-4 sm:mx-0">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                {{ $t('dashboard.title') }}
            </h3>
            <div class="mt-5 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-6">
                <div class="col-span-6 sm:col-span-2 bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dl>
                            <dt class="text-sm leading-5 font-medium text-gray-500 truncate flex items-center justify-between">
                                {{ $t('dashboard.available_balance') }}
                                <router-link v-if="parseFloat(customer.balance) < 1" class="text-xs text-blue-600" to="/payment/balance">
                                    {{ $t('dashboard.charge_now_short') }} &rarr;
                                </router-link>
                                <router-link v-else class="text-xs text-blue-600" to="/payment/balance">
                                    {{ $t('dashboard.show') }} &rarr;
                                </router-link>
                            </dt>
                            <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                {{ customer.balance }} &euro;
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="col-span-6 sm:col-span-2 bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dl>
                            <dt class="text-sm leading-5 font-medium text-gray-500 truncate flex items-center justify-between">
                                {{ $t('dashboard.active_servers') }}
                                <a href="#" class="text-xs text-blue-600">
                                    {{ $t('dashboard.show') }} &rarr;
                                </a>
                            </dt>
                            <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                {{ customer.servers.length }}
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="col-span-6 sm:col-span-2 bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dl>
                            <dt class="text-sm leading-5 font-medium text-gray-500 truncate flex items-center justify-between">
                                {{ $t('dashboard.open_tickets') }}
                                <router-link to="/support/ticket" class="text-xs text-blue-600">
                                    {{ $t('dashboard.show') }} &rarr;
                                </router-link>
                            </dt>
                            <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">34</dd>
                        </dl>
                    </div>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="px-4 py-5 sm:pt-6 sm:px-6 sm:pb-2">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Your support tickets
                            </h3>

                            <div class="mt-4">
                                <ul role="list" class="divide-y divide-gray-200">
                                    <li v-for="(ticket,index) in latestTickets" :key="index" class="py-4">
                                        <div class="flex space-x-3">
                                            <svg v-if="ticket.unreadMessages.length" class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path clip-rule="evenodd"
                                                      d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
                                                      fill-rule="evenodd"></path>
                                            </svg>
                                            <svg v-else class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                            </svg>

                                            <div class="flex-1 space-y-1">
                                                <div class="flex items-center justify-between">
                                                    <h3 class="text-sm font-medium">
                                                        <a href="#">
                                                            {{ ticket.subject }}
                                                        </a>
                                                    </h3>
                                                    <p class="text-sm text-gray-500">
                                                        {{ ticket.lastUpdateShortHumanReadable }}
                                                    </p>
                                                </div>
                                                <p class="text-sm text-gray-500">
                                                    Ticket Lats Messages here for 70 symbols
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <div class="bg-white overflow-hidden shadow rounded-lg">
                        <div class="px-4 py-5 sm:pt-6 sm:px-6 sm:pb-2">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Your servers
                            </h3>

                            <div class="mt-4">
                                <ul role="list" class="divide-y divide-gray-200">
                                    <li v-for="(server,index)  in upcomingServers" :key="index" class="py-4">
                                        <div class="flex space-x-3">
                                            <svg v-if="server.expired" class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" fill-rule="evenodd"></path>
                                            </svg>
                                            <svg v-else class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                                                <circle cx="4" cy="4" r="3"/>
                                            </svg>

                                            <div class="flex-1 space-y-1">
                                                <div class="flex items-center justify-between">
                                                    <h3 class="text-sm font-medium">
                                                        <a href="#">
                                                            {{ server.name }}
                                                        </a>
                                                    </h3>
                                                    <p class="text-sm text-gray-500">

                                                    </p>
                                                </div>
                                                <p class="text-sm text-gray-500">
                                                    <template v-if="server.expired">
                                                        Your server expired {{ server.extended_until }}
                                                    </template>
                                                    <template v-else>
                                                        Your server is due for extension in 2 days
                                                    </template>
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

<script>
import AppLayout from '@/components/layout/AppLayout'
import SmallHeader from '@/components/profile/SmallHeader'
import Banner from '@/components/dashboard/Banner'
import Navigation from '@/components/dashboard/Navigation'

export default {
    name: 'Dashboard',
    components: { Banner, Navigation, SmallHeader, AppLayout },
    data() {
        return {
            customer: {
                id: 1,
                fullName: 'Name surname',
                first_name: 'Name',
                last_name: 'surname',
                transactions: [],
                balance: 0,
                servers: [
                    {
                        id: 1,
                        name: 'Digial Ocean',
                        extended_until: new Date(),
                        expired: true,
                    },
                    {
                        id: 1,
                        name: 'Vultr Ocean',
                        extended_until: new Date(),
                        expired: false,
                    },
                ],

            },
            upcomingServers: [
                {
                    id: 1,
                    name: 'Digial Ocean',
                    extended_until: new Date().toDateString(),
                    expired: true,
                },
                {
                    id: 1,
                    name: 'Vultr Ocean',
                    extended_until: new Date().toDateString(),
                    expired: false,
                },
            ],
            updateSuccess: true,
            latestTickets: [
                {
                    subject: 'Subject',
                    lastUpdateShortHumanReadable: new Date().toDateString(),
                    unreadMessages: [
                        {
                            id: 1,
                            message: 'some Message',
                        },
                    ],
                },
                {
                    subject: 'Another Subject',
                    lastUpdateShortHumanReadable: new Date().toDateString(),
                    unreadMessages: [
                        {
                            id: 2,
                            message: 'some another Message',
                        },
                    ],
                },
            ]
        };
    },
    methods: {},
};
</script>
