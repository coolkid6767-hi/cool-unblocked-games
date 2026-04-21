import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  TrendingUp, 
  Clock, 
  Box, 
  X, 
  Maximize2
} from 'lucide-react';
import { Game } from './types';
import { GAMES } from './constants';

export default function App() {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Popular', 'Minecraft', 'Action', 'Logic', 'Classic'];

  const filteredGames = useMemo(() => {
    return GAMES.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || game.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const featuredGame = GAMES.find(g => g.id === 'minecraft') || GAMES[0];

  return (
    <div className="min-h-screen font-sans selection:bg-pink-500/30 bg-[#0f172a] text-[#f8fafc]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-[#0f172a]/95 border-b border-[#334155] h-[80px]">
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-12">
            <div className="text-[28px] font-[900] tracking-[-1px] text-[#4ade80] uppercase">
              GLITCH.GG
            </div>
            
            <div className="hidden lg:flex items-center gap-8">
              {categories.slice(0, 4).map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`font-semibold text-sm uppercase tracking-widest transition-colors cursor-pointer ${
                    activeCategory === cat ? 'text-[#f472b6]' : 'text-[#94a3b8] hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 max-w-md mx-8 relative group hidden md:block">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
            <input 
              type="text" 
              placeholder="Search unblocked games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1e293b] border-2 border-[#334155] rounded-xl py-2 pl-12 pr-6 text-sm text-[#f8fafc] focus:outline-none focus:border-[#f472b6] transition-all"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <div className="text-[10px] font-bold text-[#4ade80] uppercase tracking-widest leading-none">Status</div>
              <div className="text-xs font-semibold text-[#94a3b8]">Live Everywhere</div>
            </div>
            <div className="w-10 h-10 bg-[#1e293b] border-2 border-[#334155] rounded-xl flex items-center justify-center">
              <Box className="w-5 h-5 text-[#4ade80]" />
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-28 pb-20 px-6 max-w-7xl mx-auto">
        {/* Mobile Search */}
        <div className="md:hidden mb-8 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
          <input 
            type="text" 
            placeholder="Search unblocked games..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#1e293b] border-2 border-[#334155] rounded-xl py-3 pl-12 pr-6 text-[#f8fafc]"
          />
        </div>

        {/* Hero Section */}
        {!searchQuery && activeCategory === 'All' && (
          <section className="mb-10 flex flex-col lg:flex-row gap-6 h-auto lg:h-[350px]">
            <div className={`flex-[2] relative group overflow-hidden rounded-[24px] p-10 flex flex-col justify-end min-h-[300px] ${
              featuredGame.id === 'minecraft' ? 'minecraft-gradient' : 'vibrant-gradient'
            }`}>
              <div className="absolute top-8 left-8 bg-black/30 backdrop-blur-md px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                Trending Now
              </div>
              
              <div className="relative z-10">
                <h1 className="text-5xl md:text-6xl font-[900] tracking-tighter mb-2 leading-none uppercase italic">
                  {featuredGame.title}
                </h1>
                <p className="text-white/90 text-base max-w-sm mb-6 leading-relaxed">
                  {featuredGame.description}
                </p>
                <button 
                  onClick={() => setSelectedGame(featuredGame)}
                  className="bg-white text-[#0f172a] px-8 py-3 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all cursor-pointer uppercase tracking-tight"
                >
                  Play Unblocked
                </button>
              </div>
              
              {/* Decorative image background */}
              <img 
                src={featuredGame.thumbnail} 
                alt=""
                className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-20 pointer-events-none"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex-1 bg-[#1e293b] rounded-[24px] p-8 flex flex-col gap-6 border-2 border-[#334155]">
              <div className="text-[12px] font-bold text-[#4ade80] uppercase tracking-[2px]">Quick Stats</div>
              
              <div className="flex flex-col gap-5">
                {[
                  { icon: TrendingUp, label: '12,402 Online', sub: 'Active Players', color: '#fbbf24' },
                  { icon: Box, label: 'Top Server', sub: 'Survival Mode', color: '#f87171' },
                  { icon: Clock, label: 'Daily Goal', sub: '80% Complete', color: '#c084fc' }
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-[#334155]" style={{ color: stat.color }}>
                      <stat.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[#f8fafc]">{stat.label}</div>
                      <div className="text-[11px] font-semibold text-[#94a3b8]">{stat.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Filters */}
        <section className="mb-10 flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer uppercase tracking-wider ${
                  activeCategory === cat 
                    ? 'bg-[#f472b6] text-white' 
                    : 'bg-[#1e293b] text-[#94a3b8] border-2 border-[#334155] hover:border-[#f472b6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Game Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredGames.map((game) => (
            <motion.div
              layout
              key={game.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedGame(game)}
              className="bg-[#1e293b] p-3 rounded-2xl border-2 border-transparent hover:border-[#f472b6] transition-all cursor-pointer group"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-[#334155]">
                <img 
                  src={game.thumbnail} 
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="px-1">
                <h3 className="text-sm font-bold truncate text-[#f8fafc] text-center">{game.title}</h3>
                <div className="text-[10px] font-bold text-center text-[#94a3b8] uppercase tracking-[1px] mt-1">{game.category}</div>
              </div>
            </motion.div>
          ))}
          
          {filteredGames.length === 0 && (
            <div className="col-span-full py-20 text-center bg-[#1e293b] rounded-[24px] border-2 border-dashed border-[#334155]">
              <Search className="w-10 h-10 text-[#334155] mx-auto mb-4" />
              <div className="text-xl font-bold">No results found</div>
              <div className="text-[#94a3b8] text-sm mt-1">Try another keyword or category.</div>
            </div>
          )}
        </section>
      </main>

      {/* Game Player Modal */}
      <AnimatePresence>
        {selectedGame && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex flex-col bg-[#0f172a]"
          >
            <div className="h-[70px] px-6 flex items-center justify-between border-b border-[#334155]">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setSelectedGame(null)}
                  className="p-2 hover:bg-[#1e293b] rounded-xl transition-all cursor-pointer"
                >
                  <X className="w-6 h-6 text-[#94a3b8]" />
                </button>
                <div className="text-lg font-bold tracking-tight uppercase">
                  <span className="text-[#94a3b8]">Playing:</span> <span className="text-[#f472b6]">{selectedGame.title}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <button className="flex items-center gap-2 px-6 py-2 bg-[#1e293b] border-2 border-[#334155] hover:border-[#4ade80] rounded-xl transition-all text-xs font-bold uppercase tracking-widest cursor-pointer">
                  <Maximize2 className="w-4 h-4" />
                  Full Screen
                </button>
              </div>
            </div>

            <div className="flex-1 p-6 flex items-center justify-center">
              <div className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border-4 border-[#1e293b] shadow-2xl">
                <iframe 
                  src={selectedGame.embedUrl} 
                  className="w-full h-full"
                  title={selectedGame.title}
                  allowFullScreen
                  allow="autoplay; fullscreen; pointer-lock"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-[#334155] bg-[#0f172a] py-16 px-6 mt-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="text-[24px] font-[900] tracking-[-1px] text-[#4ade80] uppercase">GLITCH.GG</div>
            <p className="text-[#94a3b8] text-sm text-center md:text-left max-w-xs leading-relaxed">
              Premium unblocked gaming portal. Build, compete, and play without limits.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex gap-8 text-[12px] font-bold uppercase tracking-[2px] text-[#94a3b8]">
              <a href="#" className="hover:text-[#f472b6] transition-colors">Discord</a>
              <a href="#" className="hover:text-[#f472b6] transition-colors">Privacy</a>
              <a href="#" className="hover:text-[#f472b6] transition-colors">Terms</a>
            </div>
            <div className="text-[10px] font-mono text-[#334155]">
              &copy; {new Date().getFullYear()} NEXUS_CORE_OS V.2.1
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
