import { Link } from "@tanstack/react-router";
import { useHeader } from "../../context/header-context";
import { useState } from "react";
import { useTheme } from "../../context/theme-context";
import { FileText } from "lucide-react";

function Header() {
  const { headerRef, headerHeight, isHeroResumeVisible } = useHeader();
  const [open, setOpen] = useState(false);
  const currentHeaderHeight = headerHeight ? `${headerHeight}px` : "0px";

  const { theme, resolvedTheme, setTheme } = useTheme();

  const navLinks = [
    { href: "/", name: "Home" },
    { href: "/projects", name: "Projects" },
    { href: "/accomplishments", name: "Accomplishments" },
    { href: "/arcade", name: "Arcade" },
    { href: "/contact", name: "Contact" },
  ];

  const handleToggleMode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <header
        ref={headerRef}
        id="header-main"
        className="fixed top-0 left-0 z-50 w-full border-b border-jm-border bg-jm-bg items-center px-6 flex justify-between"
      >
        <Link
          to={"/"}
          onClick={() => setOpen(false)}
          className="flex justify-start items-center z-10"
        >
          <p className="font-mono text-jm-green! m-0! py-4">&gt; jmg()</p>
        </Link>

        <nav className="hidden jm-mobile:flex items-center justify-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-auto">
          <ul className="flex text-fg">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="rounded-full p-3 text-sm text-jm-fg hover:text-jm-green transition-all duration-200 hover:underline"
                  activeProps={{
                    className: "text-jm-green",
                  }}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 justify-end h-full z-10">
          {!isHeroResumeVisible && (
            <a
              href="/Gatche_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:brightness-120 drop-shadow-[2px_2px_0px_rgba(0,0,0,0.2)] dark:drop-shadow-[2px_2px_0px_rgba(46,229,157,0.3)] active:relative active:top-[1px] active:left-[1px] active:drop-shadow-none bg-jm-green px-3 py-1.5 text-xs text-jm-bg flex items-center gap-1.5 rounded-sm font-mono border border-jm-green transition-all duration-200"
            >
              <FileText size={14} />
              <span className="hidden sm:inline">View Resume</span>
              <span className="sm:hidden">Resume</span>
            </a>
          )}

          <button
            onClick={() => {
              document.documentElement.classList.toggle("dark");
              console.log(theme, resolvedTheme);
              handleToggleMode();
            }}
            className="flex justify-center items-center cursor-pointer h-full"
          >
            <img
              src={`light-switch-${resolvedTheme === "light" ? "light" : "dark"}.png`}
              className="h-[80%] [image-rendering:pixelated] bg-transparent"
            />
          </button>

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
        </div>
      </header>
      <header
        className={`
          bg-jm-bg fixed flex flex-col jm-mobile:hidden w-screen z-50
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
                className="rounded-full p-3 text-3xl text-jm-fg hover:text-jm-green transition-all duration-200"
                activeProps={{
                  className: "text-jm-green",
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
