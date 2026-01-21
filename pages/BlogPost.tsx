import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Share2, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogData';

export const BlogPost: React.FC = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-neutral">
        <h2 className="text-2xl font-bold text-gray-600 mb-4">Artigo não encontrado</h2>
        <button onClick={() => navigate('/blog')} className="text-secondary hover:underline">
          Voltar para o Blog
        </button>
      </div>
    );
  }

  return (
    <article className="pt-24 pb-20 bg-white min-h-screen">
      
      {/* Header Image */}
      <div className="w-full h-[400px] md:h-[500px] relative mb-12">
        <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white max-w-7xl mx-auto">
            <Link to="/blog" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para o Blog
            </Link>
            <div className="flex gap-4 mb-4 text-sm font-medium">
                <span className="bg-secondary px-3 py-1 rounded-full">{post.category}</span>
                <span className="flex items-center gap-1 opacity-90"><Calendar className="h-4 w-4" /> {post.date}</span>
                <span className="flex items-center gap-1 opacity-90"><Clock className="h-4 w-4" /> 5 min de leitura</span>
            </div>
            <h1 className="font-display font-bold text-3xl md:text-5xl leading-tight max-w-4xl shadow-sm">
                {post.title}
            </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Author & Share */}
        <div className="flex justify-between items-center py-6 border-b border-gray-100 mb-8">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">BM</div>
                <div>
                    <p className="text-sm font-bold text-dark">Beatriz Melo</p>
                    <p className="text-xs text-gray-500">Terapeuta Comportamental</p>
                </div>
            </div>
            <button className="text-gray-400 hover:text-secondary transition-colors" title="Compartilhar">
                <Share2 className="h-5 w-5" />
            </button>
        </div>

        {/* Content Body */}
        <div 
            className="prose prose-lg prose-brown max-w-none text-gray-600 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content || '' }}
        >
            {/* Content injected here */}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 bg-neutral p-8 rounded-2xl text-center">
            <h3 className="font-display font-bold text-2xl text-primary mb-3">Gostou deste artigo?</h3>
            <p className="text-gray-600 mb-6">Agende uma análise inicial para aplicar essas estratégias na sua vida.</p>
            <a 
                href="/#agendar" 
                className="inline-block bg-action text-white px-8 py-3 rounded-full font-bold shadow-md hover:bg-opacity-90 transition-all hover:-translate-y-1"
            >
                Agendar Conversa
            </a>
        </div>
      </div>
    </article>
  );
};