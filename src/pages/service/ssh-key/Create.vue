<template>
    <AppLayout>
        <template v-slot:header>
            <secondary-nav />
        </template>

        <div class="pb-5 border-b border-gray-200 space-y-3 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0 mb-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                Create SSH-Key
            </h3>
            <div class="flex space-x-3">
            <span class="inline-flex rounded-md shadow-sm">
                <router-link
                    to="/service/ssh-key"
                    class="inline-flex items-center px-4 py-2 border border-gray-300 text-sm leading-5 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150"
                >
                    <svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z" clip-rule="evenodd"></path>
                    </svg>
                    Zur&uuml;ck zur &Uuml;bersicht
                </router-link>
            </span>

<!--                <span class="inline-flex rounded-md shadow-sm">-->
<!--                    <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">-->
<!--                        <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>-->
<!--                        Aus GitHub importieren-->
<!--                    </button>-->
<!--                </span>-->
            </div>
        </div>

        <div>
            <form action="#" method="POST">
                <div class="shadow overflow-hidden sm:rounded-md">
                    <div class="px-4 py-5 bg-white sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 flex items-center">
                            Neuen SSH-Key hinzufügen
                        </h3>
                        <p class="mt-1 text-sm leading-5 text-gray-500">
                            Bei der Installation eines auf Linux basierenden Servers musst du mindestens einen öffentlich SSH-Key mit angeben.
                        </p>

                        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                            <div class="sm:col-span-3">
                                <label for="name" class="block text-sm font-medium leading-5 text-gray-700">Name</label>
                                <div class="mt-1 relative rounded-md shadow-sm">
                                    <input id="name" name="name" class="form-input block w-full sm:text-sm sm:leading-5" aria-describedby="name-description">
                                </div>
<!--                                @error('name')-->
<!--                                <div class="mt-1 text-sm text-red-500">-->
<!--                                    {{ $message }}-->
<!--                                </div>-->
<!--                                @enderror-->
                            </div>
                            <div class="sm:col-span-6">
                                <label for="key" class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                                    Öffentlicher SSH-Key
                                </label>
                                <div class="mt-1">
                                    <div class="max-w-xl flex rounded-md shadow-sm">
                                        <textarea id="key" name="key" rows="4" class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"></textarea>
                                    </div>
<!--                                    @error('key')-->
<!--                                    <p class="mt-2 text-sm text-red-500">Es handelt sich nicht um einen validen öffentlichen SSH-Key.</p>-->
<!--                                    @else-->
<!--                                    <p class="mt-2 text-sm text-gray-500">Ein gültiger öffentlicher SSH-Key beginnt entweder mit <span class="font-mono text-blue-500">ssh-rsa</span> oder mit <span class="font-mono text-blue-500">ssh-ed25519</span>.</p>-->
<!--                                    @enderror-->
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button class="bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:bg-blue-500 active:bg-blue-600 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white shadow-sm transition duration-150 ease-in-out">
                            Speichern
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout'
import SecondaryNav from '@/components/service/SecondaryNav'
import NoTableEntries from '@/components/service/NoTableEntries'

export default {
    name: 'Create',
    components: { NoTableEntries, SecondaryNav, AppLayout }
}
</script>