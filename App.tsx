import React, { useState, useMemo } from 'react';
import { Search, BookOpen, ChevronRight, Award, FileText, Database } from 'lucide-react';
// We import the data from your existing data.ts file
import { frameworks } from './data';

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  // Logic to filter through your 194 frameworks
  const filteredFrameworks = useMemo(() => {
    return frameworks.filter(f => 
      f.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Navigation Header */}
      <header className="bg-slate-900 text-white sticky top-0 z-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight flex items-center gap-2">
              <Database className="text-blue-400" />
              Helix Encyclopedia
            </h1>
            <p className="text-xs text-slate-400">194+ Original Intellectual Property Frameworks</p>
          </div>
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text"
              placeholder="Search by title, DOI, or category..."
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border-slate-700 border rounded-full text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured Breakthrough */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl text-white shadow-xl">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-yellow-300" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-100">Primary Breakthrough</span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Dharma as Universal Systems Logic</h2>
          <p className="text-blue-100 mb-4 max-w-2xl text-sm leading-relaxed">
            A first-of-its-kind breakthrough in intellectual property, establishing a foundational logic for universal systems.
          </p>
          <div className="inline-flex items-center px-3 py-1 bg-white/10 rounded-md text-xs font-mono">
            DOI: 10.5281/zenodo.18498639
          </div>
        </div>

        {/* Frameworks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFrameworks.map((item, index) => (
            <div key={index} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="flex justify-between items-start mb-3">
                <span className="text-[10px] font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded uppercase tracking-wider">
                  {item.category}
                </span>
                <BookOpen className="w-4 h-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 leading-snug">{item.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed mb-4 line-clamp-3">
                {item.description}
              </p>
              <div className="flex items-center text-blue-600 text-xs font-semibold mt-auto pt-4 border-t border-slate-50 cursor-pointer">
                View Methodology <ChevronRight className="w-3 h-3 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredFrameworks.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-400">No frameworks found matching "{searchTerm}"</p>
          </div>
        )}
      </main>

      <footer className="border-t border-slate-200 mt-20 py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-slate-500 font-medium">© 2026 Helix Originator • Kallol Chakrabarti</p>
          <p className="text-[10px] text-slate-400 mt-2 italic">Curated Archive of Global Intellectual Property</p>
        </div>
      </footer>
    </div>
  );
}
