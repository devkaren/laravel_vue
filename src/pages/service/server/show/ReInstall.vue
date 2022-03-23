<template>
    <ShowLayout>
        <div class="my-8">
            <div class="mb-8">
                <div class="bg-white shadow sm:rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Reinstall your server
                        </h3>
                        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                            <p>
                                Please choose the operating system your server shall be reinstalled with. Please be aware that reinstalling your server will
                                delete all of your data that is currently stored on the server's boot disk. Additional disks are not affected.
                            </p>
                        </div>
                        <div class="mt-8">
                            <div class="mt-4">
                                <div class="box-border block leading-6 text-gray-700">
                                    <ul class="block clear-both list-inside my-0 p-0 grid grid-cols-4 gap-4">
                                        <image-selection-card v-for="(image, index) in images" :key="index"
                                                              :image="image"
                                                              v-model="selectedImage"
                                        >
                                            <template v-slot:logo>
                                                <template v-if="(image[0].os_type.toLocaleLowerCase() === 'ubuntu')">
                                                    <!--                                                        @include('svg.os.ubuntu')-->
                                                    Ubuntu
                                                </template>
                                                <template v-if="(image[0].os_type.toLocaleLowerCase() === 'debian')">
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
                                <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                                          clip-rule="evenodd"></path>
                                </svg>
                                <p>Rapid Deployment Images are usually provisioned within 30 seconds.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-white shadow sm:rounded-lg mt-6">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Confirm
                        </h3>
                        <div class="mt-2 sm:flex sm:items-start sm:justify-between">
                            <div class="max-w-xl text-sm leading-5 text-gray-500">
                                <p>
                                    Your server <span class="font-medium">{{ server.alias ?? server.fqdn }}</span> will be reinstalled with the operating system selected above. All data that is located on the server's boot disk will be deleted during the process.
                                </p>
                            </div>
                            <div class="flex-column ">
                                <div class="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center sm:space-x-6 justify-end">
                                    <a href="#" class="text-gray-700 font-medium text-sm">Cancel</a>
                                    <span class="inline-flex rounded-md shadow-sm">
                                    <button type="button" @click="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
                                        Reinstall Server
                                    </button>
                                </span>
                                </div>
                                <div v-cloak v-show="error.active" class="pt-3 mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center sm:space-x-6">
                                    <span class="inline-flex text-center text-sm text-red-600">
                                        @{{ error.message }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ShowLayout>
</template>
<script>
import ShowLayout from '@/components/service/ShowLayout'
import ImageSelectionCard from '@/components/service/selectors/ImageSelectionCard'

export default {
    name: 'ReInstall',
    components: {ImageSelectionCard, ShowLayout },
    mounted() {
        for (let item in this.images) {
            this.images[item].forEach(image => {
                // Automatically pre-select the image that is currently installed.
                if (this.server.image_id === image.id) {
                    this.selectedImage = image;
                }
            });
        }
    },
    data() {
        return {
            images: [],
            server: {
                alias: 'Server Alias',
            },
            selectedImage: null,
            error: {
                active: false,
                message: ""
            },
        }
    },
    methods: {
        selectImage(image) {
            this.selectedImage = image;
        },
        selection(event) {
            this.selectedImage = event;
        },
        submit() {
            // axios.post(`/service/server/${this.server.uuid}/redeploy`, {
            //     image: this.selectedImage,
            // }).then(() => {
            //     window.location.replace(`/service/server/${this.server.uuid}`)
            // }).catch(err => {
            //     this.error = {
            //         active: true,
            //         message: err.response.data
            //     }
            // });
        }
    }
}
</script>