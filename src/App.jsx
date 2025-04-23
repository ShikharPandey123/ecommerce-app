import { Navbar } from "./components/Navbar";
import HeroCarousel from "./components/HeroCarousel";
import Footer from "./components/Footer";
import CategoriesSection from "./components/CategoriesSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroCarousel/>
      <CategoriesSection/>
      <Footer/>
    </div>
  );
}

export default App;
