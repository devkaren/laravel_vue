<template>
    <AppLayout>
        <template v-slot:header>
            <secondary-nav />
        </template>

        <div class="pb-5 border-b border-gray-200 space-y-3 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0 mb-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                SSH-Keys
            </h3>
            <div class="flex space-x-3 items-end">
<!--                <div>-->
<!--                    <label for="search_candidate" class="sr-only">Search</label>-->
<!--                    <div class="flex rounded-md shadow-sm">-->
<!--                        <div class="relative flex-grow focus-within:z-10">-->
<!--                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">-->
<!--                                &lt;!&ndash; Heroicon name: search &ndash;&gt;-->
<!--                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">-->
<!--                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />-->
<!--                                </svg>-->
<!--                            </div>-->
<!--                            <input id="search_candidate" class="form-input block w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:hidden" placeholder="Search SSH-Keys">-->
<!--                            <input id="search_candidate" class="hidden form-input w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:block sm:text-sm sm:leading-5" placeholder="Search SSH-Keys">-->
<!--                        </div>-->
<!--                        <button class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">-->
<!--                            &lt;!&ndash; Heroicon name: sort-ascending &ndash;&gt;-->
<!--                            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">-->
<!--                                <path d="M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h5a1 1 0 000-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM13 16a1 1 0 102 0v-5.586l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 101.414 1.414L13 10.414V16z" />-->
<!--                            </svg>-->
<!--                            <span class="ml-2">Sort</span>-->
<!--                            &lt;!&ndash; Heroicon name: chevron-down &ndash;&gt;-->
<!--                            <svg class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">-->
<!--                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />-->
<!--                            </svg>-->
<!--                        </button>-->
<!--                    </div>-->
<!--                </div>-->

                <span class="shadow-sm rounded-md">
                <router-link
                    to="/service/ssh-key/create"
                    class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700 transition duration-150 ease-in-out"
                >
                    SSH-Key hinzufügen
                </router-link>
            </span>
            </div>
        </div>

        <div class="flex flex-col">
            <div class="rounded-md bg-green-50 p-4 mb-4 shadow" v-if="sessions.indexOf('ssh-key.create.success')">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="ml-3">
                        <h3 class="text-sm leading-5 font-medium text-green-800">
                            SSH-Key hinzugefügt
                        </h3>
                        <div class="mt-2 text-sm leading-5 text-green-700">
                            <p>
                                Dein neuer SSH-Key mit dem Fingerprint
<!--                                <span class="font-mono">{{ // session('ssh-key.create.success')->fingerprint }}</span>-->
                                wurde erfolgreich gespeichert.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="rounded-md bg-green-50 p-4 mb-4 shadow" v-if="sessions.indexOf('ssh-key.delete.success')">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="ml-3">
                        <h3 class="text-sm leading-5 font-medium text-green-800">
                            SSH-Key gelöscht
                        </h3>
                        <div class="mt-2 text-sm leading-5 text-green-700">
                            <p>
                                Der SSH-Key mit dem Namen
<!--                                <span class="font-medium">{{ // session('ssh-key.delete.success')['name'] }}</span> -->
                                wurde erfolgreich gelöscht.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                            <tr>
                                <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Fingerprint
                                </th>
                                <th class="px-6 py-3 bg-white"></th>
                            </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="key in keys">
                                    <td class="px-6 py-4 whitespace-no-wrap">
                                        <div class="flex items-center">
                                            <div>
                                                <div class="text-sm leading-5 font-medium text-gray-900">
                                                    {{ key.name }}
                                                </div>
                                                <div class="text-xs leading-5 text-gray-500">
                                                    {{ key.algorithm }}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap">
                                        <div class="text-sm leading-5 font-mono text-blue-500">
                                            {{ key.fingerprint }}
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                        <a href="#" @click="submit()" class="text-blue-600 hover:text-blue-900">Löschen</a>
                                    </td>
                                </tr>
                                <no-table-entries v-if="!keys.length" />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout.vue'
import SecondaryNav from '@/components/service/SecondaryNav.vue'
import NoTableEntries from '@/components/service/NoTableEntries.vue';

export default {
    name: 'SshKey',
    components: { NoTableEntries, SecondaryNav, AppLayout },
    data() {
        return {
            keys: [],
            sessions: []
        };
    },
    methods: {
        submit() {
            // axios ({
            //     method: this.method,
            //     url: this.url,
            //     data: this.data,
            // }).then(() => {
            //     if (this.reload) {
            //         window.location.reload();
            //     }
            //
            //     if (this.redirect !== null) {
            //         window.location.href = this.redirect;
            //     }
            // });
        },
    },
}
</script>