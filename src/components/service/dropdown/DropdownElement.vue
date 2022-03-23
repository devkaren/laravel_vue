<template>
        <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <slot>
                <a @click="$emit('selection', value ? value : option)" class="flex px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 flex justify-between items-center" role="menuitem">
                    {{ option }}
                    <slot name="note" :value="value"/>
                </a>
            </slot>
        </div>
</template>

<script>
export default {
    name: 'DropdownElement',
    props: {
        option: {
            type: String,
            required: true
        },
        value: {
            required: false
        }
    },
}
</script>