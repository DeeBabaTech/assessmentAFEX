import React from 'react'
import org1 from './../assets/icon-1.png'
import org2 from './../assets/icon-2.png'
import org3 from './../assets/icon-3.png'
import org4 from './../assets/icon-4.png'
import org5 from './../assets/icon-5.png'
import org6 from './../assets/icon-6.png'
import org7 from './../assets/icon-7.png'
import logo from './../assets/logo.png'


function SideNav() {
  return (
    <div className='w-1/12 hidden md:block border-r border-slate-200 bg-white z-10'>
      <div className='flex flex-col h-full justify-between'>
        <ul className='flex flex-col items-center'>
          <div className='flex items-center my-5'>
            <img src={logo} className='w-32' alt='' />
          </div>
          <div className='flex items-center mb-4'>
            <img src={org1} className='w-10' alt='' />
          </div>
          <div className='flex items-center mb-4'>
            <img src={org2} className='w-10' alt='' />
          </div>
          <div className='flex items-center mb-4'>
            <img src={org3} className='w-10' alt='' />
          </div>
          <div className='flex items-center mb-4'>
            <img src={org4} className='w-10' alt='' />
          </div>
          <div className='flex items-center'>
            <img src={org5} className='w-10' alt='' />
          </div>
        </ul>
        <ul className='flex flex-col items-center mb-10'>
          <div className='flex items-center'>
            <img src={org6} className='w-10' alt='' />
          </div>
          <div className='flex items-center'>
            <img src={org7} className='w-10' alt='' />
          </div>
        </ul>
      </div>
    </div>
  )
}

export default SideNav