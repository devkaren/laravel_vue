<template>
    <ProfileLayout>
        <template v-slot:title>Persönliche Daten</template>

        <div class="rounded-md bg-blue-50 p-4 mb-6 mt-6 shadow" v-if="customer.registration_completed_at == null">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                    </svg>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm leading-5 font-medium text-blue-800">
                        {{ $t('dashboard.open_tickets') }}
                    </h3>
                    <div class="mt-2 text-sm leading-5 text-blue-700">
                        <p>
                            {{ $t('profile.show.welcome_message') }}
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-green-50 p-4 mb-6 shadow" v-if="session.indexOf('profile.update.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-medium text-green-800">
                        {{ $t('profile.show.edited') }}
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
                                        {{ $t('profile.show.personal-data.data') }}
                                    </h3>
                                    <p class="mt-1 text-sm leading-5 text-gray-500">
                                        {{ $t('profile.show.personal-data.description') }}
                                    </p>
                                </div>

                                <div class="grid grid-cols-1 md:grid-cols-6">
                                    <div class="col-span-4">
                                        <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                            <div class="sm:col-span-3">
                                                <label for="first_name" class="block text-sm font-medium leading-5 text-gray-700">
                                                    {{ $t('profile.show.personal-data.form.first_name') }}
                                                </label>
                                                <div class="mt-1 rounded-md shadow-sm">
                                                    <input id="first_name"
                                                           class="bg-gray-100 border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                           :value="customer.first_name"
                                                           disabled
                                                    />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-3">
                                                <label for="last_name" class="block text-sm font-medium leading-5 text-gray-700">
                                                    {{ $t('profile.show.personal-data.form.last_name') }}
                                                </label>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <input id="last_name"
                                                           class="bg-gray-100 border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                           :value="customer.last_name"
                                                           disabled
                                                    />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-6">
                                                <div class="flex justify-between">
                                                    <label for="company_name" class="block text-sm font-medium leading-5 text-gray-700">
                                                        Company
                                                    </label>
                                                    <span class="text-sm leading-5 text-gray-500">
                                                        {{ $t('profile.show.personal-data.optional') }}
                                                    </span>
                                                </div>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <input id="company_name"
                                                           name="company_name"
                                                           type="text"
                                                           :value="customer.company_name"
                                                           class="border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                    />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-6">
                                                <label for="address_line_1" class="block text-sm font-medium leading-5 text-gray-700">
                                                    {{ $t('profile.show.personal-data.form.address_line_1') }}
                                                </label>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <input id="address_line_1"
                                                           name="address_line_1"
                                                           type="text"
                                                           :value="customer.address_line_1"
                                                           class="border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                           required
                                                    />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-6">
                                                <div class="flex justify-between">
                                                    <label for="address_line_2" class="block text-sm font-medium leading-5 text-gray-700">
                                                        {{ $t('profile.show.personal-data.form.address_line_2') }}
                                                    </label>
                                                    <span class="text-sm leading-5 text-gray-500">
                                                        {{ $t('profile.show.personal-data.optional') }}
                                                    </span>
                                                </div>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <input id="address_line_2"
                                                           name="address_line_2"
                                                           type="text"
                                                           :value="customer.address_line_2"
                                                           class="border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                    />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-1">
                                                <label for="zip" class="block text-sm font-medium leading-5 text-gray-700">
                                                    {{ $t('profile.show.personal-data.form.zip') }}
                                                </label>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <input id="zip"
                                                           name="zip"
                                                           type="text"
                                                           :value="customer.zip"
                                                           class="border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                           required
                                                    />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-3">
                                                <label for="city" class="block text-sm font-medium leading-5 text-gray-700">
                                                    {{ $t('profile.show.personal-data.form.city') }}
                                                </label>
                                                <div class="mt-1 relative rounded-md shadow-sm">
                                                    <input id="city"
                                                           name="city"
                                                           type="text"
                                                           :value="customer.city"
                                                           class="border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                           required
                                                    />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-2">
                                                <div class="flex justify-between">
                                                    <label for="state" class="block text-sm font-medium leading-5 text-gray-700">
                                                        {{ $t('profile.show.personal-data.form.state') }}
                                                    </label>
                                                    <span class="text-sm leading-5 text-gray-500">
                                                        {{ $t('profile.show.personal-data.optional') }}
                                                    </span>
                                                </div>
                                                <div class="relative mt-1 rounded-md shadow-sm">
                                                    <input id="state"
                                                           name="state"
                                                           type="text"
                                                           :value="customer.state"
                                                           class="border-gray-300 placeholder-gray-400 focus:border-blue-300 focus:shadow-outline-blue appearance-none block w-full px-3 py-2 border rounded-md focus:outline-none transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                    />
                                                </div>
                                            </div>

                                            <div class="sm:col-span-6">
                                                <label for="country_id" class="block text-sm font-medium leading-5 text-gray-700">
                                                    {{ $t('profile.show.personal-data.form.country_id') }}
                                                </label>
                                                <div class="mt-1 rounded-md shadow-sm">
                                                    <select id="country_id" name="country_id" class="form-select block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5">
                                                        <option v-for="country in countries" :key="country.id">
                                                            {{ $t('countries' + country.code) }}
                                                        </option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-8 border-t border-gray-200 pt-5">
                        <div class="flex justify-between items-start">
                            <p class="text-xs text-gray-600 inline-flex items-center gap-x-1">
                                <svg class="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                Intentionally providing wrong customer data may result in a suspension of your account.
                            </p>
                            <span class="ml-3 inline-flex rounded-md shadow-sm">
                            <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
                                <svg viewBox="0 0 20 20" fill="currentColor" class="-ml-1 mr-2 h-5 w-5">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                </svg>
                                {{ $t('profile.show.personal-data.form.submit') }}
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
import ProfileLayout from '@/components/profile/ProfileLayout'

export default {
    name: 'PersonalData',
    components: { ProfileLayout },
    data() {
        return {
            session: [],
            countries: [],
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