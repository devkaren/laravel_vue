<template>
    <div class="mt-6">
        <div class="hidden sm:block">
            <div class="border-b border-gray-200">
                <nav class="flex -mb-px">
                    <router-link
                        :to="'/service/server/' + server.id + '/overview'"
                        class="group tertiary-nav-item"
                        active-class="tertiary-nav-item-active"
                    >
                        <svg :class="section === 'overview' ? '-ml-0.5 mr-2 h-5 w-5 text-blue-500 group-focus:text-blue-600' : '-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                        </svg>
                        <span>
                            Overview
                        </span>
                    </router-link>
                    <router-link
                        :to="'/service/server/' + server.id + '/disks'"
                        class="group tertiary-nav-item"
                        active-class="tertiary-nav-item-active"
                    >
                        <svg :class="section === 'disks' ? '-ml-0.5 mr-2 h-5 w-5 text-blue-500 group-focus:text-blue-600' : '-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                        <span>
                            Disks
                        </span>
                    </router-link>
                    <router-link
                        :to="'/service/server/' + server.id + '/network'"
                        class="group tertiary-nav-item"
                        active-class="tertiary-nav-item-active"
                    >
                        <svg :class="section === 'network' ? '-ml-0.5 mr-2 h-5 w-5 text-blue-500 group-focus:text-blue-600' : '-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clip-rule="evenodd"></path></svg>
                        <span>
                            Network
                        </span>
                    </router-link>
                    <router-link
                        :to="'/service/server/' + server.id + '/snapshots'"
                        class="group tertiary-nav-item"
                        active-class="tertiary-nav-item-active"
                    >
                        <svg :class="section === 'snapshots' ? '-ml-0.5 mr-2 h-5 w-5 text-blue-500 group-focus:text-blue-600' : '-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <span>
                            Snapshots
                        </span>
                    </router-link>
                    <router-link
                        :to="'/service/server/' + server.id + '/upgrade'"
                        class="group tertiary-nav-item"
                        active-class="tertiary-nav-item-active"
                    >
                        <svg :class="section === 'upgrade' ? '-ml-0.5 mr-2 h-5 w-5 text-blue-500 group-focus:text-blue-600' : '-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path></svg>
                        <span>
                            Upgrades
                        </span>
                    </router-link>
                    <router-link
                        :to="'/service/server/' + server.id + '/vnc'"
                        class="group tertiary-nav-item"
                        active-class="tertiary-nav-item-active"
                    >
                        <svg :class="section === 'vnc' ? '-ml-0.5 mr-2 h-5 w-5 text-blue-500 group-focus:text-blue-600' : '-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm3.293 1.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L7.586 10 5.293 7.707a1 1 0 010-1.414zM11 12a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path></svg>
                        <span>
                            VNC
                        </span>
                    </router-link>
                    <router-link
                        :to="'/service/server/' + server.id + '/statistics'"
                        class="group tertiary-nav-item"
                        active-class="tertiary-nav-item-active"
                    >
                        <svg :class="section === 'statistics' ? '-ml-0.5 mr-2 h-5 w-5 text-blue-500 group-focus:text-blue-600' : '-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'" fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>
                        <span>
                            Statistics
                        </span>
                    </router-link>
                    <router-link
                        :to="'/service/server/' + server.id + '/settings'"
                        class="group tertiary-nav-item"
                        active-class="tertiary-nav-item-active"
                    >
                        <svg :class="section === 'settings' ? '-ml-0.5 mr-2 h-5 w-5 text-blue-500 group-focus:text-blue-600' : '-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                        <span>
                            Settings
                        </span>
                    </router-link>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        section: {
            type: String,
            required: true
        },
        server: {
            type: Object,
            required: true
        }
    }
};
</script>