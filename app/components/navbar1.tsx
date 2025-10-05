"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <section className="pt-10 z-10">
      <div className="container w-full mx-auto">
        {/* Desktop Menu */}
        <nav className="w-11/12 mx-auto justify-between lg:flex">
          <div className="flex items-center justify-between sm:justify-start gap-6">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-12" alt={logo.alt} />
            </a>
            <div className="flex items-center hidden sm:block">
              {menu.map((item, i) => {
                return (
                  <Link
                    href={item.url}
                    scroll={true}
                    key={i}
                    className="bg-background hover:bg-muted hover:text-accent-foreground group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-lg font-semibold transition-colors"
                  >
                    {item.title}
                  </Link>
                );
              })}
            </div>
            <div
              className="flex items-end block sm:hidden p-2"
              onClick={handleMenu}
            >
              <Menu size={40}></Menu>
            </div>
            {isOpen ? (
              <div className="flex flex-col items-center w-48 px-2 pt-4 pb-2 bg-white absolute top-22 right-6 border border-gray-100 rounded-md z-10">
                {menu.map((item, i) => {
                  return (
                    <Link
                      href={item.url}
                      scroll={true}
                      key={i}
                      onClick={handleMenu}
                      className="text-left group inline-flex h-10 w-full pr-4 mb-2 items-center justify-end text-xl font-semibold transition-colors"
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            ) : (
              <></>
            )}
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
