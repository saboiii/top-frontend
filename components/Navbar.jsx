import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div className='fixed flex'>
      <div className='hidden md:flex w-screen h-28 items-center justify-between px-24'>
        <div>MAIN LOGO</div>
        <ul className='flex gap-10'>
          <li><Link href='/' className='flex navbaritem'>TABTITLE</Link></li>
          <li><Link href='/' className='flex navbaritem'>TABTITLE</Link></li>
          <li><Link href='/' className='flex navbaritem'>TABTITLE</Link></li>
          <li><Link href='/' className='flex navbaritem'>TABTITLE</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar