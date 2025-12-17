import React from 'react';
import { Track } from '../types';

const tracks: Track[] = [
  {
    id: '1',
    title: 'SILICON PRAYER',
    description: 'Ambient textures for the midnight drive.',
    duration: '02:44',
    tags: ['Suno', 'Ambient', 'Deep'],
    coverUrl: 'https://picsum.photos/400/400?grayscale&blur=2',
    sunoUrl: 'https://suno.com'
  },
  {
    id: '2',
    title: 'GHOST IN THE SCROLL',
    description: 'High energy breaks meeting lo-fi emotion.',
    duration: '02:12',
    tags: ['TikTok', 'Phonk', 'Experimental'],
    coverUrl: 'https://picsum.photos/401/401?grayscale&blur=2',
    sunoUrl: 'https://suno.com'
  },
  {
    id: '3',
    title: 'ALGORITHM BLUES',
    description: 'A ballad for the digital age.',
    duration: '03:01',
    tags: ['Soul', 'AI-Gen', 'Vocals'],
    coverUrl: 'https://picsum.photos/402/402?grayscale&blur=2',
    sunoUrl: 'https://suno.com'
  }
];

const Music: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-zinc-950/50 border-t border-zinc-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <h2 className="text-4xl font-thin tracking-wider text-white mb-4 md:mb-0">
            TRANSMISSIONS
          </h2>
          <p className="text-zinc-500 text-sm tracking-widest uppercase">
            Suno / TikTok / Reels
          </p>
        </div>

        <div className="grid grid-cols-1 gap-1">
          {tracks.map((track) => (
            <a 
              key={track.id}
              href={track.sunoUrl || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-between p-6 md:p-8 border-b border-zinc-900 hover:bg-zinc-900/40 transition-all duration-500 cursor-pointer"
            >
              <div className="flex items-center gap-6">
                 {/* Visual placeholder for album art */}
                <div className="w-12 h-12 bg-zinc-800 overflow-hidden relative opacity-50 group-hover:opacity-100 transition-opacity">
                    <img src={track.coverUrl} alt="Art" className="w-full h-full object-cover mix-blend-overlay" />
                </div>
                
                <div>
                  <h3 className="text-lg md:text-xl text-zinc-300 group-hover:text-white transition-colors tracking-wide">
                    {track.title}
                  </h3>
                  <div className="flex gap-3 mt-1 text-xs text-zinc-600 group-hover:text-zinc-500">
                    <span>{track.duration}</span>
                    <span className="w-px h-3 bg-zinc-800 my-auto"></span>
                    <span>{track.tags.join(' / ')}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[10px] uppercase tracking-widest text-zinc-700 group-hover:text-zinc-500 transition-colors opacity-0 group-hover:opacity-100 hidden md:block">
                    Listen on Suno
                </span>
                <div className="text-zinc-700 group-hover:text-zinc-300 transition-colors">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <p className="text-xs text-zinc-600 tracking-widest">
                STREAMING SOON ON ALL PLATFORMS
            </p>
        </div>
      </div>
    </section>
  );
};

export default Music;