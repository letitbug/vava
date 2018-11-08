import Layout from '@/layouts'

const dashboards = {
  path: '/dashboard',
  redirect: '/dashboard/visitor',
  component: Layout,
  name: 'Dashboard',
  meta: {
    title: 'dashboard',
    icon: 'chart-dashboard'
  },
  children: [
    {
      path: 'visitor',
      name: 'Visitor',
      meta: { title: 'visitor', icon: 'thing-footprint', nobg: true },
      component: () => import('@/modules/dashboard/Visitor')
    },
    {
      path: 'users',
      name: 'Users',
      meta: { title: 'users', icon: 'people-user', nobg: true },
      component: () => import('@/modules/dashboard/Users')
    },
    {
      path: 'capital',
      name: 'Capital',
      meta: { title: 'capital', icon: 'mark-capital', nobg: true },
      component: () => import('@/modules/dashboard/Capital')
    }
  ]
}

export default dashboards
