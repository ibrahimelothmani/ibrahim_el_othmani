import React from 'react';
import type { Article } from '../services/devToApi';
import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

interface BlogCardProps {
    article: Article;
    index: number;
}

const BlogCard: React.FC<BlogCardProps> = ({ article, index }) => {
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <motion.a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="block bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700 hover:border-primary-500/50 group"
        >
            {/* Cover Image */}
            {article.cover_image && (
                <div className="relative h-48 overflow-hidden">
                    <img
                        src={article.cover_image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg">
                        <ExternalLink className="w-4 h-4 text-primary-500" />
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                    {article.tag_list.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs rounded-full"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-500 transition-colors">
                    {article.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                    {article.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center gap-3">
                        <img
                            src={article.user.profile_image}
                            alt={article.user.name}
                            className="w-8 h-8 rounded-full"
                        />
                        <div>
                            <p className="text-sm font-medium text-slate-900 dark:text-white">
                                {article.user.name}
                            </p>
                            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-gray-500">
                                <Calendar className="w-3 h-3" />
                                <span>{formatDate(article.published_at)}</span>
                            </div>
                        </div>
                    </div>

                    {article.reading_time_minutes && (
                        <div className="flex items-center gap-1 text-slate-500 dark:text-gray-500 text-sm">
                            <Clock className="w-4 h-4" />
                            <span>{article.reading_time_minutes} min</span>
                        </div>
                    )}
                </div>
            </div>
        </motion.a>
    );
};

export default BlogCard;
