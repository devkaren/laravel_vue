<template>
    <modal-body
        @close="$emit('close')"
    >
        <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
                <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg class="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                    <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        Extend Server
                    </h3>
                    <div class="mt-2">
                        <p class="text-sm text-gray-500">
                            Please select the desired runtime extension for your server <span class="font-medium">server-{{ server.id }}</span> ({{ server.name }}).
                        </p>
                    </div>
                    <div class="mt-6 min-w-full">
                        <div class="min-w-full" v-if="availableRuntimes.length > 0">
                            <div class="relative bg-white rounded-md -space-y-px min-w-full">
                                <label
                                    v-for="(v, k) in availableRuntimes"
                                    :key="v.months"
                                    class="relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none"
                                    :class="{
                                        'rounded-tl-md rounded-tr-md': k === 0,
                                        'rounded-bl-md rounded-br-md': k === availableRuntimes.length - 1,
                                        'bg-blue-50 border-blue-200 z-10': v === selectedRuntime,
                                        'border-gray-200': v !== selectedRuntime,
                                    }"
                                >
                                    <div class="flex items-center text-sm">
                                        <input
                                            v-model="selectedRuntime"
                                            :value="v"
                                            type="radio"
                                            class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out cursor-pointer"
                                            :aria-labelledby="`runtime-${v.months}-label`"
                                            :aria-describedby="`runtime-${v.months}-description-0 runtime-${v.months}-description-1`"
                                        >
                                        <span :id="`runtime-${v.months}-label`" class="ml-3 font-medium" :class="{'text-blue-900': v === selectedRuntime, 'text-gray-900': v !== selectedRuntime}">
                                            {{ v.months }} {{ v.months === 1 ? 'month' : 'months' }}
                                        </span>
                                    </div>
                                    <p :id="`runtime-${v.months}-description-0`" class="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                                        <span class="font-medium" :class="{'text-blue-900': v === selectedRuntime, 'text-gray-900': v !== selectedRuntime}">
                                            &euro; {{ v.gross_money }}
                                        </span>
                                    </p>
                                    <div :id="`runtime-${v.months}-description-1`" class="ml-6 pl-1 md:ml-0 md:pl-0 md:text-right" :class="{'text-blue-700': v === selectedRuntime, 'text-gray-500': v !== selectedRuntime}">
                                        <span v-show="v.discount_relative > 0" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                            Save {{ v.discount_relative }}%
                                        </span>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6" v-if="selectedRuntime && server.power_state === 'stopped'">
                        <div class="relative flex items-start">
                            <div class="flex items-center h-5">
                                <input
                                    id="startAfterExtension"
                                    v-model="startAfterExtension"
                                    type="checkbox"
                                    class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                                >
                            </div>
                            <div class="ml-3 text-sm leading-5">
                                <label for="startAfterExtension" class="font-medium text-gray-700">
                                    Start the server after the extension
                                </label>
                                <p class="text-gray-500">
                                    Your server is currently shut off. Do you want us to start your server automatically after the extension has been completed?
                                </p>
                            </div>
                        </div>
                    </div>
                    <div v-if="selectedRuntime" class="mt-6 flex items-start gap-x-8">
                        <div>
                            <div class="text-gray-500 font-normal text-sm">Immediate payment</div>
                            <div class="font-semibold text-2xl text-gray-700">
                                &euro; {{ selectedRuntime.gross_money }}
                            </div>
                        </div>
                        <div>
                            <div class="text-gray-500 font-normal text-sm">Extension period</div>
                            <div class="flex items-center gap-x-4">
                                <div class="font-semibold text-2xl text-gray-700">
                                    {{ selectedRuntime.from_date }}
                                </div>
                                <div>
                                    <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </div>
                                <div class="font-semibold text-2xl text-gray-700">
                                    {{ selectedRuntime.to_date }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
                @click="submit()"
                type="button"
                class="w-full inline-flex items-center justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
                :class="loading ? 'cursor-not-allowed bg-blue-400' : 'hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 bg-blue-600'"
            >
                <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>

                Pay &euro; {{ selectedRuntime ? selectedRuntime.gross_money : '0,00' }} now
            </button>

            <button @click="$emit('close')" type="button" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                Dismiss
            </button>
        </div>
    </modal-body>
</template>
<script>
import ModalBody from '@/components/modal/ModalBody';

export default {
    name: 'ExtendServerRuntimeModal',
    components: { ModalBody },
    props: {
        server: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            loading: true,
            serverError: false,
            insufficientBalance: false,
            availableRuntimes: [],
            selectedRuntime: null,
            startAfterExtension: true
        }
    },
    mounted() {
        // axios.get(`/service/server/${this.server.uuid}/api/available-runtimes`).then(res => {
        //     this.availableRuntimes = res.data.availableRuntimes;
        //
        //     if (this.availableRuntimes.length > 0) {
        //         // If we received any runtimes from the server, we'll pre-select the first one. Otherwise
        //         // we'll show an error message on the frontend that there are no runtimes available for extension.
        //         this.selectedRuntime = this.availableRuntimes[0];
        //     }
        // }).catch(() => {
        //     this.serverError = true;
        // }).finally(() => {
        //     this.loading = false;
        // });
    },
    methods: {
        submit() {
            if (this.loading) return;
            if (this.selectedRuntime === null) return;
            this.loading = true;
            this.serverError = false;
            this.insufficientBalance = false;

            // axios.post(`/service/server/${this.server.uuid}/api/extend`, {
            //     months: this.selectedRuntime.months,
            //     startAfterExtension: this.startAfterExtension,
            // }).then(() => {
            //     window.location.reload();
            // }).catch(err => {
            //     if (err.response.status === 400) {
            //         this.insufficientBalance = true;
            //         this.serverError = false;
            //     } else {
            //         this.insufficientBalance = false;
            //         this.serverError = true;
            //     }
            //
            //     this.loading = false;
            // });
        },
    },
}
</script>
