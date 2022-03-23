<template>
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div>
            <div class="block">
                <nav class="flex">
                    <router-link to="/payment/balance" active-class="secondary-nav-item-active" class="secondary-nav-item">
                        Balance
                    </router-link>
                    <router-link to="/payment/transaction" active-class="secondary-nav-item-active" class="ml-4 secondary-nav-item">
                        Transactions
                    </router-link>
                    <router-link to="/payment/invoice" active-class="secondary-nav-item-active" class="ml-4 secondary-nav-item">
                        Invoices
                    </router-link>
                </nav>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SecondaryNav'
}
</script>