"use client"
import Link from 'next/link';

export default function Footer() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const quickLinks = [
        { href: '/landing', label: 'Home' },
        { href: "/team", label: "Our Team" },
        { href: '/services', label: 'Our Services' },
        { href: '/join', label: 'Join Us' },
        //{ id: 'contact', label: 'Contact' }
    ];
    /*
        const services = [
            'Strategic Planning',
            'Market Research',
            'Operations Excellence',
            'Digital Transformation'
        ];
        
    
        const connectLinks = [
            { id: 'home', label: 'Home' },
            { id: 'about', label: 'About Us' },
            { id: 'contact', label: 'Projects' }
        ];
        */

    return (
        <footer className="bg-white py-12 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div>
                        <div className="flex items-center mb-4 w-1/2 max-w-[180px]">
                            <img
                                src="/icons/nord-full-updated-purple.png"
                                alt="NORD Consulting"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-600">
                            © 2025 NORD CONSULTING. <br /> <span className='text-sm text-gray-400'>Designed & developed by{" "}
                                <a
                                    href="https://www.linkedin.com/in/magicoco117/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-brand-purple hover:underline"
                                >
                                    Keming Wang
                                </a>
                                .</span>
                        </p>                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
                        <ul className="space-y-2 text-gray-600">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="hover:text-brand-purple transition-colors"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/* 
                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Services</h3>
                        <ul className="space-y-2 text-gray-600">
                            {services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900 mb-4">Connect</h3>
                        <div className="flex items-center space-x-4">
                            {connectLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-gray-600 hover:text-purple-600 transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                        <div className="mt-4 flex items-center space-x-4">
                            <span className="text-gray-600">News & Events</span>
                        </div>
                        <div className="mt-2 flex items-center space-x-4">
                            <span className="text-gray-600">Join Us</span>
                            <span className="text-gray-600">Contact Us</span>
                        </div>
                    </div>
                    */}
                </div>
            </div>
        </footer>
    );
}