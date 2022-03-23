<template>
    <AppLayout>
        <template v-slot:header>
            <secondary-nav />
        </template>

        <div class="pb-5 border-b border-gray-200 space-y-3 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0 mb-6">
            <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900">
                    Server Overview
                </h3>
                <div class="mt-1 text-xs text-gray-400" v-if="query.length">
                    Displaying search results for <span class="font-medium">{{ query }}</span>
                </div>
            </div>
            <div class="flex space-x-3">
                <form method="GET" action="#">
                    <label for="search_server" class="sr-only">Search</label>
                    <div class="flex rounded-md shadow-sm">
                        <div class="relative flex-grow focus-within:z-10">
                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <input id="search_server"
                                   name="query"
                                   class="form-input w-full rounded-none rounded-l-md pl-10 transition ease-in-out duration-150 sm:block sm:text-sm sm:leading-5"
                                   placeholder="Search servers"
                            >
                        </div>
                        <button class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-r-md text-gray-700 bg-gray-50 hover:text-gray-500 hover:bg-white focus:outline-none focus:shadow-outline-blue focus:border-blue-300 active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                            Search
                        </button>
                    </div>
                </form>

                <span class="shadow-sm rounded-md">
                    <router-link
                        to="/service/server/create"
                        class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700 transition duration-150 ease-in-out"
                    >
                        Server bestellen
                    </router-link>
                </span>
            </div>
        </div>

        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                            <tr>
                                <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Server
                                </th>
                                <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Standort
                                </th>
                                <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    IP
                                </th>
                                <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                    Laufzeit
                                </th>
                                <th class="px-6 py-3 bg-white"></th>
                            </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="server in servers" v-if="servers.length">
                                    <td class="px-6 py-4 whitespace-no-wrap">
                                        <div class="flex items-center">
                                            <div>
    <!--                                            @if ($server->suspended)-->
                                                    <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
    <!--                                            @else-->
    <!--                                                @if ($server->extended_until <= now())-->
    <!--                                                <svg class="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path></svg>-->
    <!--                                                @else-->
    <!--                                                    @if ($server->power_state === \App\Server::POWER_STARTED)-->
    <!--                                                    <svg class="h-4 w-4 text-green-400" fill="currentColor" viewBox="0 0 8 8">-->
    <!--                                                        <circle cx="4" cy="4" r="3" />-->
    <!--                                                    </svg>-->
    <!--                                                    @else-->
    <!--                                                    <svg class="h-4 w-4 text-red-400" fill="currentColor" viewBox="0 0 8 8">-->
    <!--                                                        <circle cx="4" cy="4" r="3" />-->
    <!--                                                    </svg>-->
    <!--                                                    @endif-->
    <!--                                                @endif-->
    <!--                                            @endif-->
                                            </div>
                                            <div class="ml-4">
                                                <router-link
                                                    :to="'/service/server/' + server.id + '/overview'"
                                                >
                                                    <div class="text-sm leading-5 font-medium text-gray-900">
    <!--                                                    @if ($server->amphora)-->
                                                        amphora-{{ server.proxmox_id }}
    <!--                                                    @else-->
