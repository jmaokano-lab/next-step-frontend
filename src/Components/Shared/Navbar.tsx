"use client";

import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useRef, useState } from "react";

const megaMenuData = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    subMenu: [
      { name: "Consulting", href: "/services/consulting" },
      { name: "Training", href: "/services/training" },
      { name: "Support", href: "/services/support" },
    ],
  },
  { name: "Country", href: "/country" },
  { name: "University", href: "/university" },
  { name: "Course", href: "/course" },
  { name: "Scholarship", href: "/scholarship" },
];

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const [query, setQuery] = useState("");
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleToggle = () => {
    setOpen((prev) => !prev);

    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 0);
  };

  //search bar ============

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = query.trim();
    if (!trimmed) return;

    router.push(`/search?q=${encodeURIComponent(trimmed)}`);
  };

  return (
    <nav className="w-full bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 ">
          {/* Left: Logo */}
          <div className="flex-shrink-0 w-40">
            <Link href="/">
              <img src="/mainLogo.png" alt="Logo" className="h-16 w-36" />
            </Link>
          </div>

          {/* Middle: Menu */}
          <div className="flex space-x-2">
            {megaMenuData.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onMouseEnter={() => item.subMenu && setOpenMenu(item.name)}
                  onMouseLeave={() => setOpenMenu(null)}
                  className="px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                >
                  {item.name}
                </button>

                {/* Submenu */}
                {item.subMenu && openMenu === item.name && (
                  <div
                    onMouseEnter={() => setOpenMenu(item.name)}
                    onMouseLeave={() => setOpenMenu(null)}
                    className="absolute left-0 top-full mt-2 w-48 bg-white shadow-lg border rounded-md z-50 duration-300"
                  >
                    {item.subMenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-blue-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Search Bar */}
          <div ref={wrapperRef} className="relative hidden lg:block">
            {/* Search Icon */}
            <button
              type="button"
              aria-label="Search"
              onClick={handleToggle}
              className="rounded p-2 text-[#0f3036] hover:text-[#119d3e]"
            >
              <SearchIcon className="h-5 w-5" />
            </button>

            {/* Dropdown Search Field */}
            {open && (
              <form
                onSubmit={handleSubmit}
                className="absolute right-0 mt-2 flex w-72 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-3 text-sm shadow-lg"
              >
                <SearchIcon className="h-4 w-4 text-slate-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full border-none bg-transparent text-[#0f3036] placeholder:text-slate-400 focus:outline-none"
                />
              </form>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
