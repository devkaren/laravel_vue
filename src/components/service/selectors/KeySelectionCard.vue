<template>
    <div class="space-y-3">
        <div v-for="(key, index) in availableKeys" class="relative flex items-start">
            <div class="flex items-center h-5">
                <input
                    v-model="selection"
                    @change="select"
                    :id="'key' + index"
                    :value="key.uuid"
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                >
            </div>
            <div class="ml-3 text-sm leading-5">
                <label :for="'key' + index" class="font-medium text-gray-700">
                    {{ key.name }}
                </label>
                <p class="text-gray-500">
                    {{ key.fingerprint }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'KeySelectionCard',
    model: {
        prop: 'selection',
        event: 'change',
    },
    props: {
        availableKeys: {
            required: true,
            type: Array,
        },
    },
    data() {
        return {
            selection: []
        }
    },
    methods: {
        select() {
            this.$emit('change', this.selection)
        }
    }
}
</script>