<!--                                                        {{ // $server->name }}-->
    <!--                                                    @endif-->
                                                    </div>
                                                    <div class="text-xs leading-5 text-gray-500">
    <!--                                                    @if ($server->flavor)-->
<!--                                                        {{ // $server->flavor->alias }}-->
                                                        <!--                                                       // -->
                                                      <!--                                                        {{ // $server->flavor->disk }}-->
                                                        <!-- GB-->
    <!--                                                    @else-->
                                                        Flavorless
    <!--                                                    @endif-->
                                                    </div>
                                                </router-link>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 whitespace-no-wrap">
                                        <div class="text-sm leading-5 text-gray-900 flex items-center space-x-1">
                                            <img class="h-3 w-5" :src="'@/assets/img/flags/' + server.cluster.region.name + '.svg'">
                                            <span>{{ $t('countries.' + server.cluster.region.name) }} / {{ server.cluster.region.name }}</span>
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-sm whitespace-no-wrap" colspan="3" v-if="server.suspended">
                                        <div class="flex items-center gap-x-1 text-red-500 font-medium">
                                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                            <p>Your server has been suspended</p>
                                        </div>
                                        <div class="text-xs text-gray-700">
    <!--                                        @if ($server->suspensions()->first()->abuse_case_sanction)-->
    <!--                                        @if ($server->suspensions()->first()->abuseCase->statement)-->
                                            Your statement on the abuse case was not accepted.
    <!--                                        @else-->
                                            You didn't provide a statement on the abuse case in time.
    <!--                                        @endif-->
    <!--                                        @elseif ($server->suspensions()->first()->abuse_case_measure)-->
    <!--                                        @if ($server->suspensions()->first()->abuseCase->statement)-->
    <!--                                        We are currently reviewing your statement on the abuse case.-->
    <!--                                        @else-->
    <!--                                        <a href="{{ route('customer.support.abuse.statement.create', ['abuse' => $server->suspensions()->first()->abuseCase]) }}">-->
    <!--                                            Please immediately provide a statement on the abuse case.-->
    <!--                                        </a>-->
    <!--                                        @endif-->
<!--                                            @endif-->
                                        </div>
                                    </td>
                                        <!--                                    @else-->
                                        <!--                                        @if ($server->status === \App\Server::INSTALL_STATUS_DONE)-->
                                        <!--                                            <td class="px-6 py-4 whitespace-no-wrap">-->
                                        <!--                                                @if (!$server->primaryPort()->hasAllocation(4))-->
                                        <!--                                                    <div class="text-sm leading-5 text-gray-900">{{ $server->primaryPort()->obtainAllocation(6)->ip_address }}</div>-->
                                        <!--                                                @else-->
                                        <!--                                                   {{-- Servers always have an IPv6 allocation -->
                                    <!--                                                    <div class="text-sm leading-5 text-gray-900">{{ $server->primaryPort()->obtainAllocation(4)->ip_address }}</div>-->
                                        <!--                                                    <div class="text-xs leading-5 text-gray-500">{{ $server->primaryPort()->obtainAllocation(6)->ip_address }}</div>-->
                                        <!--                                                @endif-->
                                        <!--                                            </td>-->
                                        <!--                                            <td class="px-6 py-4 whitespace-no-wrap">-->
                                        <!--                                                @unless (is_null($server->extended_until))-->
                                        <!--                                                    @if ($server->extended_until <= now())-->
                                        <!--                                                        <div class="text-sm leading-5 text-gray-900">expired since {{ $server->extended_until->diffInDays() }} days</div>-->
                                        <!--                                                        <div class="text-xs leading-5 text-gray-500">deletion at {{ $server->extended_until->addDays(7)->format('d. F Y') }}</div>-->

                                        <!--                                                    @else-->
                                        <!--                                                        <div class="text-sm leading-5 text-gray-900">{{ $server->extended_until->diffInDays() }} days left</div>-->
                                        <!--                                                        <div class="text-xs leading-5 text-gray-500">until {{ $server->extended_until->format('d. F Y') }}</div>-->
                                        <!--                                                    @endif-->
                                        <!--                                                @endunless-->
                                        <!--                                            </td>-->
                                        <!--                                            <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">-->
                                        <!--                                                <a href="{{ route('customer.service.server.show', ['server' => $server]) }}" class="text-blue-600 hover:text-blue-900">Anzeigen</a>-->
                                        <!--                                            </td>-->
                                        <!--                                        @else-->
                                        <!--                                            <td class="px-6 py-4 whitespace-no-wrap" colspan="3">-->
                                        <!--                                                <div class="relative w-full bg-gray-200 rounded">-->
                                        <!--                                                    @switch ($server->status)-->
                                        <!--                                                        @case (\App\Server::INSTALL_STATUS_ALLOCATING)-->
                                        <!--                                                            <div style="width: 10%" class="absolute top-0 h-4 rounded shim-blue"></div>-->
                                        <!--                                                            @break-->
                                        <!--                                                        @case (\App\Server::INSTALL_STATUS_BUILDING)-->
                                        <!--                                                            <div style="width: 30%" class="absolute top-0 h-4 rounded shim-blue"></div>-->
                                        <!--                                                            @break-->
                                        <!--                                                        @case (\App\Server::INSTALL_STATUS_AMPHORA_READY)-->
                                        <!--                                                            <div style="width: 60%" class="absolute top-0 h-4 rounded shim-blue"></div>-->
                                        <!--                                                            @break-->
                                        <!--                                                        @case (\App\Server::INSTALL_STATUS_CONTEXTUALIZATION)-->
                                        <!--                                                            <div style="width: 90%" class="absolute top-0 h-4 rounded shim-blue"></div>-->
                                        <!--                                                            @break-->
                                        <!--                                                    @endswitch-->
                                        <!--                                                </div>-->
                                        <!--                                                <div class="text-xs text-gray-700 mt-1">-->
                                        <!--                                                    @switch ($server->status)-->
                                        <!--                                                        @case (\App\Server::INSTALL_STATUS_ALLOCATING)-->
                                        <!--                                                            Awaiting start of deployment ...-->
                                        <!--                                                            @break-->
                                        <!--                                                        @case (\App\Server::INSTALL_STATUS_BUILDING)-->
                                        <!--                                                            Installing operating system ...-->
                                        <!--                                                            @break-->
                                        <!--                                                        @case (\App\Server::INSTALL_STATUS_AMPHORA_READY)-->
                                        <!--                                                        @case (\App\Server::INSTALL_STATUS_CONTEXTUALIZATION)-->
                                        <!--                                                            Contextualization in progress ...-->
                                        <!--                                                            @break-->
                                        <!--                                                    @endswitch-->
                                        <!--                                                </div>-->
                                        <!--                                            </td>-->
                                        <!--                                        @endif-->
    <!--                                @endif-->
                                </tr>
                                <no-table-entries v-if="!servers.length" colspan=""></no-table-entries>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <router-view/>
    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout.vue'
import SecondaryNav from '@/components/service/SecondaryNav.vue'
import NoTableEntries from '@/components/service/NoTableEntries.vue';

export default {
    name: 'Show',
    components: { NoTableEntries, SecondaryNav, AppLayout },
    data() {
        return {
            server: {
                id: 1,
                suspended: true,
                proxmox_id: 12,
                cluster: {
                    region: {
                        name: 'gb'
                    }
                }
            },
            servers: [
                {
                    id: 1,
                    suspended: true,
                    proxmox_id: 12,
                        cluster: {
                        region: {
                            name: 'gb'
                        }
                    }
                }
            ],
            query: ''
        };
    }
}
</script>