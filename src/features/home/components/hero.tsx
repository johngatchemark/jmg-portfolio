import { useHeader } from "../../../context/header-context";
import { EffectScene } from "./hero-spinning-3d-face/effect-scene";
import "./hero.css"

function Hero() {
    const { headerHeight } = useHeader();
    const currentHeaderHeight = headerHeight ? `${headerHeight}px` : "71.77px";

    return (
        <main 
            className="flex flex-row w-screen justify-center relative"
            style={{ height: `calc(100vh - ${currentHeaderHeight})` }}
        >
            <div className="flex flex-col justify-center min-w-[1152px] z-10">
                <p className="text-2xl text-left font-mono text-indigo-500">Greetings!</p>
                <h1 id="hero" className="!text-white text-left">I'm John Mark</h1>
                <h2 className="!text-white text-left">Aspiring Software Engineer · Data Analyst</h2>
            </div>
        
            <div className="w-screen h-full absolute left-0 top-0">
                <div className="w-full h-full absolute z-1 bg-black opacity-50"></div>
                <EffectScene enableZoom={false} className="h-full"/>
            </div>
        </main>
    )
}

export default Hero;