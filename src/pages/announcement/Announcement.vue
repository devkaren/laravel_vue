<template>
    <AppLayout>
        <template v-slot:header>
            <small-header>
                Customer Announcements
            </small-header>
        </template>

        <div class="mx-4 sm:mx-0" v-if="!announcements.length">
            <div class="rounded-md bg-blue-50 p-4 shadow">
                <div class="flex">
                    <div class="flex-shrink-0">
                        <svg class="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div class="ml-3 flex-1 md:flex md:justify-between">
                        <p class="text-sm leading-5 text-blue-700">
                            Currently, there are no announcements available for you. If you have any trouble with your products, please don't hesitate to contact us.
                        </p>
                        <p class="mt-3 text-sm leading-5 md:mt-0 md:ml-6">
                            <router-link to="/support/ticket" class="whitespace-no-wrap font-medium text-blue-700 hover:text-blue-600 transition ease-in-out duration-150">
                                Customer Support &rarr;
                            </router-link>
                        </p>
                    </div>
                </div>
            </div>
<!--            <div class="bg-white shadow sm:rounded-lg {{ $loop->first ? '' : 'mt-8' }}">-->
<!--                <div class="px-4 py-5 sm:p-6">-->
<!--                    <h3 class="text-lg leading-6 font-medium text-gray-900 flex items-center space-x-2">-->
<!--                        <div>-->
<!--                            @if ($announcement->type === \App\Announcement::TYPE_INFO)-->
<!--                            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>-->
<!--                            @elseif ($announcement->type === \App\Announcement::TYPE_WARNING)-->
<!--                            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>-->
<!--                            @elseif ($announcement->type === \App\Announcement::TYPE_DANGER)-->
<!--                            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>-->
<!--                            @else-->
<!--                            <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>-->
<!--                            @endif-->
<!--                        </div>-->
<!--                        <div>{{ $announcement->title }}</div>-->
<!--                    </h3>-->
<!--                    <div class="mt-1 text-xs text-gray-500">-->
<!--                        @if (is_null($announcement->valid_from))-->
<!--                        Published {{ $announcement->created_at->diffForHumans() }}-->
<!--                        @else-->
<!--                        Published {{ $announcement->valid_from->diffForHumans() }}-->
<!--                        @endif-->
<!--                    </div>-->
<!--                    <div class="mt-4 max-w-xl text-sm text-gray-500">-->
<!--                        <p>-->
<!--                            {!! nl2br($announcement->html) !!}-->
<!--                        </p>-->
<!--                    </div>-->
<!--                    <div class="mt-3 text-sm">-->
<!--                        <a href="{{ route('customer.dashboard.index') }}" class="font-medium text-blue-600 hover:text-blue-500">Back to Dashboard <span aria-hidden="true">&rarr;</span></a>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
        </div>

    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout'
import SmallHeader from '@/components/profile/SmallHeader'

export default {
    name: 'Announcement',
    components: { SmallHeader, AppLayout },
    data() {
        return {
            announcements: []
        };
    }
}
</script>