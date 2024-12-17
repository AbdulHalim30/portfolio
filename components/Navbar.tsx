"use client";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      console.log(window);
      if (window.scrollY > 124 || window.innerWidth < 768) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  const downloadUrl = () =>
    window.open("/documents/CV-Abdul-Halim.pdf", "_blank");

  useEffect(() => {
    const sections = document.querySelectorAll("section"); // Ambil semua section
    const observerOptions = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: 0.5, // Elemen terlihat setengah
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div>
      {/* Header */}
      <header>
        <div
          className={`hidden md:block fixed top-0 left-0 w-full z-50 px-8 py-4 transition-all duration-300 ${
            isScrolled ? "bg-white shadow-md" : ""
          }`}
        >
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="text-2xl font-bold">
              &lt;<span className="text-orange-600 font-bold">/</span>&gt; Abdul{" "}
              <span className="text-orange-600">Halim</span>
            </a>

            {/* Menu */}
            <nav className="hidden md:flex space-x-8 items-center">
              {["home", "about", "experience", "portfolio", "skill"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className={`text text-black hover-text-orange ${
                      activeSection === item ? "text-orange-600 font-bold" : ""
                    }`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                )
              )}
              <a
                className="relative inline-block text-black py-2 px-8 rounded-full border-2 border-orange-600 overflow-hidden transition-all duration-500 group"
                href="#"
                onClick={downloadUrl}
              >
                <span className="relative z-10 font-bold">Download CV</span>
                <span className="absolute inset-0 bg-orange-600 translate-y-full transition-transform duration-500 group-hover:translate-y-0"></span>
              </a>
            </nav>
          </div>
        </div>

        {/* Mobile */}
        <div className="block md:hidden fixed top-0 left-0 w-full z-50 py-2 bg-white text-gray-800 shadow-md">
          <div className="flex justify-between items-center pl-4">
            {/* Logo */}
            <a href="#" className="text-xl font-bold">
              &lt;<span className="text-orange-600 font-bold">/</span>&gt; Abdul{" "}
              <span className="text-orange-600">Halim</span>
            </a>
            <button
              className="md:hidden flex items-end px-3 py-2 text-gray-400"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <AiOutlineClose className="h-6 w-6" />
              ) : (
                <AiOutlineMenu className="h-6 w-6" />
              )}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="bg-white">
              {["home", "about", "experience", "portfolio", "skill"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="block font-medium px-6 py-2 hover:text-orange-600"
                    onClick={closeMobileMenu}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                )
              )}
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
