import Announcements from '@/pages/announcement/Announcement'
import Auth from '@/middlewares/auth'

export default [
  {
    name: 'Announcements',
    path: '/announcements',
    component: Announcements,
    meta: {
      title: 'Vite - Announcements',
      middleware: Auth,
      auth: true
    }
  }
];
