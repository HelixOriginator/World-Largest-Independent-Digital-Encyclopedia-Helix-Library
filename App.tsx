import React from 'react';

export default function App() {
  const netlifyUrl = "https://beautiful-buttercream-a291c6.netlify.app/";

  return (
    <div style={{ 
      margin: 0, padding: 0, height: '100vh', display: 'flex', 
      flexDirection: 'column', backgroundColor: '#0f172a',
      fontFamily: '-apple-system, system-ui, sans-serif', color: 'white'
    }}>
      
      {/* Central Launch Hub */}
      <div style={{ 
        flex: 1, display: 'flex', flexDirection: 'column', 
        alignItems: 'center', justifyContent: 'center', padding: '20px',
        textAlign: 'center', background: 'radial-gradient(circle at center, #1e293b 0%, #0f172a 100%)'
      }}>
        
        <div style={{ 
          padding: '40px', borderRadius: '30px', backgroundColor: 'rgba(255,255,255,0.03)',
          border: '1px solid rgba(59, 130, 246, 0.2)', backdropFilter: 'blur(10px)',
          maxWidth: '600px'
        }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '10px', letterSpacing: '-1px' }}>
            Helix Encyclopedia
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: '30px' }}>
            194+ Original Intellectual Property Frameworks by Kallol Chakrabarti
          </p>

          <a 
            href={netlifyUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              display: 'inline-block', padding: '18px 40px', fontSize: '1.2rem',
              fontWeight: 'bold', color: 'white', backgroundColor: '#3b82f6',
              borderRadius: '50px', textDecoration: 'none', boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
              transition: 'transform 0.2s ease'
            }}
          >
            Launch Full Encyclopedia ↗
          </a>

          <div style={{ marginTop: '40px', paddingTop: '30px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <p style={{ fontSize: '0.9rem', color: '#64748b', marginBottom: '5px' }}>Featured Breakthrough</p>
            <p style={{ fontSize: '1rem', fontWeight: '600', color: '#3b82f6' }}>
              Dharma as Universal Systems Logic (DOI: 10.5281/zenodo.18498639)
            </p>
          </div>
        </div>
      </div>

      <footer style={{ padding: '20px', textAlign: 'center', fontSize: '12px', color: '#475569' }}>
        Official GitHub Repository Mirror • 2026 Archive
      </footer>
    </div>
  );
}
