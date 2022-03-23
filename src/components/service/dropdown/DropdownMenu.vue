<template>
    <div v-show="active" class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg z-50">
        <slot/>
    </div>
</template>

<script>
export default {
    name: 'DropdownMenu',
    // inject: ['sharedState'],
    computed: {
        active() {
            return false;
            // return this.sharedState.active
        },
    }
}
</script>

<style scoped>

</style>
