import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchArticlesByTag, type Article } from '../services/devToApi';
import BlogCard from '../components/BlogCard';
import { Newspaper, Loader } from 'lucide-react';

const categories = [
    { name: 'All', tag: '' },
    { name: 'Cloud Computing', tag: 'cloud' },
    { name: 'DevOps', tag: 'devops' },
    { name: 'AI & ML', tag: 'ai' },
    { name: 'Kubernetes', tag: 'kubernetes' },
    { name: 'AWS', tag: 'aws' }
];

const Blog = () => {
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [page, setPage] = useState(1);

    useEffect(() => {
        loadArticles();
    }, [selectedCategory, page]);

    const loadArticles = async () => {
        setLoading(true);
        try {
            if (selectedCategory) {
                const data = await fetchArticlesByTag(selectedCategory, page);
                setArticles(data);
            } else {
                // Load mixed articles from different tags
                const tags = ['cloud', 'devops', 'ai', 'kubernetes', 'aws'];
                const randomTag = tags[Math.floor(Math.random() * tags.length)];
                const data = await fetchArticlesByTag(randomTag, page);
                setArticles(data);
            }
        } catch (error) {
            console.error('Error loading articles:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-900 pt-24 pb-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-block p-3 bg-primary-500/10 rounded-full mb-4">
                            <Newspaper className="w-8 h-8 text-primary-500" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Tech News & Articles
                        </h1>
                        <p className="text-xl text-slate-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Latest articles about Cloud, DevOps, AI, and Software Engineering from the Dev community
                        </p>
                    </motion.div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category.name}
                            onClick={() => {
                                setSelectedCategory(category.tag);
                                setPage(1);
                            }}
                            className={`px-6 py-2 rounded-full font-medium transition-all ${selectedCategory === category.tag
                                ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/25'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                                }`}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>

                {/* Loading State */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <Loader className="w-12 h-12 text-primary-500 animate-spin mb-4" />
                        <p className="text-slate-600 dark:text-gray-400">Loading articles...</p>
                    </div>
                ) : articles.length === 0 ? (
                    <div className="text-center py-20">
                        <Newspaper className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                        <p className="text-slate-600 dark:text-gray-400">No articles found</p>
                    </div>
                ) : (
                    <>
                        {/* Articles Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {articles.map((article, index) => (
                                <BlogCard key={article.id} article={article} index={index} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center gap-4 mt-12">
                            <button
                                onClick={() => setPage(p => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-gray-300 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Previous
                            </button>
                            <span className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium">
                                Page {page}
                            </span>
                            <button
                                onClick={() => setPage(p => p + 1)}
                                disabled={articles.length < 20}
                                className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-gray-300 rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}

                {/* Back to Home */}
                <div className="text-center mt-12">
                    <a
                        href="/"
                        className="inline-block px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
                    >
                        ← Back to Portfolio
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Blog;
