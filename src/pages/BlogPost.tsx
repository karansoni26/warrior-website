import React, { useMemo } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data/posts';
import BlogCTA from '../components/BlogCTA';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = useMemo(() => 
    BLOG_POSTS.find(p => p.slug === slug),
    [slug]
  );

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="section" style={{minHeight: '100vh', padding: '150px 20px'}}>
      <div className="container" style={{maxWidth: '800px'}}>
        <Link to="/blog" style={{color: 'var(--ghost)', textDecoration: 'none', fontSize: '0.9rem', marginBottom: '40px', display: 'inline-block'}}>
          &larr; BACK TO HANDBOOK
        </Link>
        <div style={{color: 'var(--rh)', fontSize: '0.9rem', marginBottom: '15px'}}>{post.date} &bull; {post.readTime}</div>
        <h1 style={{fontSize: '3.5rem', marginBottom: '40px', color: 'var(--white)'}} className="heading">{post.title}</h1>
        
        <div 
          style={{
            color: 'var(--ghost)', 
            fontSize: '1.2rem', 
            lineHeight: '1.8',
            marginBottom: '80px',
            fontFamily: 'Outfit, sans-serif'
          }}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* The Exact Big Green Download Button */}
        <BlogCTA />
      </div>
    </div>
  );
};

export default BlogPost;
