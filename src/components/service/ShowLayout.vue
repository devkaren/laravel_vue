<template>
    <AppLayout>
        <template v-slot:header>
            <secondary-nav />
        </template>
        <server-header/>
        <navbar :section="section" :server="server"/>
        <slot/>
    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout'
import SecondaryNav from '@/components/service/SecondaryNav'
import ServerHeader from '@/components/service/ServerHeader'
import Navbar from '@/components/service/Navbar'

export default {
    name: 'ShowLayout',
    components: { Navbar, SecondaryNav, ServerHeader, AppLayout },
    data() {
        return {
            section: this.$route.name.toLowerCase(),
            server: {
                id: 1,
                type: 'Linux',
                name: 'Test Server',
                suspended: false,
                expired: true
            }
        };
    }
}
</script>