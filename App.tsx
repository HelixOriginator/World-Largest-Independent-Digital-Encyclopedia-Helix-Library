import React from 'react';

export default function App() {
  return (
    <div style={{ 
      margin: 0, 
      padding: 0, 
      height: '100vh', 
      overflow: 'hidden', 
      backgroundColor: '#0f172a',
      fontFamily: 'sans-serif'
    }}>
      {/* Top Banner for Identity */}
      <div style={{ 
        backgroundColor: '#0f172a', 
        color: 'white', 
        padding: '10px 20px', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        borderBottom: '1px solid #1e293b'
      }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '18px' }}>Helix Encyclopedia</h1>
          <p style={{ margin: 0, fontSize: '10px', color: '#94a3b8' }}>World-Largest-Independent-Digital-Encyclopedia</p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#3b82f6' }}>Official Repository Mirror</span>
        </div>
      </div>

      {/* The Live Library Frame */}
      <iframe 
        src="https://beautiful-buttercream-a291c6.netlify.app/" 
        title="Helix Library Content"
        style={{ 
          width: '100%', 
          height: 'calc(100vh - 50px)', 
          border: 'none' 
        }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
