import NavBar from "../../shared-components/NavBar";
import HeroSection from "./HeroSection";
import ProjectSection from "./ProjectSection";
import AboutSection from "./AboutSection";


const HomePage = () => {
    return (
        <div className="flex flex-col h-full bg-slate-900">
            <NavBar />
            <HeroSection />
            <AboutSection />
            <ProjectSection />
        </div>
    )
}

export default HomePage;