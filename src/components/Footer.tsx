import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 border-t border-slate-800 py-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold gradient-text mb-2">Ibrahim.</h3>
                        <p className="text-gray-500 text-sm">
                            Building scalable cloud solutions & modern web apps.
                        </p>
                    </div>

                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/ibrahimelothmani"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ibrahimelothmani/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                        <a
                            href="mailto:ibrahimelothmanii@gmail.com"
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <p>© 2025 Ibrahim El Othmani. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
