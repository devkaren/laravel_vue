<template>
    <div class="mb-6">
        <div class="block">
            <div class="border-b border-gray-200">
                <nav class="flex-mb-px">
                    <router-link
                        to="/profile/edit/data"
                        class="group tertiary-nav-item"
                        active-class="tertiary-nav-item-active"
                    >
                        <svg :class="section === 'personal-data' ? '-ml-0.5 mr-2 h-5 w-5 text-blue-500 group-focus:text-blue-600' : '-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                        <span> {{ $t('profile.show.personal-data.data') }} </span>
                    </router-link>
                    <router-link
                        to="/profile/edit/security"
                        class="group tertiary-nav-item"
                        active-class="tertiary-nav-item-active"
                    >
                        <svg :class="section === 'security' ? '-ml-0.5 mr-2 h-5 w-5 text-blue-500 group-focus:text-blue-600' : '-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600' " fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                        <span> {{ $t('profile.show.security.data') }} </span>
                    </router-link>
                    <router-link
                        to="/profile/edit/second-factor"
                        class="group tertiary-nav-item"
                        active-class="tertiary-nav-item-active"
                    >
                        <svg :class="section === 'second-factor' ? '-ml-0.5 mr-2 h-5 w-5 text-blue-500 group-focus:text-blue-600' : '-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                        <span> {{ $t('profile.show.second-factor.data') }} </span>
                    </router-link>
                    <router-link
                        to="/profile/edit/verification"
                        class="group tertiary-nav-item"
                        active-class="tertiary-nav-item-active"
                    >
                        <svg :class="section === 'verification' ? '-ml-0.5 mr-2 h-5 w-5 text-blue-500 group-focus:text-blue-600' : '-ml-0.5 mr-2 h-5 w-5 text-gray-400 group-hover:text-gray-500 group-focus:text-gray-600'" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 21h7a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v11m0 5l4.879-4.879m0 0a3 3 0 104.243-4.242 3 3 0 00-4.243 4.242z"></path></svg>
                        <span> {{ $t('profile.show.verification.data') }} </span>
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
        }
    }
};
</script>