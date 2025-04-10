"use client"

import type { FC } from "react"

interface HeaderProps {
  scrollToSection: (sectionId: string) => void
}

const Header: FC<HeaderProps> = ({ scrollToSection }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-[#0e0525]/90 backdrop-blur-sm">
      <div className="text-3xl font-bold">
        <span className="text-white text-md">l e e c o d e r</span>
      </div>
      <nav className="flex items-center space-x-8">
        <button onClick={() => scrollToSection("home")} className="text-white hover:text-purple-400 transition-colors">
          Home
        </button>
        <button onClick={() => scrollToSection("about")} className="text-white hover:text-purple-400 transition-colors">
          About
        </button>
        <button onClick={() => scrollToSection("lab")} className="text-white hover:text-purple-400 transition-colors">
          Lab
        </button>
        <button
          onClick={() => scrollToSection("contact")}
          className="text-white hover:text-purple-400 transition-colors"
        >
          Contact
        </button>
      </nav>
    </header>
  )
}

export default Header
