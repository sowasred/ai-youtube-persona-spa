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
    <div className="ml-auto flex items-center gap-2 lg:hidden">
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
          className="absolute right-6 top-22 z-30 flex w-52 flex-col items-center rounded-md border border-gray-200 bg-white px-2 pt-4 pb-2 shadow-lg dark:border-gray-800 dark:bg-black"
        >
          {menu.map((item) => (
            <a
              href={item.url}
              key={item.url}
              onClick={handleMenu}
              className="mb-2 inline-flex h-10 w-full items-center justify-end pr-4 text-left text-xl font-semibold text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400"
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
