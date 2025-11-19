import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import Hero3DScene from '../components/Hero3DScene';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            {/* 3D Scene Background */}
            <div className="absolute inset-0 z-[1] opacity-60">
                <Hero3DScene />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium mb-6">
                            Available for Hire
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                            Building the <br />
                            <span className="gradient-text">Future of Cloud</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                            I am a Cloud & DevOps Engineer and Full Stack Developer. I build scalable infrastructure and high-performance web applications.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-primary-600/25 hover:animate-glow"
                            >
                                View Work <ArrowRight size={20} />
                            </a>
                            <a
                                href="/resume.pdf"
                                download="Ibrahim_El_Othmani_Resume.pdf"
                                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-medium transition-all flex items-center gap-2 backdrop-blur-sm"
                            >
                                Download CV <Download size={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Tech Stack Badges */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="mt-12 flex flex-wrap justify-center gap-4"
                    >
                        {['AWS', 'Kubernetes', 'Terraform', 'React', 'Spring Boot'].map((tech) => (
                            <div key={tech} className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700 text-slate-300 text-sm hover:border-primary-500/50 transition-colors">
                                {tech}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
