import React from 'react'
import Home from '../pages/Home'
import About from '../pages/About'

export interface AppRoute {
  path: string
  element: React.ReactNode 
}

export const routes: AppRoute[] = [
  {
    path: '/',
    element: React.createElement(Home),
  },
  {
    path: '/about',
    element: React.createElement(About),
  }
]