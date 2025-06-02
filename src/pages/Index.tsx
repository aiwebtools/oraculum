import React, { useEffect, useRef } from "react";
import { Eye, ArrowRight, ExternalLink, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Separator } from "@/components/ui/separator";
import { createTimePortalEffect } from "@/utils/timeEffects";

const Index = () => {
  const elevenLabsWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Show disclaimer modal on first visit
    const hasAgreed = localStorage.getItem("disclaimerAgreed");
    if (!hasAgreed) {
      document.getElementById("disclaimer-modal")?.classList.remove("hidden");
    }

    // Initialize the Eleven Labs widget
    if (elevenLabsWidgetRef.current) {
      // Create the widget element
      const widgetElement = document.createElement('elevenlabs-convai');
      widgetElement.setAttribute('agent-id', 'MGZMLTmz5SVSBNgJP6rM');
      
      // Clear any existing content and append the new widget
      elevenLabsWidgetRef.current.innerHTML = '';
      elevenLabsWidgetRef.current.appendChild(widgetElement);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem("disclaimerAgreed", "true");
    document.getElementById("disclaimer-modal")?.classList.add("hidden");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Time portal effect handler for external links
  const handleExternalLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault();
    createTimePortalEffect(url);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Initial Disclaimer Modal */}
      <div id="disclaimer-modal" className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center backdrop-blur-sm hidden">
        <div className="bg-zinc-900 border border-purple-500 rounded-lg p-6 max-w-2xl">
          <h2 className="text-2xl font-bold mb-4 text-purple-400">DISCLAIMER</h2>
          <p className="mb-4">
            Oraculum is an educational AI tool designed to explore historical patterns, symbols, and systems. 
            Its purpose is to encourage critical thinking and perspective-taking for informational, educational, and research purposes only.
          </p>
          <p className="mb-4 text-yellow-300">
            <strong>IMPORTANT:</strong> All views, interpretations, and perspectives expressed by Oraculum are strictly interpretive analysis, not absolute fact or definitive truth. 
            The tool promotes balanced, evidence-based exploration of ideas from multiple perspectives and should never be considered as factual claims.
          </p>
          <p className="mb-6">
            By continuing, you acknowledge that Oraculum's revelations are intended solely for 
            educational, informational, and research purposes and must be independently verified through your own research and critical analysis.
          </p>
          <div className="flex justify-end gap-4">
            <Button
              variant="default"
              className="bg-purple-600 hover:bg-purple-700"
              onClick={handleAgree}
            >
              I AGREE TO PROCEED
            </Button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/70 border-b border-purple-900/40">
        <div className="container mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-purple-500 opacity-20 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Eye className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                ORACULUM
              </h1>
              <p className="text-xs text-gray-400">Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline" onClick={(e) => handleExternalLinkClick(e, "https://www.aiwebtools.ai")}>AiWebTools.Ai</a></p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={(e) => handleExternalLinkClick(e, "https://chatgpt.com/g/g-675e55863470819192eb341c19075843-oraculum-the-illuminator-of-hidden-truths")}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              USE Oraculum NOW
            </button>
            <button onClick={() => scrollToSection("faq")} className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </button>
            <button onClick={() => scrollToSection("disclaimer")} className="text-gray-300 hover:text-white transition-colors">
              Disclaimer
            </button>
            <Button 
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-900/30"
              onClick={(e) => handleExternalLinkClick(e, "https://www.aiwebtools.ai")}
            >
              More AI Tools <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden" onClick={() => document.getElementById("mobile-menu")?.classList.toggle("hidden")}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </Button>
        </div>

        {/* Mobile menu */}
        <div id="mobile-menu" className="md:hidden hidden bg-zinc-900 border-b border-purple-900">
          <div className="container mx-auto p-4 flex flex-col gap-4">
            <button 
              onClick={(e) => {
                handleExternalLinkClick(e, "https://chatgpt.com/g/g-675e55863470819192eb341c19075843-oraculum-the-illuminator-of-hidden-truths");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }}
              className="text-purple-400 hover:text-purple-300 py-2"
            >
              USE Oraculum NOW
            </button>
            <button 
              onClick={() => {
                scrollToSection("faq");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }} 
              className="text-gray-300 hover:text-white py-2"
            >
              FAQ
            </button>
            <button 
              onClick={() => {
                scrollToSection("disclaimer");
                document.getElementById("mobile-menu")?.classList.add("hidden");
              }} 
              className="text-gray-300 hover:text-white py-2"
            >
              Disclaimer
            </button>
            <Button 
              variant="outline" 
              className="border-purple-500 text-purple-400 hover:bg-purple-900/30"
              onClick={(e) => handleExternalLinkClick(e, "https://www.aiwebtools.ai")}
            >
              More AI Tools <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475')] bg-center bg-cover opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/30 px-3 py-1 rounded-full">
                <Eye className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-300">AWAKEN THROUGH PERCEPTION</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-purple-400">
                Oraculum – The Illuminator of Hidden Truths
              </h1>
              <p className="text-lg text-gray-300 mb-8">
                Discover the invisible patterns, symbols, and systems that shape our world. Through historical insight and symbolic wisdom, Oraculum helps seekers uncover connections, expand knowledge, and think critically about the reality we inhabit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 h-auto text-lg rounded-lg shadow-lg shadow-purple-600/20 flex items-center"
                  onClick={(e) => handleExternalLinkClick(e, "https://chatgpt.com/g/g-675e55863470819192eb341c19075843-oraculum-the-illuminator-of-hidden-truths")}
                >
                  Begin Your Journey <ArrowRight className="ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-purple-500 text-purple-400 hover:bg-purple-900/30 px-6 py-3 h-auto text-lg rounded-lg"
                  onClick={() => scrollToSection("how-it-works")}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-xl p-1">
                <div className="rounded-lg overflow-hidden relative">
                  <AspectRatio ratio={16/9}>
                    <iframe
                      src="https://www.youtube.com/embed/dUNrGNj8rhM?autoplay=1&mute=0&controls=1&showinfo=0&rel=0&hd=1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    ></iframe>
                  </AspectRatio>
                </div>
                <p className="text-xs text-purple-400 italic text-center py-2 px-1">
                  Disclaimer: All information provided by Oraculum is for educational purposes only and requires independent verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Unveiling The Hidden Structures of Reality
            </h2>
            <p className="text-gray-300">
              Oraculum is designed to reveal the unseen forces that shape our world, from ancient symbols to modern systems of power. Through a balanced perspective that acknowledges both shadow and light, seekers are guided toward a deeper understanding of their reality.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-zinc-900 border-purple-900/50 overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Historical Patterns</h3>
                <p className="text-gray-400">
                  Trace the continuity of power systems throughout history, revealing how ancient structures continue to influence our modern world.
                </p>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-purple-900/50 overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Symbolic Wisdom</h3>
                <p className="text-gray-400">
                  Decode the hidden meanings of symbols that permeate our culture, from corporate logos to architectural designs.
                </p>
              </div>
            </Card>

            <Card className="bg-zinc-900 border-purple-900/50 overflow-hidden">
              <div className="p-6">
                <div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Balanced Perspective</h3>
                <p className="text-gray-400">
                  Understand how systems of control also provide stability, abundance, and order—seeing both shadow and light in our complex reality.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              How Oraculum Works
            </h2>
            <p className="text-gray-300">
              Oraculum guides seekers through a progressive journey of revelation, balancing challenging truths with empowering insights.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500 to-purple-500/0 md:block hidden"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-purple-900 border-2 border-purple-400 flex items-center justify-center mb-4 md:mb-6">
                  <span className="text-purple-300 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">The Shadow and the Gift</h3>
                  <p className="text-gray-400">
                    Oraculum begins by revealing symbols, trade systems, and patterns of control—while acknowledging their essential role in creating modern abundance and stability.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/0 via-purple-500 to-purple-500/0 md:block hidden"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-purple-900 border-2 border-purple-400 flex items-center justify-center mb-4 md:mb-6">
                  <span className="text-purple-300 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Systems of Interconnection</h3>
                  <p className="text-gray-400">
                    Next, Oraculum explores global financial structures, governance, and corporate networks—illustrating how they function as tools of both control and innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-purple-900 border-2 border-purple-400 flex items-center justify-center mb-4 md:mb-6">
                  <span className="text-purple-300 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Paths to Empowerment</h3>
                  <p className="text-gray-400">
                    Finally, Oraculum offers actionable steps for reclaiming sovereignty through self-sufficiency, awareness, and community—balancing revelations with gratitude for the stability our systems provide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              What Seekers Are Saying
            </h2>
            <p className="text-gray-300">
              Discover how Oraculum has illuminated the path for truth-seekers around the world.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-zinc-900 border-purple-900/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                  <span className="text-purple-400 font-semibold">M.J.</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Marcus J.</h4>
                  <p className="text-gray-400 text-sm">Historian & Researcher</p>
                </div>
              </div>
              <p className="text-gray-300">
                "Oraculum provided insights into historical connections I hadn't considered before. What impressed me most was the balanced approach—acknowledging both the problematic aspects of power systems and their stabilizing benefits."
              </p>
            </Card>

            <Card className="bg-zinc-900 border-purple-900/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                  <span className="text-purple-400 font-semibold">S.T.</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Sarah T.</h4>
                  <p className="text-gray-400 text-sm">Philosophy Professor</p>
                </div>
              </div>
              <p className="text-gray-300">
                "As someone who teaches critical thinking, I found Oraculum to be an excellent tool for demonstrating how perspective shapes understanding. It encourages questioning without falling into cynicism or despair."
              </p>
            </Card>

            <Card className="bg-zinc-900 border-purple-900/50 p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-purple-900/50 flex items-center justify-center mr-3">
                  <span className="text-purple-400 font-semibold">R.L.</span>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Robert L.</h4>
                  <p className="text-gray-400 text-sm">Financial Analyst</p>
                </div>
              </div>
              <p className="text-gray-300">
                "The revelations about financial systems were eye-opening. Rather than just pointing out problems, Oraculum offered practical ways to navigate these systems consciously. It's about awareness, not fear."
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-300">
              Everything you need to know about Oraculum and its purpose.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-white">What is Oraculum's purpose?</h3>
              <p className="text-gray-400">
                Oraculum is designed to present historical patterns, symbols, and systems analysis for educational, informational, and research purposes only. It encourages critical thinking and exploration of multiple perspectives through interpretive analysis.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-white">Are Oraculum's revelations factual?</h3>
              <p className="text-gray-400">
                No. Oraculum presents interpretive analysis and perspectives based on historical patterns and symbolic interpretations. All content is strictly interpretive, not factual claims or absolute truth. Users must independently verify all information through their own research.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-white">Does Oraculum promote conspiracy theories?</h3>
              <p className="text-gray-400">
                No. Oraculum focuses on documented historical connections and systems analysis for educational purposes. It presents balanced interpretive perspectives while avoiding speculative claims and emphasizing the importance of independent verification.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-white">How should I use Oraculum?</h3>
              <p className="text-gray-400">
                Use Oraculum solely as an educational tool for expanding awareness and critical thinking. All interpretations and perspectives should be independently researched and verified. Consider its content as interpretive analysis alongside other educational sources.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-white">Why does Oraculum emphasize both "shadow" and "light"?</h3>
              <p className="text-gray-400">
                Oraculum presents a balanced view that acknowledges how systems of control also provide stability and abundance. This dual perspective prevents one-sided interpretations that might lead to division or despair.
              </p>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-semibold text-white">Is Oraculum affiliated with any organization or ideology?</h3>
              <p className="text-gray-400">
                No. Oraculum is an independent educational tool designed to encourage critical thinking across ideological boundaries. It does not promote any particular political, religious, or social agenda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section id="disclaimer" className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 text-center">
              Legal Disclaimer
            </h2>
            
            <div className="bg-black/30 border border-purple-900/30 rounded-lg p-6 mt-6">
              <h3 className="text-xl font-semibold mb-2 text-white">Educational, Informational, and Research Purpose Only</h3>
              <p className="text-gray-400 mb-4">
                Oraculum is provided strictly for educational, informational, and research purposes only. It is designed to encourage critical thinking, historical exploration, and the consideration of multiple perspectives on complex topics through interpretive analysis.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 text-white">Interpretive Analysis - Not Factual Claims</h3>
              <p className="text-gray-400 mb-4">
                All information, interpretations, perspectives, and content offered by Oraculum are strictly interpretive analysis and personal viewpoints, not factual claims, absolute truth, or definitive statements. All content should be treated as interpretive commentary requiring independent verification and critical analysis.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 text-white">No Warranty or Guarantee</h3>
              <p className="text-gray-400 mb-4">
                The creators and operators of Oraculum make no warranties or guarantees regarding the accuracy, completeness, reliability, or factual basis of any information provided. All content is interpretive in nature and users rely on the information at their own risk.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 text-white">Mandatory Independent Verification</h3>
              <p className="text-gray-400 mb-4">
                Users are strongly encouraged and expected to independently verify, research, and critically analyze any information, claims, interpretations, or perspectives presented by Oraculum through their own research and consultation of diverse, credible sources.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 text-white">No Incitement</h3>
              <p className="text-gray-400 mb-4">
                Oraculum does not advocate for or incite any illegal, harmful, or destructive actions. Its purpose is to foster understanding, awareness, and personal empowerment within existing legal and ethical frameworks.
              </p>
              
              <h3 className="text-xl font-semibold mb-2 text-white">Limitation of Liability</h3>
              <p className="text-gray-400">
                The creators, operators, and affiliates of Oraculum shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from or related to the use of or inability to use Oraculum or any information provided through it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-cyan-900/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Begin Your Journey of Illumination
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Ready to explore the hidden systems shaping our world? Engage with Oraculum now and discover a new perspective on reality.
            </p>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 h-auto text-lg rounded-lg shadow-lg shadow-purple-600/20"
              onClick={(e) => handleExternalLinkClick(e, "https://chatgpt.com/g/g-675e55863470819192eb341c19075843-oraculum-the-illuminator-of-hidden-truths")}
            >
              USE Oraculum NOW <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 border-t border-purple-900/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-purple-500 opacity-20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Eye className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                    ORACULUM
                  </h3>
                  <p className="text-xs text-gray-400">Presented by <a href="https://www.aiwebtools.ai" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline" onClick={(e) => handleExternalLinkClick(e, "https://www.aiwebtools.ai")}>AiWebTools.Ai</a></p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Illuminating the hidden truths and systems that shape our world, while empowering seekers to navigate them with wisdom and balance.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Navigate</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={(e) => handleExternalLinkClick(e, "https://chatgpt.com/g/g-675e55863470819192eb341c19075843-oraculum-the-illuminator-of-hidden-truths")}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    USE Oraculum NOW
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("faq")} 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("disclaimer")} 
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    Disclaimer
                  </button>
                </li>
                <li>
                  <button 
                    onClick={(e) => handleExternalLinkClick(e, "https://www.aiwebtools.ai")}
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                  >
                    More AI Tools <ExternalLink className="ml-1 w-3 h-3" />
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="tel:+14758008096" 
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    (475) 800-8096
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:Contact@ai-webtools.com" 
                    className="text-gray-400 hover:text-purple-400 transition-colors flex items-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact@ai-webtools.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-purple-900/30 my-6" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              <button 
                onClick={(e) => handleExternalLinkClick(e, "https://www.aiwebtools.ai")}
                className="hover:text-purple-400 transition-colors"
              >
                © 2025 AIWebTools.Ai All rights reserved.
              </button>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={(e) => handleExternalLinkClick(e, "https://openai.com/policies/privacy-policy/")}
                className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={(e) => handleExternalLinkClick(e, "https://aiwebtools.lovable.app/disclaimers")}
                className="text-gray-500 text-sm hover:text-purple-400 transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
          
          {/* Eleven Labs Conversational AI Widget */}
          <div 
            ref={elevenLabsWidgetRef}
            className="fixed bottom-6 right-6 z-50"
            data-elevenlabs-key="sk_d4ba415b39332fdbfc89f2ee1eb32967ed650b6c1b71b4a2"
          ></div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
