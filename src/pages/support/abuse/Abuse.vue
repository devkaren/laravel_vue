<template>
    <AppLayout>
        <template v-slot:header>
            <secondary-nav></secondary-nav>
        </template>

        <router-view />

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
                        {{ $t('abuseManagement.abuse-management') }}
                    </a>
                    <svg class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <a href="#" class="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                        {{ $t('abuseManagement.open-cases') }}
                    </a>
                </nav>
            </div>
            <div class="mt-2 md:flex md:items-center md:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                        {{ $t('abuseManagement.open-cases') }}
                    </h2>
                </div>
                <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                    {{'-- Right side --'}}
                </div>
            </div>
        </div>

        <div class="rounded-md bg-green-50 p-4 shadow my-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-green-800">
                        We've received your statement
                    </h3>
                    <div class="mt-2 text-sm text-green-700">
                        <p>
                            Our abuse department will check your statement within the next 12 hours. You'll get notified about the decision.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-yellow-50 p-4 mt-4 shadow">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm font-medium text-yellow-800">
                        Immediate Action Required
                    </h3>
                    <div class="mt-2 text-sm text-yellow-700">
                        <p>
                            You have at least one open abuse case for on of your servers. You need to provide a statement within 24 hours after the case has been recoded.<br>
                            Failing to comply may result in a permanent suspension of the affected server or of your customer account.
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex flex-col mt-8">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        {{ $t('abuseManagement.case') }}
                                    </th>
                                    <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        {{ $t('abuseManagement.affected-server') }}
                                    </th>
                                    <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        {{ $t('abuseManagement.type') }}
                                    </th>
                                    <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th class="px-6 py-3 bg-white"></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <!-- @forelse ($abuseCases as $case) -->
                                <tr v-for="a in abuse_cases" :key="a">
                                    <td class="px-6 py-4 whitespace-no-wrap">
                                        <a href="">
                                            <div class="text-sm leading-5 font-medium text-gray-900">
                                                 {{a.id}}
                                            </div>
                                            <div class="text-xs leading-5 text-gray-500">
                                               {{a.decided_at}}
                                            </div>
                                        </a>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap">
                                        <a href="">
                                            <div class="text-sm leading-5 font-medium text-gray-900">
                                                {{a.uuid}}
                                            </div>
                                        </a>
                                    </td>
                                    <td class="px-6 py-4 w-40 whitespace-no-wrap">
                                            <span class=" inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-gray-100 text-gray-800">
                                                {{a.type}}
                                            </span>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap">
                                        <!-- @if ($case->decided_at) -->
                                        <!-- @if ($case->sanction) -->
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                                                        Statement not accepted
                                                    </span>
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                        Statement accepted
                                                    </span>
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                                        Pending Decision
                                                    </span>
                                        <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800">
                                                        Awaiting Statement
                                                    </span>
                                    </td>
                                    <!-- <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                        @unless ($case->statement)
                                        <a href="">
                                            ('app.customer.support.abuse-management.submit-statement')
                                        </a>
                                    </td> -->
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout'
import SecondaryNav from '@/components/support/SecondaryNav'
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Abuse',
    components: { SecondaryNav, AppLayout },
    data() {
        return {
    abuse_cases: [
            {
                id: 1,
                uuid: '663e4567-e89b-12d3-a456-426614174000',
                server_id: 223,
                sanction: 'Test',
                report: 'Abuse Report',
                type: 'Abuse Type',
                statement: 'Abuse statement',
                decided_at: '2022-03-14 11:35:20'
            },
            {
                id: 2,
                uuid: '883e8867-e89b-12d3-a456-426614174000',
                server_id: 23,
                sanction: 'Test 2',
                report: 'Abuse Report 2',
                type: 'Abuse Type 2',
                statement: 'Abuse statement 2',
                decided_at: '2022-03-14 12:35:20'
            },
            {
                id: 3,
                uid: '243d4567-e89b-12d3-a456-426614174000',
                server_id: 12,
                sanction: 'Test 3',
                report: 'Abuse Report 3',
                type: 'Abuse Type 3',
                statement: 'Abuse statement 3',
                decided_at: '2022-03-14 13:35:20'
            },
    ]
}
    },
  computed: {
    ...mapGetters(["userAbuseSuccess"]),
  },
  methods: {
    ...mapActions({
      handleUserAbuse: "userAbuse",
    })
  },
  mounted() {
    this.$store.dispatch("userAbuse");
  },
}
</script>