import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    AOS.init({
        // config AOS
        duration: 1000
    });

    return (
        <div className="font-inter bg-darker text-gray-200 min-h-screen">
            <Hero/>
            <Projects/>
        </div>
    );
}

export default App;