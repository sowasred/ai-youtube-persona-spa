import { NavbarNavigation } from "./navbar-navigation.client"

export interface MenuItem {
  title: string
  url: string
  description?: string
}

export interface Navbar1Props {
  logo?: {
    url: string
    src: string
    alt: string
    title: string
  }
  menu?: MenuItem[]
}

const defaultLogo = {
  url: "https://www.replyfan.com",
  src: "/reply_fan_logo.svg",
  alt: "logo",
  title: "replyfan.com",
}

const defaultMenu: MenuItem[] = [
  { title: "How it works", url: "#how-it-works" },
  { title: "Features", url: "#features" },
  { title: "FAQ", url: "#faq" },
]

export function Navbar1({ logo = defaultLogo, menu = defaultMenu }: Navbar1Props) {
  return (
    <section className="pt-6 z-10 md:mb-12">
      <div className="container w-full mx-auto">
        <nav className="flex items-center w-11/12 mx-auto justify-between gap-8 lg:flex-nowrap">
          <a href={logo.url} className="flex items-center gap-2" aria-label={logo.title}>
            <img src={logo.src} className="h-16 w-auto sm:h-14 lg:h-12" alt={logo.alt} />
          </a>

          <div className="flex items-center gap-6 w-full justify-between sm:justify-start">
            <ul className="hidden sm:flex items-center gap-4">
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

            <NavbarNavigation menu={menu} />
          </div>
        </nav>
      </div>
    </section>
  )
}
