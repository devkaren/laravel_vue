<template>
    <dropdown placeholder="Select Datacenter" :title="region.name" ref="dropdown" v-bind:selected="selected" v-on:dropdown="selectRegion(selection)">
        <template v-slot:selection>
            <span v-if="selected">{{ selection.name }}</span>
            <span v-else>Select Location</span>
        </template>
        <template v-slot:logo>
            <slot name="logo"></slot>
        </template>
        <dropdown-menu>
            <div class="rounded-md bg-white shadow-xs">
                <dropdown-element v-for="(option, index) in region.clusters" :key=index :option="option.name" :value="option" v-on:selection="selectionChanged($event)"/>
            </div>
        </dropdown-menu>
    </dropdown>
</template>

<script>
import Dropdown from '@/components/service/dropdown/Dropdown.vue';
import DropdownMenu from '@/components/service/dropdown/DropdownMenu.vue';
import DropdownElement from '@/components/service/dropdown/DropdownElement.vue';

export default {
    name: 'DatacenterSelectionCard',
    components: { Dropdown, DropdownMenu, DropdownElement },
    model: {
        prop: 'selection',
        event: 'change',
    },
    props: {
        region: {
            required: true
        },
        selectedRegion: {}
    },
    data() {
        return {
            selection: this.region.clusters[0]
        }
    },
    computed: {
        selected() {
            return this.selection === this.$parent.selectedCluster
        },
    },
    methods: {
        selectionChanged: function (event) {
            this.$refs.dropdown.sharedState.selected = event
            this.selection = event
            this.selectRegion(event)
        },
        selectRegion(event) {
            this.$emit('change', event)
        }
    },
}
</script>
