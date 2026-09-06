"use client"
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import BrandIcon from './BrandIcon.jsx';
import { Button } from './Buttons.jsx';
import Link from "next/link"
import { usePathname } from 'next/navigation.js';

export default function Navigation() {
    const [scrollY, setScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const navHeight = 700; // scroll distance over which the transition happens

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate transition progress (0 → 1)
    const progress = Math.min(scrollY / navHeight, 1);

    // Interpolate background and text color
    const bgColor = `rgba(255, 255, 255, ${progress})`; // transparent → white
    const textColor = `rgb(${255 - progress * 255}, ${255 - progress * 255}, ${255 - progress * 255})`; // white → black

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const navItems = [
        { href: "/landing", label: "Home", isActive: true },
        { href: "/team", label: "Our Team" },
        { href: "/services", label: "Our Services" },
        //{ href: "/news", label: "News & Events" },
        { href: "/join", label: "Join Us" },
        //{ href: "/contact", label: "Contact Us" },
    ];
    // Function to check if a nav item is active
    const isItemActive = (href) => {
        if (href === "/landing" && (pathname === "/" || pathname === "/landing")) {
            return true;
        }
        return pathname === href;
    };

    return (
        <nav
            className="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300"
            style={{ backgroundColor: bgColor }}
        >
            {/* Main Navigation Container */}
            <div className="container mx-auto px-6">
                <div className="flex items-center gap-10 justify-start h-16">
                    {/* Brand Logo */}
                    <div className="flex items-center">
                        <BrandIcon progress={progress} />
                    </div>

                    {/* Desktop Navigation - Pill Button Style */}
                    <div className="hidden lg:flex items-center gap-4">
                        {navItems.map((item) => {
                            const isActive = isItemActive(item.href);
                            return (
                                <Link key={item.href} href={item.href} passHref>
                                    <div className={`
                                        px-6 py-2 text-sm font-medium transition-all duration-200 cursor-pointer
                                        ${isActive
                                            ? 'bg-brand-purple-light text-gray-900 rounded-full shadow-md backdrop-blur-sm'
                                            : 'hover:bg-white/10 rounded-full'
                                        }
                                    `}
                                        style={{
                                            color: isActive ? '#374151' : textColor
                                        }}
                                    >
                                        {item.label}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2 hover:bg-white/10 rounded-md transition-colors absolute right-6"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ?
                            <X className="w-6 h-6" style={{ color: textColor }} /> :
                            <Menu className="w-6 h-6" style={{ color: textColor }} />
                        }
                    </button>
                </div>

                {/* Mobile Navigation Dropdown */}
                {isMenuOpen && (
                    <div className="lg:hidden backdrop-blur-md">
                        <div className="py-4 space-y-1 inline-flex">
                            {navItems.map((item) => {
                                const isActive = isItemActive(item.href);
                                return (
                                    <Link key={item.href} href={item.href} passHref>
                                        <div className={`
                                        px-6 py-2 text-sm font-medium transition-all duration-200 cursor-pointer w-fit
                                        ${isActive
                                                ? 'bg-brand-purple-light text-gray-900 rounded-full shadow-md backdrop-blur-sm'
                                                : 'hover:bg-white/10 rounded-full'
                                            }
                                    `}
                                            style={{
                                                color: isActive ? '#374151' : textColor
                                            }}
                                        >
                                            {item.label}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}