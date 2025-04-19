import { Button } from "@/components/ui/button";
import phoneImage from "@/assets/iphone.jpeg";

export function Hero() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center items-center bg-gradient-to-br from-blue-400 to-pink-400 py-12 px-4 text-center md:text-left gap-96">
      <div className="max-w-2xl">
        <p className="text-md font-semibold mb-2 px-28">New Year Sale</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 px-12 shadow-2xl">
          upto <span className="text-5xl md:text-6xl">70% OFF</span>
        </h1>
        <button className=" rounded-3xl bg-blue-600 text-white hover:scale-125 md:text-lg px-28 py-3">Explore Now</button>
      </div>
      <img
        src={phoneImage}
        alt="phone"
        className="h-60 w-120 md:w-80 mt-8 md:mt-0 md:ml-8 rounded-xl"
      />
    </div>
  );
}
