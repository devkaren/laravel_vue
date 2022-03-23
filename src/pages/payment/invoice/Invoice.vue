<template>
    <AppLayout>
        <template v-slot:header>
            <secondary-nav></secondary-nav>
        </template>
        <div class="block mt-6">
            <div v-if="invoices.length">
                <div class="flex flex-col mt-2">
                    <div class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                        <table class="min-w-full divide-y divide-cool-gray-200">
                            <thead>
                            <tr>
                                <th class="px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider">
                                    Invoice
                                </th>
                                <th class="px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider">
                                    Provider
                                </th>
                                <th class="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider">
                                    Amount
                                </th>
                                <th class="px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th class="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                            </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-cool-gray-200">
                            <tr class="bg-white"  v-for="invoice in invoices">
                                <td class="w-full px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-900">
                                    <div class="flex">
                                        <a href="#" class="group inline-flex space-x-2 truncate text-sm leading-5">
                                            <svg class="flex-shrink-0 h-5 w-5 text-cool-gray-400 group-hover:text-cool-gray-500 transition ease-in-out duration-150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                                <path fill-rule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                            </svg>
                                            <p class="text-cool-gray-500 truncate group-hover:text-cool-gray-900 transition ease-in-out duration-150">
                                                VPS-{{ invoice.id }}
                                            </p>
                                        </a>
                                    </div>
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-500">
                                    {{ getInvoiceType(invoice) }}
                                </td>
                                <td class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500">
                                    <span class="text-cool-gray-900 font-medium">&euro; {{ invoice.grossAmountMoney }} </span>
                                    EUR
                                </td>
                                <td class="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-500">
                                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium leading-4 bg-green-100 text-green-800 capitalize">
                                    Paid
                                </span>
                                </td>
                                <td class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500">
                                    {{ invoice.created_at }}
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="text-center" v-else>
                <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path>
                </svg>

                <h3 class="mt-2 text-sm font-medium text-gray-900">No invoices</h3>
                <p class="mt-1 text-sm text-gray-500">
                    Get started with VPS2day by charging your account with money.
                </p>
                <div class="mt-6">
                    <a href="#" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Charge balance
                    </a>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
<script>
import AppLayout from '@/components/layout/AppLayout.vue'
import SecondaryNav from '@/components/layout/SecondaryNav.vue'

export default {
    name: 'Invoice',
    data() {
        return {
            invoices: [],
        }
    },
    components: { SecondaryNav, AppLayout },
    methods: {
        getInvoiceType(item) {
            let invoiceType;

            switch(item.type) {
                case 'paypal':
                    invoiceType = 'PayPal';
                    break;
                case 'credit-card':
                    invoiceType = 'Credit Card';
                    break;
                case 'paysafecard':
                    invoiceType = 'paysafecard';
                    break;
                case 'coingate':
                    invoiceType = 'Crypto Currency';
                    break;
                default:
                    invoiceType = 'System';
            }

            return invoiceType;
        }
    }
};
</script>