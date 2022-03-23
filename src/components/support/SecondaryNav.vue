<template>
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div>
            <div class="block">
                <nav class="flex">
                    <router-link to="/support/ticket" active-class="secondary-nav-item-active" class="secondary-nav-item">
                        Support Tickets
                    </router-link>
                    <router-link to="/support/abuse" active-class="secondary-nav-item-active" class="ml-4 secondary-nav-item">
                        Abuse Management
                    </router-link>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SecondaryNav'
}
</script>