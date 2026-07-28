import { Link } from "@tanstack/react-router";
import { useHeader } from "../../context/header-context";

function Header() {
  const { headerRef } = useHeader();

  const navLinks = [
    { href: "/projects", name: "Projects" },
    { href: "/accomplishments", name: "Accomplishments" },
    { href: "/publications", name: "Publications" },
    { href: "/arcade", name: "Arcade" },
    { href: "/contact", name: "Contact" },
  ];

  return (
    <header
      ref={headerRef}
      id="header-main"
      className="fixed top-0 left-0 z-50 w-full border-b-2 border-indigo-500 bg-black grid grid-cols-3 items-center px-6"
    >
      <Link
        to={"/"}
        className="flex justify-start items-center"
      >
        <h1 className="!text-white !m-0">JMG</h1>
      </Link>
      
      <nav className="flex justify-center p-5">
        <ul className="flex gap-5 text-white">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className="rounded-full p-3 hover:bg-white hover:text-black"
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

      <div />
    </header>
  );
}

export default Header;