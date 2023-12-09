import React from 'react'
import { Outlet } from 'react-router-dom'
import DashboardSidebar from './components/dashboardSidebar'

function Main() {
  return (
    <div className="bg-gray-100 font-family-karla flex">
        <DashboardSidebar />
        <Outlet />
    </div>
  )
}

export default Main