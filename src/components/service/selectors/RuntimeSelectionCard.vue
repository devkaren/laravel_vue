<template>
    <div :class="{ 'border-red-500': this.hasError }" class="rounded-md">
        <ul class="relative bg-white rounded-md -space-y-px">
            <li v-for="(runtime, index) in runtimes" :key="index">
                <div :class="[
                    selected(runtime) ? 'bg-blue-50 border-blue-200 z-10' : 'border-gray-200',
                    index === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                    index === runtimes.length-1 ? 'rounded-bl-md rounded-br-md' : ''
                ]"
                     class="relative border p-4 flex flex-col md:pl-4 md:pr-6 md:grid md:grid-cols-3" @change="select(runtime)">
                    <label class="flex items-center text-sm leading-5 space-x-3 cursor-pointer">
                        <input :checked="selected(runtime)" :value="runtime" name="pricing_plan" type="radio" class="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out cursor-pointer" :aria-describedby="String('plan-option-pricing-'+index + 'plan-option-limit-'+index)">
                        <span class="font-medium text-gray-900">{{ runtime.months }} {{ runtime.months === 1 ? 'month' : 'months' }}</span>
                    </label>

                    <p :id="String('plan-option-pricing-'+index)" class="ml-6 pl-1 text-sm leading-5 md:ml-0 md:pl-0 md:text-center">
                        <span :class="[ selected(runtime) ? 'text-blue-900' : 'text-gray-900' ]" class="font-medium">&euro; {{ priceString(runtime) }}</span>
                    </p>

                    <p id="plan-option-limit-0" :class="[ selected(runtime) ? 'text-blue-700' : 'text-gray-500' ]" class="ml-6 pl-1 text-sm leading-5 md:ml-0 md:pl-0 md:text-right">
                        <span v-if="runtime.discount_relative > 0" :class="[ selected(runtime) ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800' ]" class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4">
                            {{ runtime.discount_relative }}&percnt; discount
                        </span>
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Dinero from 'dinero.js';

export default {
    name: 'RuntimeSelectionCard',
    model: {
        prop: 'selectedRuntime',
        event: 'change',
    },
    props: {
        hasError: {
            type: Boolean,
            default: false
        },
        runtimes: {
            required: true,
            type: Array
        },
        selectedFlavor: null,
        selectedRuntime: { required: true },
    },
    methods: {
        select(event) {
            this.$emit('change', event)
        },
        selected(runtime) {
            return runtime === this.selectedRuntime
        },
        priceString(runtime) {
            return Dinero({ amount: this.selectedFlavor.monthly_gross_price ?? 0, currency: 'EUR' })
                .multiply(runtime.months)
                .multiply(100 - runtime.discount_relative ?? 0)
                .divide(100)
                .setLocale('de-DE')
                .toFormat('0,0.00');
        }
    },
}
</script>
