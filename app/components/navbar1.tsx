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
    <section className="pt-6 z-10 md:mb-12">
      <div className="container w-full mx-auto">
        {/* Desktop Menu */}
        <nav className="flex gap-8 items-center w-11/12 mx-auto justify-between lg:flex no-wrap">
          {/* Logo */}
          <a href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="max-h-14 lg:max-h-12" alt={logo.alt} />
          </a>
          <div className="flex items-center justify-between sm:justify-start gap-6 w-full">
            {/* Desktop menu */}
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
            {/* Mobile: Button and Hamburger */}
            <div className="flex items-center sm:hidden gap-2 ml-auto">
              <div
                className="flex items-end p-2"
                onClick={handleMenu}
              >
                <Menu size={40}></Menu>
              </div>
            </div>
            {/* Mobile menu dropdown */}
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
            ) : null}
          </div>
        </nav>

        {/* TODO: Mobile Menu */}
      </div>
    </section>
  );
};

export { Navbar1 };
