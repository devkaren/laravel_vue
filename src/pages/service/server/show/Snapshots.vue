<template>
    <ShowLayout>
        <div class="my-8">
            <div class="grid grid-cols-6 gap-x-6 gap-y-6">
                <div class="col-span-6 md:col-span-4">
                    <div class="align-middle inline-block min-w-full">
                        <div class="shadow border-b border-gray-200 sm:rounded-lg">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead>
                                <tr>
                                    <th class="rounded-tl-lg px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Disk
                                    </th>
                                    <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Created at
                                    </th>
                                    <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Size
                                    </th>
                                    <th class="px-6 py-3 bg-white text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                        Format
                                    </th>
                                    <th class="rounded-tr-lg px-6 py-3 bg-white"></th>
                                </tr>
                                </thead>
                                <tbody class="bg-transparent divide-y divide-gray-200">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div class="col-span-6 md:col-span-2 grid grid-cols-1 gap-y-6">
                    <div class="col-span-1 bg-white shadow sm:rounded-lg">
                        <div class="px-4 py-5 sm:p-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Snapshot Slots
                            </h3>
                            <div class="mt-2">
                                <div class="max-w-xl text-sm leading-5 text-gray-500">
                                    <p>
                                        Each of your snapshots uses a single slot. If all of your slots are used, you need to delete an old snapshot before you can create a new one.
                                    </p>
                                </div>
                            </div>
                            <div class="mt-5">
                                <div class="relative pt-1">
                                    <div class="overflow-hidden h-2 mb-2 text-xs flex rounded bg-blue-200">
                                        <div style="width: 0%" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                                    </div>
                                    <div class="text-sm text-gray-500">
<!--                                        @if ($server->facts()->snapshotSlots() > 0)-->
<!--                                        <span class="font-semibold">{{ count($snapshots) }}</span> of <span class="font-semibold">{{ $server->facts()->backupSlots() }}</span> slots in use-->
<!--                                        @else-->
                                        You don't have any slots for this server.
<!--                                        @endif-->
                                    </div>
                                </div>
                                <div class="mt-4" v-if="server.facts.snapshotSlots.length">
<!--                                    @if (count($snapshots) < $server->facts()->snapshotSlots())-->
<!--                                    <form method="POST" action="#">-->
<!--                                        @csrf-->
<!--                                        <span class="inline-flex rounded-md shadow-sm">-->
<!--                                                <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">-->
<!--                                                    Create Snapshot-->
<!--                                                </button>-->
<!--                                            </span>-->
<!--                                    </form>-->
<!--                                    @else-->
                                    <span class="inline-flex rounded-md shadow-sm">
                                        <button type="button" class="cursor-not-allowed inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-400 transition ease-in-out duration-150">
                                            Create Snapshot
                                        </button>
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

export default {
    name: 'Snapshots',
    components: { ShowLayout },
    data() {
        return {
            server: {
                facts: {
                    snapshotSlots: []
                }
            }
        };
    }
}
</script>