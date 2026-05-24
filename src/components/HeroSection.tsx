import { motion } from "framer-motion";

// Advanced System Architecture Visualization
const SystemArchitectureVisual = () => {
  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Outer glow ring */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 blur-xl animate-pulse" />
      
      {/* Main container */}
      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary via-primary/95 to-primary/90 border border-accent/20 overflow-hidden shadow-2xl">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(212,168,83,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212,168,83,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>

        {/* Central hub */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Orbiting rings */}
          <motion.div
            className="absolute w-[85%] h-[85%] rounded-full border border-accent/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[65%] h-[65%] rounded-full border border-accent/15"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute w-[45%] h-[45%] rounded-full border border-accent/10"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          {/* Central core */}
          <motion.div
            className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg shadow-accent/30"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="text-primary font-bold text-2xl sm:text-3xl font-heading">S</div>
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-accent/50"
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Floating service nodes */}
        {[
          { label: "API", angle: 0, delay: 0, icon: "{ }" },
          { label: "Cloud", angle: 60, delay: 0.2, icon: "☁" },
          { label: "IoT", angle: 120, delay: 0.4, icon: "◉" },
          { label: "DB", angle: 180, delay: 0.6, icon: "▤" },
          { label: "Docker", angle: 240, delay: 0.8, icon: "⬡" },
          { label: "AI", angle: 300, delay: 1, icon: "◈" },
        ].map((node, i) => {
          const radius = 38;
          const x = 50 + radius * Math.cos((node.angle - 90) * Math.PI / 180);
          const y = 50 + radius * Math.sin((node.angle - 90) * Math.PI / 180);
          
          return (
            <motion.div
              key={node.label}
              className="absolute"
              style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%, -50%)' }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + node.delay, duration: 0.5 }}
            >
              <motion.div
                className="relative"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-card/90 backdrop-blur border border-accent/30 flex flex-col items-center justify-center shadow-lg">
                  <span className="text-accent text-sm sm:text-base">{node.icon}</span>
                  <span className="text-[8px] sm:text-[9px] text-muted-foreground font-mono mt-0.5">{node.label}</span>
                </div>
                
                {/* Connection line to center */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: -1 }}>
                  <motion.line
                    x1="50%"
                    y1="50%"
                    x2={x < 50 ? "120%" : "-20%"}
                    y2={y < 50 ? "120%" : "-20%"}
                    stroke="url(#goldGradient)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.4 }}
                    transition={{ delay: 1 + node.delay, duration: 0.8 }}
                  />
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#d4a853" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#d4a853" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </motion.div>
            </motion.div>
          );
        })}

        {/* Data flow particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 200],
              y: [0, (Math.random() - 0.5) * 200],
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 1, 0],
            }}
            transition={{
              duration: 3,
              delay: i * 0.25,
              repeat: Infinity,
              repeatDelay: 1,
              ease: "easeOut"
            }}
          />
        ))}

        {/* Corner UI elements */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 }}
            className="flex items-center gap-2"
          >
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-[10px] sm:text-xs text-green-400 font-mono">SYSTEM ACTIVE</span>
          </motion.div>
        </div>

        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.7 }}
            className="text-[10px] sm:text-xs text-accent/70 font-mono"
          >
            v2.0.26
          </motion.div>
        </div>

        {/* Bottom status bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4"
        >
          <div className="bg-card/50 backdrop-blur rounded-lg border border-border/50 p-2 sm:p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[9px] sm:text-[10px] text-muted-foreground font-mono">BUILDING ECOSYSTEM</span>
              <span className="text-[9px] sm:text-[10px] text-accent font-mono">100%</span>
            </div>
            <div className="h-1 bg-primary/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-accent/80 to-accent rounded-full"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 2.2, duration: 1.5, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-2 text-[8px] sm:text-[9px] text-muted-foreground/70 font-mono">
              <span>6 services connected</span>
              <span>ready to deploy</span>
            </div>
          </div>
        </motion.div>

        {/* Ambient corner accents */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/10 to-transparent" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-accent/5 to-transparent" />
      </div>

      {/* CSS for grid animation */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
      `}</style>
    </div>
  );
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
    {/* Subtle circuit background pattern */}
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%230B1F3A' stroke-width='0.5'%3E%3Cpath d='M30 0v60M0 30h60M15 0v30h30M15 30v30M0 15h30v30M30 15h30'/%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Ccircle cx='15' cy='15' r='1.5'/%3E%3Ccircle cx='45' cy='45' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
    }} />

    {/* Soft decorative glow */}
    <div className="absolute top-1/4 left-1/4 w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] rounded-full bg-accent/5 blur-[120px]" />
    <div className="absolute bottom-1/4 right-1/4 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] rounded-full bg-primary/5 blur-[100px]" />

    <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-32 sm:pt-36 lg:pt-40 pb-16 lg:pb-24">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-24 items-center">
        {/* Left Column — Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="order-2 lg:order-1 text-center lg:text-left"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-body text-xs tracking-[0.2em] uppercase mb-8 border border-accent/20"
          >
            Full-Stack Engineering
          </motion.span>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-8 text-foreground"
          >
            Smart Systems.
            <br />
            <span className="gold-text">Built Right.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-body text-lg lg:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed text-muted-foreground"
          >
            We architect and build enterprise-grade websites, intelligent automations, IoT ecosystems, and AI-driven systems that scale with precision.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
          >
            <a href="#packages" className="btn-gold inline-block text-center">
              Explore Services
            </a>
            <a href="#cta" className="btn-outline-gold inline-block text-center">
              Start a Project
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-14 flex items-center justify-center lg:justify-start gap-8 text-muted-foreground"
          >
            <div className="text-center">
              <p className="font-heading text-2xl sm:text-3xl font-bold text-foreground">150+</p>
              <p className="text-xs font-body tracking-wide uppercase">Projects</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="font-heading text-2xl sm:text-3xl font-bold text-foreground">98%</p>
              <p className="text-xs font-body tracking-wide uppercase">Satisfaction</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="font-heading text-2xl sm:text-3xl font-bold text-foreground">24/7</p>
              <p className="text-xs font-body tracking-wide uppercase">Support</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column — System Architecture Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          <SystemArchitectureVisual />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
