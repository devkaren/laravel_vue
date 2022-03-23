<template>
    <div>
<!--        @includeWhen(auth('customer')->check() && auth('admin')->check(), 'layouts.customer.impersonation-banner')-->
<!--        @includeWhen(\App\Announcement::forCustomer(auth('customer')->user(), true)->count() > 0, 'layouts.customer.announcement-banner')-->
        <navigation :customer="customer" :hasAnnouncements="true"></navigation>

        <header class="bg-white shadow-sm">
            <slot name="header"></slot>
        </header>

        <main>
            <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <slot />
            </div>
        </main>
<!--        <portal-target name="modal"></portal-target>-->
    </div>
</template>

<script>
import Navigation from '../../components/dashboard/Navigation.vue'
import Announcement from '../dashboard/Announcement.vue'

export default {
    name: 'AppLayout',
    components: { Navigation, Announcement },
    data() {
        return {
            customer: JSON.parse(localStorage.getItem('customer'))
        };
    }
}
</script>
