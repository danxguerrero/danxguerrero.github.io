import NavBar from "../../shared-components/NavBar";
import HeroSection from "./HeroSection";


const HomePage = () => {
    return (
        <div className="flex flex-col h-screen bg-slate-900">
            <NavBar />
            <HeroSection/>
        </div>
    )
}

export default HomePage;