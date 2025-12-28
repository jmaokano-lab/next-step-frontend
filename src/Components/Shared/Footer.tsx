import {
  Facebook,
  HouseIcon,
  Instagram,
  Linkedin,
  MessageCircleIcon,
  PhoneCallIcon,
  Twitter,
} from "lucide-react";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#fbfbfb] to-[#5e98c4] pt-6 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div>
            <div className="flex justify-center items-center space-x-2 mb-3">
              <Image
                src={"/footer2.png"}
                alt="footer"
                height={130}
                width={120}
                className="object-cover"
              />
            </div>
            <div className="text-gray-600 mb-5  gap-1  ">
              {/* <HouseIcon className="size-12"></HouseIcon> */}
              <div className="space-y-2 mb-2">
                <p className="text-gray-600 flex  items-center gap-1">
                  <span className="font-semibold text-[#188CB1]">
                    <PhoneCallIcon className="size-7"></PhoneCallIcon>{" "}
                  </span>{" "}
                  (+880) 1704 888644 <br /> (+880) 1756 525969
                </p>
                <p className="text-gray-600 flex  items-center gap-1">
                  <span className="font-semibold text-[#188CB1]">
                    <MessageCircleIcon className="size-5"></MessageCircleIcon>{" "}
                  </span>{" "}
                  info@nexteducationbd.com
                </p>
              </div>
              <span className="mt-2 text-sm">
                Flat No-02, House No-293, Road No-04, Avenue-3,Mirpur-DOHS,
                Dhaka-1203
              </span>
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
                  className="text-gray-600 hover:text-cyan-500bg-cyan-500 transition-colors"
                >
                  Country
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
                  Scholarship
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Course
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Service
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
                  Company Profile
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Gallery
                </a>
              </li>
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
                  Meet The Expert
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Terms & Condition
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Privacy & Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Get Contact */}
          <div>
            <h3 className="text-xl font-bold text-[#188CB1] mb-6">Payment</h3>
            <div>
              <Image
                src={"/payment.png"}
                alt="payment"
                height={200}
                width={250}
              />
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 mt-3">
              <button className="w-10 h-10 bg-white hover:scale-110 duration-500 hover:bg-cyan-500 hover:text-white text-gray-600 rounded-full flex items-center justify-center transition-all shadow-sm">
                <Facebook className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white hover:scale-110 duration-500 hover:bg-cyan-500 hover:text-white text-gray-600 rounded-full flex items-center justify-center transition-all shadow-sm">
                <Twitter className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white hover:transform-fill hover:scale-110 duration-500 hover:bg-cyan-500 hover:text-white text-gray-600 rounded-full flex items-center justify-center shadow-sm">
                <Instagram className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 bg-white hover:scale-110 duration-500 hover:bg-cyan-500 hover:text-white text-gray-600 rounded-full flex items-center justify-center transition-all shadow-sm">
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#188CB1] p-2 mt-2 ">
        <div className=" max-w-7xl mx-auto px-6 flex justify-between items-center ">
          <p>Copyright © 2025 NextStepEducation.All Rights Reserved</p>
          <div className="flex justify-center items-center">
            <p>Design and Develop By </p>
            <a
              href="https://www.deelko.com"
              className="text-red-600 pl-1 _blank"
            >
              DEELKO{" "}
            </a>{" "}
          </div>
        </div>
      </div>
    </footer>
  );
};
