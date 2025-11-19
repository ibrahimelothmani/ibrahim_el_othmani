import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    id: string;
    title?: string;
    subtitle?: string;
    className?: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, className = '', children }) => {
    return (
        <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
            <div className="max-w-7xl mx-auto">
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16 text-center"
                    >
                        {subtitle && (
                            <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-2 block">
                                {subtitle}
                            </span>
                        )}
                        {title && (
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white relative inline-block">
                                {title}
                                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary-500 rounded-full"></span>
                            </h2>
                        )}
                    </motion.div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
