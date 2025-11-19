import Section from '../components/Section';
import { motion } from 'framer-motion';
import { Database, Cloud, Terminal, Layout, Server } from 'lucide-react';

const skills = [
    {
        category: 'Cloud & DevOps',
        icon: <Cloud className="w-6 h-6" />,
        items: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'GitHub Actions']
    },
    {
        category: 'Backend',
        icon: <Server className="w-6 h-6" />,
        items: ['Java', 'Spring Boot', 'Python', 'FastAPI', 'Node.js', 'Microservices', 'REST APIs']
    },
    {
        category: 'Frontend',
        icon: <Layout className="w-6 h-6" />,
        items: ['Angular', 'React', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'JavaScript']
    },
    {
        category: 'Database',
        icon: <Database className="w-6 h-6" />,
        items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
    },
    {
        category: 'Tools & Others',
        icon: <Terminal className="w-6 h-6" />,
        items: ['Git', 'Linux', 'Prometheus', 'Grafana', 'SonarQube', 'Trivy', 'Agile/Scrum']
    }
];

const About = () => {
    return (
        <Section id="about" title="About Me" subtitle="Get to know me">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Side - Photo & Text Content */}
                <div>
                    {/* Profile Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="relative w-64 h-64 mx-auto lg:mx-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-blue-600 rounded-2xl opacity-20 blur-xl animate-pulse" />
                            <img
                                src="/assets/images/ibrahim.png"
                                alt="Ibrahim El Othmani"
                                className="relative w-full h-full object-cover rounded-2xl border-2 border-slate-700 shadow-2xl"
                            />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                            I am a motivated <span className="text-primary-400 font-semibold">Cloud & DevOps Engineer</span> with a strong background in full-stack development.
                            I specialize in designing scalable cloud solutions on AWS and Azure, automating deployment pipelines, and orchestrating containerized applications with Kubernetes.
                        </p>
                        <p className="text-slate-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                            With a proven track record of reducing deployment times and improving system reliability, I leverage Infrastructure as Code (Terraform, Ansible) and modern CI/CD practices to drive digital transformation.
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                <h4 className="text-3xl font-bold text-primary-500 mb-1">2+</h4>
                                <p className="text-sm text-gray-400">Years Experience</p>
                            </div>
                            <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                                <h4 className="text-3xl font-bold text-primary-500 mb-1">10+</h4>
                                <p className="text-sm text-gray-400">Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side - Skills Grid */}
                <div className="grid gap-4">
                    {skills.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-primary-500/50 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="p-2 bg-primary-500/20 rounded-lg text-primary-400">
                                    {skillGroup.icon}
                                </div>
                                <h3 className="font-bold text-lg">{skillGroup.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {skillGroup.items.map((item) => (
                                    <span key={item} className="px-3 py-1 bg-slate-900 rounded-full text-sm text-gray-300 border border-slate-700">
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default About;
