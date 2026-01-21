import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Filter } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export const BlogIndex: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const categories = ['Todas', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 pb-16 min-h-screen bg-neutral">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-secondary font-semibold tracking-wider text-sm uppercase">Nosso Blog</span>
          <h1 className="text-primary font-display font-bold text-4xl md:text-5xl mt-2 mb-6">
            Conhecimento e Clareza
          </h1>
          <p className="text-gray-500 text-lg">
            Artigos sobre regulação emocional, terapia cognitiva e estratégias para uma vida mais leve.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12 flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Categories */}
          <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 w-full md:w-auto scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === cat 
                    ? 'bg-secondary text-white' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-64">
            <input 
              type="text" 
              placeholder="Buscar artigos..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/50 text-sm"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.id} className="block group">
              <article className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-gray-100">
                <div className="h-56 overflow-hidden relative">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  <span className="absolute top-4 left-4 text-xs font-bold text-secondary uppercase tracking-wider bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                     <span className="w-1 h-1 rounded-full bg-gray-400"></span>
                     <span>{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-dark group-hover:text-primary transition-colors mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-sm flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-action font-semibold text-sm">
                    <span>Ler completo</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {filteredPosts.length === 0 && (
            <div className="text-center py-20">
                <div className="inline-block p-4 rounded-full bg-gray-100 mb-4">
                    <Filter className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-600">Nenhum artigo encontrado</h3>
                <p className="text-gray-400">Tente ajustar sua busca ou filtro.</p>
                <button 
                    onClick={() => {setSearchTerm(''); setSelectedCategory('Todas')}}
                    className="mt-4 text-secondary hover:underline"
                >
                    Limpar filtros
                </button>
            </div>
        )}

      </div>
    </div>
  );
};