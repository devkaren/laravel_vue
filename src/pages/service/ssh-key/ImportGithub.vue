<template>
    <AppLayout>
        <template v-slot:header>
            <secondary-nav />
        </template>

        <div class="pb-5 border-b border-gray-200 space-y-3 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0 mb-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                SSH-Key importieren
            </h3>
            <div class="flex space-x-3">
                <span class="inline-flex rounded-md shadow-sm">
                    <router-link
                        to="/service/ssh-key"
                        class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                    >
                        <svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd"></path>
                        </svg>
                        Zur&uuml;ck zur &Uuml;bersicht
                    </router-link>
                </span>
            </div>
        </div>

        <div>
            <div class="shadow overflow-hidden sm:rounded-md">
<!--                <livewire:customer.service.ssh-key.import />-->
            </div>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout'
import SecondaryNav from '@/components/service/SecondaryNav'

export default {
    name: 'Create',
    components: { SecondaryNav, AppLayout }
}
</script>