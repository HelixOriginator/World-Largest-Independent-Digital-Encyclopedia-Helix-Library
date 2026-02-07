import React, { useState, useMemo } from 'react';
import { Search, BookOpen, ChevronRight, Award, Database, Shield } from 'lucide-react';
// This matches your file name exactly
import { CONCEPTS } from './data'; 

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Logic to filter through your frameworks (VAFGPE, SEPRS, etc.)
  const filtered = useMemo(() => {
    return CONCEPTS.filter(item => 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.fullName && item.fullName.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-slate-900 text-white sticky top-0 z-10 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight flex items-center gap-2">
              <Database className="text-blue-400" /> Helix Encyclopedia
            </h1>
            <p className="text-slate-400 text-sm">194+ Original Intellectual Property Frameworks</p>
          </div>
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Search frameworks (e.g., VAFGPE)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border-slate-700 border rounded-full text-white focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Breakthrough */}
        <div className="mb-10 p-8 bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900 rounded-3xl text-white shadow-2xl border border-blue-500/30">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="w-5 h-5 text-blue-400" />
            <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-300">World-First Breakthrough</span>
          </div>
          <h2 className="text-4xl font-extrabold mb-3">Dharma as Universal Systems Logic</h2>
          <p className="text-blue-100/80 mb-6 max-w-3xl text-lg leading-relaxed">
            Establishing a foundational logic for universal systems through unprecedented digital frameworks.
          </p>
          <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-lg border border-blue-500/50 font-mono text-sm">
            DOI: 10.5281/zenodo.18498639
          </div>
        </div>

        {/* Frameworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all group">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold px-2.5 py-1 bg-blue-50 text-blue-700 rounded-full uppercase tracking-wider">
                  {item.category}
                </span>
                <span className="text-[10px] font-medium text-slate-400">{item.year}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {item.term}
              </h3>
              {item.fullName && <p className="text-xs font-semibold text-slate-500 mb-2 italic">{item.fullName}</p>}
              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-4">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {item.tags.map(tag => (
                  <span key={tag} className="text-[9px] px-2 py-0.5 bg-slate-100 text-slate-500 rounded">#{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
