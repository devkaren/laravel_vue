<template>
    <ShowLayout>
        <div class="my-8">
            <div class="bg-white shadow sm:rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Delete your server
                    </h3>
                    <div class="mt-4 max-w-xl text-sm leading-5 text-gray-500">
                        <h4 class="font-medium text-gray-800 mb-1">Want to cancel your server?</h4>
                        <p>
                            There is no contract you need to cancel. If you don't need your server anymore, just let it run out of time. Just make sure you don't have auto-extension enabled for it and it will be automatically deleted without charging you any more money.
                        </p>

                        <h4 class="font-medium text-gray-800 mb-1 mt-4">I want to cancel now. Can I get a (partial) refund?</h4>
                        <p>
                            If you really want to cancel and delete your server right now you can do so by clicking the button below. However you've committed yourself for your selected runtime and paid for it in advance, so there is no (partial) refund for the remaining runtime.
                        </p>
                    </div>
                    <div class="mt-5">
                        <button type="button" class="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-50 focus:outline-none focus:border-red-300 focus:shadow-outline-red active:bg-red-200 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                            Delete Server
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </ShowLayout>
</template>
<script>
import ShowLayout from '@/components/service/ShowLayout'

export default {
    name: 'Delete',
    components: { ShowLayout }
}
</script>