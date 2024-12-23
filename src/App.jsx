import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="bg-white min-h-screen]">
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
