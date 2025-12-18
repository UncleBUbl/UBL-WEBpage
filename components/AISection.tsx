import React, { useState, useRef } from 'react';
import { consultOracle } from '../services/geminiService';
import { OracleState } from '../types';

const AISection: React.FC = () => {
  const [state, setState] = useState<OracleState>({
    status: 'idle',
    query: '',
    response: null,
  });
  
  const inputRef = useRef<HTMLInputElement>(null);
  const hasKey = !!process.env.API_KEY;

  const suggestions = [
    "Explore the sound",
    "Understand the process",
    "Define the vibe"
  ];

  const handleSuggestion = (text: string) => {
    setState(prev => ({ ...prev, query: text }));
    // Optional: auto-submit or just fill input
    if (inputRef.current) inputRef.current.focus();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!state.query.trim() || !hasKey) return;

    setState(prev => ({ ...prev, status: 'listening' }));

    setTimeout(async () => {
      setState(prev => ({ ...prev, status: 'thinking' }));
      const answer = await consultOracle(state.query);
      setState(prev => ({ ...prev, status: 'speaking', response: answer }));
    }, 800);
  };

  const handleReset = () => {
    setState({ status: 'idle', query: '', response: null });
    setTimeout(() => inputRef.current?.focus(), 100);
  };

  return (
    <section className="py-32 px-6 relative bg-zinc-900 overflow-hidden border-t border-zinc-800/50">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-black via-zinc-900 to-black z-0 pointer-events-none" />
      
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="mb-12">
            <span className="text-[10px] tracking-[0.4em] text-zinc-600 uppercase">
                AI Interaction
            </span>
        </div>

        {!hasKey ? (
          <div className="text-zinc-500 font-light text-lg">
            <p>The Oracle is currently sleeping.</p>
            <p className="text-xs mt-4 opacity-50">(Gemini API Key required to wake)</p>
          </div>
        ) : (
          <div className="min-h-[200px] flex flex-col justify-center items-center">
            
            {state.status === 'idle' && (
              <div className="w-full">
                <form onSubmit={handleSubmit} className="w-full mb-8">
                  <input
                    ref={inputRef}
                    type="text"
                    value={state.query}
                    onChange={(e) => setState(prev => ({ ...prev, query: e.target.value }))}
                    placeholder="Ask about the frequency..."
                    className="w-full bg-transparent border-b border-zinc-800 text-center text-xl md:text-2xl text-zinc-300 placeholder-zinc-700 focus:outline-none focus:border-zinc-500 transition-colors py-4 font-light"
                  />
                  <div className="mt-8 opacity-0 animate-[fadeIn_1s_ease-in_forwards]">
                    <button 
                      type="submit" 
                      disabled={!state.query}
                      className="text-xs tracking-widest text-zinc-500 hover:text-white transition-colors disabled:opacity-0"
                    >
                      INITIATE
                    </button>
                  </div>
                </form>

                {/* Suggestions */}
                <div className="flex flex-wrap justify-center gap-3">
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      onClick={() => handleSuggestion(s)}
                      className="text-[10px] uppercase tracking-wider text-zinc-600 border border-zinc-800 px-3 py-1 rounded-full hover:border-zinc-500 hover:text-zinc-400 transition-all"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {state.status === 'listening' && (
              <div className="animate-pulse text-zinc-600 tracking-widest text-sm">
                ABSORBING...
              </div>
            )}

            {state.status === 'thinking' && (
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-zinc-700 rounded-full animate-bounce delay-0"></div>
                <div className="w-2 h-2 bg-zinc-700 rounded-full animate-bounce delay-150"></div>
                <div className="w-2 h-2 bg-zinc-700 rounded-full animate-bounce delay-300"></div>
              </div>
            )}

            {state.status === 'speaking' && (
              <div className="w-full animate-[fadeIn_0.5s_ease-out]">
                <p className="text-lg md:text-2xl font-light leading-relaxed text-zinc-200 mb-8 font-serif italic">
                  "{state.response}"
                </p>
                <button 
                  onClick={handleReset}
                  className="text-[10px] uppercase tracking-widest text-zinc-600 hover:text-zinc-400 transition-colors border border-zinc-800 px-4 py-2 rounded-full hover:border-zinc-600"
                >
                  Ask Another
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AISection;