import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
        { name: 'Blog', href: '/blog' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="fixed w-full z-50"
        >
            <div className={`transition-all duration-700 ease-in-out ${scrolled ? 'py-0' : 'py-4'
                }`}>
                <div className={`max-w-7xl mx-auto transition-all duration-700 ease-in-out ${scrolled ? 'px-4' : 'px-6 md:px-12'
                    }`}>
                    <motion.div
                        className={`relative transition-all duration-700 ease-in-out ${scrolled
                                ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl shadow-2xl shadow-primary-500/10 dark:shadow-primary-500/20 rounded-2xl border border-white/20 dark:border-white/10'
                                : 'bg-transparent'
                            }`}
                        animate={{
                            scale: scrolled ? 0.98 : 1,
                        }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                        {/* Animated gradient border */}
                        {scrolled && (
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 rounded-2xl opacity-20 blur-sm animate-pulse"></div>
                        )}

                        <div className={`relative px-6 py-4 flex items-center ${scrolled ? 'justify-between' : 'justify-between'
                            }`}>
                            {/* Logo with animation */}
                            <motion.a
                                href="#"
                                className="relative group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.div
                                    className={`font-display font-bold gradient-text transition-all duration-500 flex items-center gap-2 ${scrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
                                        }`}
                                    animate={{
                                        filter: scrolled ? 'brightness(1.2)' : 'brightness(1)',
                                    }}
                                >
                                    {scrolled && (
                                        <motion.span
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ duration: 0.5, type: 'spring' }}
                                        >
                                            <Sparkles className="w-5 h-5 text-primary-500" />
                                        </motion.span>
                                    )}
                                    Ibrahim.
                                </motion.div>
                                {/* Underline animation */}
                                <motion.div
                                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: '100%' }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.a>

                            {/* Desktop Menu */}
                            <div className={`hidden md:flex items-center gap-6 transition-all duration-500 ${scrolled ? 'opacity-100' : 'opacity-100'
                                }`}>
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        className="relative group text-slate-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 transition-colors text-sm font-medium uppercase tracking-wider"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        whileHover={{ y: -2 }}
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                                    </motion.a>
                                ))}

                                {/* Social & Theme */}
                                <div className="flex items-center gap-3 ml-4 pl-4 border-l border-slate-300 dark:border-slate-700">
                                    <ThemeToggle />
                                    <motion.a
                                        href="https://github.com/ibrahimelothmani"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Github size={20} />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/ibrahimelothmani/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all"
                                        whileHover={{ scale: 1.1, rotate: -5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Linkedin size={20} />
                                    </motion.a>
                                </div>
                            </div>

                            {/* Mobile Menu Button */}
                            <motion.button
                                className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-white transition-colors"
                                onClick={() => setIsOpen(!isOpen)}
                                whileTap={{ scale: 0.9 }}
                            >
                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                                </motion.div>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0, y: -20 }}
                        animate={{ opacity: 1, height: 'auto', y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="md:hidden mx-4 mt-2 overflow-hidden"
                    >
                        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl rounded-2xl border border-white/20 dark:border-white/10 shadow-2xl p-6">
                            <div className="flex flex-col gap-4">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="relative group text-slate-700 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400 text-lg font-medium px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{ x: 5 }}
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}

                                <div className="flex gap-4 mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                                    <ThemeToggle />
                                    <motion.a
                                        href="https://github.com/ibrahimelothmani"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Github size={24} />
                                    </motion.a>
                                    <motion.a
                                        href="https://www.linkedin.com/in/ibrahimelothmani/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-gray-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition-all"
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Linkedin size={24} />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
