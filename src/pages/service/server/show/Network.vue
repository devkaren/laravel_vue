<template>
    <ShowLayout>
        <div class="my-8">
<!--            <livewire:customer.service.server.network.port-list :server="$server" :ports="$ports" />-->
        </div>
    </ShowLayout>
</template>
<script>
import ShowLayout from '@/components/service/ShowLayout'

export default {
    name: 'Network',
    components: { ShowLayout }
}
</script>