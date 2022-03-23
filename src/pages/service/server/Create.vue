<template>
    <AppLayout>
        <template v-slot:header>
            <secondary-nav />
        </template>
        
        <div class="pb-5 border-b border-gray-200 space-y-3 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0 mb-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                Configure your new server
            </h3>
            <span class="inline-flex rounded-md shadow-sm">
                <button type="button" class="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150">
                    Back to overview
                </button>
            </span>
        </div>

        <div class="xl:pb-36">
            <div class="mb-8">
                <div class="bg-white shadow sm:rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Select your datacenter
                        </h3>
                        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                            <p>
                                Choose your desired location from our eight datacenters worldwide. Servers within the same datacenter can be connected using our private networks.
                            </p>
                        </div>
                        <div class="mt-3 text-sm leading-5">
                            <a href="#" class="font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150">
                                Learn more about our datacenters &rarr;
                            </a>
                        </div>

                        <div class="mt-8">
                            <div>
                                <div class="box-border block leading-6 text-gray-700">
                                    <ul class="block clear-both list-inside my-0 p-0 grid grid-cols-4 gap-4">
                                        <datacenter-selection-card v-for="(region, index) in availableRegions" :key="index" :region="region" v-model="selectedCluster">
                                            <template v-slot:logo>
                                                <template v-if="(region.name === 'de')">
                                                    <img class="h-8 w-14" src="@/assets/img/flags/de.svg">
                                                </template>
                                                <template v-else-if="(region.name === 'ee')">
                                                    <img class="h-8 w-14" src="@/assets/img/flags/ee.svg">
                                                </template>
                                                <template v-else-if="(region.name === 'nl')">
                                                    <img class="h-8 w-14" src="@/assets/img/flags/nl.svg">
                                                </template>
                                                <template v-else-if="(region.name === 'ro')">
                                                    <img class="h-8 w-14" src="@/assets/img/flags/ro.svg">
                                                </template>
                                                <template v-else-if="(region.name === 'se')">
                                                    <img class="h-8 w-14" src="@/assets/img/flags/se.svg">
                                                </template>
                                                <template v-else-if="(region.name === 'gb')">
                                                    <img class="h-8 w-14" src="@/assets/img/flags/gb.svg">
                                                </template>
                                                <template v-else-if="(region.name === 'us')">
                                                    <img class="h-8 w-14" src="@/assets/img/flags/us.svg">
                                                </template>
                                                <template v-else-if="(region.name === 'ch')">
                                                    <img class="h-8 w-14" src="@/assets/img/flags/ch.svg">
                                                </template>
                                            </template>
                                        </datacenter-selection-card>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white shadow sm:rounded-lg mt-6">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Select your image
                        </h3>
                        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                            <p>
                                You can either choose to (automatically) install a fresh operating system on your new server or use one of our prebuilt 1-click applications.
                            </p>
                        </div>
                        <div class="mt-3 text-sm leading-5">
                            <a href="#" class="font-medium text-blue-600 hover:text-blue-500 transition ease-in-out duration-150">
                                Learn more about our installation images &rarr;
                            </a>
                        </div>

                        <div class="mt-8">
                            <div>
                                <div class="hidden sm:block">
                                    <nav class="flex">
                                        <a
                                            @click.prevent="imageNavbarSelector = 'distributions'"
                                            :class="(imageNavbarSelector === 'distributions' ? 'text-blue-700 bg-blue-100' : 'text-gray-500 hover:text-gray-700') + 'px-3 py-2 font-medium text-sm leading-5 rounded-md focus:outline-none'"
                                        >
                                            Distributions
                                        </a>
                                        <a
                                            @click.prevent="imageNavbarSelector = '1-click-applications'"
                                            :class="(imageNavbarSelector === 'distributions' ? 'text-blue-700 bg-blue-100' : 'text-gray-500 hover:text-gray-700') + 'px-3 py-2 font-medium text-sm leading-5 rounded-md focus:outline-none'"
                                        >
                                            1-Click Applications
                                        </a>
                                    </nav>
                                </div>
                            </div>
                            <div class="mt-4">
                                <div class="box-border block leading-6 text-gray-700">
                                    <ul class="block clear-both list-inside my-0 p-0 grid grid-cols-4 gap-4">
                                        <image-selection-card v-for="(image, index) in availableImages" :key="index" :image="image" v-model="selectedImage">
                                            <template v-slot:logo>
                                                <template v-if="(image[0].os_type.toLocaleLowerCase() === 'ubuntu')">
                                                    <!--                                                        @include('svg.os.ubuntu')-->
                                                    Ubuntu
                                                </template>
                                                <template v-if="(image[0].os_type.toLocaleLowerCase() === 'debian')">
                                                    <!--                                                        @include('svg.os.debian')-->
                                                    Debian
                                                </template>
                                                <template v-if="(image[0].os_type.toLocaleLowerCase() === 'fedora')">
                                                    Fedora
                                                </template>
                                                <template v-if="(image[0].os_type.toLocaleLowerCase() === 'freebsd')">
                                                    Freebsd
                                                </template>
                                                <template v-if="(image[0].os_type.toLocaleLowerCase() === 'linux')">
                                                    Linux
                                                </template>
                                                <template v-if="(image[0].os_type.toLocaleLowerCase() === 'redhat')">
                                                    Redhat
                                                </template>
                                                <template v-if="(image[0].os_type.toLocaleLowerCase() === 'suse')">
                                                    Suse
                                                </template>
                                                <template v-if="(image[0].os_type.toLocaleLowerCase() === 'windows')">
                                                    Windows
                                                </template>
                                            </template>
                                        </image-selection-card>
                                    </ul>
                                </div>
                            </div>

                            <div class="mt-4 flex items-center text-gray-400 space-x-1 text-xs">
                                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd"></path>
                                </svg>
                                <p>Rapid Deployment Images are usually provisioned within 30 seconds.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white shadow sm:rounded-lg mt-6">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Select flavor and pre-payment
                        </h3>
                        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                            <p>
                                We offer different flavors that are performance-optimized for general workloads. You can up- or downgrade your VPS at any time.
                            </p>
                        </div>

                        <div class="mt-8 grid grid-cols-5 gap-x-6">
                            <div class="col-span-5 md:col-span-3">
                                <div>
                                    <ul class="space-y-4" role="radiogroup" aria-labelledby="radiogroup-label">
                                        <flavor-selection-card
                                            v-model="selectedFlavor"
                                            v-for="(flavor, index) in availableFlavors"
                                            :key="index"
                                            :index="index"
                                            :flavor="flavor"
                                        />
                                    </ul>
                                </div>
                            </div>
                            <div class="col-span-5 md:col-span-2">

                                <div>
                                    <runtime-selection-card
                                        v-model="selectedRuntime"
                                        :runtimes="availableRuntimes"
                                        :has-error="hasError('runtime')"
                                        :selected-flavor="selectedFlavor"
                                        selected-runtime=""
                                    />
                                    <div class="mt-3" v-if="hasError('runtime')"> @{{ firstError('runtime') }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white shadow sm:rounded-lg mt-6">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Finalize
                        </h3>
                        <div class="mt-2 text-sm leading-5 text-gray-500">
                            <p>
                                Please choose your server's hostnames and optionally add SSH keys for a more secure authentication.
                            </p>
                        </div>

                        <div class="mt-4">
                            <div class="grid grid-cols-3 gap-x-8 gap-y-8">
                                <div class="col-span-3">
                                    <label class="leading-5 font-medium text-sm text-gray-700">SSH Keys</label>
                                    <div class="mt-3">
                                        <key-selection-card :available-keys="sshKeys" v-model="selectedKeys"/>
                                    </div>
                                </div>

                                <div class="col-span-3 md:col-span-2">
                                    <label class="leading-5 mb-2 font-medium text-sm text-gray-700">Choose a hostname</label>
                                    <hostname-selector
                                        v-model="hostnames"
                                        :value="[]"
                                        :server-count="serverCount"
                                        :has-error="hasError('hostnames')"
                                        @user-indicated-change="providedOwnHostname = true"
                                    ></hostname-selector>
                                    <div class="mt-3" v-if="hasError('hostnames')">@{{ firstError('names') }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="fixed inset-x-0 bottom-0 z-50">
                    <div v-if="!hasSufficientBalance" class="bg-red-50 border-t border-gray-300">
                        <div class="max-w-screen-xl mx-auto py-4 px-3 sm:px-6 lg:px-8">
                            <div class="flex items-center space-x-2">
                                <svg class="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                                </svg>
                                <div class="text-gray-700 text-sm">
                                    Your current balance is not sufficient to place the selected order. Please <a href="" class="text-blue-600 font-medium hover:undelrine">charge your balance</a> before proceeding.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white border-t border-gray-300">
                        <div class="max-w-screen-xl mx-auto py-6 px-3 sm:px-6 lg:px-8">
                            <div class="flex items-center justify-between flex-wrap">
                                <div class="flex items-start space-x-8">
                                    <div>
                                        <div class="text-gray-600 font-medium text-base mb-3">
                                            How many servers?
                                        </div>
                                        <server-count-selector v-model="serverCount" :max="10" value="" />
                                    </div>
                                    <div>
                                        <div class="text-gray-600 font-medium text-base mb-3">
                                            Immediate Payment
                                        </div>
                                        <div class="text-gray-800 font-medium text-2xl">
                                            &euro; @{{ priceString }} EUR
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-end items-center space-x-6">
                                    <div v-if="errorMessage" class="text-xs text-red-500">
                                        @{{ errorMessage }}
                                    </div>
                                    <div v-else class="text-xs text-gray-500">
                                        By ordering a server you are accepting our terms of service.
                                    </div>

                                    <span class="inline-flex rounded-md shadow-sm">
                                        <button type="button" @click="submit" :class="loading || !submittable ? 'cursor-not-allowed bg-blue-300' : 'bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700'" class="inline-flex items-center px-6 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white transition ease-in-out duration-150">
                                            <svg v-if="loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                                                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Order now
                                        </button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout'
import SecondaryNav from '@/components/service/SecondaryNav'
import NoTableEntries from '@/components/service/NoTableEntries'
import DatacenterSelectionCard from '@/components/service/selectors/DatacenterSelectionCard'
import ImageSelectionCard from '@/components/service/selectors/ImageSelectionCard'
import FlavorSelectionCard from '@/components/service/selectors/FlavorSelectionCard'
import RuntimeSelectionCard from '@/components/service/selectors/RuntimeSelectionCard'
import KeySelectionCard from '@/components/service/selectors/KeySelectionCard'
import HostnameSelector from '@/components/service/selectors/HostnameSelector'
import ServerCountSelector from '@/components/service/selectors/ServerCountSelector'
import Dinero from 'dinero.js'

export default {
    name: 'Create',
    components: {
        ServerCountSelector,
        HostnameSelector,
        KeySelectionCard,
        RuntimeSelectionCard,
        FlavorSelectionCard,
        ImageSelectionCard,
        DatacenterSelectionCard,
        NoTableEntries,
        SecondaryNav,
        AppLayout
    },
    data() {
        return {
            imageNavbarSelector: 'distributions',
            regions: [],
            region: {
                name: 'gb'
            },
            images: [],
            flavors: [],
            sshKeys: [],
            availableRegions: [],
            availableRuntimes: [],
            runtimes: [],
            customer: {
                id: 1,
                fullName: 'Name surname',
                first_name: 'Name',
                last_name: 'surname',
                balance: 0,
            },

            selectedCluster: {},
            selectedImage: {},
            selectedFlavor: {},
            selectedRuntime: {},
            selectedKeys: [],

            availableClusters: [],
            availableImages: [],
            availableFlavors: [],

            serverCount: 1,
            hostnames: [],
            price: 0,

            errors: {},
            loading: false,
            errorMessage: '',
            providedOwnHostname: false,
        };
    },
    watch: {
        selectedRegion: function() {
            let currentImage = this.selectedImage;
            let currentFlavor = this.selectedFlavor;

            this.selectedImage = {};
            this.selectedFlavor = {};

            this.availableImages = this.selectedCluster.images;
            for (let { name } in this.availableImages) {
                if (name === currentImage.name) {
                    this.selectedImage = currentImage;
                }
            }

            // if (_.isEmpty(this.selectedImage)) {
            //     this.selectedImage = this.availableImages[0];
            // }

            this.availableFlavors = this.selectedImage.flavors;
            for (let { name } in this.availableFlavors) {
                if (name === currentFlavor.name) {
                    this.selectedFlavor = currentFlavor;
                }
            }

            // if (_.isEmpty(this.selectedFlavor)) {
            //     this.selectedFlavor = this.availableFlavors[0];
            // }

            this.updatePrice();
        },
        selectedImage: function() {
            let currentFlavor = this.selectedFlavor;

            this.selectedFlavor = {};

            this.availableFlavors = this.selectedImage.flavors;
            for (let { name } in this.availableFlavors) {
                if (name === currentFlavor.name) {
                    this.selectedFlavor = currentFlavor;
                }
            }

            // if (_.isEmpty(this.selectedFlavor)) {
            //     this.selectedFlavor = this.availableFlavors[0];
            // }

            this.updatePrice();
        },
        selectedFlavor: function() {
            this.updatePrice();
        },
        selectedRuntime: function() {
            this.updatePrice();
        },
        serverCount: function() {
            if (!this.providedOwnHostname) {

            }

            this.updatePrice();
        },
    },
    methods: {
        updatePrice() {
            this.price = Dinero({ amount: this.selectedFlavor.monthly_gross_price, currency: 'EUR' })
                .multiply(this.selectedRuntime.months)
                .multiply(100 - this.selectedRuntime.discount_relative ?? 0)
                .divide(100)
                .multiply(this.serverCount)
                .getAmount()
        },
        submit() {
            if (!this.submittable) {
                return false;
            }

            if (this.loading) {
                return false;
            } else {
                this.loading = true;
            }

            this.errorMessage = '';

            let formData = {
                quantity: this.serverCount,
                datacenter: this.selectedCluster.name,
                image: this.selectedImage.name,
                flavor: this.selectedFlavor.name,
                runtime: this.selectedRuntime.months,
                sshKeys: this.selectedKeys ?? [],
                hostnames: this.hostnames ?? [],
            };

            // axios.post(`/service/server`, formData).then(res => {
            //     window.location.replace(`/service/server`);
            // }).catch(err => {
            //     if (err.response.status === 419) {
            //         // Page Expired
            //         this.errorMessage = 'This page expired. Please reload this browser tab.'
            //     } else if (err.response.status === 422) {
            //         // Input Error
            //         this.errors = err.response.data.errors;
            //         this.errorMessage = 'Please check the form for missing fields.'
            //     } else {
            //         // Server Error
            //         this.errorMessage = 'We are currently experiencing technical issues. Please try again later.'
            //     }
            //
            //     this.loading = false;
            // });
        },
        generateHostname(index) {
            return 'hostname-' + index;
        },
        hasError(field) {
            return Object.keys(this.errors).includes(field)
        },
        firstError(field) {
            return this.errors[field]?.[0];
        },
    },
    computed: {
        priceString() {
            return Dinero({ amount: this.price, currency: 'EUR' })
                .setLocale('de-DE')
                .toFormat('0,0.00');
        },
        hasSufficientBalance() {
            return Dinero({ amount: this.price, currency: 'EUR' })
                .lessThanOrEqual(Dinero({ amount: this.customer.balance, currency: 'EUR' }));
        },
        submittable() {
            return this.hasSufficientBalance;
        }
    },
    mounted() {
        // Pre-select all relevant values to have an instant and valid price starting point.
        // this.selectedCluster = this.availableRegions[0].clusters[0];
        // this.availableClusters = this.availableRegions[0].clusters;
        //
        // let firstImageKey = Object.keys(this.selectedCluster.images)[0];
        // this.selectedImage = this.selectedCluster.images[firstImageKey][0];
        // this.availableImages = this.selectedCluster.images;
        //
        // this.selectedFlavor = this.selectedImage.flavors[0];
        // this.availableFlavors = this.selectedImage.flavors;
        //
        // this.selectedRuntime = this.availableRuntimes[0];
        //
        // this.updatePrice()
    }
}
</script>