import React from 'react';
import { BLOG_POSTS } from '../data/posts';
import { Link } from 'react-router-dom';

const Blog: React.FC = () => {
  return (
    <div className="section" style={{minHeight: '80vh', padding: '120px 20px'}}>
      <div className="container" style={{maxWidth: '1000px'}}>
        <h1 style={{fontSize: '3rem', marginBottom: '20px', color: 'var(--white)'}}>Warrior Handbook</h1>
        <p style={{color: 'var(--ghost)', fontSize: '1.2rem', marginBottom: '60px'}}>Scientific tactical guides to reclaiming biological baseline.</p>
        
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '30px'}}>
          {BLOG_POSTS.map((post) => (
            <Link 
              to={`/blog/${post.slug}`} 
              key={post.slug}
              style={{
                textDecoration: 'none',
                padding: '30px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid var(--iron)',
                borderRadius: '12px',
                transition: 'all 0.3s ease',
                display: 'block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--rh)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--iron)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{color: 'var(--dim)', fontSize: '0.9rem', marginBottom: '10px'}}>{post.date} &bull; {post.readTime}</div>
              <h2 style={{fontSize: '1.5rem', marginBottom: '15px'}} className="heading">{post.title}</h2>
              <p style={{color: 'var(--ghost)', fontSize: '0.95rem', lineHeight: '1.6'}}>{post.excerpt}</p>
              <div style={{marginTop: '20px', color: 'var(--rh)', fontWeight: 'bold'}}>READ ARTICLE &rarr;</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
