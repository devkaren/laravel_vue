<template>
    <AppLayout>
        <template v-slot:header>
            <secondary-nav></secondary-nav>
        </template>
        <div class="mx-4 sm:mx-0">
            <div>
                <nav class="hidden sm:flex items-center text-sm leading-5 font-medium">
                    <a href="#" class="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                        {{ $t('support.ticket.support') }}
                    </a>
                    <svg class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <a href="#" class="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                        {{ $t('support.ticket.tickets') }}
                    </a>
                    <svg class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
                    </svg>
                    <a href="#" class="text-gray-500 hover:text-gray-700 transition duration-150 ease-in-out">
                        {{ $t('support.ticket.ticket') }}  #{{ ticket.id }}
                    </a>
                </nav>
            </div>
            <div class="mt-2 md:flex md:items-center md:justify-between">
                <div class="flex-1 min-w-0">
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate flex items-center">
                        <span class="mr-2">
                            {{ ticket.subject }}
                        </span>
                    </h2>
                    <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                        <div class="mt-2 sm:mr-4">
<!--                            @switch ($ticket->status)-->
<!--                            @case (\App\Ticket::STATUS_WAITING_FOR_SUPPORT)-->
<!--                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-orange-100 text-orange-800">-->
<!--                                {{ __('app.customer.support.ticket.status.support')}}-->
<!--                            </span>-->
<!--                            @break-->
<!--                            @case (\App\Ticket::STATUS_WAITING_FOR_CUSTOMER)-->
<!--                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-blue-100 text-blue-800">-->
<!--                                as{{ __('app.customer.support.ticket.status.customer')}}-->
<!--                            </span>-->
<!--                            @break-->
<!--                            @case (\App\Ticket::STATUS_CLOSED)-->
<!--                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-green-100 text-green-800">-->
<!--                                {{ __('app.customer.support.ticket.status.closed')}}-->
<!--                            </span>-->
<!--                            @break-->
<!--                            @case (\App\Ticket::STATUS_AUTO_CLOSED)-->
<!--                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-green-100 text-green-800">-->
<!--                                {{ __('app.customer.support.ticket.status.auto_close')}}-->
<!--                            </span>-->
<!--                            @break-->
<!--                            @case (\App\Ticket::STATUS_SPAM)-->
<!--                            <span class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium leading-4 bg-gray-100 text-gray-800">-->
<!--                                {{ __('app.customer.support.ticket.status.spam')}}-->
<!--                            </span>-->
                        </div>
                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-6">
                            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.938l1-4H9.031z" clip-rule="evenodd"></path></svg>
                            Ticket {{ ticket.id }}
                        </div>
                        <div class="mt-2 flex items-center text-sm leading-5 text-gray-500">
                            <svg class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                            </svg>
                            {{ $t('support.ticket.age') }} {{ ticket.created_at }}
                        </div>
                    </div>
                </div>
                <div class="mt-4 flex-shrink-0 flex md:mt-0 md:ml-4 flex items-center space-x-3">
                    <a href="#" class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Back to overview
                    </a>

<!--                    @if (in_array($ticket->status, [\App\Ticket::STATUS_WAITING_FOR_SUPPORT, \App\Ticket::STATUS_WAITING_FOR_CUSTOMER]))-->
<!--                    <span class="inline-flex rounded-md shadow-sm">-->
<!--                        <data-submitter inline-template method="PATCH" url="{{ route('customer.support.ticket.update', ['ticket' => $ticket->id]) }}" :data="{'status': {{ \App\Ticket::STATUS_CLOSED }}}">-->
<!--                            <button @click="submit" type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">-->
<!--                                <svg class="-ml-1 mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>-->
<!--                                {{ __('app.customer.support.ticket.action.close') }}-->
<!--                            </button>-->
<!--                        </data-submitter>-->
<!--                    </span>-->
<!--                    @endif-->
                </div>
            </div>
        </div>
        <div class="my-8 mx-4 sm:mx-0">
