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
                        {{ $t('abuseManagement.abuse-management') }}
                    </a>
                    <svg class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <a href="#" class="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                        {{ $t('abuseManagement.abuse-case') }} {{ abuseCase.uuid }}
                    </a>
                    <svg class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <a href="#" class="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                        {{ $t('abuseManagement.statement') }}
                    </a>
                </nav>
            </div>
            <div class="mt-2 md:flex md:items-center md:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
                        {{ $t('abuseManagement.submit-statement') }}
                    </h2>
                </div>
                <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4">
                    {{'-- Right side --'}}
                </div>
            </div>
        </div>

        <div class="my-8">
            <div class="bg-white shadow sm:rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Der Zugang zu deinem Server wurde eingeschränkt
                    </h3>
                    <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                        <p>
                            Dein Server wurde auf Grund eines Abuse-Reports gesperrt. Hierbei handelt es sich um Beschwerden Dritter, die ihrerseits
                            in ihren Rechten verletzt wurden, bzw. die durch den betroffenen Server angegriffen wurden. Gemäß unserer AGB haben wir den betroffenen Server eingeschränkt oder gesperrt, bis der Fall geklärt wurde.
                        </p>
                        <p class="mt-4">
                            Bitte fülle das folgende Formular aus, um dein Statement zu dem vorliegenden Fall abzugeben. Basierend auf deinen Angaben wird die zuständige Abteilung darüber entscheiden, ob wir die Vertragsbeziehung mit dir fortführen können oder nicht.
                        </p>
                    </div>
                    <div class="mt-3 text-sm leading-5">
                        <a href="#" class="font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150">
                            Mehr Informationen zur Behandlung von Abuse-Fällen &rarr;
                        </a>
                    </div>
                </div>
            </div>

            <div class="bg-white shadow mt-10 sm:rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Abuse-Report
                    </h3>
                    <h4 class="text-sm text-gray-600">
                        Diese Beschwerde haben wir zu deinem Server erhalten.
                    </h4>

                    <div class="bg-gray-100 font-mono text-sm p-4 mt-4 rounded">
<!--                        {!! nl2br($abuseCase->report) !!}-->
                    </div>
                </div>
            </div>


            <form method="POST" action="#">
                <div class="bg-white shadow mt-10 sm:rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Neues Statement abgeben
                        </h3>
                        <h4 class="text-sm text-gray-600">
                            Abuse Case #{{ abuseCase.uuid }}
                        </h4>

                        <div class="mt-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-6">
                                <div class="mt-1 rounded-md shadow-sm">
                                    <textarea id="statement" name="statement" rows="5" class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
                                </div>
<!--                                @error('statement')-->
<!--                                <p class="mt-2 text-sm text-red-600">-->
<!--                                    {{ $message }}-->
<!--                                </p>-->
<!--                                @else-->
<!--                                <p class="mt-2 text-sm text-gray-500">Please explain what caused the abuse report to be sent to us and what you'll do to prevent incidents like this in the future. Please be detailed in your explanation. According to our Terms of Service (TOS) we may keep your server suspended if you accumulate too much abuse cases.</p>-->
<!--                                @enderror-->
                            </div>
                        </div>
                        <div class="mt-8 border-t border-gray-200 pt-5">
                            <div class="flex justify-end">
                            <span class="inline-flex rounded-md shadow-sm">
                                <a href="#" class="py-2 px-4 border border-gray-300 rounded-md text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out">
                                    Cancel
                                </a>
                            </span>
                                <span class="ml-3 inline-flex rounded-md shadow-sm">
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                                    Submit
                                </button>
                            </span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout'
import SecondaryNav from '@/components/support/SecondaryNav'

export default {
    name: 'CreateAbuse',
    data() {
        return {
            abuseCase: {
                uuid: 1,
                fullName: 'Something',
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

            }
        };
    },
    components: { SecondaryNav, AppLayout }
}
</script>