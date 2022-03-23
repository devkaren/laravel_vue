<template>
    <li :id="customId" :tabindex="index" role="radio" :aria-checked="selected" class="group relative rounded-lg shadow-sm cursor-pointer focus:outline-none focus:shadow-outline-blue" @click="select()">
        <div class="rounded-lg border border-gray-300 bg-white px-6 py-4 hover:border-gray-400 group-focus:border-blue-300 sm:flex sm:justify-between sm:space-x-4">
            <div class="flex items-center space-x-0">
                <div class="flex-shrink-0 flex items-center hidden">
                    <span aria-hidden="" class="form-radio text-blue-600 group-focus:bg-red-500"></span>
                </div>
                <div class="text-sm leading-5">
                    <p class="block font-medium text-gray-900">
                        {{ flavor.alias }}
                    </p>
                    <div class="text-gray-500">
                        <span class="block sm:inline">
                            {{ flavor.cores }} {{ flavor.cores === 1 ? 'vCore' : 'vCores'}}
                        </span>
                        <span class="hidden sm:inline sm:mx-1">&middot;</span>
                        <span class="block sm:inline">{{ Math.floor(flavor.memory / 1000) }} GB RAM</span>
                        <span class="hidden sm:inline sm:mx-1">&middot;</span>
                        <span class="block sm:inline">{{ flavor.disk }} GB SSD</span>
                        <span class="hidden sm:inline sm:mx-1">&middot;</span>
                        <span class="block sm:inline">{{ flavor.traffic / 1000 }} TB Traffic</span>
                    </div>
                </div>
            </div>
            <div class="mt-2 flex text-sm leading-5 space-x-1 sm:mt-0 sm:block sm:space-x-0 sm:text-right">
                <div class="font-medium text-gray-900">&euro; {{ priceString }}</div>
                <div class="text-gray-500 text-xs">/ month</div>
            </div>
        </div>
        <!-- On: "border-blue-500", Off: "border-transparent" -->
        <div v-bind:class="[selected ? 'border-blue-500' : 'border-transparent']" class="absolute inset-0 rounded-lg border-2 pointer-events-none"></div>

    </li>
</template>

<script>
import Dinero from 'dinero.js';

export default {
    name: 'FlavorSelectionCard',
    model: {
        prop: 'selection',
        event: 'change',
    },
    props: {
        flavor: {
            required: true
        },
        selectedFlavor: {},
        index: {}
    },
    data() {
        return {
            selection: this.flavor,
        }
    },
    computed: {
        selected() {
            return this.flavor.name === this.$parent.selectedFlavor.name
        },
        customId() {
            return "radiogroup-option-" + this.index;
        },
        priceString() {
            return Dinero({ amount: this.flavor.monthly_gross_price, currency: 'EUR' })
                .setLocale('de-DE')
                .toFormat('0,0.00');
        },
    },
    methods: {
        select() {
            this.$emit('change', this.flavor)
        }
    }
}
</script>
