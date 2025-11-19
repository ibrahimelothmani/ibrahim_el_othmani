import { motion } from 'framer-motion';
import { ArrowRight, Download, Cloud, Server } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Text Content */}
                    <div className="lg:w-1/2 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block py-1 px-3 rounded-full bg-primary-500/10 border border-primary-500/30 text-primary-400 text-sm font-medium mb-6">
                                Available for Hire
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                Building the <br />
                                <span className="gradient-text">Future of Cloud</span>
                            </h1>
                            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
                                I am a Cloud & DevOps Engineer and Full Stack Developer. I build scalable infrastructure and high-performance web applications.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                                <a
                                    href="#projects"
                                    className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-full font-medium transition-all flex items-center gap-2 shadow-lg shadow-primary-600/25"
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
                            className="mt-12 flex flex-wrap justify-center lg:justify-start gap-4"
                        >
                            {['AWS', 'Kubernetes', 'Terraform', 'React', 'Spring Boot'].map((tech) => (
                                <div key={tech} className="px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700 text-slate-300 text-sm">
                                    {tech}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Visual/Image */}
                    <div className="lg:w-1/2 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7 }}
                            className="relative z-10"
                        >
                            <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-blue-600 rounded-full opacity-20 animate-pulse" />
                                <img
                                    src="/assets/images/ibrahim.png"
                                    alt="Ibrahim El Othmani"
                                    className="w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl"
                                />

                                {/* Floating Cards */}
                                <motion.div
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                    className="absolute -top-4 -right-4 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3"
                                >
                                    <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                                        <Cloud size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Certified</div>
                                        <div className="font-bold text-sm">Cloud Engineer</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    animate={{ y: [0, 10, 0] }}
                                    transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                    className="absolute -bottom-4 -left-4 bg-slate-800 p-4 rounded-xl border border-slate-700 shadow-xl flex items-center gap-3"
                                >
                                    <div className="p-2 bg-green-500/20 rounded-lg text-green-400">
                                        <Server size={24} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Expertise</div>
                                        <div className="font-bold text-sm">DevOps & CI/CD</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
