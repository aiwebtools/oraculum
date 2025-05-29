
export const createTimePortalEffect = (destinationUrl: string) => {
  // Create overlay container
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999999;
    pointer-events: none;
    background: transparent;
  `;
  document.body.appendChild(overlay);

  // Add time warp filter to body
  document.body.style.filter = 'hue-rotate(0deg) saturate(1)';
  document.body.style.transition = 'filter 0.1s ease';

  // Create particle explosion
  const createParticles = () => {
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd', '#98d8c8'];
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'explosion-particle';
      particle.style.cssText = `
        position: absolute;
        width: 8px;
        height: 8px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 10px currentColor;
        animation: particle-explode 2.3s ease-out forwards;
      `;
      particle.style.setProperty('--random-x', (Math.random() - 0.5) * 2000 + 'px');
      particle.style.setProperty('--random-y', (Math.random() - 0.5) * 2000 + 'px');
      overlay.appendChild(particle);
    }
  };

  // Create vortex rings
  const createVortex = () => {
    for (let i = 0; i < 8; i++) {
      const ring = document.createElement('div');
      ring.className = 'vortex-ring';
      ring.style.cssText = `
        position: absolute;
        left: 50%;
        top: 50%;
        width: ${100 + i * 150}px;
        height: ${100 + i * 150}px;
        border: 3px solid rgba(138, 43, 226, ${0.8 - i * 0.1});
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: vortex-spin ${2 + i * 0.2}s linear infinite;
        box-shadow: 0 0 20px rgba(138, 43, 226, 0.5);
      `;
      overlay.appendChild(ring);
    }
  };

  // Create energy waves
  const createEnergyWaves = () => {
    for (let i = 0; i < 5; i++) {
      const wave = document.createElement('div');
      wave.className = 'energy-wave';
      wave.style.cssText = `
        position: absolute;
        left: 50%;
        top: 50%;
        width: 0;
        height: 0;
        border: 2px solid rgba(0, 255, 255, 0.8);
        border-radius: 50%;
        transform: translate(-50%, -50%);
        animation: energy-pulse ${1.5 + i * 0.3}s ease-out infinite;
        box-shadow: 0 0 30px rgba(0, 255, 255, 0.7);
      `;
      overlay.appendChild(wave);
      
      setTimeout(() => {
        wave.style.animation = 'energy-pulse 0.5s ease-out infinite';
      }, i * 300);
    }
  };

  // Create lightning bolts
  const createLightning = () => {
    for (let i = 0; i < 12; i++) {
      const bolt = document.createElement('div');
      bolt.className = 'lightning-bolt';
      bolt.style.cssText = `
        position: absolute;
        left: 50%;
        top: 50%;
        width: 4px;
        height: 200px;
        background: linear-gradient(to bottom, #ffffff, #ffff00, #ffffff);
        transform: translate(-50%, -50%) rotate(${i * 30}deg);
        transform-origin: center;
        opacity: 0;
        animation: lightning-flash 0.1s ease-in-out infinite alternate;
        box-shadow: 0 0 20px #ffff00;
      `;
      overlay.appendChild(bolt);
    }
  };

  // Create full screen flash
  const createFlash = () => {
    const flash = document.createElement('div');
    flash.style.cssText = `
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(138,43,226,0.3) 50%, rgba(0,255,255,0.2) 100%);
      animation: flash-fade 2.3s ease-out;
    `;
    overlay.appendChild(flash);
  };

  // Generate portal sounds using Web Audio API
  const generatePortalSound = () => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      
      // Whoosh sound
      const createWhoosh = () => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        const filter = audioContext.createBiquadFilter();
        
        oscillator.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 1.5);
        
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1000, audioContext.currentTime);
        filter.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 1.5);
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);
        
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1.5);
      };

      // Portal opening sound
      const createPortalSound = () => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(100, audioContext.currentTime + 0.5);
        oscillator.frequency.exponentialRampToValueAtTime(800, audioContext.currentTime + 2.3);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.5);
        gainNode.gain.linearRampToValueAtTime(0.4, audioContext.currentTime + 1);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 2.3);
        
        oscillator.start(audioContext.currentTime + 0.5);
        oscillator.stop(audioContext.currentTime + 2.3);
      };

      // Electric zap sounds
      const createZapSounds = () => {
        for (let i = 0; i < 5; i++) {
          setTimeout(() => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.type = 'square';
            oscillator.frequency.setValueAtTime(800 + Math.random() * 400, audioContext.currentTime);
            
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start();
            oscillator.stop(audioContext.currentTime + 0.1);
          }, i * 200);
        }
      };

      createWhoosh();
      createPortalSound();
      createZapSounds();
    } catch (error) {
      console.log('Audio not supported, continuing with visual effects');
    }
  };

  // Apply time warp effect to body
  const applyTimeWarp = () => {
    let hue = 0;
    let saturation = 1;
    const interval = setInterval(() => {
      hue += 20;
      saturation = 1 + Math.sin(Date.now() * 0.01) * 0.5;
      document.body.style.filter = `hue-rotate(${hue}deg) saturate(${saturation})`;
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
      document.body.style.filter = '';
    }, 2300);
  };

  // Execute all effects
  generatePortalSound();
  createParticles();
  createVortex();
  createEnergyWaves();
  createLightning();
  createFlash();
  applyTimeWarp();

  // Clean up and open new window
  setTimeout(() => {
    document.body.removeChild(overlay);
    document.body.style.filter = '';
    window.open(destinationUrl, '_blank');
  }, 2300);
};
