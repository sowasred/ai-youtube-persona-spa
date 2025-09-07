"use client"

import Link from "next/link";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    login: {
      title: string;
      url: string;
    };
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "https://www.replyfan.com",
    src: "/reply_fan_logo.svg",
    alt: "logo",
    title: "replyfan.com",
  },
  menu = [
    { title: "How it works", url: "#how-it-works" },
    {
      title: "Features",
      url: "#features",
    },
    // {
    //   title: "Resources",
    //   url: "#",
    //   items: [
    //     {
    //       title: "Help Center",
    //       description: "Get all the answers you need right here",
    //       icon: <Zap className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Contact Us",
    //       description: "We are here to help you with any questions you have",
    //       icon: <Sunset className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Status",
    //       description: "Check the current status of our services and APIs",
    //       icon: <Trees className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //     {
    //       title: "Terms of Service",
    //       description: "Our terms and conditions for using our services",
    //       icon: <Book className="size-5 shrink-0" />,
    //       url: "#",
    //     },
    //   ],
    // },
    {
      title: "Pricing",
      url: "#",
    },
    {
      title: "Case Studies",
      url: "#",
    },
  ],
  auth = {
    login: { title: "Login", url: "#" },
    signup: { title: "Sign up", url: "#" },
  },
}: Navbar1Props) => {
  return (
    <section className="pt-10 z-10 pl-4">
      <div className="container w-full mx-auto">
        {/* Desktop Menu */}
        <nav className="justify-between lg:flex">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img
                src={logo.src}
                className="max-h-12"
                alt={logo.alt}
              />
            </a>
            <div className="flex items-center">
              {menu.map((item, i) =>{
              return (
                <Link
                  href={item.url}
                  scroll={true}
                  key={i}
                  className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-semibold transition-colors"
                >
                  {item.title}
                </Link>
              )})}
            </div>
          </div>
          {/* Login Sign in button */}
          {/* <div className="flex gap-2">
            <Button asChild variant="outline" size="sm">
              <a href={auth.login.url}>{auth.login.title}</a>
            </Button>
            <Button asChild size="sm">
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button>
          </div> */}
        </nav>

        {/* TODO: Mobile Menu */}
      </div>
    </section>
  );
};

export { Navbar1 };
