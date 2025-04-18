import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, User } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 md:px-6 py-4 shadow-sm bg-white sticky top-0 z-50 flex-wrap gap-4">

  <div className="text-2xl font-bold">
    <span className="text-green-600">My </span>
    <span className="text-black">Shop</span>
  </div>

  <div className="flex items-center flex-grow max-w-xl gap-2 w-full md:w-auto">
    <Input placeholder="Search Products" className="w-full" />
    <Button className="px-4 py-2 text-white bg-blue-600 rounded">Search</Button>
  </div>

  <div className="flex items-center gap-4">
    <ShoppingCart className="cursor-pointer w-6 h-6" />
    <Heart className="cursor-pointer w-6 h-6" />
    <User className="cursor-pointer w-6 h-6" />
  </div>
</nav>

  );
}
