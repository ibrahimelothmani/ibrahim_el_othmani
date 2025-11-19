import Section from '../components/Section';
import { experiences, education } from '../data/experience';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
    return (
        <Section id="experience" title="Experience & Education" subtitle="My Journey">
            <div className="grid lg:grid-cols-2 gap-12">
                {/* Work Experience */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-500/20 rounded-xl text-primary-400">
                            <Briefcase size={24} />
                        </div>
                        <h3 className="text-2xl font-bold">Work Experience</h3>
                    </div>

                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 border-l-2 border-slate-700 hover:border-primary-500 transition-colors"
                            >
                                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-slate-900 border-2 border-primary-500" />

                                <div className="mb-2">
                                    <span className="text-sm text-primary-400 font-medium flex items-center gap-2 mb-1">
                                        <Calendar size={14} /> {exp.period}
                                    </span>
                                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                                    <h5 className="text-lg text-gray-400">{exp.company}</h5>
                                </div>

                                <ul className="list-disc list-outside ml-4 text-gray-400 space-y-2 text-sm">
                                    {exp.description.map((item, i) => (
                                        <li key={i}>{item}</li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <div className="flex items-center gap-3 mb-8">
                        <div className="p-3 bg-primary-500/20 rounded-xl text-primary-400">
                            <GraduationCap size={24} />
                        </div>
                        <h3 className="text-2xl font-bold">Education</h3>
                    </div>

                    <div className="space-y-8">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary-500/50 transition-colors"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h4 className="text-lg font-bold text-white">{edu.degree}</h4>
                                        <h5 className="text-primary-400">{edu.school}</h5>
                                    </div>
                                    <span className="text-sm text-gray-500 bg-slate-900 px-3 py-1 rounded-full border border-slate-700">
                                        {edu.period}
                                    </span>
                                </div>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {edu.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
