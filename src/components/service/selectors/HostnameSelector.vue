<template>
    <div>
        <div v-for="n in serverCount" class="relative rounded-md shadow-sm mt-3">
            <input
                :id="'hostname-' + n - 1"
                v-model="hostnames[n - 1]"
                class="form-input block w-full sm:text-sm sm:leading-5"
                :class="{ 'border-red-500': hasError }"
                @change="$emit('userIndicatedChange')"
            >
        </div>
    </div>
</template>

<script>
export default {
    name: 'HostnameSelector',
    props: {
        hasError: {
            type: Boolean,
            default: false
        },
        value: {
            type: Array,
            required: true,
            default: () => { return [] }
        },
        serverCount: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            hostnames: this.value,
        }
    },
    methods: {
        emitChange() {
            this.$emit('input', this.hostnames);
        },
    },
    watch: {
        hostnames(oldValue, newValue) {
            this.emitChange();
        }
    }
}
</script>