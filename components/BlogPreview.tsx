import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export const BlogPreview: React.FC = () => {
    // Take only the first 3 posts
    const recentPosts = blogPosts.slice(0, 3);

    return (
        <section id="blog-preview" className="py-20 bg-neutral">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div>
                        <span className="text-secondary font-semibold tracking-wider text-sm uppercase">Blog</span>
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mt-2">
                            Artigos Recentes
                        </h2>
                    </div>
                    <Link
                        to="/blog"
                        className="group flex items-center gap-2 text-primary font-semibold hover:text-secondary transition-colors"
                    >
                        Ver todos os artigos
                        <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {recentPosts.map((post) => (
                        <Link to={`/blog/${post.slug}`} key={post.id} className="group cursor-pointer">
                            <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100 transform hover:-translate-y-1">
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={post.imageUrl}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <span className="absolute top-4 left-4 text-[10px] font-bold text-secondary uppercase tracking-wider bg-white/95 backdrop-blur-sm px-2 py-1 rounded-sm shadow-sm">
                                        {post.category}
                                    </span>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                                        <span>{post.date}</span>
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-dark group-hover:text-primary transition-colors mb-2 line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <span className="text-action font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                                        Ler artigo <ArrowRight className="h-3 w-3" />
                                    </span>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
