import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  PhoneCall,
} from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { icon: Facebook, url: "https://facebook.com" },
  { icon: Twitter, url: "https://twitter.com" },
  { icon: Linkedin, url: "https://linkedin.com" },
  { icon: Instagram, url: "https://instagram.com" },
  //   { icon: Youtube, url: "https://youtube.com" },
];

const TopBar = () => {
  return (
    <div className="bg-gray-50  border-[#44bee7] border-t-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10 text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex justify-between items-center gap-2">
              <PhoneCall className="text-gray-500 size-4"></PhoneCall>{" "}
              <span className="text-gray-500">(+880) 1704 888644</span>
            </div>
            <div className="border border-gray-200 h-5"></div>
            <div className="flex items-center  ">
              {socialLinks.map(({ icon: Icon, url }, i) => (
                <Link
                  key={i}
                  href={url}
                  target="_blank"
                  className="text-gray-500 hover:text-blue-600 hover:bg-gray-200 rounded-full p-2"
                >
                  <Icon className="w-4 h-4 cursor-pointer" />
                </Link>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-r from-[#16517E] to-[#1D8AB1] text-white px-3 py-1 rounded-lg hover:shadow-lg transition-shadow font-semibold">
            <a href="#" className="">
              Apply Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
