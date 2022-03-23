import Balance from '@/pages/payment/balance/Balance'
import Invoice from '@/pages/payment/invoice/Invoice'
import Transaction from '@/pages/payment/transaction/Transaction'
import Auth from '@/middlewares/auth'

export default [
  {
    name: 'Balance',
    path: '/payment/balance',
    component: Balance,
    meta: {
      title: 'Vite - Balance',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Invoice',
    path: '/payment/invoice',
    component: Invoice,
    meta: {
      title: 'Vite - Invoice',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Transaction',
    path: '/payment/transaction',
    component: Transaction,
    meta: {
      title: 'Vite - Transaction',
      middleware: Auth,
      auth: true
    }
  }
];
