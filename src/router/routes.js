import Layout from '@/layouts/Layout'

/**
 * noCache: Marks whether the route is allowed to be cached so that the DOM is repeatedly rendered when routing is frequently switched.
 *          true - not allow
 * hidden:  Marks whether the route is visible and displayed when the template is rendered.
 *          true - hide
 * @type {Route[]}
 */
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/LoginIndex'), hidden: true },
  { path: '/404', component: () => import('@/views/errorPages/error404'), hidden: true },
  {
    path: '',
    component: Layout,
    redirect: 'dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      meta: { title: 'Dashboard', icon: 'home' },
      component: () => import('@/views/dashboard/Dashboard')
    }]
  },
  {
    path: '/guide',
    component: Layout,
    children: [{
      path: 'index',
      name: 'Guide',
      meta: { title: 'Guide', icon: 'zhiyin', nocache: true },
      component: () => import('@/views/guide/Guide')
    }]
  },
  {
    path: '/components',
    component: Layout,
    meta: { title: 'Component', icon: 'yingyong' },
    children: [
      { path: 'avatarup', name: 'AvatarUpload', meta: { title: 'AvatarUpload', nocache: true }, component: () => import('@/views/component-demo/AvatarUpload') },
      { path: 'dropzone', name: 'dropzone', meta: { title: 'Dropzone', nocache: true }, component: () => import('@/views/component-demo/DropZone') }
    ]
  },
  {
    path: '/table',
    component: Layout,
    meta: { title: 'Table', icon: 'table' },
    children: [
      { path: 'basicuse', name: 'BasicUse', meta: { title: 'BasicUse' }, component: () => import('@/views/table/BasicUse') },
      { path: 'dynamic', name: 'Dynamic', meta: { title: 'Dynamic' }, component: () => import('@/views/table/Dynamic') },
      { path: 'sortable', name: 'Sortable', meta: { title: 'Sortable' }, component: () => import('@/views/table/Sortable') },
      { path: 'dragable', name: 'Dragable', meta: { title: 'Dragable' }, component: () => import('@/views/table/Dragable') },
      { path: 'editable', name: 'Editable', meta: { title: 'Editable' }, component: () => import('@/views/table/Editable') }
    ]
  },
  {
    path: '/editor',
    component: Layout,
    meta: { title: 'Editor', icon: 'editor' },
    children: [
      { path: 'tinymce', name: 'TinymceEditor', meta: { title: 'Tinymce' }, component: () => import('@/views/editor/TinymceEditor') },
      { path: 'quill', name: 'QuillEditor', meta: { title: 'Quill' }, component: () => import('@/views/editor/QuillEditor') },
      { path: 'ckeditor', name: 'CKEditor', meta: { title: 'CKEditor' }, component: () => import('@/views/editor/CKEditor') }
    ]
  }
]

export const asyncRouterMap = [
  {
    path: '/settings',
    component: Layout,
    children: [{
      path: 'index',
      name: 'settings',
      meta: { title: 'Settings', icon: 'settings', nocache: true },
      component: () => import('@/views/settings/Settings')
    }]
  },
  { path: '*', redirect: '/404', hidden: true }
]
