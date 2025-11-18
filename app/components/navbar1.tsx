import { NavbarNavigation } from "./navbar-navigation.client"
import { DarkModeToggle } from "./dark-mode-toggle"
import Image from "next/image"

export interface MenuItem {
  title: string
  url: string
  description?: string
  button?: boolean
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
  { title: "How It Works", url: "/#how-it-works" },
  { title: "Features", url: "/#features" },
  { title: "Pricing", url: "/#pricing" },
  { title: "FAQ", url: "/#faq" },
  { title: "Contact Us", url: "/#contact", button: true },
]

export function Navbar1({ logo = defaultLogo, menu = defaultMenu }: Navbar1Props) {
  return (
    <section className="sticky top-0 z-10 border-b backdrop-blur-md py-4">
      <div className="w-full mx-auto max-w-[98rem]">
        <nav className="flex items-center w-11/12 mx-auto gap-8">
          <a href={logo.url} className="flex items-center gap-2" aria-label={logo.title}>
            <Image src={logo.srcLight} width={64} height={64} className="h-16 w-auto sm:h-14 lg:h-12 dark:hidden" alt={logo.alt} />
            <Image src={logo.srcDark} width={64} height={64} className="h-16 w-auto sm:h-14 lg:h-12 hidden dark:block" alt={logo.alt} />
          </a>

          <div className="flex items-center gap-6 justify-end w-full">
            <ul className="hidden md:flex items-center gap-2 md:gap-3 lg:gap-4 lg:text-xl">
              {menu.map((item) => (
                <li key={item.url} className="shrink-0">
                  <a
                    href={item.url}
                    className={
                      item.button
                        ? "bg-blue-600 hover:bg-blue-500 text-white inline-flex h-10 items-center rounded-md px-3 md:px-4 py-2 font-semibold transition-colors whitespace-nowrap"
                        : "bg-background hover:bg-muted hover:text-accent-foreground inline-flex h-10 items-center rounded-md px-3 md:px-4 py-2 font-semibold transition-colors whitespace-nowrap"
                    }
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
