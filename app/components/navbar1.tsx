import { NavbarNavigation } from "./navbar-navigation.client"
import { DarkModeToggle } from "./dark-mode-toggle"
import Image from "next/image"

export interface MenuItem {
  title: string
  url: string
  description?: string
}

export interface Navbar1Props {
  logo?: {
    url: string
    srcLight: string
    srcDark: string
    alt: string
    title: string
  }
  menu?: MenuItem[]
}

const defaultLogo = {
  url: "/",
  srcLight: "/reply_fan_logo_light.svg",
  srcDark: "/reply_fan_logo_dark.svg",
  alt: "logo",
  title: "replyfan.com",
}

const defaultMenu: MenuItem[] = [
  { title: "How it works", url: "/#how-it-works" },
  { title: "Features", url: "/#features" },
  { title: "Pricing", url: "/#pricing" },
  { title: "FAQ", url: "/#faq" },
]

export function Navbar1({ logo = defaultLogo, menu = defaultMenu }: Navbar1Props) {
  return (
    <section className="sticky top-0 z-10 border-b backdrop-blur-md py-4">
      <div className="w-full mx-auto">
        <nav className="flex items-center w-11/12 mx-auto justify-between gap-8 lg:flex-nowrap">
          <a href={logo.url} className="flex items-center gap-2" aria-label={logo.title}>
            <Image src={logo.srcLight} width={64} height={64} className="h-16 w-auto sm:h-14 lg:h-12 dark:hidden" alt={logo.alt} />
            <Image src={logo.srcDark} width={64} height={64} className="h-16 w-auto sm:h-14 lg:h-12 hidden dark:block" alt={logo.alt} />
          </a>

          <div className="flex items-center gap-6 w-full justify-end md:justify-between">
            <ul className="hidden md:flex items-center gap-4">
              {menu.map((item) => (
                <li key={item.url}>
                  <a
                    href={item.url}
                    className="bg-background hover:bg-muted hover:text-accent-foreground inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-lg font-semibold transition-colors"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <DarkModeToggle />
              <NavbarNavigation menu={menu} />
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
