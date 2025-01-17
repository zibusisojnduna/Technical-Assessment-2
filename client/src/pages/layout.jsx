import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/nav'

export default function Layout() {
  return (
    <div>
        <Navigation/>
        <Outlet/>
    </div>
  )
}