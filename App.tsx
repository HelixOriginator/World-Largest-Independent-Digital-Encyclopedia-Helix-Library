import React, { useState, useMemo } from 'react';

// 1. DATA (Keep your 194 frameworks here)
const CONCEPTS = [
  {
    id: 'g-1',
    term: 'VAFGPE',
    fullName: 'Vedic Analytical Framework for Governance, Policing, and Education',
    description: 'A globally unprecedented policy architecture designed to address systemic challenges through Vedic wisdom.',
    category: 'Governance & Policy',
    tags: ['Vedic Wisdom', 'Policy']
  },
  {
    id: 'g-53',
    term: 'EchoShield Nexus',
    description: 'The next evolution in Uttar Pradesh\'s security revolution.',
    category: 'Governance & Policy',
    tags: ['Security', 'UP']
  }
  // PASTE YOUR OTHER 190+ FRAMEWORKS HERE
];

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = CONCEPTS.filter(item => 
    item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ fontFamily: 'sans-serif', backgroundColor: '#f8fafc', minHeight: '100vh', color: '#0f172a' }}>
      {/* Header */}
      <header style={{ backgroundColor: '#0f172a', color: 'white', padding: '20px', textAlign: 'center' }}>
        <h1 style={{ margin: 0 }}>Helix Encyclopedia</h1>
        <p style={{ fontSize: '14px', color: '#94a3b8' }}>194+ Original Intellectual Property Frameworks</p>
        <input 
          type="text"
          placeholder="Search frameworks..."
          style={{ marginTop: '15px', padding: '10px', borderRadius: '20px', border: 'none', width: '80%', maxWidth: '400px' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </header>

      {/* Main Body */}
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
        <div style={{ backgroundColor: '#1e293b', color: 'white', padding: '30px', borderRadius: '15px', marginBottom: '30px' }}>
          <h2 style={{ margin: 0 }}>Dharma as Universal Systems Logic</h2>
          <p style={{ color: '#38bdf8' }}>DOI: 10.5281/zenodo.18498639</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filtered.map((item) => (
            <div key={item.id} style={{ backgroundColor: 'white', padding: '20px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
              <span style={{ fontSize: '10px', fontWeight: 'bold', backgroundColor: '#eff6ff', color: '#1d4ed8', padding: '4px 8px', borderRadius: '10px' }}>
                {item.category}
              </span>
              <h3 style={{ marginTop: '15px' }}>{item.term}</h3>
              <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.5' }}>{item.description}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                {item.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '10px', color: '#64748b' }}>#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
