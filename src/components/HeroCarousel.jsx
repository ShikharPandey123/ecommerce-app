import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const banners = [
  {
    img: "/bed.png",
    title: "Beds",
    price: "From ₹8,999",
    brands: "Wooden Street, Sleepyhead & more",
  },
  {
    img: "/sofa.png",
    title: "Sofas",
    price: "From ₹12,499",
    brands: "Wakefit, Urban Ladder & more",
  },
  {
    img: "/chair.png",
    title: "Chairs",
    price: "From ₹999",
    brands: "Nilkamal, GreenSoul & more",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-400 to-red-700 text-white py-8 px-4 z-0">
      <Button
        onClick={prevSlide}
        variant="ghost"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-white hover:bg-white/30"
      >
        <ChevronLeft />
      </Button>
      <Button
        onClick={nextSlide}
        variant="ghost"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/20 text-white hover:bg-white/30"
      >
        <ChevronRight />
      </Button>

      <div className="flex justify-center items-center">
        <div className="flex flex-col md:flex-row items-center gap-96 max-w-5xl mx-auto">
          <img
            src={banners[current].img}
            alt={banners[current].title}
            className="w-96 h-60 rounded-3xl object-fill"
          />
          <div>
            <h2 className="text-6xl font-semibold">{banners[current].title}</h2>
            <p className="text-xl font-bold">{banners[current].price}</p>
            <p className="text-sm text-gray-100">{banners[current].brands}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
