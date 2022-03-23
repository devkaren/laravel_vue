<template>
    <AppLayout>
        <template v-slot:header>
            <secondary-nav></secondary-nav>
        </template>

        <div class="block mt-6">
            <div v-if="transactions.lenght">
                <div class="flex flex-col mt-2">
                    <div class="align-middle min-w-full overflow-x-auto shadow overflow-hidden sm:rounded-lg">
                        <table class="min-w-full divide-y divide-cool-gray-200">
                            <thead>
                            <tr>
                                <th class="px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider">
                                    Transaction
                                </th>
                                <th class="hidden px-6 py-3 bg-cool-gray-50 text-left text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider md:block">
                                    Details
                                </th>
                                <th class="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider">
                                    Betrag
                                </th>
                                <th class="px-6 py-3 bg-cool-gray-50 text-right text-xs leading-4 font-medium text-cool-gray-500 uppercase tracking-wider">
                                    Date
                                </th>
                            </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-cool-gray-200">
                            <tr class="bg-white"  v-for="transaction in transactions">
                                <td class="max-w-0 w-full px-6 py-4 whitespace-no-wrap text-sm leading-5 text-cool-gray-900">
                                    <div class="truncate text-sm leading-5">
                                        {{ getTransactionType(transaction) }}
                                    </div>
                                </td>
                                <td class="px-6 py-4 text-left whitespace-no-wrap text-sm leading-5 text-cool-gray-500">
                                    {{ transaction.humanReadableReference }}
                                </td>
                                <td class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500">
                                            <span class="{{ transaction.amount_money > 0 ? 'text-green-600' : 'text-red-600' }} font-medium">
                                                {{ transaction.amount_money > 0 ? '+' : '-' }}
                                                &euro;
                                                {{ transaction.amount_money }}
                                            </span>
                                    EUR
                                </td>
                                <td class="px-6 py-4 text-right whitespace-no-wrap text-sm leading-5 text-cool-gray-500">
                                    {{ transaction.created_at }}
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

                <h3 class="mt-2 text-sm font-medium text-gray-900">No transactions</h3>
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
import AppLayout from '@/components/layout/AppLayout'
import SecondaryNav from '@/components/layout/SecondaryNav'

export default {
    name: 'Transaction',
    data() {
        return {
            transactions: [],
        }
    },
    components: { SecondaryNav, AppLayout },
    methods: {
        getTransactionType(item) {
            let transactionType;

            switch(item.type) {
                case 'charge':
                    transactionType = 'Guthabenaufladung';
                    break;
                case 'refundCharge':
                    transactionType = 'Erstattung';
                    break;
                case 'voucher':
                    transactionType = 'Guthaben-Voucher';
                    break;
                case 'orderWithdrawal':
                    transactionType = 'Produktbestellung';
                    break;
                case 'extensionWithdrawal':
                    transactionType = 'Produktverlängerung';
                    break;
                case 'handsWithdrawal':
                    transactionType = 'Remote Hands';
                    break;
                case 'employeeCharge':
                    transactionType = 'Mitarbeiteraufladung';
                    break;
                case 'developerCharge':
                    transactionType = 'Entwickleraufladung';
                    break;
                case 'rewardCharge':
                    transactionType = 'Affiliate-Auszahlung';
                    break;
                case 'rewardWithdrawal':
                    transactionType = 'Affiliate-Rückbuchung';
                    break;
                case 'productOrServiceWithdrawal':
                    transactionType = 'Sonstige Produkte / Dienstleistungen';
                    break;
                case 'otherAdministrativeCharge':
                    transactionType = 'Sonstige administrative Aufladung';
                    break;
                case 'otherAdministrativeWithdrawal':
                    transactionType = 'Sonstige administrative Belastung';
                    break;
                default:
                    transactionType = 'Sonstige Transaktion';
            }

            return transactionType;
        }
    }
};
</script>