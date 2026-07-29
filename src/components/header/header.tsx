import { Link } from "@tanstack/react-router";
import { useHeader } from "../../context/header-context";
import { useState } from "react";

function Header() {
  const { headerRef, headerHeight } = useHeader();
  const [open, setOpen] = useState(false);
  const currentHeaderHeight = headerHeight ? `${headerHeight}px` : "0px";

  const navLinks = [
    { href: "/projects", name: "Projects" },
    { href: "/accomplishments", name: "Accomplishments" },
    { href: "/publications", name: "Publications" },
    { href: "/arcade", name: "Arcade" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        id="header-main"
        className="fixed top-0 left-0 z-50 w-full border-b-2 border-gray-200 dark:border-gray-900 bg-off-white dark:bg-off-black items-center px-6 flex justify-between jm-mobile:grid jm-mobile:grid-cols-3"
      >
        <Link
          to={"/"}
          onClick={() => setOpen(false)}
          className="flex justify-start items-center"
        >
          <h1 className="text-black dark:text-white! m-0! py-5">JMG</h1>
        </Link>

        <nav className="hidden jm-mobile:flex justify-center p-5">
          <ul className="flex text-black dark:text-white">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="rounded-full p-3 hover:bg-off-black dark:hover:bg-off-white hover:text-white dark:hover:text-black transition-all duration-200"
                  activeProps={{
                    className: "text-indigo-500",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="jm-mobile:hidden relative flex h-7 w-7 cursor-pointer"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`
            absolute top-1/2 transition-transform duration-200 right-0
            ${open ? "-translate-y-1/2" : "translate-y-[-250%] delay-100"}
          `}
          >
            <span
              className={`
              block w-7 h-0.5 bg-black dark:bg-white transition-transform duration-200
              ${open ? "-rotate-45 delay-100" : "rotate-0"}
            `}
            />
          </span>

          <span
            className={`
            absolute top-1/2 transition-transform duration-200 right-0
            ${open ? "-translate-y-1/2" : "translate-y-[250%] delay-100"}
          `}
          >
            <span
              className={`
              block w-7 h-0.5 bg-black dark:bg-white transition-transform duration-200
              ${open ? "rotate-45 delay-100" : "rotate-0"}
            `}
            />
          </span>
        </button>
      </header>
      <header
        className={`
          bg-off-white dark:bg-off-black fixed flex flex-col jm-mobile:hidden w-screen z-50
          transition-[height,opacity,visibility] duration-300 ease-in-out
          ${
            open
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
        style={{
          height: open ? `calc(100vh - ${currentHeaderHeight})` : "0px",
          top: currentHeaderHeight,
        }}
      >
        <ul className="flex flex-col gap-5 text-black dark:text-white font-bold mt-9">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded-full p-3 text-3xl hover:bg-off-black dark:hover:bg-off-white hover:text-white dark:hover:text-black transition-all duration-200"
                activeProps={{
                  className: "text-indigo-500",
                }}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </header>
    </>
  );
}

export default Header;
