import React from "react";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-yellow-400 to-red-700  text-white px-2 py-10 text-sm">
      <div className="max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-semibold mb-3 border-b border-white w-fit">
            My Shop
          </h4>
          <p className="text-white text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-3 border-b border-white w-fit">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blogs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sitemaps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 border-b border-white w-fit">
            Shop Now
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Collections
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Trending Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                New Arrivals Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Featured Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sitemaps
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-3 border-b border-white w-fit">
            Reach Us
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <div className="mt-2">
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.2540311158163!2d77.69587327480346!3d12.935183816201774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae122ebceaaaab%3A0x90e7e9e027ff6167!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1713602955702!5m2!1sen!2sin"
                  width="100%"
                  height="100"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded border"
                ></iframe>
              </div>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91 888-XXX-XXXX
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              fundaofwebit@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white mt-10 pt-4 flex flex-col md:flex-row items-center justify-between text-xs">
        <div className="flex gap-6 mb-2 md:mb-0">
          <span>© 2025 My Shop</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
        <div className="flex gap-4">
          <Facebook className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
          <Instagram className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
          <Youtube className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
          <Twitter className="w-5 h-5 hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
