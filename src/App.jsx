import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import HeroCarousel from "./components/HeroCarousel";
import Footer from "./components/Footer";
import CategoriesSection from "./components/CategoriesSection";
import CategoryBar from "./components/CategoryBar";

function App() {
  return (
    <div>
      <Navbar />
      <CategoryBar/>
      <HeroCarousel/>
      <Hero />
      <CategoriesSection/>
      <Footer/>
    </div>
  );
}

export default App;
