<template>
    <ProfileLayout>
        <template v-slot:title>Identity Verification</template>

        <div class="rounded-md bg-green-50 p-4 mb-6 shadow" v-if="session.indexOf('verification.success')">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm leading-5 font-medium text-green-800">
                        {{ $t('profile.show.verification.success') }}
                    </p>
                </div>
            </div>
        </div>

        <div class="bg-white shadow overflow-hidden sm:rounded-lg">
            <div class="px-4 py-5 border-gray-200 sm:px-6 border-b">
                <div class="-ml-4 -mt-4 flex justify-between items-center flex-wrap sm:flex-no-wrap">
                    <div class="ml-4 mt-4">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 flex items-center">
                            <span>Identity Verification</span>
                            <span class="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-red-100 text-red-800">
                                Unverified
                            </span>
                        </h3>
                        <p class="mt-1 text-sm leading-5 text-gray-500">
                            This optional and voluntary verification of identity will unlock security sensitive features for your account.
                        </p>
                    </div>
                    <div class="ml-4 mt-4 flex-shrink-0">
                        <span class="inline-flex rounded-md shadow-sm">
                            <form method="POST" action="#">
                                <input type="hidden" name="type">
                                <button type="submit" class="relative inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue focus:border-blue-700 active:bg-blue-700">
                                    <svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    Start Verification
                                </button>
                            </form>
                        </span>
                    </div>
                </div>
            </div>
            <div class="px-4 py-5 sm:px-6 grid grid-cols-1 col-gap-2 row-gap-6 sm:grid-cols-3">
                <div class="col-span-3 sm:col-span-2">
                    <div class="px-4 py-5 sm:py-5">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Why should you perform the identity verification with VPS2day?
                        </h3>
                        <div class="mt-2 text-sm leading-5 ">
                            <p class="text-gray-600 leading-relaxed">
                                Due to a raised amount of fraudulent and abusive activity we've decided to grant several security-sensitive features only to those customers that successfully completed a KYC (know your customer) process.
                            </p>
                            <p class="mt-4 text-gray-600">
                                When starting the verification process you are asked to provide
                            </p>
                            <ul class="list-disc mt-4 space-y-2">
                                <li class="flex items-center gap-x-1 text-gray-600">
                                    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <div>a picture of the <span class="font-medium">front of your ID card</span></div>
                                </li>
                                <li class="flex items-center gap-x-1 text-gray-600">
                                    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <div>and a picture of the <span class="font-medium">back of your ID card</span></div>
                                </li>
                                <li class="flex items-center gap-x-1 text-gray-600">
                                    <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <div>which in both cases is placed on a <span class="font-medium">piece of paper with a verification code</span> that has been written on it.</div>
                                </li>
                            </ul>
                            <p class="mt-6 text-gray-600">
                                After a successful verification of your identity, you'll get access to the following features:
                            </p>
                            <ul class="list-disc mt-4 space-y-2">
                                <li class="flex items-center gap-x-1 text-gray-600">
                                    <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <div>Realtime provisioning of rDNS records <span class="font-medium">without manual confirmation</span></div>
                                </li>
                                <li class="flex items-center gap-x-1 text-gray-600">
                                    <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <div>Ability to order <span class="font-medium">additional IPv4 addresses</span> for your virtual servers</div>
                                </li>
                                <li class="flex items-center gap-x-1 text-gray-600">
                                    <svg class="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>
                                    <div>Ability to order <span class="font-medium">/64 IPv6 subnets</span> for your virtual servers</div>
                                </li>
                            </ul>
                            <p class="mt-6 text-gray-600 leading-relaxed">
                                Of course, all pictures you provide will be permanently deleted after the verification has been carried out.
                            </p>
                            <p class="mt-4 text-gray-700 font-medium">
                                Thank you for helping us conquer and prevent fraudulent and abusive activity at VPS2day.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <form action="#" method="POST" enctype="multipart/form-data">
                <div class="px-4 py-5 sm:px-6 grid grid-cols-1 gap-2 sm:grid-cols-3">
                    <div class="col-span-1 space-y-4">
                        <div>
                            <label class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                                Your Verification Code
                            </label>
                            <div class="text-4xl font-medium font-mono">
                            </div>
                        </div>
                        <div class="text-sm text-gray-700 leading-relaxed">
                            Place your ID card on a piece of paper where your personal verification code is written on (see above).
                            Only then please take pictures of the front and the back of your ID card and upload them on this page.
                        </div>
                        <div class="text-sm text-gray-700 leading-relaxed">
                            Please be aware that we don't accept verification requests where the verification code is wrong or not properly visible.
                        </div>
                        <div class="text-sm text-gray-700 leading-relaxed">
                            In case you experience issues during the verification process please contact our support department.
                        </div>
                    </div>
                    <div class="col-span-1 sm:col-span-2">
                        <div class="space-y-6">
                            <div>
                                <label class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                                    ID Card - Front Picture
                                </label>
                                <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div class="text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="flex items-center justify-center text-sm text-gray-600">
                                            <label for="id_front" class="text-blue-600 hover:text-blue-500 relative cursor-pointer bg-white rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                                <span>Upload a file</span>
                                                <input id="id_front"
                                                       name="id_front"
                                                       type="file"
                                                       class="sr-only"
                                                >
                                            </label>
                                        </div>
                                        <p class="mt-1 text-xs text-gray-500">
                                            PNG or JPG up to 5MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium leading-5 text-gray-700 sm:mt-px sm:pt-2">
                                    ID Card - Back Picture
                                </label>
                                <div class="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div class="text-center">
                                        <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        <div class="flex items-center justify-center text-sm text-gray-600" x-data="{files: null}">
                                            <label for="file-id_back" class="text-blue-600 hover:text-blue-500 relative cursor-pointer bg-white rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                                <span>Upload a file</span>
                                                <input id="file-id_back"
                                                       name="id_back"
                                                       type="file"
                                                       class="sr-only"
                                                >
                                            </label>
                                        </div>
                                        <p class="mt-1 text-xs text-gray-500">
                                            PNG or JPG up to 5MB
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <span class="inline-flex rounded-md shadow-sm">
                        <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition duration-150 ease-in-out">
                            Submit for Verification
                        </button>
                    </span>
                </div>
            </form>
        </div>
    </ProfileLayout>
</template>
<script>
import ProfileLayout from '@/components/profile/ProfileLayout'

export default {
    name: 'Verification',
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