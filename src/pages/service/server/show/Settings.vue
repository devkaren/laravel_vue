<template>
    <ShowLayout>
        <div class="my-8">
            <form action="#" method="POST">
                <div class="shadow sm:rounded-md sm:overflow-hidden">
                    <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
                        <fieldset>
                            <legend class="text-base leading-6 font-medium text-gray-900">General Settings</legend>
                            <div class="mt-4">
                                <div class="flex items-start">
                                    <div class="h-5 flex items-center">
                                        <input id="auto_extend"
                                               name="auto_extend"
                                               value="1"
                                               type="checkbox"
                                               class="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                                        >
                                    </div>
                                    <div class="ml-3 text-sm leading-5">
                                        <label for="auto_extend" class="font-medium text-gray-700">Auto-Extension</label>
                                        <p class="text-gray-500">Renews this server automatically for <span class="font-semibold">1 month</span> as long as you have enough balance on your account.</p>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <span class="inline-flex rounded-md shadow-sm">
                        <button type="submit" class="bg-blue-600 border border-transparent rounded-md py-2 px-4 inline-flex justify-center text-sm leading-5 font-medium text-white hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                            Save Settings
                        </button>
                    </span>
                    </div>
                </div>
            </form>
        </div>
    </ShowLayout>
</template>
<script>
import ShowLayout from '@/components/service/ShowLayout'

export default {
    name: 'Settings',
    components: { ShowLayout }
}
</script>