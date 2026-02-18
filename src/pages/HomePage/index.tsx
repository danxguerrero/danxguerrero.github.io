import NavBar from "../../shared-components/NavBar";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";


const HomePage = () => {
    return (
        <div className="flex flex-col h-screen bg-slate-900">
            <NavBar />
            <HeroSection/>
            <ProjectSection />
        </div>
    )
}

export default HomePage;