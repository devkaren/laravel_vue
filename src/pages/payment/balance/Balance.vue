<template>
    <AppLayout>
        <template v-slot:header>
            <secondary-nav></secondary-nav>
        </template>
        <div class="pb-5 border-b border-gray-200 space-y-3 sm:flex sm:items-center sm:justify-between sm:space-x-4 sm:space-y-0 mb-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
                Your Balance
            </h3>
        </div>

        <div>
            <div class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dl>
                            <dt class="text-sm leading-5 font-medium text-gray-500 truncate">
                                Available
                            </dt>
                            <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                &euro;
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dl>
                            <dt class="text-sm leading-5 font-medium text-gray-500 flex justify-between">
                                <span class="truncate">Referred customers</span>
                                <a href="#" class="text-xs text-blue-600">My referrals &rarr;</a>
                            </dt>
                            <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                0
                            </dd>
                        </dl>
                    </div>
                </div>
                <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="px-4 py-5 sm:p-6">
                        <dl>
                            <dt class="text-sm leading-5 font-medium text-gray-500 flex justify-between">
                                <span class="truncate">Referral earnings</span>
                                <a href="#" class="text-xs text-blue-600">How does this work? &rarr;</a>
                            </dt>
                            <dd class="mt-1 text-3xl leading-9 font-semibold text-gray-900">
                                0,00 &euro;
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>

        <!--    @if (session()->has('payment.completed') || request()->has('completed'))-->
        <!--    <await-payment-completion payment="{{ session()->get('payment.completed') }}" :show-completion="{{ request()->has('completed') ? 'true' : 'false' }}" inline-template>-->
        <!--        <div>-->
        <!--            <div v-if="completed" class="rounded-md bg-green-50 p-4 shadow mt-8">-->
        <!--                <div class="flex">-->
        <!--                    <div class="flex-shrink-0">-->
        <!--                        <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">-->
        <!--                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />-->
        <!--                        </svg>-->
        <!--                    </div>-->
        <!--                    <div class="ml-3">-->
        <!--                        <h3 class="text-sm leading-5 font-medium text-green-800">-->
        <!--                            Payment completed-->
        <!--                        </h3>-->
        <!--                        <div class="mt-2 text-sm leading-5 text-green-700">-->
        <!--                            <p>-->
        <!--                                Your payment has been successfully completed. Thank you for using VPS2day.-->
        <!--                            </p>-->
        <!--                        </div>-->
        <!--                        <div class="mt-4">-->
        <!--                            <div class="-mx-2 -my-1.5 flex">-->
        <!--                                <a href="{{ route('customer.service.server.create') }}" class="px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150">-->
        <!--                                    Create a new server-->
        <!--                                </a>-->
        <!--                                <a href="{{ route('customer.payment.invoice.index') }}" class="ml-3 px-2 py-1.5 rounded-md text-sm leading-5 font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:bg-green-100 transition ease-in-out duration-150">-->
        <!--                                    Show invoices-->
        <!--                                </a>-->
        <!--                            </div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--            <div v-else class="rounded-md bg-green-50 p-4 shadow mt-8">-->
        <!--                <div class="flex">-->
        <!--                    <div class="flex-shrink-0">-->
        <!--                        <svg class="h-5 w-5 text-green-400 animate-spin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"></path></svg>-->
        <!--                    </div>-->
        <!--                    <div class="ml-3">-->
        <!--                        <h3 class="text-sm leading-5 font-medium text-green-800">-->
        <!--                            Processing payment-->
        <!--                        </h3>-->
        <!--                        <div class="mt-2 text-sm leading-5 text-green-700">-->
        <!--                            <p>-->
        <!--                                Please be patient while we're processing your payment. Depending on the payment provider you've chosen this may take up to a few minutes. You don't need to stay on this page; you can continue browsing at any given time.-->
        <!--                            </p>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--            </div>-->
        <!--        </div>-->
        <!--    </await-payment-completion>-->
        <!--    @endif-->

        <!--    @if (session()->has('payment.voucher.redemption.success'))-->
        <div class="rounded-md bg-green-50 p-4 shadow mt-6">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <h3 class="text-sm leading-5 font-medium text-green-800">
                        Thank you!
                    </h3>
                    <div class="mt-2 text-sm leading-5 text-green-700">
                        <p>
                            <!--                        @if (session()->get('payment.voucher.redemption.success')->type === \App\Voucher::TYPE_CHARGE)-->
                            The voucher code has been accepted and your account balance has been charged with . It's available with immediate effect.
                            <!--                        @endif-->

                            <!--                        @if (session()->get('payment.voucher.redemption.success')->type === \App\Voucher::TYPE_DISCOUNT)-->
                            <!--                        The voucher code has been accepted and we've applied the provided discount to your account. It will be automatically applied upon future orders.-->
                            <!--                        @endif-->
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!--    @endif-->

        <div class="mt-12">
            <!--        <charge-balance></charge-balance>-->
        </div>

        <div class="grid grid-cols-2 gap-x-6">
            <div class="col-span-2 sm:col-span-1">
                <div class="bg-white shadow sm:rounded-lg mt-6">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Voucher
                        </h3>
                        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                            <p>
                                Please enter your Voucher Code below in order to redeem it.
                            </p>
                        </div>
                        <form action="#" method="POST">
                            <div class="mt-5 sm:flex sm:items-top">
                                <div class="w-full">
                                    <div class="relative rounded-md shadow-sm">
                                        <input id="code" name="code" class="form-input block w-full sm:text-sm sm:leading-5" placeholder="">
                                    </div>
                                    <!--                                @error('code')-->
                                    <!--                                <p class="mt-2 text-sm text-red-600" id="code-error">-->
                                    <!--                                    This voucher code doesn't exist.-->
                                    <!--                                </p>-->
                                    <!--                                @else-->
                                    <!--                                <p class="mt-2 text-sm text-gray-600">-->
                                    <!--                                    We'll charge your account with the given amount of money.-->
                                    <!--                                </p>-->
                                    <!--                                @enderror-->
                                </div>
                                <div class="block">
                            <span class="rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto">
                                <button type="submit" class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150 sm:w-auto sm:text-sm sm:leading-5">
                                    Redeem
                                </button>
                            </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-span-2 sm:col-span-1">
                <div class="bg-white shadow sm:rounded-lg mt-6">
                    <div class="px-4 py-5 sm:p-6">
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Balance Threshold Notification
                        </h3>
                        <div class="mt-2 max-w-xl text-sm leading-5 text-gray-500">
                            <!--                        @if (is_null($customer->balance_notification_below))-->
                            <!--                        <p>-->
                            <!--                            You currently have <b>no</b> balance threshold notification active.-->
                            <!--                        </p>-->
                            <!--                        @else-->
                            <!--                        <p>-->
                            <!--                            You'll receive a notification when your account balance drops below <b>{{ // (new \App\Servinga\Payment\Money($customer->balance_notification_below))->formatted(true) }}</b>.-->
                            <!--                        </p>-->
                            <!--                        @endif-->
                        </div>
                        <form action="#" method="POST">
                            <div class="mt-5 sm:flex sm:items-top">
                                <div class="w-full max-w-sm">
                                    <div>
                                        <div class="relative rounded-md shadow-sm">
                                            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span class="text-gray-500 sm:text-sm sm:leading-5">
                                                &euro;
                                            </span>
                                            </div>
                                            <input id="balance_notification_below"
                                                   name="balance_notification_below"
                                                   class="form-input block w-full pl-7 pr-12 sm:text-sm sm:leading-5"
                                                   aria-describedby="balance-notification-currency"
                                            >
                                            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                            <span class="text-gray-500 sm:text-sm sm:leading-5" id="balance-notification-currency">
                                                EUR
                                            </span>
                                            </div>
                                        </div>
                                    </div>

                                    <!--                                @error('balance_notification_below')-->
                                    <!--                                <p class="mt-2 text-sm text-red-600" id="balance-notification-error">-->
                                    <!--                                    Please enter a valid amount of money.-->
                                    <!--                                </p>-->
                                    <!--                                @else-->
                                    <!--                                <p class="mt-2 text-sm text-gray-600">-->
                                    <!--                                    When do you want to be notified?-->
                                    <!--                                </p>-->
                                    <!--                                @enderror-->
                                </div>
                                <div class="block">
                                <span class="rounded-md shadow-sm sm:mt-0 sm:ml-3 sm:w-auto">
                                    <button type="submit" class="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150 sm:w-auto sm:text-sm sm:leading-5">
                                        Update threshold
                                    </button>
                                </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="bg-white overflow-hidden shadow rounded-lg mt-6">
            <div class="border-b border-gray-200 px-4 py-5 sm:px-6">
                Frequently Asked Questions (FAQ)
            </div>
            <div class="px-4 py-5 sm:p-6">
                <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-6">
                    <div class="space-y-2">
                        <dt class="text-base leading-6 font-medium text-gray-900">
                            Can I charge my account with less than &euro; 10 ?
                        </dt>
                        <dd class="text-sm leading-6 text-gray-500">
                            No, unfortunately not. Due to the administrative effort as well as the high transaction costs the minimum chargable amount is &euro; 10.
                        </dd>
                    </div>

                    <div class="space-y-2">
                        <dt class="text-base leading-6 font-medium text-gray-900">
                            Will I get an invoice for my payment?
                        </dt>
                        <dd class="text-sm leading-6 text-gray-500">
                            Of course, yes. After the successful payment you'll be able to download a PDF invoice for your paid amount. We'll send you a link to it as well.
                        </dd>
                    </div>

                    <div class="space-y-2">
                        <dt class="text-base leading-6 font-medium text-gray-900">
                            How does the 48 Hours Money-Back-Guarantee work?
                        </dt>
                        <dd class="text-sm leading-6 text-gray-500">
                            The guarantee applies to your first charge. If you paid by credit card or PayPal and want your money back within 48 hours after your first payment, we'll refund you. No questions asked.
                        </dd>
                    </div>

                    <div class="space-y-2">
                        <dt class="text-base leading-6 font-medium text-gray-900">
                            Who do I contact when I have payment issues?
                        </dt>
                        <dd class="text-sm leading-6 text-gray-500">
                            Please <a href="#" class="text-blue-600">open a new support ticket</a> and describe your issue. If you have any kind of transaction number please make sure you'll add it to your message.
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout.vue'
import SecondaryNav from '@/components/layout/SecondaryNav.vue'

export default {
    name: 'Balance',
    components: { SecondaryNav, AppLayout }
}
</script>