import Dashboard from '@/pages/dashboard/Dashboard'
import Auth from '@/middlewares/auth'

export default [
  {
    path: '/',
    name:'Dashboard',
    component: Dashboard,
    meta: {
      title: 'Vite - Dashboard',
      middleware: Auth,
      auth: true
    }
  },
]