<!--            @if (session()->has('ticket.closed.success'))-->
<!--            <div class="rounded-md bg-green-50 p-4 mb-6">-->
<!--                <div class="flex">-->
<!--                    <div class="flex-shrink-0">-->
<!--                        <svg class="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">-->
<!--                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>-->
<!--                        </svg>-->
<!--                    </div>-->
<!--                    <div class="ml-3">-->
<!--                        <h3 class="text-sm leading-5 font-medium text-green-800">-->
<!--                            {{ __('app.customer.support.ticket.action.closed.heading') }}-->
<!--                        </h3>-->
<!--                        <div class="mt-2 text-sm leading-5 text-green-700">-->
<!--                            <p>-->
<!--                                {{ __('app.customer.support.ticket.action.closed.paragraph') }}-->
<!--                            </p>-->
<!--                        </div>-->
<!--                        <div class="mt-4">-->
<!--                            <div class="-mx-2 -my-1.5 flex">-->
<!--                                <dynamic-modal>-->
<!--                                    <template #wrapper="{ toggleModal }">-->
<!--                                        <button @click="toggleModal" class="px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150">-->
<!--                                            {{ __('app.customer.support.ticket.rating') }}-->
<!--                                        </button>-->
<!--                                    </template>-->
<!--                                    <template slot-scope="content">-->
<!--                                        <customer-rating :ticket="{{ $ticket }}"></customer-rating>-->
<!--                                    </template>-->
<!--                                </dynamic-modal>-->

<!--                                <a href="{{ route('customer.support.ticket.index') }}" class="ml-3 px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150">-->
<!--                                    {{ __('app.customer.support.ticket.overview') }}-->
<!--                                </a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            @endif-->

<!--            @if (session()->has('message.create.success'))-->
<!--            <div class="rounded-md bg-green-50 p-4 shadow mb-6">-->
<!--                <div class="flex">-->
<!--                    <div class="flex-shrink-0">-->
<!--                        &lt;!&ndash; Heroicon name: check-circle &ndash;&gt;-->
<!--                        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">-->
<!--                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />-->
<!--                        </svg>-->
<!--                    </div>-->
<!--                    <div class="ml-3">-->
<!--                        <p class="text-sm leading-5 font-medium text-green-800">-->
<!--                            Your answer has been successfully added to your support ticket. You'll be notified once you've received an update on your ticket.-->
<!--                        </p>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            @endif-->

<!--            @unless (in_array($ticket->status, [\App\Ticket::STATUS_WAITING_FOR_CUSTOMER, \App\Ticket::STATUS_WAITING_FOR_SUPPORT]))-->
<!--            <div class="rounded-md bg-green-50 p-4 shadow mb-6">-->
<!--                <div class="flex">-->
<!--                    <div class="flex-shrink-0">-->
<!--                        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />-->
<!--                        </svg>-->
<!--                    </div>-->
<!--                    <div class="ml-3">-->
<!--                        <h3 class="text-sm font-medium text-green-800">-->
<!--                            Resolved-->
<!--                        </h3>-->
<!--                        <div class="mt-2 text-sm text-green-700">-->
<!--                            <p>-->
<!--                                This support case has been closed because it was marked as resolved, either from you or by our support staff.<br>If you have further questions please don't hesitate to open a new support ticket.-->
<!--                            </p>-->
<!--                        </div>-->
<!--                        <div class="mt-4">-->
<!--                            <div class="-mx-2 -my-1.5 flex">-->
<!--                                <a href="{{ route('customer.support.ticket.index') }}" class="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">-->
<!--                                    Back to overview-->
<!--                                </a>-->
<!--                                <a href="{{ route('customer.support.ticket.create') }}" class="ml-3 bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">-->
<!--                                    Create new ticket-->
<!--                                </a>-->
<!--                            </div>-->
<!--                        </div>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--            @endunless-->

            <div class="bg-white overflow-hidden shadow rounded-lg">
                <div class="px-4 py-5 sm:p-6">
                    <div>
