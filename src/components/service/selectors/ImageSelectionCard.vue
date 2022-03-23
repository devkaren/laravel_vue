<template>
    <dropdown placeholder="Select Version" :title="title" ref="dropdown" :selected="selected" v-on:dropdown="selectImage(selection)">
        <template v-slot:icon v-if="rapidDeployment">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path></svg>
        </template>
        <template v-slot:selection>
            <span v-if="selected">{{ selection.os_version }}</span> <span v-else>Select Version</span>
        </template>
        <template v-slot:logo>
            <slot name="logo"></slot>
        </template>
        <dropdown-menu>
            <div class="rounded-md bg-white shadow-xs">
                <dropdown-element v-for="(option, index) in image" :key=index :option="option.os_version" :value="option" v-on:selection="selectionChanged($event)">
                    <template v-slot:note="prop">
                        <div v-if="selected">
                            <svg class="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                        </div>
                        <div v-if="deprecated">
                            <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-cool-gray-100 text-gray-800">
                                Deprecated
                            </span>
                        </div>
                    </template>
                </dropdown-element>
            </div>
        </dropdown-menu>
    </dropdown>
</template>

<script>
import Dropdown from '@/components/service/dropdown/Dropdown';
import DropdownMenu from '@/components/service/dropdown/DropdownMenu';
import DropdownElement from '@/components/service/dropdown/DropdownElement';

export default {
    name: 'ImageSelectionCard',
    components: { Dropdown, DropdownMenu, DropdownElement },
    model: {
        prop: 'selection',
        event: 'change',
    },
    props: {
        rapidDeployment: {
            type: Boolean,
            default: false,
            required: false,
        },
        deprecated: {
            type: Boolean,
            default: false,
            required: false,
        },
        image: {
            type: Array,
            required: true
        },
        selectedImage: {}
    },
    data() {
      return { selection: this.image[0] }
    },
    computed: {
        title: function() {
            return this.image[0].os_type.charAt(0).toUpperCase() + this.image[0].os_type.slice(1)
        },
        selected: function() {
            return this.selection === this.$parent.selectedImage
        },
    },
    mounted() {

    },
    methods: {
        selectionChanged: function (event) {
            this.$refs.dropdown.sharedState.selected = event
            this.selection = event
            this.selectImage(event)
        },
        selectImage(event) {
            this.$emit('change', event)
        }
    },
}

</script>
<style scoped>

</style>
