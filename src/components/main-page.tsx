import Hero from "./hero";
import Header from "./header/header";
import About from "./about";

function MainPage() {
    return (
        <main className="w-screen">
            <Header/>
            <Hero/>
            <About/>
        </main>
    )
}

export default MainPage;