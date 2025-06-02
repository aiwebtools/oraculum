import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const Index = () => {
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const showDisclaimer = searchParams.get('disclaimer');
    if (showDisclaimer === 'true') {
      setIsDisclaimerOpen(true);
    }
  }, [searchParams]);

  const closeModal = () => {
    setIsDisclaimerOpen(false);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Divine Background with moving gradients */}
      <div className="fixed inset-0 bg-gradient-radial from-amber-900/20 via-black to-yellow-900/30"></div>
      <div className="fixed inset-0 bg-gradient-to-br from-transparent via-gold-500/5 to-amber-600/10 animate-pulse"></div>
      
      {/* Animated divine particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gold-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating orbs of divine light */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-gradient-radial from-yellow-300/30 to-transparent rounded-full blur-sm ethereal-float"
            style={{
              left: `${20 + (i * 10)}%`,
              top: `${10 + (i * 8)}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

      {/* Divine glow overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-amber-900/20 pointer-events-none divine-breathe"></div>
      
      <div className="relative z-10 container mx-auto px-8 py-16">
        
        <header className="text-center mb-20 space-y-8">
          <div className="relative">
            <h1 className="text-7xl md:text-8xl font-bold bg-gradient-to-r from-yellow-200 via-amber-300 to-gold-400 bg-clip-text text-transparent divine-glow ethereal-float">
              AI Web Tools
            </h1>
            <div className="absolute inset-0 text-7xl md:text-8xl font-bold text-gold-300/20 blur-lg divine-pulse">
              AI Web Tools
            </div>
          </div>
          
          <p className="text-2xl md:text-3xl text-amber-100 font-light tracking-wide divine-breathe max-w-4xl mx-auto leading-relaxed">
            Unlock the mystical power of artificial intelligence for your digital realm
          </p>
          
          <div className="text-lg text-yellow-200/80 font-medium tracking-widest uppercase divine-glow">
            ✨ Transcendent • Ethereal • Divine ✨
          </div>
        </header>

        
        <section className="mb-20">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-amber-200 to-yellow-300 bg-clip-text text-transparent divine-glow">
            Sacred Digital Instruments
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {[
              {
                title: "AI Code Analyzer",
                description: "Mystical analysis of your code's deepest secrets and hidden potential.",
                features: ["Divine Code Review", "Sacred Optimization", "Ethereal Bug Detection"],
                link: "https://aiwebtools.lovable.app/code-analyzer"
              },
              {
                title: "AI Image Enhancer",
                description: "Transform your images with the power of celestial AI algorithms.",
                features: ["Radiant Upscaling", "Ethereal Detail Restoration", "Divine Color Correction"],
                link: "https://aiwebtools.lovable.app/image-enhancer"
              },
              {
                title: "AI Text Alchemist",
                description: "Transmute ordinary text into golden prose with the wisdom of AI.",
                features: ["Enlightened Paraphrasing", "Mystical Summarization", "Celestial Content Generation"],
                link: "https://aiwebtools.lovable.app/text-alchemist"
              },
              {
                title: "AI Data Oracle",
                description: "Uncover hidden insights and predict future trends with the all-seeing AI oracle.",
                features: ["Prophetic Data Analysis", "Clairvoyant Forecasting", "Mystical Pattern Recognition"],
                link: "https://aiwebtools.lovable.app/data-oracle"
              },
              {
                title: "AI Design Muse",
                description: "Invoke the AI muse to conjure breathtaking designs and visual masterpieces.",
                features: ["Inspired Layout Generation", "Harmonious Color Palettes", "Divine Typography"],
                link: "https://aiwebtools.lovable.app/design-muse"
              },
              {
                title: "AI Marketing Sage",
                description: "Harness the sagacity of AI to craft marketing strategies that resonate with the cosmos.",
                features: ["Astute Audience Targeting", "Enchanting Ad Copy", "Celestial Campaign Optimization"],
                link: "https://aiwebtools.lovable.app/marketing-sage"
              }
            ].map((tool, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-amber-900/20 to-yellow-900/10 backdrop-blur-lg border border-gold-400/30 rounded-2xl p-8 hover:border-amber-300/60 transition-all duration-500 divine-pulse hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-amber-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-amber-100 mb-4 group-hover:text-gold-300 transition-colors duration-300">
                    {tool.title}
                  </h3>
                  <p className="text-yellow-200/80 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="text-amber-200/90 flex items-center">
                        <span className="text-gold-400 mr-3">✨</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={tool.link}
                    className="inline-block px-8 py-4 bg-gradient-to-r from-amber-500 to-yellow-500 text-black font-semibold rounded-lg hover:from-gold-400 hover:to-amber-400 transition-all duration-300 transform hover:scale-105 divine-glow"
                  >
                    Enter Sacred Realm
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <footer className="text-center py-16 border-t border-gold-400/20">
          <div className="space-y-6">
            <p className="text-amber-200/90 text-lg">
              <strong>Educational Disclaimer:</strong> This platform provides interpretive analysis for informational, educational, and research purposes only. Results are not absolute facts.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="https://aiwebtools.lovable.app/disclaimers" className="text-gold-300 hover:text-amber-200 transition-colors duration-300 divine-glow">
                Terms & Disclaimers
              </a>
              <span className="text-gold-400">•</span>
              <span className="text-amber-300">
                Crafted with divine inspiration
              </span>
            </div>
          </div>
        </footer>
      </div>

      
    </div>
  );
};

export default Index;
