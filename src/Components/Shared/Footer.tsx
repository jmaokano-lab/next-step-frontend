import {
  Facebook,
  Instagram,
  Linkedin,
  MessageCircleIcon,
  PhoneCallIcon,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Image
                src={"/footerlogo.png"}
                alt="footer"
                height={150}
                width={160}
              />
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We're always in search for talented and motivated people. Don't be
              shy introduce yourself!
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <button className="w-12 h-12 bg-white hover:scale-110 duration-500 hover:bg-blue-600 hover:text-white text-gray-600 rounded-full flex items-center justify-center transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white hover:scale-110 duration-500 hover:bg-blue-600 hover:text-white text-gray-600 rounded-full flex items-center justify-center transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white hover:transform-fill hover:scale-110 duration-500 hover:bg-blue-600 hover:text-white text-gray-600 rounded-full flex items-center justify-center shadow-sm">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 bg-white hover:scale-110 duration-500 hover:bg-blue-600 hover:text-white text-gray-600 rounded-full flex items-center justify-center transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold text-[#188CB1] mb-6">
              Useful Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Marketplace
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Kindergarten
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  University
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Classic Lms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Our Company */}
          <div>
            <h3 className="text-xl font-bold text-[#188CB1] mb-6">
              Our Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Become Teacher
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Instructor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Events
                </a>
              </li>
            </ul>
          </div>

          {/* Get Contact */}
          <div>
            <h3 className="text-xl font-bold text-[#188CB1] mb-6">
              Get Contact
            </h3>
            <div className="space-y-4 mb-8">
              <p className="text-gray-600 flex  items-center gap-1">
                <span className="font-semibold text-[#188CB1]">
                  <PhoneCallIcon className="size-5"></PhoneCallIcon>{" "}
                </span>{" "}
                (406) 555-0120
              </p>
              <p className="text-gray-600 flex  items-center gap-1">
                <span className="font-semibold text-[#188CB1]">
                  <MessageCircleIcon className="size-5"></MessageCircleIcon>{" "}
                </span>{" "}
                admin@example.com
              </p>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Newsletter
              </h4>
              <p className="text-gray-600 leading-relaxed">
                2000+ Our students are subscribe Around the World. Don't be shy
                introduce yourself!
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
