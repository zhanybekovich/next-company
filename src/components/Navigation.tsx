'use client'

import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import Logo from './Logo'
import { useState } from 'react'

function Navigation({ navLinks, company }) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleClick() {
    setMenuOpen((prev) => !prev)
  }
  return (
    <nav className="flex items-center flex-wrap justify-between">
      <Link href="/">
        <Logo src={company.logo.url} alt={company.name} />
      </Link>
      <button onClick={handleClick} className="cursor-pointer md:hidden">
        <FaBars />
      </button>
      <ul
        className={`
          ${menuOpen ? 'flex' : 'hidden'}
          w-full my-4 bg-slate-900 text-white p-4 rounded-sm flex-col gap-2 font-semibold
          md:flex md:w-auto md:bg-transparent md:text-inherit md:p-0 md:flex-row md:gap-8
        `}
      >
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation
