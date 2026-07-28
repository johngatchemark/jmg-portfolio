import { EffectScene } from "./effect-scene";
import "./hero.css"

function Hero() {
    return (
        <main className="h-screen flex flex-row w-screen justify-center pt-[71.77px]">
            <div className="flex flex-col justify-center min-w-[1152px] z-10">
                <p className="text-2xl text-left font-mono text-indigo-500">Greetings!</p>
                <h1 id="hero" className="!text-white text-left">I'm John Mark</h1>
                <h2 className="!text-white text-left">Aspiring Software Engineer · Data Analyst</h2>
            </div>
        
            <div className="w-screen h-[calc(100vh-71.77px)] absolute left-0 top-[71.77px]">
                <div className="w-full h-full absolute z-1 bg-black opacity-50"></div>
                <EffectScene enableZoom={false} className="h-full"/>
            </div>
        </main>

        // <main className="h-screen flex flex-row w-screen justify-center pt-[71.77px]">
        //     <div className="bg-black flex flex-1 flex-col justify-center z-10">
        //         <h1 id="hero" className="!text-white">Hi, I'm John Mark</h1>
        //         <h2 className="!text-white">Aspiring Software Engineer · Data Analyst</h2>
        //     </div>
        //     <EffectScene enableZoom={false} className="flex-1"/>
        // </main>
    )
}

export default Hero;