<!--                        <ul class="">-->
<!--                            @foreach ($messages as $message)-->
<!--                            @unless ($message->internal)-->
<!--                            <li>-->
<!--                                <div class="relative pb-8">-->
<!--                                    @unless ($loop->last)-->
<!--                                    <span class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>-->
<!--                                    @endunless-->
<!--                                    <div class="relative flex items-start space-x-3">-->
<!--                                        <div class="relative">-->
<!--                                                <span class="inline-block h-10 w-10 border-gray-400 rounded-full overflow-hidden bg-gray-100">-->
<!--                                                    <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">-->
<!--                                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />-->
<!--                                                    </svg>-->
<!--                                                </span>-->
<!--                                            <span class="absolute bg-white rounded-tl px-0.5 py-px" style="bottom: -0.25rem; right: -0.5rem;">-->
<!--                                                    <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">-->
<!--                                                        <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />-->
<!--                                                    </svg>-->
<!--                                                </span>-->
<!--                                        </div>-->
<!--                                        <div class="min-w-0 flex-1">-->
<!--                                            <div>-->
<!--                                                <div class="text-sm">-->
<!--                                                    @if ($message->fromCustomer())-->
<!--                                                    <span class="font-medium text-gray-900">-->
<!--                                                                {{ $message->customer->fullName }}-->
<!--                                                            </span>-->
<!--                                                    @else-->
<!--                                                    <span class="font-medium text-blue-700">-->
<!--                                                                {{ $message->supporter_alias ? $message->supporter_alias : $message->user->name }} (VPS2day Support)-->
<!--                                                            </span>-->
<!--                                                    @endif-->
<!--                                                </div>-->
<!--                                                <p class="mt-0.5 text-sm text-gray-500">-->
<!--                                                    wrote {{ $message->created_at->diffForHumans(['syntax' => \Carbon\CarbonInterface::DIFF_ABSOLUTE]) }} ago-->
<!--                                                </p>-->
<!--                                            </div>-->
<!--                                            <div class="mt-2 text-sm text-gray-700">-->
<!--                                                <div class="break-words">-->
<!--                                                    {!! nl2br($message->html) !!}-->
<!--                                                </div>-->
<!--                                            </div>-->
<!--                                        </div>-->
<!--                                    </div>-->
<!--                                </div>-->
<!--                            </li>-->
<!--                            @endunless-->
<!--                            @endforeach-->
<!--                        </ul>-->
                        <div class="mt-6" v-if="['STATUS_WAITING_FOR_SUPPORT', 'STATUS_WAITING_FOR_CUSTOMER'].indexOf(ticket.status) > -1">
                            <div class="flex space-x-3">
                                <div class="flex-shrink-0">
                                    <div class="relative">
                                        <img class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="">
                                        <span class="absolute bg-white rounded-tl px-0.5 py-px" style="bottom: -0.25rem; right: -0.5rem;">
                                            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="min-w-0 flex-1">
                                    <form action="#" method="POST">
                                        <div>
                                            <label for="message" class="sr-only">Comment</label>
                                            <div class="mt-1 relative rounded-md shadow-sm">
                                                <textarea id="message"
                                                          name="message"
                                                          rows="6"
                                                          class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                                                          placeholder="Write a new message"></textarea>
<!--                                                @error('message')-->
<!--                                                <div class="absolute pt-3 top-0 right-0 pr-3 flex items-center pointer-events-none">-->
<!--                                                    <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">-->
<!--                                                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />-->
<!--                                                    </svg>-->
<!--                                                </div>-->
<!--                                                @enderror-->
                                            </div>
<!--                                            @error('message')-->
<!--                                            <p class="mt-1 text-xs text-red-600">-->
<!--                                                {{ $message }}-->
<!--                                            </p>-->
<!--                                            @else-->
<!--                                            <p class="mt-1 text-right text-xs text-gray-500 flex items-center">-->
<!--                                                <svg class="w-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="currentColor" d="M593.8 59.1H46.2C20.7 59.1 0 79.8 0 105.2v301.5c0 25.5 20.7 46.2 46.2 46.2h547.7c25.5 0 46.2-20.7 46.1-46.1V105.2c0-25.4-20.7-46.1-46.2-46.1zM338.5 360.6H277v-120l-61.5 76.9-61.5-76.9v120H92.3V151.4h61.5l61.5 76.9 61.5-76.9h61.5v209.2zm135.3 3.1L381.5 256H443V151.4h61.5V256H566z"></path></svg>-->
<!--                                                {{ __('app.customer.support.ticket.markdown_available') }}-->
<!--                                            </p>-->
<!--                                            @enderror-->
                                        </div>
                                        <div class="mt-6 flex items-center justify-end space-x-4">
                                            <span class="inline-flex rounded-md shadow-sm">
                                                <button type="submit" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
                                                    Comment
                                                </button>
                                            </span>
                                        </div>
                                    </form>
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
import SecondaryNav from '@/components/support/SecondaryNav'

export default {
    name: 'ShowTicket',
    data() {
        return {
            ticket: {
                id: 1,
                subject: 'Ticket Subject',
                created_at: '02-21-2022',
                last_name: 'surname',
                email: 'test@gmail.com',
                balance: 0,
            }
        };
    },
    components: { SecondaryNav, AppLayout }
}
</script>