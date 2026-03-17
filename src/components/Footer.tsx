import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 bg-slate-900 border-t border-slate-800 flex flex-col items-center justify-center gap-4 text-slate-400 text-sm">
      <p>© 2025 Emerson Alvarenga</p>
      <div className="flex items-center gap-5">
        <a href="https://www.linkedin.com/in/emerson-alvarenga-280158248/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn">
          <Linkedin size={18} />
        </a>
        <a href="https://github.com/Market-Fuzion-AI" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub">
          <Github size={18} />
        </a>
        <a href="mailto:e.alvarenga3592@icloud.com" className="hover:text-white transition-colors" aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
    </footer>
  );
}
