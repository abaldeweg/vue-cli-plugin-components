export default [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/IndexView'),
    props: (route) => ({
      is404: route.params.is404,
    }),
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView')
  },
  {
    path: '*',
    redirect: { name: 'index', params: { is404: true } },
  },
]
