<template>
    <ShowLayout>
        <div class="my-8 space-y-6">
            <div class="bg-white shadow sm:rounded-lg" v-if="upgrades.length">
                <div class="px-4 py-5 sm:p-6">
                    <div class="flex justify-between items-start">
                        <div>
                            <h3 class="text-lg leading-6 font-medium text-gray-900">
                                {{ upgrade.name }}
                            </h3>
                            <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                                <p>
                                    This upgrade will add the following to your server:
                                </p>
                                <ul class="mt-2 list-disc list-inside">
<!--                                    @if ($upgrade->cores)-->
<!--                                    <li>-->
<!--                                        + {{ $upgrade->cores }} vCore{{ $upgrade->cores > 1 ? 's' : '' }}-->
<!--                                    </li>-->
<!--                                    @endif-->
<!--                                    @if ($upgrade->memory)-->
<!--                                    <li>-->
<!--                                        + {{ $upgrade->memory }} MB RAM-->
<!--                                    </li>-->
<!--                                    @endif-->
<!--                                    @if ($upgrade->traffic)-->
<!--                                    <li>-->
<!--                                        + {{ $upgrade->traffic }} GB full-speed traffic-->
<!--                                    </li>-->
<!--                                    @endif-->
<!--                                    @if ($upgrade->network)-->
<!--                                    <li>-->
<!--                                        + {{ $upgrade->network }} MBit/s network speed-->
<!--                                    </li>-->
<!--                                    @endif-->
<!--                                    @if ($upgrade->limited_network)-->
<!--                                    <li>-->
<!--                                        + {{ $upgrade->limited_network }} MBit/s network speed (when limited)-->
<!--                                    </li>-->
<!--                                    @endif-->
<!--                                    @if ($upgrade->backup_slots)-->
<!--                                    <li>-->
<!--                                        + {{ $upgrade->backup_slots }} Backup Slots-->
<!--                                    </li>-->
<!--                                    @endif-->
                                </ul>
                                <p class="mt-2">
<!--                                    @if ($upgrade->max_per_server)-->
<!--                                    This upgrade can be purchased up to {{ $upgrade->max_per_server }} times for this server.-->
<!--                                    @else-->
                                    You can order this upgrade as many times as you want for this server.
<!--                                    @endif-->
                                    When ordering this upgrade we'll prorate the monthly costs of it to your current runtime. Upon your next runtime extension you'll pay the upgrade's normal monthly price.
                                </p>
                                <div class="mt-2 flex items-center space-x-4" v-if="upgrade.reboot_required">
                                    <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                                    <p>A reboot is required in order to activate this upgrade. We'll automatically restart your server after the purchase has been completed.</p>
                                </div>
                            </div>
                            <div class="mt-5">
                                <form method="POST" action="#">
                                    <span class="inline-flex rounded-md shadow-sm">
                                        <button type="submit" class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
                                            Pay 22 &euro; now
<!--                                            Pay {{ // $upgrade->initial_price_money->formatted() }} &euro; now-->
                                        </button>
                                    </span>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div class="text-xl font-medium">
<!--                                {{ $upgrade->monthly_price_money->formatted() }} &euro; per month-->
                            </div>
                            <div class="text-xl font-medium">
<!--                                {{ $upgrade->initial_price_money->formatted() }} &euro; one off-->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="text-center" v-if="!upgrades.length">
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 20 20" stroke="currentColor" aria-hidden="true">
                    <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
                </svg>

                <h3 class="mt-2 text-sm font-medium text-gray-900">
                    No upgrades available
                </h3>
                <p class="mt-1 text-sm text-gray-500">
                    Currently there are no upgrades available for this server.
                </p>
            </div>
        </div>
    </ShowLayout>
</template>
<script>
import ShowLayout from '@/components/service/ShowLayout'

export default {
    name: 'Upgrade',
    components: { ShowLayout },
    data() {
        return {
            upgrades: []
        };
    }
}
</script>