import React from 'react'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import { createBrowserRouter } from 'react-router-dom'

const routes = [
  {
    path: '/',
    element: Layout,
  },
  {
    path: '/login',
    element: Login,
  },
]

const router = createBrowserRouter(
  routes.map((route) => ({
    ...route,
    element: React.createElement(route.element),
  })),
)

export default router
