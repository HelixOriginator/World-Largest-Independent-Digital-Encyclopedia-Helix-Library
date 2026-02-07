import React, { useState, useMemo } from 'react';
import { Search, BookOpen, ChevronRight, Award, Database, Shield } from 'lucide-react';

// 1. THE RULES (Moved inside to prevent errors)
enum Category {
  GOVERNANCE = 'Governance & Policy',
  ELECTIONS = 'Election Commission',
  TECHNOLOGY = 'Technology & Innovation',
  HEALTH = 'Healthcare & Science',
  EDUCATION = 'Education & Labor',
  ECONOMY = 'Economics & Finance'
}

interface Concept {
  id: string;
  term: string;
  fullName?: string;
  description: string;
  category: string;
  year: string;
  tags: string[];
}

// 2. THE DATA (Your 194 Frameworks - I've added your core ones here)
const CONCEPTS: Concept[] = [
  {
    id: 'g-1',
    term: 'VAFGPE',
    fullName: 'Vedic Analytical Framework for Governance, Policing, and Education',
    description: 'A globally unprecedented policy architecture designed to address systemic challenges through Vedic wisdom.',
    category: 'Governance & Policy',
    year: '2024-2025',
    tags: ['Vedic Wisdom', 'Policy']
  },
  {
    id: 'g-53',
    term: 'EchoShield Nexus',
    description: 'The next evolution in Uttar Pradesh\'s security revolution.',
    category: 'Governance & Policy',
    year: '2025',
    tags: ['Security', 'UP']
  },
  {
    id: 'el-1',
    term: 'EVM Truth India',
    description: 'Scientific repository to debunk myths surrounding Electronic Voting Machines.',
    category: 'Election Commission',
    year: '2025',
    tags: ['Elections', 'Democracy']
  }
  // PASTE THE REST OF YOUR 194 FRAMEWORKS RIGHT HERE
];

// 3. THE DESIGN
export default function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = useMemo(() => {
    return CONCEPTS.filter(item => 
      item.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <header className="bg-slate-900 text-white p-6 shadow-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <Database className="text-blue-400" /> Helix Encyclopedia
          </h1>
          <input 
            type="text"
            placeholder="Search frameworks..."
            className="p-2 w-full md:w-96 rounded-full bg-slate-800 border border-slate-700 text-white outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-10 p-8 bg-slate-900 text-white rounded-3xl border border-blue-500/30">
          <h2 className="text-3xl font-extrabold mb-2">Dharma as Universal Systems Logic</h2>
          <p className="text-blue-300 font-mono">DOI: 10.5281/zenodo.18498639</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
              <span className="text-[10px] font-bold px-2 py-1 bg-blue-50 text-blue-700 rounded-full uppercase">{item.category}</span>
              <h3 className="text-xl font-bold mt-3 mb-2">{item.term}</h3>
              <p className="text-slate-600 text-sm mb-4">{item.description}</p>
              <div className="flex gap-1">
                {item.tags.map(tag => <span key={tag} className="text-[9px] px-2 py-0.5 bg-slate-100 rounded">#{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
