"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const navItems = [
  { label: "Bosh sahifa", href: "/#bosh-sahifa" },
  { label: "Mebel", href: "/#mebel" },
  { label: "Aksessuarlar", href: "/#aksessuarlar" },
  { label: "Online Magazine", href: "/online-magazine" },
  { label: "Biz haqimizda", href: "/#biz-haqimizda" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (typeof window !== "undefined") {
        // Close mobile menu on any scroll
        if (Math.abs(currentScrollY - prevScrollY) > 5) {
          setIsMobileMenuOpen(false);
        }

        if (currentScrollY < prevScrollY || currentScrollY < 50) {
          setIsVisible(true);
        } else if (currentScrollY > prevScrollY && currentScrollY > 100) {
          setIsVisible(false);
        }

        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        if (currentScrollY + windowHeight >= documentHeight - 20) {
          setIsVisible(false);
        }

        prevScrollY = currentScrollY;
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -110 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className='fixed inset-x-0 top-0 z-30 backdrop-blur-md bg-greenDeep/60'
    >
      <div className='mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-10 '>
        <div className='px-5 py-3 text-4xl font-semibold tracking-wide text-beigeLight font-brand'>
          <span className='font-brand text-goldAccent'>Sof</span> Mebel
        </div>

        <nav className='hidden items-center gap-7 rounded-2xl px-6 py-3 text-sm text-beigeLight md:flex'>
          {navItems.map(item => (
            <a
              key={item.label}
              href={item.href}
              className='transition duration-300 hover:text-goldAccent'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type='button'
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          className='glass-card inline-flex h-11 w-11 items-center justify-center rounded-2xl text-beigeLight md:hidden'
          aria-label='Menyu'
          aria-expanded={isMobileMenuOpen}
          aria-controls='mobile-menu'
        >
          <svg
            viewBox='0 0 24 24'
            className='h-5 w-5'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
          >
            {isMobileMenuOpen ? (
              <path d='M6 6l12 12M18 6l-12 12' />
            ) : (
              <path d='M4 7h16M4 12h16M4 17h16' />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='mx-auto w-full max-w-7xl px-5 overflow-hidden md:hidden sm:px-8 lg:px-10'
          >
            <nav
              id='mobile-menu'
              className='soft-ring rounded-2xl p-3 text-beigeLight mb-6'
            >
              {navItems.map(item => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className='block rounded-xl px-3 py-2 text-sm transition duration-300 hover:bg-beigeLight/10 hover:text-goldAccent'
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
