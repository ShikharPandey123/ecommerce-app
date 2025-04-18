import React from "react";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-600 text-white px-6 py-10 text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        <div>
          <h4 className="text-gray-900 font-semibold mb-3">ABOUT</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Flipkart Stories</a></li>
            <li><a href="#" className="hover:underline">Press</a></li>
            <li><a href="#" className="hover:underline">Corporate Info</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-semibold mb-3">GROUP COMPANIES</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Myntra</a></li>
            <li><a href="#" className="hover:underline">Cleartrip</a></li>
            <li><a href="#" className="hover:underline">Shopsy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-semibold mb-3">HELP</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Payments</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-semibold mb-3">CONSUMER POLICY</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Cancellation & Returns</a></li>
            <li><a href="#" className="hover:underline">Terms Of Use</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Security</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
            <li><a href="#" className="hover:underline">Grievance Redressal</a></li>
            <li><a href="#" className="hover:underline">EPR Compliance</a></li>
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h4 className="text-gray-900 font-semibold mb-3">Mail Us:</h4>
          <p className="text-white text-sm">
            Shikhar's Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India
          </p>

          <div className="flex gap-4 mt-4 text-gray-400">
            <Twitter className="w-5 h-5 hover:text-white" />
            <Instagram className="w-5 h-5 hover:text-white" />
            <Youtube className="w-5 h-5 hover:text-white" />
            <Facebook className="w-5 h-5 hover:text-white" />
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h4 className="text-gray-900 font-semibold mb-3">Registered Office Address:</h4>
          <p className="text-white text-sm">
            Shikhar's Internet Private Limited,<br />
            Buildings Alyssa, Begonia &<br />
            Clove Embassy Tech Village,<br />
            Outer Ring Road, Devarabeesanahalli Village,<br />
            Bengaluru, 560103,<br />
            Karnataka, India<br />
            <span className="text-gray-900">CIN:</span> U51109KA2012PTC066107<br />
            <span className="text-gray-900">Telephone:</span> 
            <span className="text-white"> 044-45614700 / 044-67415800</span>
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-white text-xs">
        <div className="flex gap-6 mb-2 md:mb-0">
          <span>Become a Seller</span>
          <span>Advertise</span>
          <span>Gift Cards</span>
          <span>Help Center</span>
        </div>
        <p>© 2007-2025 Flipkart.com</p>
      </div>
    </footer>
  );
}
