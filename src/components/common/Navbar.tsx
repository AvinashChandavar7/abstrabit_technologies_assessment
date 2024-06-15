import React from 'react'
import UserMenu from './UserMenu'
import SupportMenu from './SupportMenu'

const Navbar: React.FC = () => {
  return (
    <nav className='flex items-center justify-between w-full px-10 py-4 bg-white h-fit'>
      <div>
        <img src="/public/assets/logo.svg" alt="logo" />
      </div>

      <div className='flex items-center gap-5 font-bold justify-evenly'>
        <h1>Dashboard</h1>
        <h1>FAQs</h1>
        <SupportMenu />
        <UserMenu />
      </div>
    </nav>
  )
}

export default Navbar