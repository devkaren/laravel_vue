<template>
    <ShowLayout>
        <div class="mt-8 mb-8">
            <div class="grid grid-cols-3 gap-6 mt-6">
                <div class="col-span-2">
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                General Information
                            </h3>
                        </div>
                        <div class="px-4 py-5 sm:px-6">
                            <dl class="grid grid-cols-1 col-gap-4 row-gap-4 sm:grid-cols-4">
                                <div class="sm:col-span-1">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Region
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900">
                                        <div class="inline-flex items-center">
                                            <img class="h-3 w-5 mr-1" :src="'/src/assets/img/flags/' + server.cluster.region.name + '.svg'">
                                            <span>{{ $t('countries.' + server.cluster.region.name) }} / {{ server.cluster.region.name }}</span>
                                        </div>
                                    </dd>
                                </div>
                                <div class="sm:col-span-1">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Datacenter
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900">
                                        {{ server.cluster.region.alias ?? server.cluster.region.name }}
                                    </dd>
                                </div>
                                <div class="sm:col-span-1">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Typ
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900">
                                        example
<!--                                        {{ server.flavor.alias ?? server.flavor.name }}-->
                                    </dd>
                                </div>
                                <div class="sm:col-span-1">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Price
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900">
                                        &euro; 55 / month
<!--                                        &euro; {{ $server->facts()->monthlyPrice()->formatted() }} / month-->
                                    </dd>
                                </div>

                                <div class="sm:col-span-1">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Remaining Runtime
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900">
                                        2 days left
<!--                                        {{ $server->remaining_days }} days left-->
                                    </dd>
                                </div>

                                <div class="sm:col-span-1">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Paid until
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900">
<!--                                        {{ $server->extended_until->format('Y-m-d') }}-->
                                    </dd>
                                </div>

                            </dl>
                        </div>
                    </div>
                </div>

                <div class="col-span-1 row-span-3">
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Technical Information
                            </h3>
                        </div>
                        <div class="px-4 py-5 sm:px-6">
                            <dl class="grid grid-cols-1 col-gap-4 row-gap-4 sm:grid-cols-2">
<!--                                @if (optional($server->primaryPort())->hasAllocation(4))-->
                                <div class="sm:col-span-2">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Main IPv4 Address
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900">
                                        129.144.50.56
<!--                                        {{ // $server->primaryPort()->obtainAllocation(4)->ip_address }}-->
                                    </dd>
                                </div>
<!--                                @endif-->
<!--                                @if (optional($server->primaryPort())->hasAllocation(6))-->
                                <div class="sm:col-span-2">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Main IPv6 Address
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900">
                                        88.56.999.4
<!--                                        {{ $server->primaryPort()->obtainAllocation(6)->ip_address }}-->
                                    </dd>
                                </div>
<!--                                @endif-->
                                <div class="sm:col-span-2">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        CPU
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900">
                                        7 vCore(s)
<!--                                        {{ $server->facts()->cores() }} vCore(s)-->
                                    </dd>
                                </div>
                                <div class="sm:col-span-2">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        RAM
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900">
                                        512 MiB
<!--                                        {{ $server->facts()->memory() }} MiB-->
                                    </dd>
                                </div>
                                <div class="sm:col-span-2">
                                    <dt class="text-sm leading-5 font-medium text-gray-500">
                                        Disk Space (SSD)
                                    </dt>
                                    <dd class="mt-1 text-sm leading-5 text-gray-900">
                                        10 GB
<!--                                        {{ $server->flavor->disk }} GB-->
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </div>

                <div class="col-span-2">
                    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div class="px-4 py-5 border-b border-gray-200 sm:px-6">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                Pricing
                            </h3>
                        </div>
                        <div>
                            <div class="flex flex-col">
                                <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                        <div class="shadow overflow-hidden border-b border-gray-200">
                                            <table class="min-w-full divide-y divide-gray-200">
                                                <thead>
                                                <tr>
                                                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                        Description
                                                    </th>
                                                    <th class="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                        Type
                                                    </th>
                                                    <th class="px-6 py-3 bg-gray-50 text-right text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                                                        Monthly Price
                                                    </th>
                                                    <th class="px-6 py-3 bg-gray-50"></th>
                                                </tr>
                                                </thead>
                                                <tbody class="bg-white divide-y divide-gray-200">
                                                <tr>
                                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
<!--                                                        {{ // $server->flavor->alias }}-->
                                                        Alias
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
                                                        <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800">
                                                            Server
                                                        </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-no-wrap text-sm text-right leading-5 text-gray-500">
                                                        12
<!--                                                        {{ // $server->facts()->monthlyFlavorPrice()->formatted(true) }}-->
                                                    </td>
                                                </tr>
                                                <tr v-for="disk in server.disks">
                                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                                        <div>{{ disk.alias }}</div>
                                                        <div class="font-normal text-gray-500 text-xs">
                                                            {{ disk.size }} GB {{ disk.storageClass.name }}
<!--                                                            @if ($disk->cancelled_at)-->
                                                            &bull; Cancelled
<!--                                                            @endif-->
                                                        </div>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
                                                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-indigo-100 text-indigo-800">
                                                                Disk
                                                            </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-no-wrap text-sm text-right leading-5 text-gray-500">
                                                        {{ disk.monthlyGrossPriceMoney }}
                                                    </td>
                                                    <td class="px-6 py-4 text-right text-sm leading-5">
<!--                                                        @if ($disk->cancelled_at)-->
<!--                                                        <livewire:customer.service.server.disk.undo-cancellation-disk-modal :server="$server" :section="$section" :disk="$disk" />-->
<!--                                                        @else-->
<!--                                                        <livewire:customer.service.server.disk.cancel-disk-modal :server="$server" :section="$section" :disk="$disk" />-->
<!--                                                        @endif-->
                                                    </td>
                                                </tr>
                                                <tr v-for="upgrade in server.upgrades">
                                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900">
                                                        {{ upgrade['upgrade'].name }}
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium">
                                                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">
                                                                Upgrade
                                                            </span>
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-no-wrap text-sm text-right leading-5 text-gray-500">
                                                        {{ upgrade.monthly_price }}
                                                    </td>
                                                    <td class="px-6 py-4 whitespace-no-wrap text-right text-sm leading-5 font-medium">
                                                        <a href="#" class="text-blue-600 hover:text-blue-900">Cancel</a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td></td>
                                                    <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-left font-medium text-gray-900">
                                                        Total
                                                    </td>
                                                    <td class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 font-medium">
                                                        112
<!--                                                        {{ $server->facts()->monthlyPrice()->formatted(true) }}-->
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
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
    name: 'Overview',
    components: { ShowLayout },
    data() {
        return {
            server: {
                disks: [],
                upgrades: [],
                cluster: {
                    region: {
                        name: 'gb',
                        alias: 'GB',
                    }
                }
            }
        };
    }
}
</script>