import './header.css'

function Header () {
    const navLinks: {href: string, name: string}[] = [
        {href:"", name: "Projects"},
        {href:"", name: "Accomplishments"},
        {href:"", name: "Publications"},
        {href:"", name: "Arcade"},
        {href:"", name: "Contact"}
    ];
    return (
        <header id="header-main" className="fixed top-0 left-0 z-50 bg-black w-full border-b-2 border-indigo-500">
            <nav className="p-5 flex justify-center">
                <ul className="flex text-white gap-5">
                    {
                        navLinks.map((item, idx) => (
                            <li key={idx}><a href={item.href} className="p-3 hover:bg-white hover:text-black rounded-full font-mono">{item.name}</a></li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Header;