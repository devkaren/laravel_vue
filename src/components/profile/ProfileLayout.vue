<template>
    <AppLayout>
        <template v-slot:header>
            <small-header>
                <slot name="title"/>
            </small-header>
        </template>

        <navbar :section="section"/>

        <slot />
    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout'
import SmallHeader from '@/components/profile/SmallHeader'
import Navbar from '@/components/profile/Navbar'

export default {
    name: 'ProfileLayout',
    components: { Navbar, SmallHeader, AppLayout },
    data() {
        return {
            section: this.$route.query.section
        };
    }
}
</script>