export default [
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('@/view/article')
  }
]
