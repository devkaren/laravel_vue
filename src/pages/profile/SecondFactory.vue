<template>
    <ProfileLayout>
        <template v-slot:title>Zwei-Faktor Authentifizierung</template>

        <div class="rounded-md bg-green-50 p-4 mb-6 shadow" v-if="session.indexOf('second-factor.verify.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-medium text-green-800">
                        {{ $t('profile.show.second-factor.enable.success') }}
                    </p>
                </div>
            </div>
        </div>

        <div class="rounded-md bg-green-50 p-4 mb-6 shadow" v-if="session.indexOf('second-factor.disabled.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-medium text-green-800">
                        {{ $t('profile.show.second-factor.disable.success') }}
                    </p>
                </div>
            </div>
        </div>

        <form action="#" method="POST">
            <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                    <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
                        <div class="ml-4 mt-4">
                            <h3 class="text-lg leading-6 font-medium text-gray-900 flex items-center">
                                <span>Zwei-Faktor-Authentifizierung</span>
                                <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-red-100 text-red-800">
                                    Nicht aktiviert
                                </span>
                            </h3>
                            <p class="mt-1 text-sm leading-5 text-gray-500">
                                Nach Aktivierung benötigst du deinen zweiten Faktor bei jeder Anmeldung. Die Nutzung wird dringend empfohlen.
                            </p>
                        </div>
                        <div class="ml-4 mt-4 flex-shrink-0">
                        <span class="inline-flex rounded-md shadow-sm">
                            <button type="submit" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700">
                                <svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
                                Aktivieren
                            </button>
                        </span>
                        </div>
                    </div>
                </div>
                <div class="px-4 py-5 sm:px-6 grid grid-cols-1 col-gap-2 row-gap-6 sm:grid-cols-3">
                    <div class="col-span-1 flex items-center justify-center flex-col">
                        <img :src="secondFactorQr" :alt="secondFactorSecret">
                    </div>
                    <div class="col-span-1 sm:col-span-2">
                        <div class="px-4 py-5 sm:py-5">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Aktiviere die Zwei-Faktor-Authentifizierung für deinen Account
                            </h3>
                            <div class="mt-2 text-sm leading-5 ">
                                <p class="text-gray-500">
                                    Nutze den QR-Code oder den unten stehenden 16-stelligen Code, um auf deinem Authenticator die Zwei-Faktor-Authentifizierung für diese Seite zu aktivieren.<br><br>
                                    Bitte bestätige anschließend die korrekte Erfassung mit der Eingabe eines Zwei-Faktor-Codes.
                                </p>
                                <div class="mt-2 max-w-md">
                                    <div class="relative rounded-md shadow-sm">
                                        <input id="code"
                                               name="code"
                                               class="form-input block w-full sm:text-sm sm:leading-5"
                                               placeholder="Dein Code"
                                        >
                                    </div>
                                </div>
                                <p class="mt-2 text-gray-500 text-xs">
                                    Sollte dein Passwort-Manager keine QR-Codes lesen können, gib bitte <span class="font-mono text-gray-800">{{ secondFactorSecret }}</span> als TOTP-Secret an.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </ProfileLayout>
</template>
<script>
import ProfileLayout from '@/components/profile/ProfileLayout'

export default {
    name: 'SecondFactory',
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