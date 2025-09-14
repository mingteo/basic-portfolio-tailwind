"use client";

import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [theme, setTheme] = useState("light");

  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const navMenuRef = useRef<HTMLElement>(null);

  const toggleNavigation = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        hamburgerRef.current &&
        navMenuRef.current &&
        !hamburgerRef.current.contains(e.target as Node) &&
        !navMenuRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  // cek localStorage pas awal
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className={`${isFixed ? "navbar-fixed" : "navbar-transparent"}`}>
      <div className="container mx-auto max-w-7xl">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a
              href="#home"
              className="text-primary block py-6 text-lg font-bold"
            >
              ZHANG
            </a>
          </div>
          <div className="flex items-center px-4">
            <button
              ref={hamburgerRef}
              id="hamburger"
              name="hamburger"
              type="button"
              onClick={toggleNavigation}
              className={`absolute right-4 block lg:hidden ${isOpen ? "hamburger-active" : ""}`}
            >
              <span className="hamburger-line line-1 origin-top-left transition duration-300 ease-in-out"></span>
              <span className="hamburger-line line-2 transition duration-300 ease-in-out"></span>
              <span className="hamburger-line line-3 origin-bottom-left transition duration-300 ease-in-out"></span>
            </button>
            <nav
              ref={navMenuRef}
              id="nav-menu"
              className={`${isOpen ? "dark:bg-dark absolute top-full right-4 w-full max-w-[250px] rounded-lg bg-white py-5 shadow-lg dark:shadow-slate-800" : "hidden lg:static lg:block lg:max-w-full lg:bg-transparent"}`}
            >
              <ul className="block lg:flex">
                <li className="group">
                  <a
                    href="#home"
                    className="text-dark group-hover:text-primary mx-8 flex py-2 text-base dark:text-white"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#about"
                    className="text-dark group-hover:text-primary mx-8 flex py-2 text-base dark:text-white"
                  >
                    About Me
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#portfolio"
                    className="text-dark group-hover:text-primary mx-8 flex py-2 text-base dark:text-white"
                  >
                    Portfolio
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#client"
                    className="text-dark group-hover:text-primary mx-8 flex py-2 text-base dark:text-white"
                  >
                    Client
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#blog"
                    className="text-dark group-hover:text-primary mx-8 flex py-2 text-base dark:text-white"
                  >
                    Blog
                  </a>
                </li>
                <li className="group">
                  <a
                    href="#contact"
                    className="text-dark group-hover:text-primary mx-8 flex py-2 text-base dark:text-white"
                  >
                    Contact
                  </a>
                </li>
                <li className="mt-3 flex items-center pl-8 lg:mt-0">
                  <div className="flex">
                    <span className="text-smtext-slate-500 mr-2 dark:text-white">
                      light
                    </span>
                    <input
                      type="checkbox"
                      name="dark-toggle"
                      id="dark-toggle"
                      className="hidden"
                      checked={theme === "dark"}
                      onChange={toggleTheme}
                    />
                    <label htmlFor="dark-toggle">
                      <div className="bg-primary flex h-5 w-9 cursor-pointer items-center rounded-full p-1 dark:bg-slate-500">
                        <div className="toggle-circle h-4 w-4 rounded-full bg-white transition duration-300 ease-in-out"></div>
                      </div>
                    </label>
                    <span className="text-smtext-slate-500 ml-2 dark:text-white">
                      dark
                    </span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
