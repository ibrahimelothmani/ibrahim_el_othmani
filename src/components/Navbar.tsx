import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className={`flex items-center transition-all duration-500 ${scrolled ? 'justify-center md:justify-between' : 'justify-between'
                    }`}>
                    {/* Logo */}
                    <a
                        href="#"
                        className={`font-display font-bold gradient-text transition-all duration-500 ${scrolled ? 'text-xl md:text-2xl' : 'text-2xl'
                            }`}
                    >
                        Ibrahim.
                    </a>

                    {/* Desktop Menu - Hidden when scrolled */}
                    <div className={`hidden md:flex items-center gap-8 transition-all duration-500 ${scrolled ? 'opacity-0 pointer-events-none absolute' : 'opacity-100'
                        }`}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-gray-300 hover:text-primary-400 transition-colors text-sm font-medium uppercase tracking-wider"
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="flex items-center gap-4 ml-4 border-l border-gray-700 pl-4">
                            <a href="https://github.com/ibrahimelothmani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/ibrahimelothmani/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button - Always visible */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900 border-b border-gray-800 overflow-hidden"
                    >
                        <div className="px-6 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-primary-400 text-lg font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex gap-6 mt-4">
                                <a href="https://github.com/ibrahimelothmani" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <Github size={24} />
                                </a>
                                <a href="https://www.linkedin.com/in/ibrahimelothmani/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <Linkedin size={24} />
                                </a>
                                <a href="mailto:ibrahimelothmanii@gmail.com" className="text-gray-400 hover:text-white">
                                    <Mail size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
