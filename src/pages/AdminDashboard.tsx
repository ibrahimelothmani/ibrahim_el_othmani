import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { ref, onValue, remove, update } from 'firebase/database';
import { db } from '../firebase';
import { motion } from 'framer-motion';
import { LogOut, Mail, User, Clock, Search, Trash2, Check } from 'lucide-react';

interface Message {
    id: string;
    name: string;
    email: string;
    message: string;
    timestamp: number;
    read?: boolean;
}

const AdminDashboard = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [filteredMessages, setFilteredMessages] = useState<Message[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState<'all' | 'read' | 'unread'>('all');
    const { logout, currentUser } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const messagesRef = ref(db, 'contacts');

        const unsubscribe = onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const messagesList: Message[] = Object.entries(data).map(([id, msg]: [string, any]) => ({
                    id,
                    ...msg
                }));

                messagesList.sort((a, b) => b.timestamp - a.timestamp);
                setMessages(messagesList);
                setFilteredMessages(messagesList);
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        let filtered = messages;

        // Apply read/unread filter
        if (filter === 'read') {
            filtered = filtered.filter(msg => msg.read);
        } else if (filter === 'unread') {
            filtered = filtered.filter(msg => !msg.read);
        }

        // Apply search filter
        if (searchTerm) {
            filtered = filtered.filter(msg =>
                msg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                msg.message.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        setFilteredMessages(filtered);
    }, [searchTerm, filter, messages]);

    const handleLogout = async () => {
        try {
            await logout();
            navigate('/');
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Are you sure you want to delete this message?')) {
            try {
                await remove(ref(db, `contacts/${id}`));
            } catch (error) {
                console.error('Delete error:', error);
            }
        }
    };

    const toggleRead = async (id: string, currentStatus: boolean = false) => {
        try {
            await update(ref(db, `contacts/${id}`), {
                read: !currentStatus
            });
        } catch (error) {
            console.error('Update error:', error);
        }
    };

    const formatDate = (timestamp: number) => {
        return new Date(timestamp).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
            {/* Header */}
            <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Admin Dashboard</h1>
                            <p className="text-xs sm:text-sm text-slate-600 dark:text-gray-400 mt-1 truncate max-w-[200px] sm:max-w-none">
                                {currentUser?.email}
                            </p>
                        </div>
                        <div className="flex gap-2 sm:gap-4 w-full sm:w-auto">
                            <a
                                href="/"
                                className="flex-1 sm:flex-none px-3 sm:px-4 py-2 text-sm text-slate-700 dark:text-gray-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors text-center"
                            >
                                Portfolio
                            </a>
                            <button
                                onClick={handleLogout}
                                className="flex-1 sm:flex-none px-3 sm:px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                            >
                                <LogOut size={16} />
                                <span className="hidden sm:inline">Logout</span>
                                <span className="sm:hidden">Out</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600 dark:text-gray-400">Total Messages</p>
                                <p className="text-3xl font-bold text-slate-900 dark:text-white mt-1">{messages.length}</p>
                            </div>
                            <Mail className="w-12 h-12 text-primary-500" />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600 dark:text-gray-400">Unread</p>
                                <p className="text-3xl font-bold text-orange-600 dark:text-orange-400 mt-1">
                                    {messages.filter(m => !m.read).length}
                                </p>
                            </div>
                            <Check className="w-12 h-12 text-orange-500" />
                        </div>
                    </div>

                    <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-slate-600 dark:text-gray-400">Read</p>
                                <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-1">
                                    {messages.filter(m => m.read).length}
                                </p>
                            </div>
                            <Check className="w-12 h-12 text-green-500" />
                        </div>
                    </div>
                </div>

                {/* Filters */}
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-6 mb-6">
                    <div className="flex flex-col gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-9 sm:pl-10 pr-4 py-2 text-sm bg-slate-50 dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-slate-900 dark:text-white outline-none"
                            />
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => setFilter('all')}
                                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'all'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                                    }`}
                            >
                                All
                            </button>
                            <button
                                onClick={() => setFilter('unread')}
                                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'unread'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                                    }`}
                            >
                                Unread
                            </button>
                            <button
                                onClick={() => setFilter('read')}
                                className={`flex-1 sm:flex-none px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filter === 'read'
                                    ? 'bg-primary-600 text-white'
                                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-gray-300 hover:bg-slate-200 dark:hover:bg-slate-600'
                                    }`}
                            >
                                Read
                            </button>
                        </div>
                    </div>
                </div>

                {/* Messages List */}
                <div className="space-y-4">
                    {filteredMessages.length === 0 ? (
                        <div className="bg-white dark:bg-slate-800 rounded-lg shadow p-12 text-center">
                            <Mail className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
                            <p className="text-slate-600 dark:text-gray-400">No messages found</p>
                        </div>
                    ) : (
                        filteredMessages.map((msg, index) => (
                            <motion.div
                                key={msg.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                className={`bg-white dark:bg-slate-800 rounded-lg shadow p-6 border-l-4 ${msg.read ? 'border-green-500' : 'border-orange-500'
                                    }`}
                            >
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-0 mb-4">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                                            <User className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0" />
                                            <h3 className="font-semibold text-sm sm:text-base text-slate-900 dark:text-white truncate">{msg.name}</h3>
                                            {!msg.read && (
                                                <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-xs rounded-full flex-shrink-0">
                                                    New
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-gray-400 mb-2">
                                            <Mail className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                            <a href={`mailto:${msg.email}`} className="hover:text-primary-500 truncate">
                                                {msg.email}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-gray-400">
                                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                                            <span className="truncate">{formatDate(msg.timestamp)}</span>
                                        </div>
                                    </div>

                                    <div className="flex gap-2 self-end sm:self-start">
                                        <button
                                            onClick={() => toggleRead(msg.id, msg.read)}
                                            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                                            title={msg.read ? 'Mark as unread' : 'Mark as read'}
                                        >
                                            <Check className={`w-4 h-4 sm:w-5 sm:h-5 ${msg.read ? 'text-green-500' : 'text-slate-400'}`} />
                                        </button>
                                        <button
                                            onClick={() => handleDelete(msg.id)}
                                            className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                                            title="Delete message"
                                        >
                                            <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                                        </button>
                                    </div>
                                </div>

                                <div className="pl-0 sm:pl-8">
                                    <p className="text-sm sm:text-base text-slate-700 dark:text-gray-300 whitespace-pre-wrap break-words">{msg.message}</p>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
