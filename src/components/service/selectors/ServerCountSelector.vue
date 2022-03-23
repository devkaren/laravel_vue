<template>
    <div>
        <span class="relative z-0 inline-flex shadow-sm rounded-md w-full">
            <button @click="decrease()" type="button" class="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                </svg>
            </button>
            <button type="button" class="flex-1 -ml-px justify-center relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                {{ serverCount }} Servers
            </button>
            <button @click="increase()" type="button" class="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-700 hover:text-gray-500 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-700 transition ease-in-out duration-150">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path>
                </svg>
            </button>
        </span>
    </div>
</template>

<script>
export default {
    name: 'ServerCountSelector',
    props: {
        value: {
            required: true,
        },
        max: {
            type: Number,
            default: -1,
        },
    },
    data() {
        return {
            serverCount: this.value,
        }
    },
    methods: {
        increase() {
            if (this.max !== -1) {
                if (this.serverCount < this.max) {
                    this.serverCount++;
                }
            } else {
                this.serverCount++;
            }
        },
        decrease() {
            if (this.serverCount > 1) {
                this.serverCount--;
            }
        },
        emitValue() {
            this.$emit('input', this.serverCount);
        },
    },
    watch: {
        serverCount(oldValue, newValue) {
            this.emitValue();
        },
    }
}
</script>
