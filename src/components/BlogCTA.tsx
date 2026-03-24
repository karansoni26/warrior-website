import React from 'react';

const BlogCTA: React.FC = () => {
    return (
        <div style={{
            margin: '60px 0',
            padding: '40px',
            background: 'rgba(255,255,255,0.02)',
            border: '2px solid var(--rh)',
            borderRadius: '12px',
            borderStyle: 'dashed',
            textAlign: 'center'
        }}>
            <h3 style={{marginBottom: '20px', fontSize: '1.4rem'}}>Ready to Reclaim Your Focus?</h3>
            <p style={{color: 'var(--ghost)', marginBottom: '30px'}}>
                Stop fighting purely with willpower. Deploy the system-level shield.
            </p>
            <a 
                href="/install"
                className="btn-g" 
                style={{
                    display: 'inline-block', 
                    padding: '20px 40px', 
                    fontSize: '1.2rem', 
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    boxShadow: '0 0 30px rgba(0, 255, 136, 0.2)'
                }}
            >
                ✅ DOWNLOAD WARRIOR APK NOW (Free • Safe • VirusTotal Verified)
            </a>
            <div style={{marginTop: '20px', fontSize: '0.85rem', color: 'var(--ghost)'}}>
                SHA256: A800D0E6... (0/68 Verified)
            </div>
        </div>
    );
};

export default BlogCTA;
