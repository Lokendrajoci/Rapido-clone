"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/About" },
  { label: "Safety", href: "/Safety" },
  { label: "Career", href: "/Career" },
  { label: "Blogs", href: "/Blogs" },
  { label: "Press", href: "/Press" },
  { label: "Contact Us", href: "/Contact" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isMobileMenuOpen
          ? "bg-white"
          : isScrolled
          ? "bg-white shadow-md"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between lg:justify-around h-20 md:h-24">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative w-16 h-16 md:w-20 md:h-20">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative text-gray-600 hover:text-gray-900 px-2 py-2 text-sm md:text-base font-semibold transition-colors
                  ${isActive(item.href) ? "text-black" : ""}
                `}
              >
                {item.label}
                <span
                  className={`absolute bottom-1 left-0 h-0.5 bg-black transition-all duration-300
                  ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}
                `}
                ></span>
              </Link>
            ))}
            <button className="bg-black text-white font-bold py-2 px-4 md:px-6 text-sm md:text-base rounded-[4rem_2rem] hover:bg-gray-800 transition-all duration-300 hover:scale-105">
              Download App
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2 transition-transform duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`
        lg:hidden fixed inset-0 bg-white transition-all duration-500 ease-in-out z-40
        ${
          isMobileMenuOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }
      `}
      >
        <button
          onClick={toggleMobileMenu}
          className="absolute top-6 right-6 text-gray-800 p-2 hover:text-gray-600 transition-all duration-300 hover:rotate-180"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col h-full pt-24 px-6">
          {navItems.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative group text-gray-800 py-4 text-lg font-semibold border-b border-gray-100 transition-all duration-300
                ${isActive(item.href) ? "text-black" : ""}
              `}
              style={{
                transitionDelay: `${index * 100}ms`,
                transform: isMobileMenuOpen
                  ? "translateX(0)"
                  : "translateX(50px)",
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
              onClick={() => {
                setIsMobileMenuOpen(false);
                document.body.style.overflow = "unset";
              }}
            >
              {item.label}
              <span
                className={`absolute bottom-4 left-0 h-0.5 bg-black transition-all duration-300
                ${isActive(item.href) ? "w-24" : "w-0 group-hover:w-24"}
              `}
              ></span>
            </Link>
          ))}
          <button
            className="mt-8 bg-black text-white font-bold py-3 px-6 rounded-[4rem_2rem] hover:bg-gray-800 transition-all duration-300 hover:scale-105"
            style={{
              transitionDelay: `${navItems.length * 100}ms`,
              transform: isMobileMenuOpen
                ? "translateX(0)"
                : "translateX(50px)",
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            Download App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
