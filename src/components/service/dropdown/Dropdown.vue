<template>
    <li class="col-span-4 md:col-span-2 lg:col-span-1">
        <div :class="[selected ? 'border-blue-600 hover:border-blue-600' : 'border-gray-300 hover:border-gray-400']" class="rounded border-solid border box-border inline-block leading-6 text-center text-gray-700 w-full">
            <button :class="[selected ? 'bg-blue-50 text-blue-600 focus:bg-blue-200' : 'text-gray-600 focus:bg-gray-200 hover:bg-gray-100' ]" class="w-full border-none cursor-pointer m-0 p-0 focus:shadow-xs rounded-tl rounded-tr relative"
                    @click="$emit('dropdown', selectedOption)">
                <div class="border-gray-300 box-border text-gray-500 h-12 leading-6 mx-auto mb-0 mt-2 text-center w-12 flex items-center justify-center">
                    <slot name="logo"/>
                </div>
                <span class="font-normal box-border block text-base leading-normal mx-0 mt-1 mb-2 text-center">{{ title }}</span>
                <div class="absolute top-2 right-2">
                    <slot name="icon"/>
                </div>
            </button>
            <div class="border-solid border-t cursor-pointer block text-xs relative text-blue-600">
                <div role="button" @click="toggle" v-on-clickaway="away" class="text-xs p-2 text-center hover:bg-blue-50 rounded-bl rounded-br flex items-center">
                    <span :class="[selected ? 'text-blue-600' : 'text-gray-600']" class="cursor-pointer font-semibold mr-2 align-middle truncate leading-5 flex-1">
                        <slot name="selection">
                            {{ selectedOption }}
                        </slot>
                    </span>
                    <span class="cursor-pointer relative text-blue-600">
                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </span>
                </div>
                <slot>
                    <dropdown-menu>
                        <div class="rounded-md bg-white shadow-xs">
                            <dropdown-element v-for="(option, index) in options" :key=index :option="option" :value="option" :selection="option" v-on:selection="selectionChanged($event)"/>
                        </div>
                    </dropdown-menu>
                </slot>
            </div>
        </div>
    </li>
</template>

<script>
import { mixin as clickaway } from 'vue3-click-away';
import DropdownMenu from '@/components/service/dropdown/DropdownMenu.vue';
import DropdownElement from '@/components/service/dropdown/DropdownElement.vue';

export default {
    name: 'Dropdown',
    components: { DropdownElement, DropdownMenu },
    mixins: [ clickaway ],
    props: ['placeholder', 'title', 'options', 'selected', 'selectedOption'],
    provide() {
        return {
            sharedState: this.sharedState
        }
    },
    data() {
        return {
            sharedState: {
                active: false,
                selected: this.placeholder,
            },
        }
    },
    methods: {
        toggle() {
            this.sharedState.active = !this.sharedState.active
        },
        away() {
            this.sharedState.active = false
        },
        selectionChanged(event) {
            this.selectedOption = event
        }
    },
}
</script>
