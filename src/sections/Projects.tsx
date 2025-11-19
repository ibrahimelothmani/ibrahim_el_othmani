import { useState } from 'react';
import Section from '../components/Section';
import Card from '../components/Card';
import { projects } from '../data/projects';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState<'all' | 'fullstack' | 'cloud-devops'>('all');

    const filteredProjects = activeCategory === 'all'
        ? projects
        : projects.filter(p => p.category === activeCategory);

    return (
        <Section id="projects" title="Featured Projects" subtitle="My Portfolio">
            {/* Filter Tabs */}
            <div className="flex justify-center mb-12">
                <div className="bg-slate-800/50 p-1 rounded-xl inline-flex border border-slate-700">
                    {[
                        { id: 'all', label: 'All Projects' },
                        { id: 'cloud-devops', label: 'Cloud & DevOps' },
                        { id: 'fullstack', label: 'Full Stack' },
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveCategory(tab.id as any)}
                            className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === tab.id
                                    ? 'bg-primary-600 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-slate-700'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Projects Grid */}
            <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence>
                    {filteredProjects.map((project) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={project.id}
                        >
                            <Card className="h-full flex flex-col bg-slate-800 border-slate-700">
                                {/* Image or Placeholder */}
                                <div className="h-48 overflow-hidden relative group">
                                    {project.imageUrl ? (
                                        <img
                                            src={project.imageUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                            <Folder size={48} className="text-slate-600" />
                                        </div>
                                    )}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/10 rounded-full hover:bg-primary-600 text-white transition-colors backdrop-blur-sm"
                                            >
                                                <Github size={20} />
                                            </a>
                                        )}
                                        {project.demoUrl && (
                                            <a
                                                href={project.demoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 bg-white/10 rounded-full hover:bg-primary-600 text-white transition-colors backdrop-blur-sm"
                                            >
                                                <ExternalLink size={20} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="mb-4">
                                        <span className={`text-xs font-bold px-2 py-1 rounded-md uppercase tracking-wider ${project.category === 'cloud-devops'
                                                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                                : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                                            }`}>
                                            {project.category === 'cloud-devops' ? 'Cloud & DevOps' : 'Full Stack'}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-6 flex-1">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tags.map((tag) => (
                                            <span key={tag} className="text-xs text-gray-500 bg-slate-900 px-2 py-1 rounded border border-slate-700">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </Section>
    );
};

export default Projects;
