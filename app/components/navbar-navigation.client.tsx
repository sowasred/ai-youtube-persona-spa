"use client"

import { Menu } from "lucide-react"
import { memo, useId, useState } from "react"

import type { MenuItem } from "./navbar1"

interface NavbarNavigationProps {
  menu: MenuItem[]
}

function NavbarNavigationComponent({ menu }: NavbarNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuId = `${useId()}-mobile-nav`

  const handleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div className="flex items-center sm:hidden gap-2 ml-auto">
      <button
        type="button"
        className="flex items-end p-2"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={handleMenu}
      >
        <Menu size={32} aria-hidden />
        <span className="sr-only">Toggle navigation menu</span>
      </button>

      {isOpen ? (
        <div
          id={menuId}
          className="flex flex-col items-center w-48 px-2 pt-4 pb-2 bg-white absolute top-22 right-6 border border-gray-100 rounded-md z-10"
        >
          {menu.map((item) => (
            <a
              href={item.url}
              key={item.url}
              onClick={handleMenu}
              className="text-left group inline-flex h-10 w-full pr-4 mb-2 items-center justify-end text-xl font-semibold transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export const NavbarNavigation = memo(NavbarNavigationComponent)
