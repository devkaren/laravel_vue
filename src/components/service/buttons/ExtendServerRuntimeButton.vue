<template>
    <button type="button" @click.prevent="showExtendServerRuntimeModal = true" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Extend Server
        <extend-server-runtime-modal
            v-if="showExtendServerRuntimeModal"
            v-on:close="showExtendServerRuntimeModal = false"
            :server="server"
        />
    </button>
</template>

<script>
import ExtendServerRuntimeModal from '@/components/service/modals/ExtendServerRuntimeModal';
export default {
    name: 'ExtendServerRuntimeButton',
    components: { ExtendServerRuntimeModal },
    props: {
        server: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            showExtendServerRuntimeModal: false,
        }
    },
}
</script>
