import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-black text-center">
      <div className="space-y-6">
        <div className="flex justify-center gap-8">
            {/* Placeholder Links */}
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs tracking-widest uppercase">Instagram</a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs tracking-widest uppercase">TikTok</a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors text-xs tracking-widest uppercase">YouTube</a>
        </div>
        
        <div className="pt-8">
             <p className="text-[10px] text-zinc-800 tracking-widest">
                © {new Date().getFullYear()} UNCLE B LACED IT. ALL RIGHTS RESERVED.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;