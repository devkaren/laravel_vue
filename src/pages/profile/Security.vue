<template>
    <ProfileLayout>
        <template v-slot:title>Passwort</template>

        <div class="rounded-md bg-green-50 p-4 mb-6 shadow" v-if="session.indexOf('password.update.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-medium text-green-800">
                        {{ $t('profile.show.security.edited') }}
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
                <form method="POST" action="#">
                    <div>
                        <div>
                            <div>
                                <div>
                                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                                        {{ $t('profile.show.security.data') }}
                                    </h3>
                                    <p class="mt-1 text-sm leading-5 text-gray-500">
                                        {{ $t('profile.show.security.description') }}
                                    </p>
                                </div>
                                <div class="grid grid-cols-1 md:grid-cols-6">
                                    <div class="col-span-4">
                                        <div class="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-6">
                                            <div class="sm:col-span-6">
                                                <label for="current_password" class="block text-sm font-medium leading-5 text-gray-700">
                                                    {{ $t('profile.show.security.form.current_password') }}
                                                </label>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <input id="current_password"
                                                           name="current_password"
                                                           class="border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                           type="password"
                                                           required
                                                    />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-3">
                                                <label for="password" class="block text-sm font-medium leading-5 text-gray-700">
                                                    {{ $t('profile.show.security.form.new_password') }}
                                                </label>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <input id="password"
                                                           name="password"
                                                           class="border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                           type="password"
                                                           required
                                                    />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-3">
                                                <label for="password_confirmation" class="block text-sm font-medium leading-5 text-gray-700">
                                                    {{ $t('profile.show.security.form.confirm_password') }}
                                                </label>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <input id="password_confirmation"
                                                           name="password_confirmation"
                                                           class="border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                           type="password"
                                                           required
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 border-t border-gray-200 pt-5">
                        <div class="flex justify-end">
                            <span class="inline-flex rounded-md shadow-sm">
                                <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
                                    <svg viewBox="0 0 20 20" fill="currentColor" class="-ml-1 mr-2 h-5 w-5">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                    </svg>
                                    {{ $t('profile.show.security.form.submit') }}
                                </button>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </ProfileLayout>
</template>
<script>
import ProfileLayout from '@/components/profile/ProfileLayout.vue'

export default {
    name: 'Security',
    components: { ProfileLayout },
    data() {
        return {
            secondFactorQr: '',
            secondFactorSecret: '',
            session: [],
            customer: {
                id: 1,
                registration_completed_at: null,
                first_name: 'first name',
                last_name: 'last name',
                company_name: 'company name',
                address_line_1: 'address line 1',
                address_line_2: 'address line 2',
                zip: '123456',
                city: 'city',
                state: 'state',
            }
        }
    }
}
</script>