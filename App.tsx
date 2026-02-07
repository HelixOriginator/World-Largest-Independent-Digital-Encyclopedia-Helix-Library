import React, { useState, useMemo } from 'react';
import { CONCEPTS } from './data';
import ConceptCard from './components/ConceptCard';
import ConceptChart from './components/ConceptChart';
import { Category } from './types';
import { Search, BrainCircuit, Sparkles, Filter, X } from 'lucide-react';
import { generateConceptInsight } from './services/geminiService';
import ReactMarkdown from 'react-markdown';
// ADD THIS LINE BELOW
import { HashRouter as Router } from 'react-router-dom'; 

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [activeTab, setActiveTab] = useState<'library' | 'analytics' | 'ai'>('library');
  
  // AI State
  const [aiQuery, setAiQuery] = useState('');
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isAiLoading, setIsAiLoading] = useState(false);

  const filteredConcepts = useMemo(() => {
    return CONCEPTS.filter(concept => {
      const matchesSearch = 
        concept.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
        concept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (concept.fullName && concept.fullName.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || concept.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiQuery.trim()) return;
    
    setIsAiLoading(true);
    setAiResponse(null);
    try {
      const response = await generateConceptInsight(aiQuery);
      setAiResponse(response);
    } catch (error) {
      setAiResponse("An error occurred while communicating with the AI.");
    } finally {
      setIsAiLoading(false);
    }
  };

  // WRAP EVERYTHING IN <Router> TO FIX BLANK SCREEN
  return (
    <Router> 
      <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-amber-500/30 selection:text-amber-200">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-slate-700/80 bg-[#0f172a]/80 backdrop-blur-xl">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-900/20">
                <span className="font-serif font-bold text-slate-900 text-xl">K</span>
              </div>
              <div>
                <h1 className="font-serif text-lg font-bold tracking-tight text-slate-100 leading-none">
                  Original Concepts
                </h1>
                <p className="text-[10px] text-amber-500 font-medium tracking-widest uppercase">
                  Kallol Chakrabarti
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-1 bg-slate-800/50 p-1 rounded-full border border-slate-700/50">
              {[
                { id: 'library', label: 'Library' },
                { id: 'analytics', label: 'Analytics' },
                { id: 'ai', label: 'Ask AI' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab.id 
                      ? 'bg-slate-700 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          
          {/* Hero Section (Only on Library) */}
          {activeTab === 'library' && (
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 via-amber-200 to-amber-500 mb-4 pb-2">
                The Helix Library
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                A curated digital archive of original frameworks, doctrines, and technological concepts designed to reshape governance, philosophy, and innovation.
              </p>
            </div>
          )}

          {/* Filters (Only on Library) */}
          {activeTab === 'library' && (
            <div className="mb-8 space-y-4">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="relative w-full md:w-96 group">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-amber-400 transition-colors" />
                  <input
                    type="text"
                    placeholder="Search concepts, terms, or tags..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-800/50 border border-slate-700 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all placeholder:text-slate-600"
                  />
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                   <button
                      onClick={() => setSelectedCategory('All')}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${
                        selectedCategory === 'All'
                          ? 'bg-amber-500/10 border-amber-500/50 text-amber-400'
                          : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      All Areas
                    </button>
                  {Object.values(Category).map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`whitespace-nowrap px-3 py-1.5 rounded-md text-xs font-medium border transition-all ${
                        selectedCategory === cat
                          ? 'bg-amber-500/10 border-amber-500/50 text-amber-400'
                          : 'bg-slate-800 border-slate-700 text-slate-400 hover:border-slate-600'
                      }`}
                    >
                      {cat.split(' & ')[0]}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="text-xs text-slate-500 font-mono">
                Showing {filteredConcepts.length} concepts
              </div>
            </div>
          )}

          {/* Content Views */}
          {activeTab === 'library' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredConcepts.map((concept) => (
                <ConceptCard key={concept.id} concept={concept} />
              ))}
              {filteredConcepts.length === 0 && (
                <div className="col-span-full py-20 text-center border border-dashed border-slate-800 rounded-xl">
                  <Filter className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                  <p className="text-slate-500">No concepts found matching your criteria.</p>
                  <button 
                    onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
                    className="mt-4 text-amber-400 text-sm hover:underline"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          )}

          {activeTab === 'analytics' && (
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Total Concepts</div>
                  <div className="text-4xl font-serif text-white">{CONCEPTS.length}</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Key Categories</div>
                  <div className="text-4xl font-serif text-white">{Object.keys(Category).length}</div>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl backdrop-blur-sm">
                  <div className="text-slate-400 text-sm font-medium uppercase tracking-wider mb-1">Primary Era</div>
                  <div className="text-4xl font-serif text-amber-400">2024-25</div>
                </div>
              </div>
              
              <ConceptChart />
              
              <div className="bg-slate-800/30 border border-slate-700/50 p-6 rounded-xl">
                 <h3 className="text-lg font-serif text-slate-200 mb-4">About the Metrics</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                   The data visualizes the interdisciplinary nature of Kallol Chakrabarti's work. While Governance & Policy forms the bedrock, there is significant bridging into Technology (AI, Blockchain) and Philosophy. This "Helix" structure suggests a unified theory where ancient wisdom informs future-tech regulation.
                 </p>
              </div>
            </div>
          )}

          {activeTab === 'ai' && (
            <div className="max-w-3xl mx-auto">
              <div className="bg-gradient-to-b from-slate-800 to-slate-900 border border-slate-700 rounded-2xl p-1 overflow-hidden shadow-2xl">
                <div className="bg-[#0f172a] rounded-xl p-6 md:p-8 min-h-[500px] flex flex-col">
                  <div className="flex items-center gap-3 mb-6 border-b border-slate-800 pb-4">
                    <div className="p-2 bg-amber-500/10 rounded-lg">
                      <Sparkles className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">Helix AI Analyst</h3>
                      <p className="text-xs text-slate-500">Powered by Gemini 2.5 Flash • Context-Aware of Full Library</p>
                    </div>
                  </div>

                  <div className="flex-1 overflow-y-auto mb-6 space-y-4 custom-scrollbar">
                    {!aiResponse && !isAiLoading && (
                      <div className="text-center py-12 px-4">
                        <BrainCircuit className="w-12 h-12 text-slate-700 mx-auto mb-4" />
                        <p className="text-slate-400 text-sm">
                          Ask me about specific concepts like "VAFGPE", "Helix Doctrine", or general themes like "How does Kallol view AI ethics?"
                        </p>
                        <div className="flex flex-wrap justify-center gap-2 mt-6">
                          {['Explain the Dual Shield Model', 'What is Stoic AI?', 'Summary of Governance concepts'].map(suggestion => (
                            <button 
                              key={suggestion}
                              onClick={() => setAiQuery(suggestion)}
                              className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-full transition-colors border border-slate-700"
                            >
                              "{suggestion}"
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {isAiLoading && (
                      <div className="animate-pulse space-y-4 max-w-2xl mx-auto mt-8">
                         <div className="h-4 bg-slate-800 rounded w-3/4"></div>
                         <div className="h-4 bg-slate-800 rounded w-1/2"></div>
                         <div className="h-4 bg-slate-800 rounded w-5/6"></div>
                      </div>
                    )}

                    {aiResponse && (
                      <div className="prose prose-invert prose-sm max-w-none prose-p:text-slate-300 prose-headings:text-amber-100 prose-strong:text-amber-400 prose-li:text-slate-300">
                        <ReactMarkdown>{aiResponse}</ReactMarkdown>
                      </div>
                    )}
                  </div>

                  <form onSubmit={handleAiSubmit} className="relative">
                    <input
                      type="text"
                      value={aiQuery}
                      onChange={(e) => setAiQuery(e.target.value)}
                      placeholder="Ask a question about the library..."
                      className="w-full bg-slate-800/50 border border-slate-700 rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/50 transition-all text-slate-200 placeholder:text-slate-500 shadow-inner"
                    />
                    <button 
                      type="submit" 
                      disabled={isAiLoading || !aiQuery.trim()}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Sparkles className="w-4 h-4" />
                    </button>
                  </form>
                </div>
              </div>
              
              <p className="text-center text-[10px] text-slate-600 mt-4">
                AI outputs are generated based on the library metadata. Always verify with original source texts.
              </p>
            </div>
          )}
        </main>
      </div>
    </Router>
  );
};

export default App;
