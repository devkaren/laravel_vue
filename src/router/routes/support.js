import Abuse from '@/pages/support/abuse/Abuse'
import CreateAbuse from '@/pages/support/abuse/CreateAbuse'
import Ticket from '@/pages/support/ticket/Ticket'
import CreateTicket from '@/pages/support/ticket/CreateTicket'
import ShowTicket from '@/pages/support/ticket/ShowTicket'
import Auth from '@/middlewares/auth'

export default [
  {
    name: 'Support Tickets',
    path: '/support/ticket',
    component: Ticket,
    meta: {
      title: 'Vite - Support Tickets',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Create Ticket',
    path: '/support/ticket/create',
    component: CreateTicket,
    meta: {
      title: 'Vite - Create Ticket',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Show Tickets',
    path: '/support/ticket/:id',
    component: ShowTicket,
    meta: {
      title: 'Vite - Show Tickets',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Abuse Management',
    path: '/support/abuse',
    component: Abuse,
    meta: {
      title: 'Vite - Abuse',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Create Abuse',
    path: '/support/abuse/create',
    component: CreateAbuse,
    meta: {
      title: 'Vite - Create Abuse',
      middleware: Auth,
      auth: true
    }
  }
];
