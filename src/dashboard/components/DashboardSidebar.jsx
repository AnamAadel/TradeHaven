import React from 'react'

function DashboardSidebar() {
  return (
    <aside className="relative z-[99999] bg-neutral h-screen w-64 hidden sm:block shadow-xl">
        <div className="p-6">
            <a href="index.html" className="text-white text-2xl font-semibold uppercase hover:text-gray-300">BISTRO BOSS <br /> <span className='text-base'>Restaurant</span></a>
        </div>
        <nav className="text-white text-base font-semibold pt-3">
            <a href="index.html" className="flex items-center bg-opacity-20 bg-gray-200 hover:bg-opacity-20 text-white py-4 pl-6">
                <i className="fas fa-tachometer-alt mr-3"></i>
                Dashboard
            </a>
            <a href="blank.html" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                <i className="fas fa-sticky-note mr-3"></i>
                Blank Page
            </a>
            <a href="tables.html" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                <i className="fas fa-table mr-3"></i>
                Tables
            </a>
            <a href="forms.html" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                <i className="fas fa-align-left mr-3"></i>
                Forms
            </a>
            <a href="tabs.html" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                <i className="fas fa-tablet-alt mr-3"></i>
                Tabbed Content
            </a>
            <a href="calendar.html" className="flex items-center text-white bg-opacity-0 bg-gray-200 hover:bg-opacity-20 py-4 pl-6">
                <i className="fas fa-calendar mr-3"></i>
                Calendar
            </a>
        </nav>
        <a href="#" className="absolute w-full bottom-0 border-t-2 text-white flex items-center justify-center py-4 ">
            <i className="fas fa-arrow-circle-up mr-3"></i>
            Upgrade to Pro!
        </a>
    </aside>
  )
}

export default DashboardSidebar