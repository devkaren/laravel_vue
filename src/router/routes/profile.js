import PersonalData from '@/pages/profile/PersonalData'
import SecondFactory from '@/pages/profile/SecondFactory'
import Security from '@/pages/profile/Security'
import Verification from '@/pages/profile/Verification'
import Auth from '@/middlewares/auth'

export default [
  {
    name: 'Profile Data',
    path: '/profile/edit/data',
    component: PersonalData,
    meta: {
      title: 'Vite - Profile Data',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Second Factor',
    path: '/profile/edit/second-factor',
    component: SecondFactory,
    meta: {
      title: 'Vite - Second Factor',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Security',
    path: '/profile/edit/security',
    component: Security,
    meta: {
      title: 'Vite - Security',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Verification',
    path: '/profile/edit/verification',
    component: Verification,
    meta: {
      title: 'Vite - Verification',
      middleware: Auth,
      auth: true
    }
  }
];
