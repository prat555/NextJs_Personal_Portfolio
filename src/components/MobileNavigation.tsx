'use client'

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavigationProps {
  sections: React.RefObject<HTMLDivElement | null>[];
  activeSection: number;
  onNavigate: (index: number) => void;
}

export default function MobileNavigation({ sections, activeSection, onNavigate }: MobileNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for background blur
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        buttonRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  const navItems = [
    { id: 0, label: "About", icon: "fas fa-user" },
    { id: 1, label: "Skills", icon: "fas fa-code" },
    { id: 2, label: "Projects", icon: "fas fa-folder-open" },
    { id: 3, label: "Education", icon: "fas fa-graduation-cap" },
    { id: 4, label: "Contact", icon: "fas fa-envelope" },
  ];

  const socialLinks = [
    { icon: "fas fa-envelope", href: "mailto:pratyush8600@gmail.com", label: "Email" },
    { icon: "fab fa-github", href: "https://github.com/prat555", label: "GitHub" },
    { icon: "fas fa-code", href: "https://leetcode.com/u/pratg555/", label: "LeetCode" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/pratyush-goutam-387837250", label: "LinkedIn" },
  ];

  return (
    <>
      {/* Fixed Mobile Header */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-4 py-3">
          {/* Logo */}
          <div 
            onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
              onNavigate(0);
            }}
            className="text-2xl font-bold text-gray-900 dark:text-white cursor-pointer"
          >
            <span className="text-accent">P</span>ratyush <span className="text-accent">G</span>outam
          </div>
          
          {/* Hamburger Menu */}
          <button
            ref={buttonRef}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-accent dark:hover:text-accent transition-all duration-300"
            aria-label="Toggle menu"
          >
            <motion.i
              animate={{ rotate: isMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
              className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"} text-lg`}
            />
          </button>
        </div>
      </div>

      {/* Hamburger Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-[60px] right-4 z-40 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-2xl rounded-2xl overflow-hidden"
          >
            <div className="w-44">
              <div className="px-4 pt-3 pb-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Socials</h3>
              </div>
              <hr className="border-gray-200 dark:border-gray-700" />
              <div className="py-2">
                {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-accent/10 dark:hover:bg-accent/20 hover:text-accent dark:hover:text-accent transition-all duration-200"
                >
                  <i className={`${link.icon} text-base w-5 text-blue-500`}></i>
                  <span className="text-sm font-medium">{link.label}</span>
                </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-700/50 shadow-lg">
        <div className="flex justify-around items-center px-2 py-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center flex-1 py-1.5 px-1 rounded-xl transition-all duration-300 relative ${
                activeSection === item.id
                  ? "text-accent"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              <i className={`${item.icon} text-lg mb-0.5`}></i>
              <span className="text-[10.5px] font-medium">{item.label}</span>
              
              {/* Blue indicator under active section */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-11 h-1 bg-blue-500 rounded-t-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
