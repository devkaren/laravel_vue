<template>
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <h1 class="text-lg leading-6 font-semibold text-gray-900">
            <slot/>
        </h1>
    </div>
</template>

<script>
export default {
    name: 'SmallHeader'
}
</script>