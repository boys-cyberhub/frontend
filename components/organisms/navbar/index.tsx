import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeToggle } from '../../atoms/theme-toggle';

const NAV_LINKS = [
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Dashboard',   href: '/dashboard'   },
  { label: 'Messages',    href: '/messages'     },
  { label: 'About',       href: '/about'        },
];

export function Navbar() {
  const [open, setOpen]         = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <nav className={`sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 h-16 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 transition-shadow ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>

        {/* Brand */}
        <Link href="/" onClick={close} className="flex items-center gap-2 text-xl font-extrabold text-gray-900 dark:text-white tracking-tight shrink-0">
          <span className="text-2xl">🌍</span>
          OyaShip
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${router.pathname === href ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-semibold' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link href="/marketplace" className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white text-sm font-semibold rounded-lg transition-all hover:-translate-y-px shadow-sm">
            Browse Suppliers
          </Link>
        </div>

        {/* Mobile right */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle />
          <button
            className="relative w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className={`block w-5 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ${open ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-900 dark:bg-white rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        onClick={close}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Mobile drawer */}
      <div className={`fixed top-16 left-0 right-0 z-50 md:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-300 ease-in-out ${open ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
        <div className="px-4 py-4">
          <ul className="list-none m-0 p-0 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={close}
                  className={`flex items-center px-4 py-3 rounded-xl text-base font-medium transition-colors min-h-[48px] ${router.pathname === href ? 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 font-semibold' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'}`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-2">
            <Link href="/marketplace" onClick={close} className="flex items-center justify-center w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors min-h-[48px]">
              Browse Suppliers →
            </Link>
            <Link href="/sell" onClick={close} className="flex items-center justify-center w-full py-3.5 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl transition-colors min-h-[48px]">
              List Your Products
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
