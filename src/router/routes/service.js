import Server from '@/pages/service/server/Server'
import Create from '@/pages/service/server/Create'
import Delete from '@/pages/service/server/show/Delete'
import Disks from '@/pages/service/server/show/Disks'
import Network from '@/pages/service/server/show/Network'
import Overview from '@/pages/service/server/show/Overview'
import Snapshots from '@/pages/service/server/show/Snapshots'
import Upgrade from '@/pages/service/server/show/Upgrade'
import Vnc from '@/pages/service/server/show/Vnc'
import Statistics from '@/pages/service/server/show/Statistics'
import Settings from '@/pages/service/server/show/Settings'
import SshKey from '@/pages/service/ssh-key/SshKey'
import SshKeyCreate from '@/pages/service/ssh-key/Create'
import ImportGithub from '@/pages/service/ssh-key/ImportGithub'
import ReInstall from '@/pages/service/server/show/ReInstall'
import Auth from '@/middlewares/auth'

export default [
  {
    name: 'Server',
    path: '/service/server',
    component: Server,
    meta: {
      title: 'Vite - Server',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Delete',
    path: '/service/server/:id/delete',
    component: Delete,
    meta: {
      title: 'Vite - Delete Server',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Disks',
    path: '/service/server/:id/disks',
    component: Disks,
    meta: {
      title: 'Vite - Server Disks',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Network',
    path: '/service/server/:id/network',
    component: Network,
    meta: {
      title: 'Vite - Server Network',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Overview',
    path: '/service/server/:id/overview',
    component: Overview,
    meta: {
      title: 'Vite - Server Overview',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Snapshots',
    path: '/service/server/:id/snapshots',
    component: Snapshots,
    meta: {
      title: 'Vite - Server Snapshots',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Upgrade',
    path: '/service/server/:id/upgrade',
    component: Upgrade,
    meta: {
      title: 'Vite - Server Upgrade',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Vnc',
    path: '/service/server/:id/vnc',
    component: Vnc,
    meta: {
      title: 'Vite - Server VNC',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Statistics',
    path: '/service/server/:id/statistics',
    component: Statistics,
    meta: {
      title: 'Vite - Server Statistics',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Settings',
    path: '/service/server/:id/settings',
    component: Settings,
    meta: {
      title: 'Vite - Server Settings',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'Create',
    path: '/service/server/create',
    component: Create,
    meta: {
      title: 'Vite - Create Server',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'SshKey',
    path: '/service/ssh-key',
    component: SshKey,
    meta: {
      title: 'Vite - SSH Key',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'SshKeyCreate',
    path: '/service/ssh-key/create',
    component: SshKeyCreate,
    meta: {
      title: 'Vite - Create SSH Key',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'ImportGithub',
    path: '/service/ssh-key/import-github',
    component: ImportGithub,
    meta: {
      title: 'Vite - Import Github',
      middleware: Auth,
      auth: true
    }
  },
  {
    name: 'ImportGithub',
    path: '/service/reinstall',
    component: ReInstall,
    meta: {
      title: 'Vite - ReInstall',
      middleware: Auth,
      auth: true
    }
  }
];
