<template>
    <div>
        <div>
            <nav class="hidden sm:flex items-center text-sm leading-5 font-medium">
                <router-link
                    to="/service/server"
                    class="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
                >
                    Services
                </router-link>
                <svg class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                </svg>
                <router-link
                    to="/service/server"
                    class="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out"
                >
                    Server
                </router-link>
            </nav>
        </div>

        <div class="mt-2 md:flex md:items-center md:justify-between">
            <div class="flex-1 min-w-0">
                <h2 class="text-2xl font-bold leading-5 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate flex items-baseline">
                    <!--                    @switch ($server->power_state)-->
                    <!--                    @case(\App\Server::POWER_STARTED)-->
                    <svg class="mr-2 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3" />
                    </svg>
                    <!--                    @break-->
                    <!--                    @case(\App\Server::POWER_STOPPED)-->
                    <!--                    <svg class="mr-2 h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 8 8">-->
                    <!--                        <circle cx="4" cy="4" r="3" />-->
                    <!--                    </svg>-->
                    <!--                    @break-->
                    <!--                    @default-->
                    <!--                    <svg class="mr-2 h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 8 8">-->
                    <!--                        <circle cx="4" cy="4" r="3" />-->
                    <!--                    </svg>-->
                    <!--                    @endswitch-->

                    <div>{{ server.name }}</div>
                </h2>
            </div>
            <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4 items-center space-x-2">
                <router-link
                    to="/service/server"
                    class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                    <svg class="-ml-0.5 mr-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd"></path></svg>
                    Zur&uuml;ck
                </router-link>

                <form method="POST" action="#">
                    <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Power On
                    </button>
                </form>
                <!--                <form method="POST" action="#">-->
                <!--                    <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">-->
                <!--                        Power Off-->
                <!--                    </button>-->
                <!--                </form>-->

                <server-action-button :server="server" />
                <extend-server-runtime-button :server="server" />

                <!--                @if ($server->suspended)-->
                <!--                The server has been suspended, we'll show a button to provide a statement, only-->
                <!--                @endif-->
            </div>
        </div>

        <div class="rounded-md bg-red-50 p-4 shadow mt-6" v-if="server.suspended">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm leading-5 font-medium text-red-800">
                        Your server has been suspended
                    </h3>
                    <div class="mt-2 text-sm leading-5 text-red-700">
                        The reason for the suspension of your server is: <span class="font-medium"></span>
                    </div>
                    <div class="mt-2 text-sm leading-5 text-red-700">
                        <!--                        @if ($server->suspensions()->first()->abuse_case_measure)-->
                        <!--                        This suspension is an immediate consequence of AbuseCase#{{ $server->suspensions()->first()->abuseCase->uuid }}.-->
                        <!--                        @endif-->

                        If you think that this suspension is a mistake, please open a new support ticket. While your server is suspended, it will remain shut off. You can not control its power state or perform any other changes on it.
                        Other products of your account are not affected. Please notice that the payment for this server won't be refunded if the suspension is the result of a violation against our terms of service (TOS).
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-red-50 p-4 shadow mt-6" v-if="server.expired">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm leading-5 font-medium text-red-800">
                        Your server has been expired
                    </h3>
                    <div class="mt-2 text-sm leading-5 text-red-700">
                        We shut your server off because it hasn't been extended. If you no longer wish to use this server, you don't need to do anything.
                    </div>
                    <div class="mt-2 text-sm leading-5 text-red-700">
                        If you want to continue using this server, you need to extend it.<br>
                        We keep your server for <span class="font-semibold">7 days (until 2 days)</span> and delete it afterwards if you don't extend it until then.
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-green-50 p-4 shadow mt-6" v-if="session.indexOf('server.action.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-normal text-green-800">
                        <!--                        @switch (session()->get('server.action.success'))-->
                        <!--                        @case ('start')-->
                        Your server has been powered on and will be starting shortly.
                        <!--                        @break-->
                        <!--                        @case ('shutdown')-->
                        <!--                        Your server has been received an ACPI shutdown signal.-->
                        <!--                        @break-->
                        <!--                        @case ('poweroff')-->
                        <!--                        Your server has been powered off.-->
                        <!--                        @break-->
                        <!--                        @endswitch-->
                    </p>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-green-50 p-4 shadow mt-6" v-if="session.indexOf('server.extension.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-normal text-green-800">
                        The server has been successfully extended and is now paid until <span class="font-medium"></span>.
                    </p>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-green-50 p-4 shadow mt-6" v-if="session.indexOf('settings.updated.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-normal text-green-800">
                        The server's settings have been successfully updated.
                    </p>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-green-50 p-4 shadow mt-6" v-if="session.indexOf('disk.cancellation.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-normal text-green-800">
                        The server's additional disk has been marked as cancelled.
                    </p>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-green-50 p-4 shadow mt-6" v-if="session.indexOf('undo-cancellation.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-normal text-green-800">
                        The selected additional disk is no longer object to cancellation upon the server's next renewal.
                    </p>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-green-50 p-4 shadow mt-6" v-if="session.indexOf('transfer-started.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-normal text-green-800">
                        The transfer of your server to its new location has been started. Please be patient until the transfer has been completed.
                    </p>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-green-50 p-4 shadow mt-6" v-if="session.indexOf('server.backup.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-normal text-green-800">
                        The backup of your server has been started. It will be listed once it has been completed. This can take some time.
                    </p>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-red-50 p-4 shadow mt-6" v-if="session.indexOf('server.backup.failure')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-normal text-red-800">
                        Could not initiate backup of your server. Please try again later and contact support if the problem persists.
                    </p>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-red-50 p-4 shadow mt-6" v-if="session.indexOf('server.last-proxmox-job-still-running')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-normal text-red-800">
                        Our system is currently processing another job for this server. Please try again later.
                    </p>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-green-50 p-4 shadow mt-6" v-if="session.indexOf('server.backup.delete.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-normal text-green-800">
                        The selected backup has been successfully deleted.
                    </p>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-red-50 p-4 shadow mt-6" v-if="session.indexOf('server.backup.delete.failure')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-normal text-red-800">
                        Unfortunately we were not able to delete the selected backup. Please try again later.
                    </p>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-green-50 p-4 shadow mt-6" v-if="session.indexOf('server.upgrade.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-normal text-green-800">
                        Your server has been successfully upgraded and will be restarted in a moment.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ServerActionButton from '@/components/service/buttons/ServerActionButton.vue';
import ExtendServerRuntimeButton from '@/components/service/buttons/ExtendServerRuntimeButton.vue';
export default {
    name: 'ServerHeader',
    components: { ExtendServerRuntimeButton, ServerActionButton },
    data() {
        return {
            session: [],
            server: {
                id: 1,
                type: 'Linux',
                name: 'Test Server',
                suspended: false,
                expired: true
            }
        }
    }
};
</script>