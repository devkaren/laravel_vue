<template>
    <ShowLayout>
        <div class="my-8">
<!--            <iframe src="{!! $vncFrameUrl !!}" width="100%" height="800px"></iframe>-->
        </div>
        <div class="my-6 flex items-center space-x-8">
            <span class="inline-flex rounded-md shadow-sm">
                <a href="#" target="_blank" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
                    <svg class="-ml-0.5 mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                    </svg>
                    Open in new tab
                </a>
            </span>
            <div class="text-gray-700 text-sm">
                The server's initial password was set to
<!--                <span class="font-mono text-blue-600">{{ $server->initial_password }}</span>-->
            </div>
        </div>
    </ShowLayout>
</template>
<script>
import ShowLayout from '@/components/service/ShowLayout'

export default {
    name: 'Vnc',
    components: { ShowLayout },
}
</script>