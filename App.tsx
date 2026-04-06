import React, { useEffect, useRef } from 'react';
export default function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  //  ✅  URLs
  const netlifyUrl = "https://largest-independentresearcher-library.netlify.app/";
  const noveltyUrl = "https://novelty-benchmark-kallol-chakrabarti.netlify.app/";
  const governanceMarketUrl = "https://helixoriginator.github.io/Kallol-Chakrabarti-Research-Repository-Governance-Market-Systems-and-Strategic-Frameworks/";
  const civicKnowledgeUrl = "https://helixoriginator.github.io/Civic-Knowledge-Hub-Governance-Law-Democracy-Studies/";
  const researchRepositoriesUrl = "https://kallol-241-repositories.netlify.app/";
  const aiUrl = "https://kallol-chakrabarti-ai.netlify.app/";
  const globalPortalUrl = "https://global-knowledge-governance-portal.netlify.app/#websites";
  const helixGithubUrl = "https://helixoriginator.github.io/World-Largest-Independent-Digital-Encyclopedia-Helix-Library/";
  const docuHelixUrl = "https://helixoriginator.github.io/sovereign-research-docu-helix/";
  const policyAuditorUrl = "https://opal.google/app/1Ms-1bHVXqp99u4B_uH7ejvWEa0ZXDk71";
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(99, 179, 237, ${p.opacity})`;
        ctx.fill();
      });
      // Draw faint connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99, 179, 237, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      animId = requestAnimationFrame(animate);
    };
    animate();
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const buttons = [
    {
      href: netlifyUrl,
      label: "Launch Full Encyclopedia",
      sub: "240+ Frameworks · World's Largest Archive",
      icon: " ◈ ",
      type: "primary",
    },
    {
      href: noveltyUrl,
      label: "25 Verified Novelty Breakthroughs",
      sub: "DeSci Labs · 90–100% Novelty Scores",
      icon: " ★ ",
      type: "gold",
    },
    {
      href: aiUrl,
      label: "Kallol Chakrabarti AI",
      sub: "AI-Powered Research Interface",
      icon: " ⬡ ",
      type: "ai",
    },
    {
      href: globalPortalUrl,
      label: "Global Knowledge Governance Portal",
      sub: "8+ Knowledge Portals · Papers · Research Fields · 100% Independent",
      icon: " 🌐 ",
      type: "portal",
    },
    {
      href: governanceMarketUrl,
      label: "Governance, Market & Strategic Frameworks",
      sub: "Research Repository · GitHub",
      icon: " 📊 ",
      type: "secondary",
    },
    {
      href: civicKnowledgeUrl,
      label: "Civic Knowledge Hub",
      sub: "Governance · Law · Democracy Studies",
      icon: " ⚖️ ",
      type: "secondary",
    },
    {
      href: researchRepositoriesUrl,
      label: "All Research Repositories Index",
      sub: "Complete Archive · All Domains",
      icon: " 🗂️ ",
      type: "secondary",
    },
  ];
  return (
    <div style={{
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      backgroundColor: '#060b14',
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: 'white',
      position: 'relative',
      overflowX: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #060b14; }
        .helix-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 300;
          font-size: clamp(2.8rem, 6vw, 5rem);
          letter-spacing: 0.12em;
          line-height: 1;
          background: linear-gradient(135deg, #e2e8f0 0%, #94a3b8 40%, #63b3ed 70%, #e2e8f0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-transform: uppercase;
        }
        .helix-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        .btn-primary {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 20px 28px;
          background: linear-gradient(135deg, #1d4ed8 0%, #2563eb 50%, #3b82f6 100%);
          border: 1px solid rgba(99, 179, 237, 0.4);
          border-radius: 4px;
          text-decoration: none;
          color: white;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .btn-primary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-primary:hover::before { opacity: 1; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 20px 40px -10px rgba(37,99,235,0.5); }
        .btn-gold {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 18px 28px;
          background: linear-gradient(135deg, rgba(120, 85, 10, 0.5) 0%, rgba(180,130,20,0.3) 100%);
          border: 1px solid rgba(251, 191, 36, 0.5);
          border-radius: 4px;
          text-decoration: none;
          color: #fef3c7;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .btn-gold::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(251,191,36,0.1) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-gold:hover::before { opacity: 1; }
        .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 20px 40px -10px rgba(251,191,36,0.3); border-color: rgba(251,191,36,0.8); }
        .btn-ai {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 18px 28px;
          background: linear-gradient(135deg, rgba(109,40,217,0.5) 0%, rgba(139,92,246,0.3) 100%);
          border: 1px solid rgba(167,139,250,0.5);
          border-radius: 4px;
          text-decoration: none;
          color: #ede9fe;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .btn-ai::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(167,139,250,0.15) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-ai:hover::before { opacity: 1; }
        .btn-ai:hover { transform: translateY(-2px); box-shadow: 0 20px 40px -10px rgba(139,92,246,0.4); border-color: rgba(167,139,250,0.9); }
        .btn-portal {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 18px 28px;
          background: linear-gradient(135deg, rgba(13,90,80,0.55) 0%, rgba(20,150,130,0.3) 100%);
          border: 1px solid rgba(45,212,191,0.45);
          border-radius: 4px;
          text-decoration: none;
          color: #ccfbf1;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .btn-portal::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(45,212,191,0.12) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-portal:hover::before { opacity: 1; }
        .btn-portal:hover { transform: translateY(-2px); box-shadow: 0 20px 40px -10px rgba(20,184,166,0.35); border-color: rgba(45,212,191,0.85); }
        .btn-amber {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 18px 28px;
          background: linear-gradient(135deg, rgba(120,60,5,0.55) 0%, rgba(180,100,10,0.3) 100%);
          border: 1px solid rgba(251,146,60,0.45);
          border-radius: 4px;
          text-decoration: none;
          color: #ffedd5;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .btn-amber::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(251,146,60,0.12) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-amber:hover::before { opacity: 1; }
        .btn-amber:hover { transform: translateY(-2px); box-shadow: 0 20px 40px -10px rgba(234,88,12,0.35); border-color: rgba(251,146,60,0.85); }
        .btn-sovereign {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 18px 28px;
          background: linear-gradient(135deg, rgba(100,10,30,0.55) 0%, rgba(160,20,50,0.3) 100%);
          border: 1px solid rgba(251,113,133,0.45);
          border-radius: 4px;
          text-decoration: none;
          color: #ffe4e6;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .btn-sovereign::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(251,113,133,0.12) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-sovereign:hover::before { opacity: 1; }
        .btn-sovereign:hover { transform: translateY(-2px); box-shadow: 0 20px 40px -10px rgba(225,29,72,0.35); border-color: rgba(251,113,133,0.85); }
        .btn-secondary {
          position: relative;
          display: flex;
          align-items: center;
          gap: 16px;
          width: 100%;
          padding: 16px 28px;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(51, 65, 85, 0.8);
          border-radius: 4px;
          text-decoration: none;
          color: #cbd5e1;
          transition: all 0.3s ease;
          overflow: hidden;
        }
        .btn-secondary::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(99,179,237,0.05) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .btn-secondary:hover::before { opacity: 1; }
        .btn-secondary:hover { transform: translateY(-2px); border-color: rgba(99,179,237,0.3); color: #e2e8f0; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.5); }
        .divider-line {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99,179,237,0.3), transparent);
        }
        .badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: rgba(37,99,235,0.15);
          border: 1px solid rgba(59,130,246,0.3);
          border-radius: 2px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.7rem;
          color: #93c5fd;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .glow-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
          z-index: 0;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.7s ease forwards; opacity: 0; }
        .delay-1 { animation-delay: 0.1s; }
        .delay-2 { animation-delay: 0.2s; }
        .delay-3 { animation-delay: 0.35s; }
        .delay-4 { animation-delay: 0.5s; }
        .delay-5 { animation-delay: 0.65s; }
        @keyframes subtlePulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.7; }
        }
      `}</style>
      {/* Animated canvas background */}
      <canvas ref={canvasRef} style={{
        position: 'fixed', top: 0, left: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 0,
      }} />
      {/* Glow orbs */}
      <div className="glow-orb" style={{ width: 500, height: 500, background: 'rgba(37,99,235,0.07)', top: -100, left: -100 }} />
      <div className="glow-orb" style={{ width: 400, height: 400, background: 'rgba(109,40,217,0.06)', bottom: 0, right: -100 }} />
      {/* Main content */}
      <div style={{
        position: 'relative', zIndex: 1,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
      }}>
        {/* Header block */}
        <div className="fade-up delay-1" style={{ textAlign: 'center', marginBottom: '48px' }}>
          {/* Top mono tag */}
          <div className="helix-mono" style={{
            fontSize: '0.7rem',
            letterSpacing: '0.25em',
            color: '#475569',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            CERN · ZENODO · DESCI LABS · 2026
          </div>
          <h1 className="helix-title" style={{ marginBottom: '16px' }}>
            Helix Encyclopedia
          </h1>
          {/* Ornamental rule */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, transparent, rgba(99,179,237,0.4))' }} />
            <div style={{ width: 6, height: 6, border: '1px solid rgba(99,179,237,0.5)', transform: 'rotate(45deg)' }} />
            <div style={{ width: 60, height: 1, background: 'linear-gradient(90deg, rgba(99,179,237,0.4), transparent)' }} />
          </div>
          <p style={{
            fontFamily: 'Cormorant Garamond, Georgia, serif',
            fontSize: 'clamp(0.95rem, 2vw, 1.15rem)',
            color: '#64748b',
            fontWeight: 300,
            letterSpacing: '0.04em',
            lineHeight: 1.6,
            marginBottom: '24px',
          }}>
            World's Largest Archive of Original Intellectual Property<br />
            <span style={{ color: '#93c5fd' }}>240+ Frameworks by Kallol Chakrabarti</span>
          </p>
          {/* Badges */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span className="badge"> ◈  Verified Research</span>
            <span className="badge"> ◈  DOI: 10.5281/zenodo.18498639</span>
            <span className="badge"> ◈  90 – 100% Novelty</span>
          </div>
        </div>
        {/* Card */}
        <div className="fade-up delay-2" style={{
          width: '100%',
          maxWidth: '580px',
          background: 'rgba(8, 14, 26, 0.85)',
          border: '1px solid rgba(30, 41, 59, 0.9)',
          borderRadius: '8px',
          padding: '32px',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 40px 80px -20px rgba(0,0,0,0.7), inset 0 1px 0 rgba(99,179,237,0.08)',
        }}>
          {/* Section label */}
          <div className="helix-mono fade-up delay-2" style={{
            fontSize: '0.65rem', letterSpacing: '0.2em', color: '#334155',
            textTransform: 'uppercase', marginBottom: '20px',
            borderBottom: '1px solid rgba(30,41,59,0.8)', paddingBottom: '12px',
          }}>
            Research Access Portals
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Primary */}
            <div className="fade-up delay-2">
              <a href={buttons[0].href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{buttons[0].icon}</span>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                    {buttons[0].label} ↗
                  </div>
                  <div className="helix-mono" style={{ fontSize: '0.65rem', opacity: 0.7, marginTop: '3px', letterSpacing: '0.05em' }}>
                    {buttons[0].sub}
                  </div>
                </div>
              </a>
            </div>
            {/* Gold */}
            <div className="fade-up delay-3">
              <a href={buttons[1].href} target="_blank" rel="noopener noreferrer" className="btn-gold">
                <span style={{ fontSize: '1.1rem', flexShrink: 0, color: '#fbbf24' }}>{buttons[1].icon}</span>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                    {buttons[1].label} ↗
                  </div>
                  <div className="helix-mono" style={{ fontSize: '0.65rem', opacity: 0.7, marginTop: '3px', letterSpacing: '0.05em' }}>
                    {buttons[1].sub}
                  </div>
                </div>
              </a>
            </div>
            {/* AI — new, with world-first callout */}
            <div className="fade-up delay-3">
              {/* World-first banner above AI button */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '6px',
                padding: '6px 12px',
                background: 'linear-gradient(90deg, rgba(109,40,217,0.2), rgba(139,92,246,0.08), transparent)',
                borderLeft: '2px solid #a78bfa',
                borderRadius: '2px',
              }}>
                <span style={{ fontSize: '0.7rem' }}> ⚡ </span>
                <p className="helix-mono" style={{
                  fontSize: '0.62rem',
                  color: '#c4b5fd',
                  letterSpacing: '0.08em',
                  lineHeight: 1.5,
                }}>
                  <span style={{ color: '#a78bfa', fontWeight: 600 }}>WORLD FIRST —</span> An independent researcher's own AI, trained on 240+ original frameworks. No institution. No team. One mind, one archive, one AI.
                </p>
              </div>
              <a href={buttons[2].href} target="_blank" rel="noopener noreferrer" className="btn-ai">
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{buttons[2].icon}</span>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                    {buttons[2].label} ↗
                  </div>
                  <div className="helix-mono" style={{ fontSize: '0.65rem', opacity: 0.7, marginTop: '3px', letterSpacing: '0.05em' }}>
                    {buttons[2].sub}
                  </div>
                </div>
              </a>
            </div>
            {/* Global Portal */}
            <div className="fade-up delay-3">
              <a href={globalPortalUrl} target="_blank" rel="noopener noreferrer" className="btn-portal">
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}> 🌐 </span>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                    Global Knowledge Governance Portal ↗
                  </div>
                  <div className="helix-mono" style={{ fontSize: '0.65rem', opacity: 0.7, marginTop: '3px', letterSpacing: '0.05em' }}>
                    8+ Knowledge Portals · Papers · Research Fields · 100% Independent
                  </div>
                </div>
              </a>
            </div>
            {/* Helix Library — GitHub Pages deployment */}
            <div className="fade-up delay-3">
              <a href={helixGithubUrl} target="_blank" rel="noopener noreferrer" className="btn-amber">
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}> ◉ </span>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                    Helix Encyclopedia — GitHub Archive ↗
                  </div>
                  <div className="helix-mono" style={{ fontSize: '0.65rem', opacity: 0.7, marginTop: '3px', letterSpacing: '0.05em' }}>
                    Permanent open-source mirror · 240+ frameworks · GitHub Pages
                  </div>
                </div>
              </a>
              <div style={{
                marginTop: '6px',
                padding: '6px 12px',
                background: 'linear-gradient(90deg, rgba(120,60,5,0.2), transparent)',
                borderLeft: '2px solid rgba(251,146,60,0.5)',
                borderRadius: '2px',
              }}>
                <p className="helix-mono" style={{ fontSize: '0.6rem', color: '#fed7aa', letterSpacing: '0.06em', lineHeight: 1.5 }}>
                  The definitive open-source deployment of the Helix Library — permanently hosted, freely accessible, version-controlled on GitHub.
                </p>
              </div>
            </div>
            {/* Docu Helix Sovereign Portal + Policy Auditor */}
            <div className="fade-up delay-3">
              {/* Sovereign callout */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                marginBottom: '6px',
                padding: '6px 12px',
                background: 'linear-gradient(90deg, rgba(100,10,30,0.25), rgba(160,20,50,0.08), transparent)',
                borderLeft: '2px solid #fb7185',
                borderRadius: '2px',
              }}>
                <span style={{ fontSize: '0.7rem' }}> 🇮🇳 </span>
                <p className="helix-mono" style={{ fontSize: '0.62rem', color: '#fecdd3', letterSpacing: '0.08em', lineHeight: 1.5 }}>
                  <span style={{ color: '#fb7185', fontWeight: 600 }}>SOVEREIGN INTELLIGENCE ENGINE —</span> Audits policy using 226+ DOI-verified frameworks. Built for Atmanirbhar Bharat. Unlike generic AI — every insight anchored in national intellectual property.
                </p>
              </div>
              <a href={docuHelixUrl} target="_blank" rel="noopener noreferrer" className="btn-sovereign">
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}> ⚑ </span>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                    Docu Helix — Sovereign Research Portal ↗
                  </div>
                  <div className="helix-mono" style={{ fontSize: '0.65rem', opacity: 0.7, marginTop: '3px', letterSpacing: '0.05em' }}>
                    National IP · Policy Clarity · Governance Frameworks · India
                  </div>
                </div>
              </a>
              {/* Policy Auditor sub-button */}
              <a href={policyAuditorUrl} target="_blank" rel="noopener noreferrer" style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginTop: '6px',
                padding: '12px 20px',
                background: 'rgba(100,10,30,0.3)',
                border: '1px dashed rgba(251,113,133,0.35)',
                borderRadius: '4px',
                textDecoration: 'none',
                color: '#fecdd3',
                transition: 'all 0.3s ease',
              }}>
                <span style={{ fontSize: '0.9rem', flexShrink: 0 }}> ◈ </span>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.02em' }}>
                    Policy Auditor — Sovereign AI Agent ↗
                  </div>
                  <div className="helix-mono" style={{ fontSize: '0.6rem', opacity: 0.7, marginTop: '2px', letterSpacing: '0.05em' }}>
                    High-Novelty Structural Fixes · Powered by Google AI Studio · Opal
                  </div>
                </div>
              </a>
            </div>
            {/* Divider */}            <div className="fade-up delay-4" style={{ padding: '4px 0' }}>
              <div className="divider-line" />
              <div className="helix-mono" style={{
                fontSize: '0.6rem', letterSpacing: '0.15em', color: '#1e293b',
                textTransform: 'uppercase', textAlign: 'center', marginTop: '12px', marginBottom: '4px',
              }}>
                Domain Repositories
              </div>
            </div>
            {/* Secondary buttons */}
            {buttons.slice(3).map((btn, i) => (
              <div key={btn.href} className={`fade-up delay-${4 + i}`}>
                <a href={btn.href} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                  <span style={{ fontSize: '1rem', flexShrink: 0 }}>{btn.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.98rem', fontWeight: 500, letterSpacing: '0.01em' }}>
                      {btn.label} ↗
                    </div>
                    <div className="helix-mono" style={{ fontSize: '0.62rem', opacity: 0.5, marginTop: '3px', letterSpacing: '0.05em' }}>
                      {btn.sub}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
          {/* Validation strip */}
          <div className="fade-up delay-5" style={{
            marginTop: '28px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(15,23,42,0.9)',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            alignItems: 'center',
            textAlign: 'center',
          }}>
            <p className="helix-mono" style={{ fontSize: '0.65rem', color: '#334155', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              Scientific Validation
            </p>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.95rem', color: '#d97706', fontWeight: 600 }}>
              DeSci Labs Verified · 25 Frameworks · 90–100% Novelty
            </p>
            <p className="helix-mono" style={{ fontSize: '0.72rem', color: '#3b82f6', letterSpacing: '0.03em' }}>
              Dharma as Universal Systems Logic · DOI: 10.5281/zenodo.18498639
            </p>
          </div>
        </div>
        {/* Why Extraordinary Section */}
        <div className="fade-up delay-5" style={{
          width: '100%',
          maxWidth: '580px',
          marginTop: '20px',
          background: 'rgba(6, 11, 20, 0.9)',
          border: '1px solid rgba(30, 41, 59, 0.7)',
          borderRadius: '8px',
          padding: '28px 32px',
          backdropFilter: 'blur(20px)',
          boxShadow: 'inset 0 1px 0 rgba(99,179,237,0.05)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: 3, height: 36, background: 'linear-gradient(180deg, #3b82f6, #a78bfa)', borderRadius: '2px', flexShrink: 0 }} />
            <div>
              <div className="helix-mono" style={{ fontSize: '0.6rem', color: '#475569', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '4px' }}>
                For Researchers & Independent Scholars
              </div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', fontWeight: 600, color: '#e2e8f0', letterSpacing: '0.02em' }}>
                Why This Encyclopedia Is Extraordinary
              </h2>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              {
                icon: ' ◈ ',
                color: '#63b3ed',
                title: 'Solo authorship at institutional scale',
                text: '240+ original frameworks produced by a single independent researcher — with no university, no grants, no research team. This is virtually unheard of in modern academic history.',
              },
              {
                icon: ' ★ ',
                color: '#fbbf24',
                title: 'Scientifically verified novelty',
                text: '25 frameworks independently scored 90–100% novel by DeSci Labs — not self-assessed. Each carries a permanent DOI via CERN/Zenodo. This is the standard of proof that institutions demand, met without one.',
              },
              {
                icon: ' ⬡ ',
                color: '#a78bfa',
                title: 'The world\'s first researcher-built AI on own IP',
                text: 'The AI portal is likely the first instance of an independent researcher deploying a dedicated AI interface trained on their own original body of work — making 240+ frameworks conversationally accessible to anyone, anywhere.',
              },
              {
                icon: ' ⚖ ',
                color: '#34d399',
                title: 'Cross-domain architecture, not siloed papers',
                text: 'From governance and law to market systems, philosophy, and civilisational logic — the archive spans disciplines in a unified intellectual framework, not fragmented journal articles.',
              },
            ].map((item) => (
              <div key={item.title} style={{
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                padding: '14px',
                background: 'rgba(15,23,42,0.6)',
                border: '1px solid rgba(30,41,59,0.6)',
                borderRadius: '4px',
              }}>
                <span style={{ fontSize: '1rem', color: item.color, flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.95rem', fontWeight: 600, color: '#cbd5e1', marginBottom: '5px', letterSpacing: '0.01em' }}>
                    {item.title}
                  </div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem', color: '#475569', lineHeight: 1.65, fontWeight: 300 }}>
                    {item.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Footer */}
        <footer className="fade-up delay-5" style={{
          marginTop: '36px',
          textAlign: 'center',
          paddingBottom: '32px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ width: 40, height: 1, background: 'rgba(30,41,59,0.8)' }} />
            <div style={{ width: 4, height: 4, background: 'rgba(99,179,237,0.3)', transform: 'rotate(45deg)' }} />
            <div style={{ width: 40, height: 1, background: 'rgba(30,41,59,0.8)' }} />
          </div>
          <p className="helix-mono" style={{ fontSize: '0.62rem', color: '#334155', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            Verified via CERN · Zenodo Data Centre · Permanent Digital DOI Record · 2026
          </p>
          <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: '1px solid rgba(15,23,42,0.8)' }}>
            <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1rem', color: '#64748b', letterSpacing: '0.06em', fontWeight: 300 }}>
              Created by{' '}
              <span style={{ color: '#93c5fd', fontWeight: 600 }}>Kallol Chakrabarti</span>
              {' '}· Global Independent Researcher
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
